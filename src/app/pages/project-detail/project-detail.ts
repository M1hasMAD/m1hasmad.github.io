import { Component, computed, inject, input } from "@angular/core";
import { PortfolioUiService } from "../../core/services/portfolio-ui.service";
import { ProjectNavigationService } from "../../core/services/project-navigation.service";
import { getProjectCaseStudy } from "../../core/services/project-case-studies";

@Component({
  selector: "ml-project-detail",
  standalone: true,
  templateUrl: "./project-detail.html",
  styleUrl: "./project-detail.scss",
})
export class ProjectDetailComponent {
  readonly slug = input.required<string>();
  readonly ui = inject(PortfolioUiService);
  readonly navigation = inject(ProjectNavigationService);
  readonly project = computed(() =>
    getProjectCaseStudy(this.ui.language(), this.slug()),
  );

  get backLabel(): string {
    return this.ui.language() === "es"
      ? "Volver a todos los proyectos"
      : "Back to all projects";
  }
  get architectureEyebrow(): string {
    return this.ui.language() === "es"
      ? "01 / MAPA DEL SISTEMA"
      : "01 / SYSTEM MAP";
  }
  get overviewEyebrow(): string {
    return this.ui.language() === "es"
      ? "02 / VISIÓN GENERAL"
      : "02 / OVERVIEW";
  }
  get highlightsEyebrow(): string {
    return this.ui.language() === "es"
      ? "03 / PUNTOS CLAVE"
      : "03 / KEY OUTPUTS";
  }
  get stackEyebrow(): string {
    return this.ui.language() === "es"
      ? "04 / STACK TECNOLÓGICO"
      : "04 / TECHNOLOGY STACK";
  }
  get nextEyebrow(): string {
    return this.ui.language() === "es"
      ? "SIGUIENTE MISIÓN / 002"
      : "NEXT FLIGHT / 002";
  }
  get overviewLabel(): string {
    return this.ui.language() === "es"
      ? "Resumen del proyecto"
      : "Project overview";
  }
  get stackLabel(): string {
    return this.ui.language() === "es"
      ? "Tecnologías utilizadas"
      : "Technologies used";
  }
  get nextLabel(): string {
    return this.ui.language() === "es"
      ? "Explorar otros proyectos"
      : "Explore other projects";
  }
  get notFoundTitle(): string {
    return this.ui.language() === "es"
      ? "Proyecto no encontrado"
      : "Project not found";
  }
  get notFoundDescription(): string {
    return this.ui.language() === "es"
      ? "Este enlace no corresponde a un proyecto disponible."
      : "This link does not match an available project.";
  }

  backToProjects(): void {
    this.navigation.returnToSection("projects");
  }
}
