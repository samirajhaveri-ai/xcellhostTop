import { DOCUMENT } from '@angular/common';
import { afterNextRender, ApplicationRef, ChangeDetectionStrategy, Component, DestroyRef, inject, PendingTasks, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';

import { OverlayService } from './core/overlay.service';
import { DocRequestService } from './core/doc-request.service';
import { CallbackTopicService } from './overlays/callback-topic.service';
import { SiteCopyService } from './core/site-copy.service';
import { SeoService } from './core/seo.service';
import { PAGE_SEO } from './data/page-seo.data';
import sitemapPages from '../../public/sitemap-pages.json';
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
  PromoBarComponent,
  UtilityBarComponent,
} from './layout';

const SITEMAP_TITLES = sitemapPages as Record<string, string>;
const normalizedSitemapTitle = (title: string): string =>
  title.replace(/\s*[|\u2014\u2013-]\s*XcellHost.*$/i, '').trim();
const SITEMAP_TITLE_COUNTS = Object.values(SITEMAP_TITLES).reduce((counts, title) => {
  const normalized = normalizedSitemapTitle(title).toLocaleLowerCase();
  counts.set(normalized, (counts.get(normalized) ?? 0) + 1);
  return counts;
}, new Map<string, number>());
const MAIN_SERVICE_PATHS = new Set([
  'acronis',
  'aws-cloud-disaster-recovery',
  'aws-migration',
  'azure-cloud-disaster-recovery',
  'azure-migration',
  'backup-and-disaster-recovery',
  'dpdpa-consulting',
  'dpdpa-for-smb',
  'gcp-cloud-disaster-recovery',
  'gcp-cloud-services',
  'gcp-migration',
  'gpu-clusters',
  'gpu-servers',
  'iso-27001-consulting',
  'managed-aws',
  'managed-azure',
  'managed-detection-and-response-mdr',
  'managed-extended-detection-response-xdr',
  'managed-google-cloud',
  'managed-google-cloud-gcp',
  'managed-grc',
  'managed-gws',
  'managed-kubernetes',
  'managed-microsoft-365',
  'managed-microsoft-sentinel',
  'managed-multi-cloud',
  'managed-oracle-cloud',
  'managed-phishing-simulation',
  'managed-xdr',
  'tally-on-cloud',
]);
const SITE_ORIGIN = 'https://xcellhost.cloud';

