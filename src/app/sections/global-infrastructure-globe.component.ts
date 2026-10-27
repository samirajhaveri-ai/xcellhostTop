import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'xh-global-infrastructure-globe',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.global-cloud-style]': "variant === 'global-cloud'" },
  template: `
    @if (variant === 'global-cloud') {
      <iframe #contentFrame
        class="global-infrastructure-frame"
        src="/imported-global-cloud.html?mode=locations"
        title="Deploy close to your users: interactive Global Cloud locations"
        scrolling="no"
        loading="lazy"
        (load)="syncHeight()"
        [style.height.px]="frameHeight"
      ></iframe>
    } @else {
      <iframe #contentFrame
        class="global-infrastructure-frame"
        src="/assets/animations/xcellhost-globe.html"
        title="XcellHost global infrastructure locations"
        scrolling="no"
        loading="lazy"
        (load)="syncHeight()"
        [style.height.px]="frameHeight"
      ></iframe>
    }
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
export class GlobalInfrastructureGlobeComponent implements OnDestroy {
  private readonly zone = inject(NgZone);
  @ViewChild('contentFrame') frame?: ElementRef<HTMLIFrameElement>;
  @Input() variant: 'classic' | 'global-cloud' = 'classic';
  frameHeight = 760;
  private contentObserver?: ResizeObserver;

  syncHeight(): void {
    if (this.variant !== 'global-cloud') return;
    const document = this.frame?.nativeElement.contentDocument;
    const content = document?.getElementById('xgl-locations');
    if (!document || !content) return;

    const findLocation = content.querySelector<HTMLAnchorElement>('[data-xgl-cta="find-location"]');
    if (findLocation) {
      findLocation.href = '/global-cloud#latency';
      findLocation.target = '_top';
    }
    const talkToExpert = content.querySelector<HTMLAnchorElement>('[data-xgl-cta="talk-expert"]');
    if (talkToExpert) {
      talkToExpert.href = '/contact';
      talkToExpert.target = '_top';
      talkToExpert.removeAttribute('data-open');
    }

    const update = () => {
      const nextHeight = Math.max(700, Math.ceil(content.getBoundingClientRect().height));
      if (nextHeight !== this.frameHeight) this.zone.run(() => { this.frameHeight = nextHeight; });
    };
    this.contentObserver?.disconnect();
    this.contentObserver = new ResizeObserver(update);
    this.contentObserver.observe(content);
    update();
    requestAnimationFrame(update);
  }

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

  ngOnDestroy(): void {
    this.contentObserver?.disconnect();
  }
}
