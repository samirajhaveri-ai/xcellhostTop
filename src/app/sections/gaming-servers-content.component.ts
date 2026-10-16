import { Component, Input, Output, EventEmitter, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-gaming-servers-content',
  standalone: true,
  template: `@if (hero) {
    <link rel="stylesheet" href="/assets/styles/gaming-servers-page.css" />
    <iframe #frame src="/gaming-servers-hero.html" title="Gaming Dedicated Server animated startup, ping map, DDoS protection and mods" scrolling="no" (load)="onLoad()"></iframe>
  } @else {
    <iframe #frame src="/gaming-servers-content.html" title="Gaming Dedicated Server plans, configurator, ping estimator, DDoS demo, sizing and setup" scrolling="no" (load)="onLoad()"></iframe>
  }`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:600px;min-height:0;border:0;background:transparent}`],
})
export class GamingContentComponent implements OnDestroy {
  @Input() hero = false;
  @Output() quoteRequested = new EventEmitter<Event>();
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const view = frame?.contentWindow;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !view || !main) return;
    const resize = () => {
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void doc.fonts.ready.then(resize);
    const syncTheme = () => doc.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncTheme();
    resize();

    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Gaming Dedicated Servers');
      this.overlay.open('callback');
    };
    const add = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; sub?: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name + (item.sub ? ' - ' + item.sub : ''), `INR ${item.price}`, item.qty ?? 1,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-cart', add);
    const originalScrollTo = view.scrollTo;
    view.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + top,
        behavior: typeof options === 'number' ? 'auto' : options.behavior });
    }) as typeof view.scrollTo;
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor?.hasAttribute('data-cfg')) return;
      const href = anchor?.getAttribute('href');
      if (!href || href.length < 2) return;
      const contentFrame = this.hero ? document.querySelector<HTMLIFrameElement>('xh-gaming-servers-content iframe[src="/gaming-servers-content.html"]') : frame;
      const target = contentFrame?.contentDocument?.getElementById(href.slice(1));
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo({ top: window.scrollY + contentFrame!.getBoundingClientRect().top + target.getBoundingClientRect().top - 100,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    doc.addEventListener('click', click, true);
    this.cleanup = () => {
      doc.removeEventListener('import-callback', callback);
      doc.removeEventListener('import-cart', add);
      doc.removeEventListener('click', click, true);
      view.scrollTo = originalScrollTo;
    };
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.themeObserver?.disconnect();
    this.cleanup?.();
    this.cleanup = undefined;
  }
}
