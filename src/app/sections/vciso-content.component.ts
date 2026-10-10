import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, output, signal,
} from '@angular/core';

/** The requested source sections retain their styling and interactive controls. */
@Component({
  selector: 'xh-vciso-content',
  standalone: true,
  template: `<span id="ppPlans" class="pricing-anchor" [style.top.px]="pricingOffset()"></span>
    <iframe #contentFrame src="/assets/animations/vciso-as-a-service-content.html"
      title="vCISO overview, business scenarios, cost comparison, responsibilities, framework readiness and India requirements"
      scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>`,
  styles: [':host{display:block;position:relative;width:100%}iframe{display:block;width:100%;border:0;background:transparent}.pricing-anchor{position:absolute;left:0;scroll-margin-top:110px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcisoContentComponent implements OnDestroy {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly height = signal(4200);
  readonly pricingOffset = signal(1000);
  @ViewChild('contentFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
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
        this.pricingOffset.set(doc.getElementById('cost')?.offsetTop ?? 0);
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
    if (data?.type === 'vciso-enquiry' && typeof data.configuration === 'string') {
      this.quoteRequested.emit({ event: new Event('click'), configuration: data.configuration });
    } else if (data?.type === 'vciso-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 148,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    }
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
}
