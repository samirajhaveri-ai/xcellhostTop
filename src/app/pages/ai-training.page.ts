import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DocRequestService } from '../core/doc-request.service';
import { AI_TRAINING_PAGES } from '../data/ai-training-pages.data';

/** Isolates supplied course styling while the app provides navigation and footer. */
@Component({
  selector: 'xh-ai-training-page',
  standalone: true,
  template: `<iframe #frame [src]="pageUrl" [title]="page.title" scrolling="no" (load)="onLoad()"></iframe>`,
  styles: `:host{display:block}iframe{display:block;width:100%;min-height:700px;border:0}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiTrainingPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  readonly page = inject(ActivatedRoute).snapshot.data['trainingPage'] as typeof AI_TRAINING_PAGES[number];
  readonly pageUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(`/assets/ai-training/${this.page.slug}.html`);
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

    const action = (event: Event) => {
      const { id, topic } = (event as CustomEvent<{ id: string; topic?: string }>).detail;
      if (/info|present/i.test(id)) {
        this.docs.ask(/present/i.test(id) ? 'presentation' : 'infosheet', this.page.name);
        this.overlay.open('doc');
      } else {
        this.topics.ask(topic || this.page.name);
        this.overlay.open('callback');
      }
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name, `₹${item.price.toLocaleString('en-IN')} excl. GST`, item.qty ?? 1, {
        unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' excl. GST',
      });
      this.cart.open();
      this.overlay.open('cart');
    };
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === '_blank' || anchor.hasAttribute('download')) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.startsWith('#')) {
        const target = doc.getElementById(decodeURIComponent(href.slice(1)));
        if (target) {
          event.preventDefault();
          window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110, behavior: 'smooth' });
        }
        return;
      }
      const url = new URL(anchor.href);
      if (!['http:', 'https:'].includes(url.protocol) || (url.origin !== window.location.origin && !['xcellhost.top', 'www.xcellhost.top'].includes(url.hostname))) return;
      event.preventDefault();
      const pathname = url.pathname.replace(/^\/assets\/ai-training\//, '/').replace(/\.html$/, '');
      void this.router.navigateByUrl(`${pathname}${url.search}${url.hash}`);
    };
    doc.addEventListener('xh:site-action', action);
    doc.addEventListener('xh:site-cart', addToCart);
    doc.addEventListener('click', click);
    this.cleanupListeners = () => {
      doc.removeEventListener('xh:site-action', action);
      doc.removeEventListener('xh:site-cart', addToCart);
      doc.removeEventListener('click', click);
    };
  }

  private cleanup(): void {
    this.observer?.disconnect();
    this.cleanupListeners?.();
  }

  ngOnDestroy(): void { this.cleanup(); }
}
