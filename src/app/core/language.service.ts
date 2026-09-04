import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type SiteLanguage = 'en' | 'hi' | 'bn' | 'gu' | 'mr' | 'ta' | 'te' | 'ar' | 'fr' | 'de' | 'es';

const LANGUAGE_STORAGE_KEY = 'xcellhost-site-language';
const GOOGLE_TRANSLATE_SCRIPT = 'google-translate-script';

export const SITE_LANGUAGES: ReadonlyArray<{ code: SiteLanguage; label: string }> = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'mr', label: 'Marathi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'te', label: 'Telugu' },
  { code: 'ar', label: 'Arabic' },
  { code: 'fr', label: 'French' },
  { code: 'de', label: 'German' },
  { code: 'es', label: 'Spanish' },
];

/**
 * Owns the site's UI language choice.
 *
 * Coordinates the compact language menu with Google's page translator.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly _language = signal<SiteLanguage>(this.initialLanguage());

  readonly language = this._language.asReadonly();
  readonly isHindi = () => this._language() === 'hi';
  readonly label = computed(() => this._language().toUpperCase());

  constructor() {
    this.apply(this._language());
  }

  initGoogleTranslate(hostId: string): void {
    const win = this.doc.defaultView;
    if (!win || this.doc.getElementById(GOOGLE_TRANSLATE_SCRIPT)) return;

    const callbackName = 'googleTranslateElementInit';
    const googleWindow = win as unknown as Window & {
      [key: string]: unknown;
    };
    googleWindow[callbackName] = () => {
      const google = googleWindow['google'] as {
        translate?: { TranslateElement?: new (options: object, elementId: string) => unknown };
      } | undefined;
      if (google?.translate?.TranslateElement) {
        new google.translate.TranslateElement(
          { pageLanguage: 'en', autoDisplay: false, includedLanguages: SITE_LANGUAGES.map(({ code }) => code).join(',') },
          hostId
        );
      }
      this.applySavedLanguage();
    };

    const script = this.doc.createElement('script');
    script.id = GOOGLE_TRANSLATE_SCRIPT;
    script.src = `https://translate.google.com/translate_a/element.js?cb=${callbackName}`;
    script.async = true;
    this.doc.head.appendChild(script);
  }

  select(language: SiteLanguage): void {
    this._language.set(language);
    this.apply(language);
    this.persist(language);

    if (language === 'en') {
      this.clearGoogleLanguage();
      this.doc.defaultView?.location.reload();
      return;
    }

    // Keep an early click effective even while Google's widget script is loading.
    this.setCookie('googtrans', `/en/${language}`, 365);
    this.setGoogleLanguage(language);
  }

  private initialLanguage(): SiteLanguage {
    try {
      const saved = this.doc.defaultView?.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (SITE_LANGUAGES.some(({ code }) => code === saved)) return saved as SiteLanguage;
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

  private applySavedLanguage(): void {
    const language = this._language();
    if (language !== 'en') this.setGoogleLanguage(language);
  }

  private setGoogleLanguage(language: SiteLanguage, attempt = 0): void {
    const select = this.doc.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = language;
      select.dispatchEvent(new Event('change'));
      return;
    }

    if (attempt < 20) {
      this.doc.defaultView?.setTimeout(() => this.setGoogleLanguage(language, attempt + 1), 150);
    }
  }

  private clearGoogleLanguage(): void {
    this.setCookie('googtrans', '', -1);
    this.setCookie('googtrans', '', -1, '.xcellhost.cloud');
  }

  private setCookie(name: string, value: string, days: number, domain?: string): void {
    const expires = new Date(Date.now() + days * 86400000).toUTCString();
    this.doc.cookie = `${name}=${value};expires=${expires};path=/${domain ? `;domain=${domain}` : ''}`;
  }

  private persist(language: SiteLanguage): void {
    try {
      this.doc.defaultView?.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Storage can be unavailable in private browsing; the current session still works.
    }
  }
}
