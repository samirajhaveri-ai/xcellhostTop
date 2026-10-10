import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, output, signal,
} from '@angular/core';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';

/** Requested source sections retain their original layout, controls and animations. */
@Component({
  selector: 'xh-vdpo-content',
  standalone: true,
  template: `<span id="ppPlans" class="pricing-anchor" [style.top.px]="pricingOffset()"></span>
    <span id="ppFeats" class="pricing-anchor" [style.top.px]="onboardingOffset()"></span>
    <span id="ppUses" class="pricing-anchor" [style.top.px]="supportOffset()"></span>
    <span class="announcement" role="status">{{ announcement() }}</span>
    <iframe #contentFrame src="/assets/animations/vdpo-as-a-service-content.html"
    title="vDPO overview, self-check, responsibilities, breach simulation, pricing, onboarding and XcellHost support"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>`,
  styles: [':host{display:block;position:relative;width:100%}iframe{display:block;width:100%;border:0;background:transparent}.pricing-anchor{position:absolute;left:0;scroll-margin-top:110px}.announcement{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VdpoContentComponent implements OnDestroy {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly announcement = signal('');
  readonly height = signal(6400);
  readonly pricingOffset = signal(1000);
  readonly onboardingOffset = signal(0);
  readonly supportOffset = signal(0);
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
      if (this.disposed) return;
      this.zone.run(() => {
        this.height.set(Math.ceil(main.getBoundingClientRect().height) + 2);
        this.pricingOffset.set(doc.getElementById('pricing')?.offsetTop ?? 0);
        this.onboardingOffset.set(doc.getElementById('onboard')?.offsetTop ?? 0);
        this.supportOffset.set(doc.getElementById('why')?.offsetTop ?? 0);
      });
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
    if (data?.type === 'vdpo-announcement' && typeof data.message === 'string') {
      this.announcement.set(data.message);
    } else if (data?.type === 'vdpo-enquiry' && typeof data.configuration === 'string') {
      this.quoteRequested.emit({ event: new Event('click'), configuration: data.configuration });
    } else if (data?.type === 'vdpo-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    } else if (data?.type === 'vdpo-cart') {
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
