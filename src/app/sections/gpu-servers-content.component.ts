import { Component, ElementRef, EventEmitter, HostListener, inject, NgZone, OnDestroy, Output, ViewChild } from '@angular/core';

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

  syncHeight(): void {
    const document = this.frame?.nativeElement.contentDocument;
    const content = document?.querySelector('#ppage');
    if (!document || !content) return;

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
  }
}
