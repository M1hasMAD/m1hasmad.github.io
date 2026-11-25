import {
  Component,
  computed,
  inject,
  signal,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { PortfolioUiService } from "../../core/services/portfolio-ui.service";
import { getPortfolioContent } from "../../core/services/portfolio-content";

type WaypointId =
  | "profile"
  | "about"
  | "projects"
  | "experience"
  | "stack"
  | "education"
  | "contact";
type LabelAnchor = "start" | "middle" | "end";

interface Waypoint {
  id: WaypointId;
  label: string;
  sectionId: string;
  order: number;
  /** Marker coordinates in the SVG viewBox (620 × 430). */
  x: number;
  y: number;
  /** Independent label coordinates in the same SVG viewBox. */
  labelX: number;
  labelY: number;
  labelAnchor: LabelAnchor;
}

@Component({
  selector: "ml-hero",
  standalone: true,
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class HeroComponent implements OnDestroy {
  readonly ui = inject(PortfolioUiService);
  readonly copy = computed(() => getPortfolioContent(this.ui.language()).hero);
  readonly metrics = computed(
    () => getPortfolioContent(this.ui.language()).metrics,
  );
  readonly cvPath = computed(() =>
    this.ui.language() === "es" ? "cv/cv-es.pdf" : "cv/cv-en.pdf",
  );
  readonly cvFilename = computed(() =>
    this.ui.language() === "es"
      ? "Mikhail-Luchkin-CV-ES.pdf"
      : "Mikhail-Luchkin-CV-EN.pdf",
  );
  readonly prefersReducedMotion = signal(false);

  readonly activeWaypoint = signal<WaypointId>("profile");

  readonly routePathD = [
    "M 60 350",
    "C 93 322 128 258 160 230",
    "C 192 202 225 150 260 150",
    "C 295 150 315 210 350 245",
    "C 385 280 410 270 445 270",
    "C 480 270 505 185 520 150",
    "C 535 115 555 80 575 65",
  ].join(" ");

  readonly waypoints: Waypoint[] = [
    {
      id: "profile",
      label: "PROFILE",
      sectionId: "home",
      order: 1,
      x: 60,
      y: 350,
      labelX: 12,
      labelY: 387,
      labelAnchor: "start",
    },
    {
      id: "about",
      label: "ABOUT",
      sectionId: "about",
      order: 2,
      x: 150,
      y: 245,
      labelX: 189,
      labelY: 278,
      labelAnchor: "middle",
    },
    {
      id: "projects",
      label: "PROJECTS",
      sectionId: "projects",
      order: 3,
      x: 260,
      y: 150,
      labelX: 260,
      labelY: 125,
      labelAnchor: "middle",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      sectionId: "experience",
      order: 4,
      x: 340,
      y: 235,
      labelX: 350,
      labelY: 210,
      labelAnchor: "middle",
    },
    {
      id: "stack",
      label: "TECH STACK",
      sectionId: "stack",
      order: 5,
      x: 445,
      y: 270,
      labelX: 455,
      labelY: 300,
      labelAnchor: "middle",
    },
    {
      id: "education",
      label: "EDUCATION",
      sectionId: "education",
      order: 6,
      x: 520,
      y: 155,
      labelX: 460,
      labelY: 128,
      labelAnchor: "middle",
    },
    {
      id: "contact",
      label: "CONTACT",
      sectionId: "contact",
      order: 7,
      x: 575,
      y: 65,
      labelX: 620,
      labelY: 38,
      labelAnchor: "end",
    },
  ];

  @ViewChild("routePath", { static: true })
  routePathRef!: ElementRef<SVGPathElement>;
  @ViewChild("planeGroup", { static: true })
  planeGroupRef!: ElementRef<SVGGElement>;
  @ViewChild("planeArtwork", { static: true })
  planeArtworkRef!: ElementRef<SVGGElement>;

  private scrollFrame: number | null = null;
  private animationFrame: number | null = null;
  private routeLength = 0;
  private animationStart = 0;
  private isAnimating = false;
  private direction: 1 | -1 = 1;
  private phase: "moving" | "turning" = "moving";
  private turnStart = 0;
  private turnFromAngle = 0;
  private turnToAngle = 0;
  private motionQuery?: MediaQueryList;
  private motionListener?: (event: MediaQueryListEvent) => void;

  private readonly ANIMATION_DURATION = 20000;
  private readonly TURN_DURATION = 1000;
  private readonly EPSILON = 4;

  private readonly handleScroll = (): void => {
    if (typeof window === "undefined" || this.scrollFrame !== null) return;
    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = null;
      this.updateActiveWaypoint();
    });
  };

  constructor() {
    if (typeof window !== "undefined") {
      this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      this.prefersReducedMotion.set(this.motionQuery.matches);
      this.motionListener = (event) => {
        this.prefersReducedMotion.set(event.matches);
        if (event.matches) {
          this.stopAnimation();
        } else if (this.routePathRef?.nativeElement) {
          this.startAnimation();
        }
      };
      this.motionQuery.addEventListener("change", this.motionListener);

      window.addEventListener("scroll", this.handleScroll, { passive: true });
      window.addEventListener("resize", this.handleScroll, { passive: true });
      this.updateActiveWaypoint();
      setTimeout(() => this.initAnimation(), 0);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.handleScroll);
      if (this.motionQuery && this.motionListener) {
        this.motionQuery.removeEventListener("change", this.motionListener);
      }
      if (this.scrollFrame !== null) {
        window.cancelAnimationFrame(this.scrollFrame);
        this.scrollFrame = null;
      }
      this.stopAnimation();
    }
  }

  private initAnimation(): void {
    const path = this.routePathRef?.nativeElement;
    if (!path) return;

    this.routeLength = path.getTotalLength();
    this.updatePlanePosition(0, 1);
    if (!this.prefersReducedMotion()) this.startAnimation();
  }

  private startAnimation(): void {
    if (this.prefersReducedMotion() || !this.routePathRef?.nativeElement) {
      return;
    }

    this.stopAnimation();

    this.routeLength = this.routePathRef.nativeElement.getTotalLength();

    this.direction = 1;
    this.phase = "moving";
    this.animationStart = performance.now();

    this.updatePlanePosition(0, 1);

    this.isAnimating = true;
    this.animationFrame = requestAnimationFrame(this.animateLoop);
  }

  private stopAnimation(): void {
    this.isAnimating = false;
    if (this.animationFrame !== null && typeof window !== "undefined") {
      window.cancelAnimationFrame(this.animationFrame);
    }
    this.animationFrame = null;
  }

  private animateLoop = (): void => {
    if (!this.isAnimating || this.prefersReducedMotion()) {
      this.animationFrame = null;
      return;
    }

    const now = performance.now();

    // PHASE 1: Flying along the route
    if (this.phase === "moving") {
      const elapsed = now - this.animationStart;

      const progress = Math.min(1, elapsed / this.ANIMATION_DURATION);

      const easedProgress = this.easeInOutCubic(progress);

      const distance =
        this.direction === 1
          ? easedProgress * this.routeLength
          : (1 - easedProgress) * this.routeLength;

      this.updatePlanePosition(distance, this.direction);

      // Reached destination: begin smooth turnaround
      if (progress >= 1) {
        const endpoint = this.direction === 1 ? this.routeLength : 0;

        this.turnFromAngle = this.getPlaneAngle(endpoint, this.direction);

        this.turnToAngle = this.turnFromAngle + 180;

        this.turnStart = now;
        this.phase = "turning";
      }
    }

    // PHASE 2: Smooth 180-degree turnaround
    else if (this.phase === "turning") {
      const elapsed = now - this.turnStart;

      const progress = Math.min(1, elapsed / this.TURN_DURATION);

      const easedProgress = this.easeInOutCubic(progress);

      // Interpolate rotation smoothly
      const angle =
        this.turnFromAngle +
        (this.turnToAngle - this.turnFromAngle) * easedProgress;

      const endpoint = this.direction === 1 ? this.routeLength : 0;

      this.updatePlaneRotation(endpoint, angle);

      // Finished turning: start flying in the opposite direction
      if (progress >= 1) {
        this.direction = this.direction === 1 ? -1 : 1;

        this.phase = "moving";
        this.animationStart = now;
      }
    }

    this.animationFrame = requestAnimationFrame(this.animateLoop);
  };

  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  private getPlaneAngle(distance: number, direction: 1 | -1): number {
    const path = this.routePathRef?.nativeElement;

    if (!path) return 0;

    const before = path.getPointAtLength(Math.max(0, distance - this.EPSILON));

    const after = path.getPointAtLength(
      Math.min(this.routeLength, distance + this.EPSILON),
    );

    // Calculate tangent in the actual direction of travel.
    const dx = (after.x - before.x) * direction;
    const dy = (after.y - before.y) * direction;

    const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI;

    // The airplane nose points upward (-Y) in its original SVG.
    return angleDeg + 90;
  }

  private updatePlanePosition(distance: number, direction: 1 | -1): void {
    const safeDistance = Math.max(0, Math.min(distance, this.routeLength));

    const path = this.routePathRef?.nativeElement;

    if (!path) return;

    const point = path.getPointAtLength(safeDistance);
    const angle = this.getPlaneAngle(safeDistance, direction);

    this.updatePlaneTransform(point.x, point.y, angle);
  }

  private updatePlaneRotation(distance: number, angle: number): void {
    const path = this.routePathRef?.nativeElement;

    if (!path) return;

    const point = path.getPointAtLength(distance);

    this.updatePlaneTransform(point.x, point.y, angle);
  }

  private updatePlaneTransform(x: number, y: number, angle: number): void {
    const planePosition = this.planeGroupRef?.nativeElement;
    const planeArtwork = this.planeArtworkRef?.nativeElement;

    if (!planePosition || !planeArtwork) return;

    // Move the airplane to the exact SVG route position.
    planePosition.setAttribute("transform", `translate(${x} ${y})`);

    // Rotate the airplane around its own local origin.
    planeArtwork.setAttribute("transform", `rotate(${angle})`);
  }

  scrollToProjects(): void {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  navigateToWaypoint(waypoint: Waypoint): void {
    const section = document.getElementById(waypoint.sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      this.activeWaypoint.set(waypoint.id);
    }
  }

  labelTransform(waypoint: Waypoint): string {
    return `translate(${waypoint.labelX} ${waypoint.labelY})`;
  }

  private updateActiveWaypoint(): void {
    if (typeof window === "undefined") return;

    const headerHeight =
      document
        .querySelector<HTMLElement>(".site-header")
        ?.getBoundingClientRect().height ?? 74;
    const activationLine =
      headerHeight + Math.min(130, Math.max(90, window.innerHeight * 0.18));
    const documentBottom =
      document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY >= documentBottom - 4) {
      this.activeWaypoint.set("contact");
      return;
    }

    if (window.scrollY < 40) {
      this.activeWaypoint.set("profile");
      return;
    }

    let currentId: WaypointId = "profile";
    let closestDistance = Number.POSITIVE_INFINITY;
    const previousActive = this.activeWaypoint();

    for (const waypoint of this.waypoints) {
      const section = document.getElementById(waypoint.sectionId);
      if (!section) continue;

      const bounds = section.getBoundingClientRect();
      if (bounds.top <= activationLine && bounds.bottom > activationLine) {
        const distance = Math.abs(activationLine - bounds.top);
        const isPreviouslyActiveTie =
          waypoint.id === previousActive &&
          Math.abs(distance - closestDistance) < 1;

        if (distance < closestDistance || isPreviouslyActiveTie) {
          closestDistance = distance;
          currentId = waypoint.id;
        }
      }
    }

    this.activeWaypoint.set(currentId);
  }
}
