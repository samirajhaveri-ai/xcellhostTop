import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type ColorTheme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'xcellhost-color-theme';

/** Owns the site-wide colour theme and keeps the user's choice across visits. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly _theme = signal<ColorTheme>(this.initialTheme());

  readonly theme = this._theme.asReadonly();
  readonly isDark = () => this._theme() === 'dark';

  constructor() {
    this.apply(this._theme());
  }

  toggle(): void {
    const next: ColorTheme = this.isDark() ? 'light' : 'dark';
    this._theme.set(next);
    this.apply(next);

    try {
      this.doc.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private browsing; the current session still works.
    }
  }

  private initialTheme(): ColorTheme {
    try {
      const saved = this.doc.defaultView?.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // Fall through to the site's default.
    }

    return 'light';
  }

  private apply(theme: ColorTheme): void {
    const root = this.doc.documentElement;
    root.classList.toggle('dark-mode', theme === 'dark');
    root.style.colorScheme = theme;
    root.dataset['theme'] = theme;

    this.doc
      .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#07111f' : '#041E42');
  }
}
