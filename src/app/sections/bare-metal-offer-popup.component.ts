import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  afterNextRender,
  signal,
} from '@angular/core';

@Component({
  selector: 'xh-bare-metal-offer-popup',
  standalone: true,
  template: `
    @if (visible()) {
      <iframe
        class="bare-metal-offer-frame"
        src="/bare-metal-offer-popup.html"
        title="Bare Metal Server Diwali offer"
        (load)="scheduleDismiss()"
      ></iframe>
    }
  `,
  styles: [`
    :host { display: contents; }
    .bare-metal-offer-frame {
      position: fixed;
      inset: 0;
      z-index: 2147482999;
      width: 100%;
      height: 100dvh;
      border: 0;
      background: transparent;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BareMetalOfferPopupComponent implements OnDestroy {
  // Keep the iframe out of the prerendered HTML. Otherwise the browser can load
  // it once before hydration and Angular can load it again while hydrating.
  readonly visible = signal(false);
  private dismissTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    afterNextRender(() => this.visible.set(true));
  }

  scheduleDismiss(): void {
    if (this.dismissTimer) clearTimeout(this.dismissTimer);
    this.dismissTimer = setTimeout(() => this.dismiss(), 12_000);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    if (
      event.origin === window.location.origin &&
      event.data?.type === 'xh-baremetal-popup-close'
    ) {
      this.dismiss();
    }
  }

  ngOnDestroy(): void {
    if (this.dismissTimer) clearTimeout(this.dismissTimer);
  }

  private dismiss(): void {
    this.visible.set(false);
    if (this.dismissTimer) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = undefined;
    }
  }
}
