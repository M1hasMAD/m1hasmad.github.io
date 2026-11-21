import { Injectable, signal } from '@angular/core';

/**
 * Lightweight query-string navigation for project case studies.
 * Query routes (/?project=slug) work on static hosting such as GitHub Pages
 * without requiring a server-side fallback or an additional router dependency.
 */
@Injectable({ providedIn: 'root' })
export class ProjectNavigationService {
  readonly activeSlug = signal<string | null>(this.readSlug());

  private readonly onPopState = (): void => {
    this.activeSlug.set(this.readSlug());
  };

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', this.onPopState);
    }
  }

  openProject(slug: string): void {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.set('project', slug);
    url.hash = '';
    window.history.pushState({ project: slug }, '', `${url.pathname}${url.search}`);
    this.activeSlug.set(slug);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  returnToSection(sectionId = 'projects'): void {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.delete('project');
    url.hash = sectionId === 'home' ? '' : sectionId;
    window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`);
    this.activeSlug.set(null);

    window.requestAnimationFrame(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  private readSlug(): string | null {
    if (typeof window === 'undefined') return null;
    const value = new URLSearchParams(window.location.search).get('project');
    return value?.trim() || null;
  }
}
