import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, computed, inject, input, output, signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/** Requested B300 source sections retain their isolated styles and interactive runtime. */
@Component({
  selector: 'xh-nvidia-b300-overview',
  standalone: true,
  template: `<iframe #contentFrame
    [src]="frameSource()"
    title="NVIDIA B300 overview, pricing, specifications, software stack and deployment options"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaB300OverviewComponent implements OnDestroy {
  readonly hero = input(false);
  readonly details = input(false);
  private readonly sanitizer = inject(DomSanitizer);
  readonly frameSource = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(
    this.hero() ? '/assets/animations/nvidia-b300-banner.html' : this.details() ? '/assets/animations/nvidia-b300-details.html' : '/assets/animations/nvidia-b300-overview.html'));
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
    } else if (data?.type === 'b300-scroll' && typeof data.target === 'string') {
      const targetFrame = Array.from(document.querySelectorAll<HTMLIFrameElement>('xh-nvidia-b300-overview iframe'))
        .find(candidate => !!candidate.contentDocument?.getElementById(data.target));
      const target = targetFrame?.contentDocument?.getElementById(data.target);
      if (targetFrame && target) window.scrollTo({
        top: window.scrollY + targetFrame.getBoundingClientRect().top + target.getBoundingClientRect().top - 110,
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
