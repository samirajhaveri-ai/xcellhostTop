import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { BUSINESSID_PAGES, BusinessIdVariant } from '../data/geotrust-businessid.data';
import { GeoTrustEvFlexFollowupComponent } from '../sections/geotrust-ev-flex-followup.component';
import { InsightsSectionComponent, InsightVideo } from '../sections/insights-section.component';

@Component({
  selector: 'xh-geotrust-businessid-page',
  standalone: true,
  imports: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent],
  template: `<iframe #contentFrame [src]="contentUrl" [title]="page.name + ', coverage, pricing and XcellHost support'"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>
    <xh-geotrust-ev-flex-followup [idPrefix]="page.slug" [faqs]="page.faqs" />
    <xh-insights-section [pageSlug]="page.slug" [pageAliases]="['geotrust-ssl-certificates', 'geotrust']"
      [videos]="videos" videoDescription="Explore GeoTrust certificates and digital trust with XcellHost." />`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoTrustBusinessIdPage implements OnDestroy {
  readonly page = BUSINESSID_PAGES[inject(ActivatedRoute).snapshot.data['businessIdVariant'] as BusinessIdVariant];
  private readonly sanitizer = inject(DomSanitizer);
  readonly contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/animations/${this.page.slug}-content.html`);
  readonly height = signal(9000);
  readonly videos: readonly InsightVideo[] = [{
    title: 'XcellHost · Digital trust',
    src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&playsinline=1'),
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
    inject(SeoService).set(`${this.page.name} | XcellHost`,
      `${this.page.name} with business validation, installation support, reissues and INR billing from XcellHost.`,
      `/${this.page.slug}`);
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
    if (data?.type === 'businessid-enquiry' && typeof data.configuration === 'string') {
      this.topics.ask(`${this.page.name} — ${data.configuration}`);
      this.overlay.open('callback');
    } else if (data?.type === 'businessid-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) {
        let top = 0;
        for (let element: HTMLElement | null = target; element; element = element.offsetParent as HTMLElement | null) top += element.offsetTop;
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + top - 110,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        });
      }
    } else if (data?.type === 'businessid-toast' && frame) {
      const toast = frame.contentDocument?.getElementById('importToast');
      if (toast) toast.style.top = `${Math.max(8, Math.min(frame.clientHeight - 48, window.innerHeight - 80 - frame.getBoundingClientRect().top))}px`;
    } else if (data?.type === 'businessid-cart') {
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
