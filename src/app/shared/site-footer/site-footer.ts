import { Component, computed, inject } from "@angular/core";
import { PortfolioUiService } from "../../core/services/portfolio-ui.service";
import { ProjectNavigationService } from "../../core/services/project-navigation.service";
import { getPortfolioContent } from "../../core/services/portfolio-content";
import { getProjectDirectory } from "../../core/services/project-case-studies";

@Component({
  selector: "ml-site-footer",
  standalone: true,
  templateUrl: "./site-footer.html",
  styleUrl: "./site-footer.scss",
})
export class SiteFooterComponent {
  readonly ui = inject(PortfolioUiService);
  readonly projectNavigation = inject(ProjectNavigationService);
  readonly year = new Date().getFullYear();
  readonly copy = computed(() => getPortfolioContent(this.ui.language()));
  readonly projects = computed(() => getProjectDirectory(this.ui.language()));

  readonly sectionLinks = computed(() => {
    const n = this.copy().navigation;
    return [
      { id: "about", label: n.about },
      { id: "experience", label: n.experience },
      { id: "projects", label: n.projects },
    ];
  });

  readonly moreLinks = computed(() => {
    const n = this.copy().navigation;
    return [
      { id: "stack", label: n.stack },
      { id: "education", label: n.education },
      { id: "contact", label: n.contact },
    ];
  });

  get brandDescription(): string {
    return this.ui.language() === "es"
      ? "Desarrollador Full Stack con especial interés en Java, backend, APIs e integración de sistemas."
      : "Full Stack Developer with a strong interest in Java, backend development, APIs and system integration.";
  }

  get sectionHeading(): string {
    return this.ui.language() === "es" ? "Secciones" : "Sections";
  }
  get moreHeading(): string {
    return this.ui.language() === "es" ? "Más" : "More";
  }
  get projectsHeading(): string {
    return this.ui.language() === "es" ? "Proyectos" : "Projects";
  }
  get backToTop(): string {
    return this.ui.language() === "es" ? "Volver arriba" : "Back to top";
  }

  openProject(event: MouseEvent, slug: string): void {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    this.projectNavigation.openProject(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  goToSection(event: MouseEvent, id: string): void {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    if (this.projectNavigation.activeSlug()) {
      this.projectNavigation.returnToSection(id);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  goToTop(): void {
    if (this.projectNavigation.activeSlug()) {
      this.projectNavigation.returnToSection("home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
