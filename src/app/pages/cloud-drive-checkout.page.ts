import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'xh-cloud-drive-checkout-page',
  standalone: true,
  template: `
    <main class="checkout-shell">
      <iframe
        src="/assets/xcellhost-xcelldrive-checkout.html"
        title="XcellDrive checkout"
        [style.height.px]="checkoutHeight()"
      ></iframe>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      background: #f6f9fc;
    }

    .checkout-shell {
      width: 100%;
      min-height: 800px;
    }

    iframe {
      display: block;
      width: 100%;
      min-height: 800px;
      border: 0;
      background: #f6f9fc;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudDriveCheckoutPage {
  readonly checkoutHeight = signal(1200);

  @HostListener('window:message', ['$event'])
  onCheckoutMessage(event: MessageEvent): void {
    if (event.origin !== window.location.origin) return;
    const message = event.data as { type?: string; height?: number } | null;
    if (
      message?.type !== 'xcellhost-checkout-height' ||
      typeof message.height !== 'number' ||
      !Number.isFinite(message.height)
    ) return;
    this.checkoutHeight.set(Math.max(800, Math.ceil(message.height)));
  }
}
