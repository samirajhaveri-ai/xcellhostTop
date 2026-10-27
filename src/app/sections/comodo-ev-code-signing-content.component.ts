import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, output, signal,
} from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';

/** Requested source sections keep their styles, animations and interactive tools isolated. */
@Component({
  selector: 'xh-comodo-ev-code-signing-content',
  standalone: true,
  template: `<iframe #contentFrame src="/assets/animations/comodo-ev-code-signing-content.html"
    title="Comodo EV code signing overview, signing tools, validation checklist, policy timeline, pricing and XcellHost support"
    allow="clipboard-write" scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComodoEvCodeSigningContentComponent implements OnDestroy {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly height = signal(3200);
  @ViewChild('contentFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private disposed = false;

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
    if (data?.type === 'comodo-ev-enquiry' && typeof data.configuration === 'string') {
      this.quoteRequested.emit({ event: new Event('click'), configuration: data.configuration });
    } else if (data?.type === 'comodo-ev-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    } else if (data?.type === 'comodo-ev-cart') {
      const item = data.item;
      if (!item || typeof item.name !== 'string' || typeof item.sub !== 'string' ||
        typeof item.price !== 'number' || !Number.isFinite(item.price) || item.price < 0 ||
        !Number.isInteger(item.qty) || item.qty < 1 || item.qty > 100) return;
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
