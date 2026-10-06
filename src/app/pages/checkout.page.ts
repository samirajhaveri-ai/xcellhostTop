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
  private readonly isRmm = this.route.snapshot.data['checkoutProduct'] === 'rmm';
  readonly productLabel = this.isRmm ? 'RMM' : 'EDR';
  readonly checkoutUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `/assets/${this.isRmm ? 'xcellhost-rmm-checkout.html' : 'xcellhost-checkout.html'}?${new URLSearchParams(this.isRmm ? {
      term: this.route.snapshot.queryParamMap.get('term') || '1y',
      quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
    } : {
      product: 'acronis-edr',
      billing: this.route.snapshot.queryParamMap.get('billing') || '1-year',
      quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
    })}`,
  );

  constructor() {
    inject(Title).setTitle(`Complete Your ${this.productLabel} Order | XcellHost Cloud Services`);
  }

  onLoad(): void {
    this.observer?.disconnect();
    const frame = this.checkout?.nativeElement;
    const body = frame?.contentDocument?.body;
    if (!frame || !body) return;

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
}
