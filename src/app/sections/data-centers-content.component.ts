import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface ImportedRuntime {
  open: (id: string, options?: { topic?: string }) => void;
  cart: { add: (item: { name: string; sub?: string; price: number; qty?: number }) => void };
}

/** Keeps the supplied interactive document isolated from the company page styles. */
@Component({
  selector: 'xh-data-centers-content',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<iframe #contentFrame src="/imported-data-centers.html"
    title="Data centers: facilities, global locations, plans and sizing tools"
    scrolling="no" (load)="onLoad()" [style.height.px]="height()"></iframe>`,
  styles: [':host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;border:0}'],
})
export class DataCentersContentComponent implements OnDestroy {
  @ViewChild('contentFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  readonly height = signal(1000);
  private observer?: ResizeObserver;
  private cleanup?: () => void;

  onLoad(): void {
    this.observer?.disconnect();
    this.cleanup?.();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const win = frame?.contentWindow;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !win || !main) return;

    const resize = () => {
      const height = Math.ceil(main.getBoundingClientRect().height);
      if (height > 0) this.zone.run(() => this.height.set(height));
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void doc.fonts.ready.then(resize);
    resize();

    // Use the real website's enquiry form and quote cart for the supplied CTAs.
    const runtime = (win as Window & { XH?: ImportedRuntime }).XH;
    if (runtime) {
      runtime.open = (_id, options) => this.zone.run(() => {
        this.topics.ask(options?.topic || 'Data centers and colocation');
        this.overlay.open('callback');
      });
      runtime.cart.add = item => this.zone.run(() => {
        this.cart.add([item.name, item.sub].filter(Boolean).join(' · '),
          `₹${item.price.toLocaleString('en-IN')}`, item.qty ?? 1,
          { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' / month' });
        this.cart.open();
      });
    }

    // The outer page owns scrolling and navigation because the frame grows to fit.
    win.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      const host = frame.ownerDocument.defaultView;
      host?.scrollTo({ top: frame.getBoundingClientRect().top + host.scrollY + top - 100,
        behavior: typeof options === 'number' ? 'auto' : options.behavior });
    }) as typeof win.scrollTo;
    const navigate = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target === '_blank' || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const href = link.getAttribute('href') ?? '';
      if (href.startsWith('#')) {
        const target = doc.getElementById(href.slice(1));
        if (target) {
          event.preventDefault();
          win.scrollTo({ top: target.getBoundingClientRect().top + win.scrollY, behavior: 'smooth' });
        }
      } else if (href.startsWith('/')) {
        link.target = '_top';
      }
    };
    doc.addEventListener('click', navigate);
    this.cleanup = () => doc.removeEventListener('click', navigate);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cleanup?.();
  }
}
