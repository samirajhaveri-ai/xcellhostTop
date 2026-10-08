import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';

/** Keep the checkout's styles isolated while sharing the normal website shell. */
@Component({
  selector: 'xh-checkout-page',
  standalone: true,
  template: `
    <main [attr.aria-label]="productLabel + ' checkout'">
      <iframe #checkout [src]="checkoutUrl" [title]="'Complete your ' + productLabel + ' order'"
        (load)="onLoad()"></iframe>
    </main>
  `,
  styles: [`
    :host, main { display: block; }
    iframe { display: block; width: 100%; height: 1100px; border: 0; }
  `],
})
export class CheckoutPage implements OnDestroy {
  @ViewChild('checkout') private checkout?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly checkoutProduct = this.route.snapshot.data['checkoutProduct'] as
    | 'edr'
    | 'rmm'
    | 'cybird'
    | 'smb-desktop';
  private readonly smbDesktopPlan = this.readSmbDesktopPlan();
  private readonly smbDesktopTerm = this.readSmbDesktopTerm();
  readonly productLabel =
    this.checkoutProduct === 'rmm'
      ? 'RMM'
      : this.checkoutProduct === 'cybird'
        ? 'Cybird SMB Cyber Security Appliance'
        : this.checkoutProduct === 'smb-desktop'
          ? `SMB Cloud Desktop ${this.titleCase(this.smbDesktopPlan)}`
        : 'EDR';
  private readonly checkoutFile =
    this.checkoutProduct === 'rmm'
      ? 'xcellhost-rmm-checkout.html'
      : this.checkoutProduct === 'cybird'
        ? 'xcellhost-cybird-checkout.html'
        : this.checkoutProduct === 'smb-desktop'
          ? `smb-cloud-desktop-checkout/xcellhost-smb-cloud-desktop-${this.smbDesktopPlan}-${this.smbDesktopTerm}-checkout.html`
        : 'xcellhost-checkout.html';
  private readonly checkoutParams = new URLSearchParams(
    this.checkoutProduct === 'rmm'
      ? {
          term: this.route.snapshot.queryParamMap.get('term') || '1y',
          quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
        }
      : this.checkoutProduct === 'edr'
        ? {
            product: 'acronis-edr',
            billing: this.route.snapshot.queryParamMap.get('billing') || '1-year',
            quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
          }
        : {},
  );
  readonly checkoutUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `/assets/${this.checkoutFile}${this.checkoutParams.size ? `?${this.checkoutParams}` : ''}`,
  );

  constructor() {
    inject(Title).setTitle(`Complete Your ${this.productLabel} Order | XcellHost Cloud Services`);
  }

  onLoad(): void {
    this.observer?.disconnect();
    const frame = this.checkout?.nativeElement;
    const checkoutDocument = frame?.contentDocument;
    const body = checkoutDocument?.body;
    if (!frame || !checkoutDocument || !body) return;

    if (this.checkoutProduct === 'smb-desktop') {
      // The website shell already supplies the XcellHost header and footer.
      // Hide the standalone file chrome while retaining its checkout steps and payment URL.
      const embeddedStyles = checkoutDocument.createElement('style');
      embeddedStyles.textContent = '.nav,.foot{display:none!important}';
      checkoutDocument.head.appendChild(embeddedStyles);
    }

    // Measure natural content height so hidden checkout steps can expand and shrink.
    const resize = () => {
      frame.style.height = `${Math.ceil(body.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(body);
    void body.ownerDocument.fonts.ready.then(resize);
    resize();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private readSmbDesktopPlan(): 'starter' | 'business' | 'professional' | 'enterprise' {
    const plan = this.route.snapshot.queryParamMap.get('plan');
    return plan === 'business' || plan === 'professional' || plan === 'enterprise' ? plan : 'starter';
  }

  private readSmbDesktopTerm(): 'monthly' | '3-months' | '6-months' | '1-year' {
    switch (this.route.snapshot.queryParamMap.get('term')) {
      case '3m': return '3-months';
      case '6m': return '6-months';
      case '1y': return '1-year';
      default: return 'monthly';
    }
  }

  private titleCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