interface RouteSeoSummary {
  readonly heading?: string;
  readonly description: string;
}

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
  readonly routeSeoSummary = signal<RouteSeoSummary | null>(this.serverRouteSeoSummary());
  private readonly destroyRef = inject(DestroyRef);
  private readonly pendingTasks = inject(PendingTasks);
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
  readonly showContactOptions = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => !/^\/sitemap(?:[/?#]|$)/.test(this.router.url)),
    ),
    { initialValue: true },
  );

  constructor() {
    inject(SiteCopyService);
    this.installRouteSeoFallback();
    const application = inject(ApplicationRef);
    afterNextRender(async () => {
      // The shell can render before a lazy route finishes hydration. DOM
      // enhancements must wait before wrapping bookmarks or inserting reviews.
      await application.whenStable();
      if (this.destroyRef.destroyed) return;
      this.destroyRef.onDestroy(installBookmarkScrolling(this.document));
      this.destroyRef.onDestroy(installFaqLayout(this.document));
      this.destroyRef.onDestroy(installBannerActions(this.document, (...args) => { void this.banners.act(...args); }));
    });
    const captureClick = (event: Event): void => this.onDocumentClick(event as MouseEvent);
    this.document.addEventListener('click', captureClick, true);
    this.destroyRef.onDestroy(() => this.document.removeEventListener('click', captureClick, true));
  }

  /**
   * Finalize every route after activation so prerendered HTML cannot inherit
   * metadata from the base document or publish a canonical for another route.
   */
  private installRouteSeoFallback(): void {
    let descriptionRevisionAtNavigationStart = this.seo.descriptionRevision;
    const subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        descriptionRevisionAtNavigationStart = this.seo.descriptionRevision;
        this.routeSeoSummary.set(null);
        return;
      }
      if (!(event instanceof NavigationEnd)) return;

      const expectedDescriptionRevision = descriptionRevisionAtNavigationStart;
      this.pendingTasks.run(async () => {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));
        const leaf = this.leafRoute(this.router.routerState.snapshot.root);
        const routeDescription = this.routeDescription(leaf);
        const canonicalPath = event.urlAfterRedirects.split(/[?#]/, 1)[0] || '/';
        const curatedSeo = PAGE_SEO[canonicalPath.replace(/^\/+|\/+$/g, '')];
        const pageTitle = curatedSeo?.title || this.sitemapTitle(canonicalPath) || this.pageTitle(leaf);
        const componentSetDescription = this.seo.descriptionRevision !== expectedDescriptionRevision;
        const pageDescription = componentSetDescription
          ? this.currentDescription()
          : routeDescription || this.descriptionFromPage() || this.genericDescription(pageTitle);
        const uniqueDescription = curatedSeo?.description || this.uniqueDescription(pageTitle, pageDescription);
        this.seo.set(pageTitle, uniqueDescription, canonicalPath, curatedSeo?.image);
        this.updateRouteSeoSummary(pageTitle, uniqueDescription);
        this.updateStructuredData(canonicalPath, pageTitle, uniqueDescription);
      });
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  private sitemapTitle(pathname: string): string {
    const key = '/' + pathname.replace(/^\/+|\/+$/g, '');
    const source = SITEMAP_TITLES[key];
    if (!source) return '';
    let title = normalizedSitemapTitle(source);
    if ((SITEMAP_TITLE_COUNTS.get(title.toLocaleLowerCase()) ?? 0) > 1) {
      const segments = key.split('/').filter(Boolean);
      const last = this.humanize(segments.at(-1) ?? 'home');
      const context = segments.length > 1
        ? `${this.humanize(segments[0])}: ${last}`
        : `${last} Services`;
      title += ` \u2014 ${context}`;
    }
    return /xcellhost/i.test(title) ? title : `${title} | XcellHost`;
  }

  private humanize(value: string): string {
    return value.split('-').filter(Boolean)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  private currentDescription(): string {
    return this.document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content.trim() ?? '';
  }

  private uniqueDescription(pageTitle: string, description: string): string {
    const subject = pageTitle.replace(/\s*[|\u2014\u2013-]\s*XcellHost.*$/i, '').trim();
    const value = description.trim();
    const candidate = value.toLocaleLowerCase().startsWith(subject.toLocaleLowerCase())
      ? value
      : `${subject}: ${value}`;
    if (candidate.length <= 160) return candidate;

    // Preserve the title's distinguishing tail when long, near-identical page
    // names would otherwise become the same description after truncation.
    const qualifier = subject.slice(-48).trimStart();
    const suffix = `\u2026 ${qualifier}`;
    return `${candidate.slice(0, 160 - suffix.length).trimEnd()}${suffix}`;
  }

  private updateRouteSeoSummary(pageTitle: string, description: string): void {
    const nativeHeadings = this.document.querySelectorAll('h1:not(.route-seo-heading)');
    const routedContent = this.document.querySelector('router-outlet + *');
    const bodyText = routedContent?.textContent?.replace(/\s+/g, ' ').trim() ?? '';
    if (nativeHeadings.length > 0 && bodyText.length >= 80) {
      this.routeSeoSummary.set(null);
      return;
    }
    this.routeSeoSummary.set({
      heading: nativeHeadings.length === 0
        ? pageTitle.replace(/\s*[|\u2014\u2013-]\s*XcellHost.*$/i, '').trim()
        : undefined,
      description,
    });
  }

  private serverRouteSeoSummary(): RouteSeoSummary | null {
    const summary = this.document.querySelector<HTMLElement>('[data-route-seo-summary]');
    if (!summary) return null;
    return {
      heading: summary.querySelector('h1')?.textContent?.trim() || undefined,
      description: summary.querySelector('p')?.textContent?.trim() || '',
    };
  }

  private updateStructuredData(pathname: string, pageTitle: string, description: string): void {
    const path = pathname.replace(/^\/+|\/+$/g, '');
    this.updateBreadcrumbJsonLd(path, pageTitle);
    this.updateServiceJsonLd(path, pageTitle, description);
    this.updateFaqJsonLd();
  }

  private updateBreadcrumbJsonLd(path: string, pageTitle: string): void {
    if (!path || path === '404') {
      this.seo.removeJsonLd('breadcrumb');
      return;
    }

    const segments = path.split('/');
    const itemListElement: Record<string, unknown>[] = [{
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`,
    }];
    for (let index = 0; index < segments.length; index += 1) {
      const partialPath = '/' + segments.slice(0, index + 1).join('/');
      const isCurrentPage = index === segments.length - 1;
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: isCurrentPage
          ? normalizedSitemapTitle(pageTitle)
          : normalizedSitemapTitle(SITEMAP_TITLES[partialPath] || this.humanize(segments[index])),
        item: `${SITE_ORIGIN}${partialPath}/`,
      });
    }
    this.seo.setJsonLd('breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    });
  }

  private updateServiceJsonLd(path: string, pageTitle: string, description: string): void {
    if (!MAIN_SERVICE_PATHS.has(path)) {
      this.seo.removeJsonLd('service');
      return;
    }

    const url = `${SITE_ORIGIN}/${path}/`;
    const service: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: normalizedSitemapTitle(pageTitle),
      description,
      url,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'XcellHost Cloud Services Pvt. Ltd.',
        url: `${SITE_ORIGIN}/`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
        identifier: 'IN',
      },
    };
    if (path === 'tally-on-cloud') {
      service['offers'] = {
        '@type': 'Offer',
        price: 499,
        priceCurrency: 'INR',
        url,
        description: 'Tally on Cloud from ₹499 per user',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: 499,
          priceCurrency: 'INR',
          unitText: 'per user',
        },
      };
    }
    this.seo.setJsonLd('service', service);
  }

  private updateFaqJsonLd(): void {
    const root = this.document.querySelector<HTMLElement>('router-outlet + *');
    const mainEntity = root ? this.faqEntries(root) : [];
    if (!mainEntity.length) {
      this.seo.removeJsonLd('faq');
      return;
    }
    this.seo.setJsonLd('faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity,
    });
  }

  private faqEntries(root: HTMLElement): Record<string, unknown>[] {
    const entries: Record<string, unknown>[] = [];
    const seen = new Set<string>();
    const add = (questionElement: Element | null, answerElement: Element | null): void => {
      const question = this.semanticText(questionElement).replace(/[+−⌄]\s*$/, '').trim();
      const answer = this.semanticText(answerElement);
      const key = question.toLocaleLowerCase();
      if (!question.endsWith('?') || answer.length < 20 || seen.has(key)) return;
      seen.add(key);
      entries.push({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      });
    };

    Array.from(root.querySelectorAll('details')).forEach((details) => {
      const question = details.querySelector('summary');
      const answer = details.cloneNode(true) as HTMLElement;
      answer.querySelector('summary')?.remove();
      add(question, answer);
    });
    Array.from(root.querySelectorAll('.faq2, .faq-card, .faq-item, .fq')).forEach((item) => {
      add(
        item.querySelector('summary, .faq2-q, .faq-question, button'),
        item.querySelector('.faq2-a, .faq-answer, .ans, .fa, [class*="answer"]'),
      );
    });
    return entries.slice(0, 50);
  }

  private semanticText(element: Element | null): string {
    if (!element) return '';
    const copy = element.cloneNode(true) as HTMLElement;
    Array.from(copy.querySelectorAll('script, style, svg, .faq2-ic, .faq-icon, .material-symbols-outlined'))
      .forEach((node) => node.remove());
    return copy.textContent?.replace(/\s+/g, ' ').trim() ?? '';
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
    const subject = pageTitle.replace(/\s*[|\u2014\u2013-]\s*XcellHost.*$/i, '').trim();
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
    if (cta.hasAttribute('data-banner-action') || cta.hasAttribute('data-banner-existing-action')) return;

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
