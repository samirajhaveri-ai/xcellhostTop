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
  selector: 'xh-geotrust-dv-flex-page',
  standalone: true,
  imports: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent],
  template: `<iframe #contentFrame src="/assets/animations/geotrust-dv-ssl-flex-content.html"
    title="GeoTrust DV SSL (FLEX), domain builder, pricing and XcellHost support"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>
    <xh-geotrust-ev-flex-followup idPrefix="geotrust-dv" [faqs]="faqs" />
    <xh-insights-section pageSlug="geotrust-dv-ssl-flex"
      [pageAliases]="['geotrust-ssl-certificates', 'geotrust']" [videos]="videos"
      videoDescription="Explore GeoTrust certificates and digital trust with XcellHost." />`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoTrustDvSslFlexPage implements OnDestroy {
  readonly height = signal(9000);
  readonly faqs = [
  {
    "question": "What is GeoTrust DV SSL (FLEX)?",
    "answer": "A domain-validated TLS certificate from GeoTrust, a DigiCert brand, in the FLEX format. You can combine up to 250 standard domains and wildcards on one certificate. It carries a US$500K warranty."
  },
  {
    "question": "What can I mix on one DV FLEX certificate?",
    "answer": "Standard domain names and wildcard entries can be combined across domains you control, up to 250 entries in total. DV FLEX does not accept IP addresses; a suitable organisation-validated certificate is needed for a public IP."
  },
  {
    "question": "What does a wildcard entry cover?",
    "answer": "*.yourbusiness.in covers first-level subdomains such as shop.yourbusiness.in, mail.yourbusiness.in and new subdomains at that level. It does not cover deeper levels or the bare domain unless that domain is listed too."
  },
  {
    "question": "How do I prove domain control?",
    "answer": "Approve a validation email, add a DNS TXT or CNAME record, or place a validation file on the website. A wildcard needs a check on its base domain. XcellHost helps set up the required records."
  },
  {
    "question": "How quickly is a DV FLEX certificate issued?",
    "answer": "GeoTrust issues DV certificates automatically once the domain-control checks pass, usually within seconds. Timing depends on completing validation for every required domain."
  },
  {
    "question": "Do you install the certificate on my servers?",
    "answer": "XcellHost offers installation on cPanel, Plesk, IIS, Nginx, Apache, load balancers and other supported platforms. Add installation in the configurator for CSR generation, validation, installation and chain testing."
  },
  {
    "question": "Do I get a GST invoice?",
    "answer": "Yes. XcellHost bills in Indian rupees and provides a GST invoice. The configurator shows the certificate, standard SANs, wildcard entries and optional installation, plus 18% GST and the payable total."
  },
  {
    "question": "What happens when the certificate expires during my term?",
    "answer": "Your 1–3-year purchase is a subscription with unlimited free reissues through the term. XcellHost can handle reissues and installation, or help automate the process through ACME."
  }
];
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
    inject(SeoService).set('GeoTrust DV SSL (FLEX) | XcellHost',
      'GeoTrust domain-validated SSL with flexible standard and wildcard domain coverage, installation and INR billing from XcellHost.',
      '/geotrust-dv-ssl-flex');
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
    if (data?.type === 'geotrust-dv-enquiry' && typeof data.configuration === 'string') {
      this.topics.ask(`GeoTrust DV SSL (FLEX) — ${data.configuration}`);
      this.overlay.open('callback');
    } else if (data?.type === 'geotrust-dv-scroll' && typeof data.target === 'string') {
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
    } else if (data?.type === 'geotrust-dv-toast' && frame) {
      const toast = frame.contentDocument?.getElementById('importToast');
      if (toast) {
        toast.style.position = 'absolute';
        toast.style.bottom = 'auto';
        toast.style.top = `${Math.max(8, Math.min(frame.clientHeight - 48, window.innerHeight - 80 - frame.getBoundingClientRect().top))}px`;
      }
    } else if (data?.type === 'geotrust-dv-cart') {
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
