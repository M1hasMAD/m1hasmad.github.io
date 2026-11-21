import { Component, effect, inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { PortfolioUiService } from "./core/services/portfolio-ui.service";
import { ProjectNavigationService } from "./core/services/project-navigation.service";
import { NavbarComponent } from "./shared/navbar/navbar";
import { SiteFooterComponent } from "./shared/site-footer/site-footer";
import { HeroComponent } from "./sections/hero/hero";
import { PortfolioSectionsComponent } from "./sections/portfolio-sections/portfolio-sections";
import { TechMarqueeComponent } from "./shared/tech-marquee/tech-marquee";
import { ProjectDetailComponent } from "./pages/project-detail/project-detail";

@Component({
  selector: "ml-root",
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    TechMarqueeComponent,
    PortfolioSectionsComponent,
    ProjectDetailComponent,
    SiteFooterComponent,
  ],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  host: { "[attr.data-theme]": "ui.theme()" },
})
export class AppComponent {
  readonly ui = inject(PortfolioUiService);
  readonly projectNavigation = inject(ProjectNavigationService);
  private readonly document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this.document.documentElement.lang = this.ui.language();
      this.document.documentElement.setAttribute("data-theme", this.ui.theme());
      this.document.documentElement.style.colorScheme = this.ui.theme();
    });
  }
}
