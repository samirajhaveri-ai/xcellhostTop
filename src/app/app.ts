import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { OverlayService } from './core/overlay.service';
import { DocRequestService } from './core/doc-request.service';
import { CallbackTopicService } from './overlays/callback-topic.service';
import { SiteCopyService } from './core/site-copy.service';
import { SeoService } from './core/seo.service';
import { installBookmarkScrolling } from './sections/bookmark-scroll';
import { installFaqLayout } from './sections/faq-layout';
import { installBannerActions } from './sections/banner-actions';
import { BannerActionsService } from './core/banner-actions.service';
import { BannerTourComponent } from './overlays/banner-tour.component';
import {
  BackToTopComponent,
  CallbackModalComponent,
  CartDrawerComponent,
  ChatbotComponent,
  DocModalComponent,
  PartnerModalComponent,
  SearchDialogComponent,
  TrialModalComponent,
  WhatsappFabComponent,
} from './overlays';
import {
  ContactOptionsComponent,
  FooterComponent,
  HeaderComponent,
  IntroSplashComponent,
  PromoBarComponent,
  UtilityBarComponent,
} from './layout';

/**
 * The application shell: the chrome that never changes (intro splash, utility
 * bar, promo strip, header, footer) wrapped around the routed page, plus the
 * global overlay hosts.
 *
 * Escape is bound here once. `OverlayService` keeps the layer stack, so closing
 * the top one is correct even when a modal sits over a drawer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IntroSplashComponent,
    UtilityBarComponent,
    PromoBarComponent,
    HeaderComponent,
    ContactOptionsComponent,
    FooterComponent,
    CartDrawerComponent,
    ChatbotComponent,
    SearchDialogComponent,
    CallbackModalComponent,
    TrialModalComponent,
    PartnerModalComponent,
    DocModalComponent,
    WhatsappFabComponent,
    BackToTopComponent,
    BannerTourComponent,
  ],
  templateUrl: './app.html',
  host: {
    style: 'display:contents',
    '(document:keydown.escape)': 'onEscape()',
    '(window:scroll)': 'updateScrollProgress()',
    '(window:resize)': 'updateScrollProgress()',
    '(window:message)': 'onHeroMessage($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly scrollProgress = signal(0);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly topics = inject(CallbackTopicService);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly seo = inject(SeoService);
  private readonly banners = inject(BannerActionsService);
  readonly hasStandaloneShell = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => /^\/(?:signup|(?:customer|partner|vendor|employee)-login)(?:[/?#]|$)/.test(this.router.url)),
    ),
    { initialValue: false },
  );

  constructor() {
    inject(SiteCopyService);
    this.installRouteSeoFallback();
    afterNextRender(() => {
      this.destroyRef.onDestroy(installBookmarkScrolling(this.document));
      this.destroyRef.onDestroy(installFaqLayout(this.document));
      this.destroyRef.onDestroy(installBannerActions(this.document, (...args) => { void this.banners.act(...args); }));
    });
    const captureClick = (event: Event): void => this.onDocumentClick(event as MouseEvent);
    this.document.addEventListener('click', captureClick, true);
    this.destroyRef.onDestroy(() => this.document.removeEventListener('click', captureClick, true));
  }

  /**
   * Many legacy routes predate SeoService. Prevent them from inheriting the
   * description of the page visited immediately before them. Explicit page SEO
   * always wins; this runs only when a navigation did not call SeoService.set().
   */
  private installRouteSeoFallback(): void {
    let revisionAtNavigationStart = this.seo.revision;
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        revisionAtNavigationStart = this.seo.revision;
        return;
      }
      if (!(event instanceof NavigationEnd)) return;

      const expectedRevision = revisionAtNavigationStart;
      queueMicrotask(() => {
        if (this.seo.revision !== expectedRevision) return;

        const leaf = this.leafRoute(this.router.routerState.snapshot.root);
        const routeDescription = this.routeDescription(leaf);
        const pageDescription = routeDescription || this.descriptionFromPage();
        const pageTitle = this.pageTitle(leaf);
        const canonicalPath = event.urlAfterRedirects.split(/[?#]/, 1)[0] || '/';
        this.seo.set(pageTitle, pageDescription || this.genericDescription(pageTitle), canonicalPath);
      });
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private leafRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let leaf = route;
    while (leaf.firstChild) leaf = leaf.firstChild;
    return leaf;
  }

  private routeDescription(route: ActivatedRouteSnapshot): string {
    const candidates = [
      route.data['searchDescription'],
      route.data['description'],
      route.data['tagline'],
      route.data['summary'],
    ];
    return candidates.find((value): value is string => typeof value === 'string' && value.trim().length > 24)?.trim() ?? '';
  }

  private descriptionFromPage(): string {
    const selectors = [
      'main h1 + p',
      'main [class*="hero"] p',
      'main [class*="intro"] p',
      'main [class*="overview"] p',
      'main p',
    ];
    for (const selector of selectors) {
      const text = this.document.querySelector<HTMLElement>(selector)?.textContent
        ?.replace(/\s+/g, ' ')
        .trim();
      if (text && text.length >= 40) return this.trimDescription(text);
    }
    return '';
  }

  private pageTitle(route: ActivatedRouteSnapshot): string {
    const routeTitle = typeof route.title === 'string' ? route.title.trim() : '';
    const heading = this.document.querySelector<HTMLElement>('main h1')?.textContent
      ?.replace(/\s+/g, ' ')
      .trim();
    const currentTitle = this.document.title.trim();
    const title = routeTitle || heading || currentTitle || 'XcellHost Cloud Services';
    return /xcellhost/i.test(title) ? title : `${title} | XcellHost`;
  }

  private genericDescription(pageTitle: string): string {
    const subject = pageTitle.replace(/\s*[|—-]\s*XcellHost.*$/i, '').trim();
    return this.trimDescription(
      `Explore ${subject} from XcellHost Cloud Services, with expert guidance, secure implementation and support for businesses in India.`,
    );
  }

  private trimDescription(value: string): string {
    if (value.length <= 160) return value;
    const shortened = value.slice(0, 157).replace(/\s+\S*$/, '').replace(/[,:;\s]+$/, '');
    return `${shortened}...`;
  }

  updateScrollProgress(): void {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(
      documentHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)) : 0,
    );
  }

  onEscape(): void {
    this.overlay.closeTop();
  }

  /** Same-origin standalone hero documents hand their gated CTAs back to Angular. */
  onHeroMessage(event: MessageEvent<unknown>): void {
    const currentWindow = this.document.defaultView;
    if (!currentWindow || event.origin !== currentWindow.location.origin) return;

    const sourceFrame = Array.from(
      this.document.querySelectorAll<HTMLIFrameElement>('iframe.supplied-smb-hero-frame'),
    ).find((frame) => frame.contentWindow === event.source);
    if (!sourceFrame) return;

    const message = event.data as { type?: unknown; action?: unknown } | null;
    if (message?.type !== 'xcellhost:hero-action' || message.action !== 'infosheet') return;

    const product = sourceFrame.title.replace(/\s+interactive overview$/i, '').trim();
    this.docs.ask('infosheet', product || this.document.title);
    this.overlay.open('doc');
  }

  /** Future pages only need a CTA labelled "Let's Talk" or "Talk to Sales". */
  onDocumentClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) return;

    const target = event.target as Element | null;
    const cta = target?.closest<HTMLElement>('a, button');
    if (!cta || cta.hasAttribute('disabled') || cta.dataset['ctaHandled'] === 'true') return;
    if (cta.hasAttribute('data-banner-action')) return;

    const label = (cta.textContent ?? '').replace(/\s+/g, ' ').trim();
    if (/\binfosheet\b/i.test(label)) {
      if (this.overlay.isOpen('doc')) return;
      event.preventDefault();
      event.stopPropagation();
      this.docs.ask('infosheet', this.infosheetProductName(cta));
      this.overlay.open('doc');
      return;
    }

    if (/^(?:start(?: your)?(?: \d+-day)?|ask for|\d+ day's)?\s*free trial(?:\s*→)?$/i.test(label)) {
      event.preventDefault();
      event.stopPropagation();
      this.overlay.open('trial');
      return;
    }

    if (!/^(let'?s talk|talk to sales|talk to us)$/i.test(label)) return;

    event.preventDefault();
    event.stopPropagation();
    this.topics.ask(cta.dataset['cbtopic']?.trim() || '');
    this.overlay.open('callback');
  }

  private infosheetProductName(cta: HTMLElement): string {
    const explicitName = cta.dataset['product']?.trim();
    if (explicitName) return explicitName;

    const localHeading = cta.closest('section')?.querySelector('h1');
    const pageHeading = document.querySelector('main h1, #ppTitle, h1');
    return (localHeading?.textContent || pageHeading?.textContent || document.title)
      .replace(/\s+/g, ' ')
      .trim();
  }
}
