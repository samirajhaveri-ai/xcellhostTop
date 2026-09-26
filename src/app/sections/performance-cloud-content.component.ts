import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-performance-cloud-content',
  standalone: true,
  template: `<iframe #contentFrame
    class="performance-cloud-content-frame"
    src="/assets/animations/performance-cloud-content.html"
    title="Performance Cloud plans, server configurator and product details"
    sandbox="allow-scripts"
    scrolling="no"
    [style.height.px]="frameHeight"
  ></iframe>`,
  styles: [`:host{display:block}.performance-cloud-content-frame{display:block;width:100%;border:0;overflow:hidden;background:#fff}`],
})
export class PerformanceCloudContentComponent {
  @ViewChild('contentFrame') frame?: ElementRef<HTMLIFrameElement>;
  @Output() planRequest = new EventEmitter<string>();
  frameHeight = 1400;

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (event.source !== this.frame?.nativeElement.contentWindow || !event.data || typeof event.data !== 'object') return;
    if (event.data.type === 'performance-cloud-height' && typeof event.data.height === 'number') {
      this.frameHeight = Math.min(20000, Math.max(400, Math.ceil(event.data.height) + 2));
    }
    if (event.data.type === 'performance-cloud-plan' && typeof event.data.plan === 'string') {
      this.planRequest.emit(event.data.plan);
    }
  }
}
