import { Component, computed, inject } from '@angular/core';
import { PortfolioUiService } from '../../core/services/portfolio-ui.service';
import { getPortfolioContent } from '../../core/services/portfolio-content';

@Component({
  selector: 'ml-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  readonly ui = inject(PortfolioUiService);
  readonly copy = computed(() => getPortfolioContent(this.ui.language()).hero);
  readonly metrics = computed(() => getPortfolioContent(this.ui.language()).metrics);
  readonly cvPath = computed(() => this.ui.language() === 'es' ? 'cv/cv-es.pdf' : 'cv/cv-en.pdf');
  readonly cvFilename = computed(() => this.ui.language() === 'es' ? 'Mikhail-Luchkin-CV-ES.pdf' : 'Mikhail-Luchkin-CV-EN.pdf');

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
