import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-global-infrastructure-globe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iframe #contentFrame
      class="global-infrastructure-frame"
      src="/assets/animations/xcellhost-globe.html"
      title="XcellHost global infrastructure locations"
      scrolling="no"
      loading="lazy"
      [style.height.px]="frameHeight"
    ></iframe>
  `,
  styles: [`
    :host {
      display: block;
      width: 100vw;
      max-width: none;
      margin: 64px 0 56px calc(50% - 50vw);
      background: #f5f5f5;
    }

    .global-infrastructure-frame {
      display: block;
      width: 100%;
      border: 0;
      overflow: hidden;
      background: #f5f5f5;
    }
  `],
})
export class GlobalInfrastructureGlobeComponent {
  @ViewChild('contentFrame') frame?: ElementRef<HTMLIFrameElement>;
  frameHeight = 760;

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (
      event.origin !== window.location.origin ||
      event.source !== this.frame?.nativeElement.contentWindow ||
      !event.data ||
      typeof event.data !== 'object' ||
      event.data.type !== 'xcellhost-globe-height' ||
      !Number.isFinite(event.data.height)
    ) return;

    this.frameHeight = Math.max(600, Math.ceil(event.data.height));
  }
}
