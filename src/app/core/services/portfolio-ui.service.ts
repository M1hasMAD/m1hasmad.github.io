import { Injectable, signal } from '@angular/core';

export type PortfolioLanguage = 'es' | 'en';
export type PortfolioTheme = 'dark' | 'light';

function readPreference<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const stored = window.localStorage.getItem(key);
    return stored && allowed.includes(stored as T) ? stored as T : fallback;
  } catch {
    return fallback;
  }
}

function savePreference(key: string, value: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The portfolio remains usable when browser storage is unavailable.
  }
}

@Injectable({ providedIn: 'root' })
export class PortfolioUiService {
  readonly language = signal<PortfolioLanguage>(readPreference('portfolio-language', ['es', 'en'], 'es'));
  readonly theme = signal<PortfolioTheme>(readPreference('portfolio-theme', ['dark', 'light'], 'dark'));
  readonly menuOpen = signal(false);

  setLanguage(language: PortfolioLanguage): void {
    this.language.set(language);
    savePreference('portfolio-language', language);
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.theme.update((current) => current === 'dark' ? 'light' : 'dark');
    savePreference('portfolio-theme', this.theme());
  }

  toggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
