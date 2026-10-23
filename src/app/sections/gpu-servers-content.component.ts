import { Component, ElementRef, EventEmitter, HostListener, inject, NgZone, OnDestroy, Output, ViewChild } from '@angular/core';
import { useScrollingSectionNavigation } from './section-navigation-flow';

@Component({
  selector: 'xh-gpu-servers-content',
  standalone: true,
  template: `<iframe #contentFrame
    class="gpu-servers-content-frame"
    src="/assets/animations/gpu-servers-supplied.html"
    title="GPU Servers overview, pricing, calculator and operating system images"
    scrolling="no"
    (load)="syncHeight()"
    [style.height.px]="frameHeight"
  ></iframe>`,
  styles: [`:host{display:block;width:100vw;margin-left:calc(50% - 50vw)}.gpu-servers-content-frame{display:block;width:100%;border:0;overflow:hidden;background:#fff}`],
})
export class GpuServersContentComponent implements OnDestroy {
  private readonly zone = inject(NgZone);
  @ViewChild('contentFrame') frame?: ElementRef<HTMLIFrameElement>;
  @Output() callbackRequest = new EventEmitter<string>();
  frameHeight = 7600;
  private contentObserver?: ResizeObserver;
  private removeCallbackListener?: () => void;

  syncHeight(): void {
    const document = this.frame?.nativeElement.contentDocument;
    const frameWindow = document?.defaultView;
    const content = document?.querySelector('#ppage');
    if (!document || !frameWindow || !content) return;
    this.removeCallbackListener?.();
    // Capture on the frame window before the legacy document handler stops
    // propagation and opens a modal halfway down this tall embedded document.
    const onCallbackClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const callback = target?.closest<HTMLElement>('[data-open-callback]');
      if (!callback) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const request = callback.textContent?.trim().replace(/\s+/g, ' ') || "Let's Talk";
      this.zone.run(() => this.callbackRequest.emit(request));
    };
    frameWindow.addEventListener('click', onCallbackClick, true);
    this.removeCallbackListener = () => frameWindow.removeEventListener('click', onCallbackClick, true);
    useScrollingSectionNavigation(document);

    const update = () => {
      const nextHeight = Math.ceil(content.getBoundingClientRect().bottom) + 4;
      if (nextHeight !== this.frameHeight) this.zone.run(() => { this.frameHeight = nextHeight; });
    };

    this.contentObserver?.disconnect();
    this.contentObserver = new ResizeObserver(update);
    this.contentObserver.observe(content);
    update();
    requestAnimationFrame(update);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.syncHeight();
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (event.source !== this.frame?.nativeElement.contentWindow || !event.data || typeof event.data !== 'object') return;
    if (event.data.type === 'gpu-servers-callback' && typeof event.data.request === 'string') {
      this.callbackRequest.emit(event.data.request);
    }
  }

  ngOnDestroy(): void {
    this.contentObserver?.disconnect();
    this.removeCallbackListener?.();
  }
}
