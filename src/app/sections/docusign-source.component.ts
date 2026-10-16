import { Component, Input, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-docusign-source',
  standalone: true,
  template: `@if (hero) {
    <link rel="stylesheet" href="/assets/styles/docusign-page.css" />
    <iframe #frame src="/docusign-hero.html" title="Docusign animated sending, mobile signing, audit trail, bulk send and IAM" scrolling="no" (load)="onLoad()"></iframe>
  } @else {
    <iframe #frame src="/docusign-content.html" title="Docusign overview, features, pricing, configurator, use cases and four planning tools" scrolling="no" (load)="onLoad()"></iframe>
  }`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:600px;min-height:0;border:0;background:transparent}`],
})
export class DocusignSourceComponent implements OnDestroy {
  @Input() hero = false;
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
      this.topics.ask((event as CustomEvent<string>).detail || 'Docusign');
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

      const href = anchor?.getAttribute('href');
      if (!href || href.length < 2) return;
      const contentFrame = this.hero ? document.querySelector<HTMLIFrameElement>('xh-docusign-source iframe[src="/docusign-content.html"]') : frame;
      const content = contentFrame?.contentDocument;
      const id = href.slice(1);
      if (['finder', 'savings', 'meter', 'order'].includes(id)) {
        content?.querySelector<HTMLButtonElement>('#dsTt button[data-t="' + id + '"]')?.click();
      }
      const target = content?.getElementById(id) ?? (id === 'faq' ? document.getElementById('ppFaq') : null);
      if (!target && id === 'contact') {
        event.preventDefault(); event.stopPropagation();
        this.topics.ask('Docusign — talk to an expert'); this.overlay.open('callback'); return;
      }
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo({ top: window.scrollY + (target.ownerDocument === document ? 0 : contentFrame!.getBoundingClientRect().top) + target.getBoundingClientRect().top - 148,
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
