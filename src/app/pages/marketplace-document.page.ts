import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface MarketplaceDocumentData {
  readonly documentUrl: string;
  readonly heading: string;
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
}

@Component({
  selector: 'xh-marketplace-document-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="visually-hidden">{{ page.heading }}</h1>
    <p class="visually-hidden">{{ page.description }}</p>
    <iframe #frame [src]="documentUrl" [title]="page.heading" (load)="onLoad($event)"
      [style.height.px]="usesSiteShell ? frameHeight : null" [attr.scrolling]="usesSiteShell ? 'no' : null"></iframe>
    @if (page.canonicalPath !== '/cloud-marketplace') {
      <section class="marketplace-support wrap" aria-labelledby="marketplaceSupportTitle">
        <div class="pp-cta">
          <div>
            <h3 id="marketplaceSupportTitle" [textContent]="'Ready to start with ' + marketplaceName + '?'"></h3>
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>
          </div>
          <div class="marketplace-support-actions">
            <button class="btn btn-primary" type="button" (click)="requestCallback()">Request a callback</button>
            <button class="btn btn-ghost" type="button" (click)="browseCatalog()">⚡ Buy Now</button>
            <button class="btn btn-ghost" type="button" (click)="requestDocument('infosheet')">⬇ Infosheet</button>
            <button class="btn btn-ghost" type="button" (click)="requestDocument('presentation')">📖 Presentation</button>
            <a class="btn btn-ghost" [href]="whatsappHref" target="_blank" rel="noopener">Talk on WhatsApp</a>
            <a class="btn btn-ghost" [href]="mailHref">Email Us</a>
          </div>
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" width="104" height="104" />
          </a>
        </div>
        <div class="pp-proof" aria-label="XcellHost credentials and payment options">
          <span>🏅 ISO 27001</span><span>🏅 ISO 20000-1</span><span>🤝 Microsoft Gold Partner</span>
          <span>🕰 Since 1999</span><span>🔒 Secure Payments — UPI · Cards · NetBanking</span>
        </div>
      </section>
    }
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100dvh; overflow: hidden; }
    :host.site-shell { height: auto; overflow: visible; }
    iframe { display: block; width: 100%; height: 100%; border: 0; }
    .marketplace-support { padding-bottom: 38px; }
    .marketplace-support-actions { display: flex; gap: 12px; flex-wrap: wrap; width: 100%; }
    .marketplace-support-actions .btn-ghost { background: transparent; border-color: rgba(255,255,255,.4); color: #fff; }
    .marketplace-support-actions .btn-ghost:hover { background: rgba(255,255,255,.12); }
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  `],
  host: { '[class.site-shell]': 'usesSiteShell' },
})
export class MarketplaceDocumentPage implements AfterViewInit, OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly overlays = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly topics = inject(CallbackTopicService);
  readonly page = inject(ActivatedRoute).snapshot.data as MarketplaceDocumentData;
  readonly usesSiteShell = true;
  readonly marketplaceName = this.page.heading.replace(/^XcellHost\s+/, '');
  readonly whatsappHref = 'https://wa.me/918657032540?text=' + encodeURIComponent('Hello XcellHost, I am interested in ' + this.marketplaceName);
  readonly mailHref = 'mailto:sales@xcellhost.cloud?subject=' + encodeURIComponent(this.marketplaceName);
  frameHeight = 900;
  readonly documentUrl: SafeResourceUrl = inject(DomSanitizer)
    .bypassSecurityTrustResourceUrl(this.page.documentUrl);
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;
  private contentObserver?: ResizeObserver;

  constructor() {
    inject(SeoService).set(this.page.title, this.page.description, this.page.canonicalPath);
  }

  requestCallback(): void {
    this.topics.ask(this.marketplaceName);
    this.overlays.open('callback');
  }

  requestDocument(kind: DocKind): void {
    this.docs.ask(kind, this.marketplaceName);
    this.overlays.open('doc');
  }

  browseCatalog(): void {
    const frame = this.frame?.nativeElement;
    const catalog = frame?.contentDocument?.getElementById('catalog');
    if (frame && catalog) window.scrollTo({
      top: frame.getBoundingClientRect().top + window.scrollY + catalog.getBoundingClientRect().top - 100,
      behavior: 'smooth',
    });
  }

  ngAfterViewInit(): void {
    if (this.frame?.nativeElement.contentDocument?.readyState === 'complete') this.onLoad();
  }

  @HostListener('window:message', ['$event'])
  onFrameMessage(event: MessageEvent): void {
    if (!this.usesSiteShell || event.origin !== window.location.origin ||
      event.source !== this.frame?.nativeElement.contentWindow || event.data?.type !== 'marketplace-height') return;
    const height = event.data.height;
    if (typeof height === 'number' && Number.isFinite(height) && height > 0 && height !== this.frameHeight) {
      this.frameHeight = height;
      this.changeDetector.markForCheck();
    }
  }

  onLoad(event?: Event): void {
    const iframe = (event?.target as HTMLIFrameElement | undefined) ?? this.frame?.nativeElement;
    const document = iframe?.contentDocument;
    if (!document) return;

    this.removeClickListener();
    this.frameDocument = document;
    if (this.usesSiteShell) this.attachSiteShell(document);
    this.clickListener = (event: MouseEvent): void => {
      if (this.usesSiteShell && (event.target as Element).closest('[data-open="xhCallback"]')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.zone.run(() => this.overlays.open('callback'));
        return;
      }
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      const rawHref = anchor.getAttribute('href') ?? '';
      if (this.usesSiteShell && rawHref.startsWith('#') && rawHref.length > 1) {
        const target = document.getElementById(rawHref.slice(1));
        if (target) {
          event.preventDefault();
          const frameTop = this.frame!.nativeElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: frameTop + target.getBoundingClientRect().top - 100, behavior: 'smooth' });
        }
        return;
      }
      if (!rawHref || rawHref === '#' || rawHref.startsWith('#') || /^(?:mailto|tel|javascript):/i.test(rawHref)) return;

      const url = new URL(anchor.href, document.baseURI);
      const marketplaceRoutes: Record<string, string> = {
        '/ai-marketplace.html': '/ai-marketplace',
        '/software-marketplace.html': '/software-marketplace',
        '/cloud-marketplace.html': '/cloud-marketplace',
      };
      let route = marketplaceRoutes[url.pathname];

      const isXcellHostUrl = url.origin === window.location.origin ||
        /(?:^|\.)xcellhost\.(?:cloud|top)$/i.test(url.hostname);
      if (!route && isXcellHostUrl) {
        route = url.pathname;
        if (route.endsWith('.html')) {
          route = route.slice(0, -5).replace(/^\/xcellhost-/, '/');
        }
      }
      if (!route) return;

      event.preventDefault();
      this.zone.run(() => void this.router.navigateByUrl(route + url.search + url.hash));
    };
    document.addEventListener('click', this.clickListener, true);
  }

  ngOnDestroy(): void {
    this.contentObserver?.disconnect();
    this.removeClickListener();
  }

  private attachSiteShell(document: Document): void {
    const style = document.createElement('style');
    style.textContent = `
      html, body { height: auto !important; overflow: hidden !important; }
      .ubar, .promo, .hdr, .mnav, .srch, .lnl-wrap, .lft,
      .lfab, .rfab, .side-cb, #xhProgress, #xhBot, .am-cta, .sm-ctab { display: none !important; }
      .rv { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);
    const content = document.querySelector('main');
    if (!content) return;
    const updateHeight = () => {
      const height = Math.ceil(content.getBoundingClientRect().bottom) + 4;
      if (height !== this.frameHeight) this.zone.run(() => {
        this.frameHeight = height;
        this.changeDetector.markForCheck();
      });
    };
    this.contentObserver?.disconnect();
    this.contentObserver = new ResizeObserver(updateHeight);
    this.contentObserver.observe(content);
    updateHeight();
  }

  private removeClickListener(): void {
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener('click', this.clickListener, true);
    }
    this.frameDocument = undefined;
    this.clickListener = undefined;
  }
}
