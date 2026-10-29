import { Component, Input, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-aiops-content',
  standalone: true,
  template: `@if (hero) { <iframe #frame src="/aiops-hero.html" title="Illustrative AIOps Anomaly Detection" scrolling="no" (load)="onLoad()"></iframe> } @else { <iframe #frame src="/aiops-content.html" title="AIOps Platform Features" scrolling="no" (load)="onLoad()"></iframe> }`,
  styles: [`:host{display:block}iframe{display:block;width:100%;min-height:0;border:0}`],
})
export class AiopsContentComponent implements OnDestroy {
  @Input() hero = false;
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private document?: Document;
  private clickListener?: (event: MouseEvent) => void;
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private cleanup: (() => void)[] = [];

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;
    const resize = () => { frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    this.document = doc;
    const theme = () => doc.documentElement.setAttribute('data-theme', window.document.documentElement.classList.contains('dark-mode') ? 'dark' : window.document.documentElement.getAttribute('data-theme') || 'light');
    const themes = new MutationObserver(theme);
    themes.observe(window.document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    theme();
    const scroll = (id: string) => {
      if (id === 'lead' || id === 'contact') {
        window.document.querySelector('#ppage .pp-cta')?.scrollIntoView({behavior: 'smooth', block: 'center'});
        return;
      }
      const contentFrame = window.document.querySelector<HTMLIFrameElement>('xh-aiops-content iframe[src="/aiops-content.html"]');
      const targetFrame = doc.getElementById(id) ? frame : contentFrame;
      const target = targetFrame?.contentDocument?.getElementById(id);
      if (target && targetFrame) window.scrollTo({ top: window.scrollY + targetFrame.getBoundingClientRect().top + target.getBoundingClientRect().top - 148, behavior: 'smooth' });
      else if (id === 'faq') window.document.querySelector('#ppFaq')?.scrollIntoView({behavior: 'smooth', block: 'start'});
    };
    const scrollEvent = (event: Event) => scroll((event as CustomEvent<string>).detail);
    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'AIOps consultation');
      this.overlay.open('callback');
    };
    const add = (event: Event) => {
      const item = (event as CustomEvent<{name: string; sub: string; price: number; qty: number}>).detail;
      if (!item || !Number.isFinite(item.price) || item.price < 0 || !Number.isInteger(item.qty) || item.qty < 1) return;
      this.cart.add(`${item.name} — ${item.sub}`, `₹${item.price.toLocaleString('en-IN')} · excl. GST`, item.qty, {unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' · excl. GST'});
      this.cart.open();
    };
    doc.addEventListener('aiops-scroll', scrollEvent);
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-add', add);
    this.cleanup.push(() => themes.disconnect(), () => doc.removeEventListener('aiops-scroll', scrollEvent), () => doc.removeEventListener('import-callback', callback), () => doc.removeEventListener('import-add', add));
    this.clickListener = (event) => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute('href');
      if (!href || href.length < 2) return;
      event.preventDefault();
      scroll(href.slice(1));
    };
    doc.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cleanup.splice(0).forEach(fn => fn());
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
  }
}
