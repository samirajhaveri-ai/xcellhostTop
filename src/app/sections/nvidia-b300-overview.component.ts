import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, output, signal,
} from '@angular/core';

/** Requested B300 source sections retain their isolated styles and interactive runtime. */
@Component({
  selector: 'xh-nvidia-b300-overview',
  standalone: true,
  template: `<iframe #contentFrame
    src="/assets/animations/nvidia-b300-overview.html"
    title="NVIDIA B300 overview, pricing, specifications, software stack and deployment options"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaB300OverviewComponent implements OnDestroy {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly height = signal(3200);
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
    if (data?.type === 'b300-enquiry' && typeof data.configuration === 'string') {
      this.quoteRequested.emit({ event: new Event('click'), configuration: data.configuration });
    } else if (data?.type === 'b300-scroll' && data.target === 'qx') {
      const target = frame?.contentDocument?.getElementById('qx');
      if (frame && target) window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110,
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
