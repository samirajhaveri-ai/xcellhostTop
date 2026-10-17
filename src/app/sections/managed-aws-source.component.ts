import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** Keep the supplied page's canvas runtime and styles isolated to Managed AWS. */
@Component({
  selector: 'xh-managed-aws-source',
  standalone: true,
  template: `<iframe #frame src="/managed-aws-page.html"
    title="Managed AWS services, animated cloud operations, plans and getting started"
    scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:1100px;min-height:0;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedAwsSourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly frameDocument = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    const view = this.frameDocument.defaultView;
    if (!frame || !doc || !main || !view) return;

    const resize = () => {
      if (!frame.isConnected) return;
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    void doc.fonts.ready.then(resize);
    resize();

    const syncTheme = () => doc.documentElement.setAttribute('data-theme',
      this.frameDocument.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(this.frameDocument.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncTheme();

    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Managed AWS Services');
      this.overlay.open('callback');
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; sub?: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name + (item.sub ? ` — ${item.sub}` : ''), `INR ${item.price}`, item.qty ?? 1,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      if (href === 'https://www.xcellhost.top/') {
        event.preventDefault();
        void this.router.navigateByUrl('/');
        return;
      }
      if (!href.startsWith('#')) return;
      event.preventDefault();
      if (href === '#') return;
      const target = doc.getElementById(href.slice(1));
      const tail = href === '#faq' ? this.frameDocument.getElementById('managed-aws-faq') : null;
      const top = target
        ? view.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top
        : tail ? view.scrollY + tail.getBoundingClientRect().top : null;
      if (top === null) return;
      view.scrollTo({ top: top - 110, behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-cart', addToCart);
    doc.addEventListener('click', click);
    this.cleanup = () => {
      doc.removeEventListener('import-callback', callback);
      doc.removeEventListener('import-cart', addToCart);
      doc.removeEventListener('click', click);
    };
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    this.cleanup?.();
    this.cleanup = undefined;
  }
}
