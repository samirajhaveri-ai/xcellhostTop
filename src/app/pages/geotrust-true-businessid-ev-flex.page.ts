import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, signal,
} from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { GeoTrustEvFlexFollowupComponent } from '../sections/geotrust-ev-flex-followup.component';
import { InsightsSectionComponent, InsightVideo } from '../sections/insights-section.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-geotrust-ev-flex-page',
  standalone: true,
  imports: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent],
  template: `<iframe #contentFrame src="/assets/animations/geotrust-true-businessid-ev-flex-content.html"
    title="GeoTrust TrueBusiness ID EV (FLEX), domain builder, pricing and XcellHost support"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>
    <xh-geotrust-ev-flex-followup />
    <xh-insights-section pageSlug="geotrust-true-businessid-ev-flex"
      [pageAliases]="['geotrust-ssl-certificates', 'geotrust']" [videos]="videos"
      videoDescription="Explore GeoTrust certificates and digital trust with XcellHost." />`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoTrustTrueBusinessIdEvFlexPage implements OnDestroy {
  readonly height = signal(9000);
  readonly videos: readonly InsightVideo[] = [{
    title: 'XcellHost · Digital trust',
    src: inject(DomSanitizer).bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&playsinline=1'),
    poster: 'https://i.ytimg.com/vi/s1Rxs7rWd2I/hqdefault.jpg',
  }];
  @ViewChild('contentFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private disposed = false;

  constructor() {
    inject(SeoService).set('GeoTrust TrueBusiness ID EV (FLEX) | XcellHost',
      'GeoTrust Extended Validation SSL with flexible domain coverage, EV vetting help, installation and INR billing from XcellHost.',
      '/geotrust-true-businessid-ev-flex');
  }

  syncContent(): void {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    const doc = this.frame?.nativeElement.contentDocument;
    const main = doc?.querySelector('main');
    if (!doc || !main) return;
    const resize = () => {
      if (!this.disposed) this.zone.run(() => this.height.set(Math.ceil(main.getBoundingClientRect().height) + 2));
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    const syncTheme = () => doc.documentElement.setAttribute('data-theme',
      document.documentElement.classList.contains('dark-mode') ? 'dark' : document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    syncTheme();
    resize();
    void doc.fonts.ready.then(resize);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    const frame = this.frame?.nativeElement;
    if (event.origin !== window.location.origin || event.source !== frame?.contentWindow) return;
    const data = event.data;
    if (data?.type === 'geotrust-ev-enquiry' && typeof data.configuration === 'string') {
      this.topics.ask(`GeoTrust TrueBusiness ID EV (FLEX) — ${data.configuration}`);
      this.overlay.open('callback');
    } else if (data?.type === 'geotrust-ev-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) {
        // Use layout offsets so reveal-animation transforms cannot shift the final scroll position.
        let top = 0;
        for (let element: HTMLElement | null = target; element; element = element.offsetParent as HTMLElement | null) top += element.offsetTop;
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + top - 110,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        });
      }
    } else if (data?.type === 'geotrust-ev-toast' && frame) {
      const toast = frame.contentDocument?.getElementById('importToast');
      if (toast) {
        toast.style.position = 'absolute';
        toast.style.bottom = 'auto';
        toast.style.top = `${Math.max(8, Math.min(frame.clientHeight - 48, window.innerHeight - 80 - frame.getBoundingClientRect().top))}px`;
      }
    } else if (data?.type === 'geotrust-ev-cart') {
      const item = data.item;
      if (!item || typeof item.name !== 'string' || typeof item.sub !== 'string' ||
        typeof item.price !== 'number' || !Number.isFinite(item.price) || item.price < 0 ||
        !Number.isInteger(item.qty) || item.qty < 1 || item.qty > 24651) return;
      this.cart.add(`${item.name} — ${item.sub}`, `₹${item.price.toLocaleString('en-IN')} · excl. GST`, item.qty,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' · excl. GST' });
      this.cart.open();
      this.overlay.open('cart');
    }
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
}
