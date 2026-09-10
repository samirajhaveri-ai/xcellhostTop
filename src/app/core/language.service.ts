import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

type TranslateWindow = Window & {
  google?: {
    translate?: {
      TranslateElement?: new (options: { pageLanguage: string; autoDisplay: boolean }, hostId: string) => unknown;
    };
  };
  googleTranslateElementInit?: () => void;
};

const SCRIPT_ID = 'google-translate-script';

/** Loads Google's visible website translator. Google owns language selection and persistence. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private observer?: MutationObserver;
  private timeout?: number;
  private loading = false;
  private previousUrl: string | undefined = this.router.navigated ? this.router.url : undefined;

  readonly status = signal<'loading' | 'ready' | 'error'>('loading');

  constructor() {
    // A fresh document lets Google translate the destination reliably and avoids
    // Angular reusing text nodes that the third-party translator has replaced.
    this.router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (!(event instanceof NavigationEnd)) return;
      const changedPage = this.previousUrl !== undefined &&
        event.urlAfterRedirects.split('#')[0] !== this.previousUrl.split('#')[0];
      this.previousUrl = event.urlAfterRedirects;
      const selected = this.doc.querySelector<HTMLSelectElement>('#google_translate_element .goog-te-combo')?.value;
      if (changedPage && this.status() === 'ready' && selected && selected !== 'en') {
        this.doc.defaultView?.location.reload();
      }
    });
    this.destroyRef.onDestroy(() => this.stopWaiting());
  }

  initGoogleTranslate(hostId: string): void {
    const win = this.doc.defaultView as TranslateWindow | null;
    const host = this.doc.getElementById(hostId);
    if (!win || !host || this.loading) return;

    const markReady = (): boolean => {
      const select = host.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (!select || select.options.length < 2) return false;
      select.setAttribute('aria-label', 'Translate website language');
      this.stopWaiting();
      this.loading = false;
      this.status.set('ready');
      return true;
    };
    if (markReady()) return;

    this.loading = true;
    this.status.set('loading');
    const fail = () => {
      this.stopWaiting();
      this.loading = false;
      this.status.set('error');
    };
    this.observer = new MutationObserver(() => markReady());
    this.observer.observe(host, { childList: true, subtree: true });
    this.timeout = win.setTimeout(fail, 20000);

    const initialize = () => {
      const TranslateElement = win.google?.translate?.TranslateElement;
      if (!TranslateElement) {
        fail();
        return;
      }
      try {
        host.replaceChildren();
        // Omitting includedLanguages exposes Google's full supported language list.
        new TranslateElement({ pageLanguage: 'en', autoDisplay: false }, hostId);
        markReady();
      } catch {
        fail();
      }
    };

    if (win.google?.translate?.TranslateElement) {
      initialize();
      return;
    }

    this.doc.getElementById(SCRIPT_ID)?.remove();
    win.googleTranslateElementInit = initialize;
    const script = this.doc.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = fail;
    this.doc.head.appendChild(script);
  }

  private stopWaiting(): void {
    this.observer?.disconnect();
    this.observer = undefined;
    if (this.timeout !== undefined) {
      this.doc.defaultView?.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
  }
}
