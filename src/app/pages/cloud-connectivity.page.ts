import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DocRequestService } from '../core/doc-request.service';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

interface ImportedServicePage {
  slug: string;
  name: string;
  title: string;
  description: string;
  assetUrl?: string;
  platform?: boolean;
}

@Component({
  selector: 'xh-cloud-connectivity-page',
  standalone: true,
  imports: [ServiceDefaultSectionsComponent],
  template: `<iframe #frame [src]="pageUrl" [title]="page.title" scrolling="no" (load)="onLoad()"></iframe><xh-service-default-sections [name]="page.name" [pageSlug]="page.slug" [platform]="page.platform || false" />`,
  styles: `:host{display:block}iframe{display:block;width:100%;min-height:700px;border:0}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudConnectivityPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  readonly page = inject(ActivatedRoute).snapshot.data['connectivityPage'] as ImportedServicePage;
  readonly pageUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(this.page.assetUrl || `/assets/cloud-connectivity/${this.page.slug}.html`);
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly cart = inject(CartService);
  private readonly docs = inject(DocRequestService);
  private observer?: ResizeObserver;
  private cleanupListeners?: () => void;

  constructor() {
    inject(SeoService).set(this.page.title, this.page.description, `/${this.page.slug}`);
  }

  onLoad(): void {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body) return;
    const resize = () => { frame.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height)}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(doc.body);
    resize();
    void doc.fonts.ready.then(resize);

    const jump = (id: string) => {
      const target = doc.getElementById(id);
      if (target) window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110, behavior: 'smooth' });
    };
    const scroll = (event: Event) => {
      const detail = (event as CustomEvent<{ id?: string; top?: number; behavior?: ScrollBehavior }>).detail;
      if (detail.id) jump(detail.id);
      else if (typeof detail.top === 'number') window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + detail.top,
        behavior: detail.behavior || 'smooth',
      });
    };
    const action = (event: Event) => {
      const { id, topic } = (event as CustomEvent<{ id: string; topic?: string }>).detail;
      if (/cart/i.test(id)) {
        this.cart.open(); this.overlay.open('cart');
      } else if (/info|present/i.test(id)) {
        this.docs.ask(/present/i.test(id) ? 'presentation' : 'infosheet', this.page.name);
        this.overlay.open('doc');
      } else {
        this.topics.ask(topic || this.page.name);
        this.overlay.open('callback');
      }
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; price: number; qty?: number; sub?: string }>).detail;
      this.cart.add(item.name, item.sub || `₹${item.price.toLocaleString('en-IN')} excl. GST`, item.qty ?? 1, this.page.platform && item.price === 0 ? undefined : {
        unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' excl. GST',
      });
      this.cart.open(); this.overlay.open('cart');
    };
    const enquiry = (event: Event) => {
      const data = (event as CustomEvent<Record<string, string>>).detail;
      this.topics.ask(this.page.name, {
        firstName: data['firstName'] || data['first'] || data['name'] || '',
        lastName: data['lastName'] || data['last'] || '',
        company: data['company'] || '', email: data['email'] || '', phone: data['phone'] || '',
        help: this.page.name, details: data['message'] || data['details'] || Object.entries(data)
          .filter(([key]) => !['firstName', 'first', 'lastName', 'last', 'name', 'company', 'email', 'phone'].includes(key))
          .map(([key, value]) => `${key}: ${value}`).join('\n'),
      });
      this.overlay.open('callback');
    };
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href);
      if (!['http:', 'https:'].includes(url.protocol) || (url.origin !== window.location.origin && !['xcellhost.top', 'www.xcellhost.top'].includes(url.hostname))) return;
      event.preventDefault();
      const pathname = url.pathname.replace(/^\/assets\/(?:cloud-connectivity|cloud-platforms)\//, '/').replace(/\.html$/, '');
      void this.router.navigateByUrl(`${pathname}${url.search}${url.hash}`);
    };
    const listeners: [string, EventListener][] = [
      ['xh:site-action', action], ['xh:site-cart', addToCart], ['xh:site-scroll', scroll],
      ['xh:site-enquiry', enquiry], ['click', click as EventListener],
    ];
    listeners.forEach(([name, handler]) => doc.addEventListener(name, handler));
    this.cleanupListeners = () => listeners.forEach(([name, handler]) => doc.removeEventListener(name, handler));
    if (window.location.hash) jump(decodeURIComponent(window.location.hash.slice(1)));
  }

  private cleanup(): void {
    this.observer?.disconnect();
    this.cleanupListeners?.();
  }

  ngOnDestroy(): void { this.cleanup(); }
}
