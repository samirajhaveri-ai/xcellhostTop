import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ProductPageService } from '../core/product-page.service';
import { PRODUCT_VIDEOS } from '../data/products.data';
import { DocRequestService, DocKind } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ProductFaqComponent } from '../sections/product/product-faq.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../core/cart.service';
import { SITE } from '../data/site.data';

/** Renders supplied HTML and its interactions in isolation from global styles. */
@Component({
  selector: 'xh-menu-service-page',
  standalone: true,
  imports: [ProductFaqComponent, InsightsSectionComponent, RouterLink],
  templateUrl: './menu-service.page.html',
  styleUrl: './menu-service.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuServicePage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  readonly page = inject(ActivatedRoute).snapshot.data['servicePage'] as {
    slug: string; name: string; title: string; description: string; category?: 'Cloud';
  };
  readonly pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/menu-service-pages/${this.page.slug}.html`);
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;
  readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly topics = inject(CallbackTopicService);
  private readonly cart = inject(CartService);
  readonly whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${this.page.name}.`)}`;
  readonly emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${this.page.name}`)}`;
  readonly view = inject(ProductPageService).build({
    name: this.page.name,
    cat: this.page.category ?? (/testing|vapt/.test(this.page.slug) ? 'Security' : this.page.slug === 'managed-microsoft-365' ? 'Cloud' : 'Web Presence'),
  });
  private readonly videoId = PRODUCT_VIDEOS[this.page.name]?.[0] || (/testing|vapt/.test(this.page.slug) ? PRODUCT_VIDEOS['VAPT Services']?.[0] : '');
  readonly videoUrl = this.videoId ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&playsinline=1`) : null;
  readonly starSlots = [0, 1, 2, 3, 4];
  readonly tourIndex = signal(0);
  readonly toggleIndex = (index: number) => 1 - index;
  private previousFocus?: HTMLElement;
  @ViewChild('tourDialog') private tourDialog?: ElementRef<HTMLElement>;
  readonly tourSlides = [
    { image: `/assets/menu-service-pages/tours/${this.page.slug}-hero.webp`, title: 'Service overview' },
    { image: `/assets/menu-service-pages/tours/${this.page.slug}-details.webp`, title: 'Capabilities and service details' },
  ];

  requestDoc(kind: DocKind): void {
    this.docs.ask(kind, this.page.name);
    this.overlay.open('doc');
  }

  openCallback(): void {
    this.topics.ask(this.page.name);
    this.overlay.open('callback');
  }

  buyNow(): void {
    this.cart.add(this.page.name, 'Quote on request');
    this.cart.open();
    this.overlay.open('cart');
  }

  openTour(): void {
    this.previousFocus = document.activeElement as HTMLElement;
    this.tourIndex.set(0);
    this.overlay.open('productScreenshotTour');
    requestAnimationFrame(() => this.tourDialog?.nativeElement.focus());
  }

  closeTour(): void {
    this.overlay.close('productScreenshotTour');
    this.previousFocus?.focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.overlay.isOpen('productScreenshotTour')) return;
    if (event.key === 'Escape') this.closeTour();
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') this.tourIndex.update((index) => 1 - index);
    if (event.key === 'Tab') {
      const buttons = this.tourDialog?.nativeElement.querySelectorAll<HTMLButtonElement>('button');
      const first = buttons?.[0], last = buttons?.[buttons.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === this.tourDialog?.nativeElement)) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  }

  constructor() {
    inject(SeoService).set(this.page.title, this.page.description, `/${this.page.slug}`);
  }

  onLoad(): void {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document?.body) return;
    this.frameDocument = document;
    const resize = () => {
      // Measure the content, so the frame can shrink after a tab or FAQ closes.
      frame.style.height = `${Math.ceil(document.body.getBoundingClientRect().height)}px`;
    };
    resize();
    this.observer = new ResizeObserver(resize);
    this.observer.observe(document.body);
    void document.fonts.ready.then(resize);

    this.clickListener = (event: MouseEvent) => {
      const action = (event.target as Element | null)?.closest<HTMLElement>('[data-xh-action]')?.dataset['xhAction'];
      if (action) {
        event.preventDefault();
        if (action === 'infosheet' || action === 'presentation') this.requestDoc(action);
        else if (action === 'tour') this.openTour();
        else if (action === 'trial') this.overlay.open('trial');
        else this.openCallback();
        return;
      }
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href') ?? '';
      if (!href || href === '#') return;
      if (href.startsWith('#')) {
        const target = document.getElementById(decodeURIComponent(href.slice(1)));
        if (!target) return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 100, behavior: 'smooth' });
        return;
      }
      const url = new URL(anchor.href);
      if (!['http:', 'https:'].includes(url.protocol)) return;
      if (url.origin !== window.location.origin && !['www.xcellhost.top', 'xcellhost.top'].includes(url.hostname)) return;
      event.preventDefault();
      const pathname = url.pathname.replace(/^\/assets\/menu-service-pages\//, '/').replace(/\.html$/, '');
      void this.router.navigateByUrl(`${pathname}${url.search}${url.hash}`);
    };
    document.addEventListener('click', this.clickListener);
  }

  private cleanup(): void {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) this.frameDocument.removeEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void { this.cleanup(); this.overlay.close('productScreenshotTour'); }
}
