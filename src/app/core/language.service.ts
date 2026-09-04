import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type SiteLanguage = 'en' | 'hi';

const LANGUAGE_STORAGE_KEY = 'xcellhost-site-language';

/**
 * Owns the site's UI language choice.
 *
 * The current build does not ship translated copy yet, so this service keeps the
 * selected language in sync with document metadata and local storage, ready for
 * future localized content.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly _language = signal<SiteLanguage>(this.initialLanguage());

  readonly language = this._language.asReadonly();
  readonly isHindi = () => this._language() === 'hi';
  readonly label = computed(() => (this.isHindi() ? 'HI' : 'EN'));

  constructor() {
    this.apply(this._language());
  }

  toggle(): void {
    const next: SiteLanguage = this.isHindi() ? 'en' : 'hi';
    this._language.set(next);
    this.apply(next);

    try {
      this.doc.defaultView?.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private browsing; the current session still works.
    }
  }

  private initialLanguage(): SiteLanguage {
    try {
      const saved = this.doc.defaultView?.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') return saved;
    } catch {
      // Fall through to the site's default.
    }

    return 'en';
  }

  private apply(language: SiteLanguage): void {
    const root = this.doc.documentElement;
    root.lang = language;
    root.dataset['language'] = language;
    root.dir = 'ltr';
  }
}
