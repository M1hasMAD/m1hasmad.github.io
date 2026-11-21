import {
  AfterViewInit,
  Component,
  OnDestroy,
  computed,
  inject,
  signal,
} from "@angular/core";
import { PortfolioUiService } from "../../core/services/portfolio-ui.service";
import { getPortfolioContent } from "../../core/services/portfolio-content";
import { ProjectNavigationService } from "../../core/services/project-navigation.service";

@Component({
  selector: "ml-navbar",
  standalone: true,
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  readonly ui = inject(PortfolioUiService);
  readonly activeSection = signal("home");
  readonly projectNavigation = inject(ProjectNavigationService);
  readonly currentActiveSection = computed(() =>
    this.projectNavigation.activeSlug() ? "projects" : this.activeSection(),
  );
  readonly cvPath = computed(() =>
    this.ui.language() === "es" ? "cv/cv-es.pdf" : "cv/cv-en.pdf",
  );
  readonly cvFilename = computed(() =>
    this.ui.language() === "es"
      ? "Mikhail-Luchkin-CV-ES.pdf"
      : "Mikhail-Luchkin-CV-EN.pdf",
  );
  readonly navigation = computed(() => {
    const copy = getPortfolioContent(this.ui.language()).navigation;
    return [
      { id: "home", label: copy.home },
      { id: "about", label: copy.about },
      { id: "projects", label: copy.projects },
      { id: "experience", label: copy.experience },
      { id: "stack", label: copy.stack },
      { id: "education", label: copy.education },
      { id: "contact", label: copy.contact },
    ];
  });

  private scrollFrame: number | null = null;

  private readonly handleScroll = (): void => {
    if (typeof window === "undefined" || this.scrollFrame !== null) return;

    this.scrollFrame = window.requestAnimationFrame(() => {
      this.scrollFrame = null;
      this.updateActiveSection();
    });
  };

  ngAfterViewInit(): void {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleScroll, { passive: true });
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    if (typeof window === "undefined") return;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
    if (this.scrollFrame !== null) {
      window.cancelAnimationFrame(this.scrollFrame);
      this.scrollFrame = null;
    }
  }

  navigateTo(id: string): void {
    this.ui.closeMenu();
    this.activeSection.set(id);
    if (this.projectNavigation.activeSlug()) {
      this.projectNavigation.returnToSection(id);
      return;
    }
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  private updateActiveSection(): void {
    if (typeof window === "undefined") return;
    if (this.projectNavigation.activeSlug()) {
      this.activeSection.set("projects");
      return;
    }

    const headerHeight =
      document
        .querySelector<HTMLElement>(".site-header")
        ?.getBoundingClientRect().height ?? 74;
    const activationLine =
      headerHeight + Math.min(130, Math.max(90, window.innerHeight * 0.18));
    const documentBottom =
      document.documentElement.scrollHeight - window.innerHeight;

    // At the very bottom, keep the final navigation item active even when
    // the contact section is shorter than the activation area.
    if (window.scrollY >= documentBottom - 4) {
      this.activeSection.set("contact");
      return;
    }

    if (window.scrollY < 40) {
      this.activeSection.set("home");
      return;
    }

    let currentId = "home";
    let closestDistance = Number.POSITIVE_INFINITY;
    const previousActive = this.activeSection();

    for (const item of this.navigation()) {
      const section = document.getElementById(item.id);
      if (!section) continue;

      const bounds = section.getBoundingClientRect();
      if (bounds.top <= activationLine && bounds.bottom > activationLine) {
        const distance = Math.abs(activationLine - bounds.top);
        const isPreviouslyActiveTie =
          item.id === previousActive &&
          Math.abs(distance - closestDistance) < 1;

        if (distance < closestDistance || isPreviouslyActiveTie) {
          closestDistance = distance;
          currentId = item.id;
        }
      }
    }

    this.activeSection.set(currentId);
  }
}
