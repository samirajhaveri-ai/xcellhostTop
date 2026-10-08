import { ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone, OnDestroy, ViewChild, inject, output, signal } from '@angular/core';

@Component({
  selector: 'xh-cpu-optimized-content',
  standalone: true,
  template: `<iframe #contentFrame
    src="/assets/animations/cpu-optimized-content.html"
    title="CPU Optimized overview, interactive plans, features and specifications"
    scrolling="no"
    (load)="syncContent()"
    [style.height.px]="frameHeight()"
  ></iframe>`,
  styles: [`:host{display:block;width:100vw;margin-left:calc(50% - 50vw)}iframe{display:block;width:100%;border:0;background:#fff}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuOptimizedContentComponent implements OnDestroy {
  readonly planRequest = output<string>();
  readonly frameHeight = signal(3000);
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
    if (event.data?.type === 'cpu-optimized-plan' && typeof event.data.plan === 'string') this.planRequest.emit(event.data.plan);
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
}
