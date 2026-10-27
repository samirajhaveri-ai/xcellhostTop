import { ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild, computed, inject, input, output, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';

/** Preserves the supplied design and demo controls within the existing product page. */
@Component({
  selector: 'xh-container-registry-content',
  standalone: true,
  template: `<iframe #contentFrame
    [src]="trustedContentSource()"
    [title]="serviceName() + ' features, security, pricing and integrations'"
    scrolling="no"
    (load)="syncContent()"
    [style.height.px]="frameHeight()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:#fff}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerRegistryContentComponent implements OnDestroy {
  readonly serviceName = input('Container Registry');
  readonly contentSource = input('/assets/animations/container-registry-content.html');
  private readonly sanitizer = inject(DomSanitizer);
  readonly trustedContentSource = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(this.contentSource()));
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly frameHeight = signal(6000);
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
    doc.title = `${this.serviceName()} features, security, pricing and integrations`;
    const resize = () => {
      if (!this.disposed) this.zone.run(() => this.frameHeight.set(Math.ceil(main.getBoundingClientRect().height)));
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    const syncTheme = () => doc.documentElement.setAttribute('data-theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    syncTheme();
    resize();
    void doc.fonts.ready.then(resize);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (event.origin !== window.location.origin || event.source !== this.frame?.nativeElement.contentWindow) return;
    if (event.data?.type === 'container-service-scroll' && event.data.target === 'caas-estimate') {
      const frame = this.frame!.nativeElement;
      const section = frame.contentDocument?.getElementById('caas-estimate');
      if (section) window.scrollTo({ top: Math.max(0, window.scrollY + frame.getBoundingClientRect().top + section.getBoundingClientRect().top - 148), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      return;
    }
    if (event.data?.type === 'container-registry-enquiry' && typeof event.data.configuration === 'string') {
      this.quoteRequested.emit({ event: new Event('click'), configuration: event.data.configuration.replace(/Container Registry/g, this.serviceName()) });
    }
    if (event.data?.type !== 'container-registry-cart') return;
    const item = event.data.item;
    if (!item || typeof item.name !== 'string' || typeof item.sub !== 'string' || typeof item.price !== 'number' || !Number.isFinite(item.price) || item.price < 0) return;
    const suffix = (item.termMonths === 12 || item.sub.includes('billed yearly')) ? '/year · excl. GST' : '/month · excl. GST';
    this.cart.add(`${item.name.replace(/Container Registry/g, this.serviceName())} — ${item.sub}`, `₹${item.price.toLocaleString('en-IN')} ${suffix}`, 1,
      { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ` ${suffix}` });
    this.cart.open();
    this.overlay.open('cart');
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
}
