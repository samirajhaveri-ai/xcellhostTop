import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

/** Renders a supplied cart inside the standard XcellHost site header and footer. */
@Component({
  selector: 'xh-supplied-cart-page',
  standalone: true,
  template: `
    <main class="supplied-cart-shell" [attr.aria-label]="cartLabel + ' cart'">
      <iframe
        #cartFrame
        [src]="cartUrl"
        [title]="cartLabel + ' cart'"
        (load)="onLoad()"
      ></iframe>
    </main>
  `,
  styles: [`
    :host { display: block; width: 100%; min-width: 0; }
    .supplied-cart-shell {
      display: block;
      width: 100%;
      min-width: 0;
      overflow: clip;
      overflow-anchor: none;
    }
    iframe { display: block; width: 100%; min-width: 0; height: 1100px; border: 0; }
    iframe.external-checkout {
      --checkout-gutter: clamp(12px, 2vw, 24px);
      box-sizing: border-box;
      width: min(90rem, calc(100% - 2 * var(--checkout-gutter)));
      height: max(16rem, calc(100dvh - var(--checkout-top, 0px) - var(--checkout-gutter)));
      margin: var(--checkout-gutter) auto;
    }
  `],
})
export class SuppliedCartPage implements OnDestroy {
  @ViewChild('cartFrame') private cartFrame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  readonly cartLabel = String(this.route.snapshot.data['cartLabel'] || 'Product');
  readonly cartUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.buildCartUrl(),
  );

  private buildCartUrl(): string {
    const params = new URLSearchParams();
    for (const key of this.route.snapshot.queryParamMap.keys) {
      for (const value of this.route.snapshot.queryParamMap.getAll(key)) params.append(key, value);
    }
    const asset = String(this.route.snapshot.data['cartAsset'] || '');
    const product = params.get('product');
    const term = Math.max(1, Number.parseInt(params.get('term') || '1', 10) || 1);

    // The legacy catalogue uses short product IDs, while the supplied carts
    // select products by their Zoho plan code. Preserve the chosen product
    // when the old catalogue opens the new website-shell checkout route.
    if (!params.has('plan') && product && asset === 'cart-digicert-ssl-certificates.html') {
      params.set('plan', `DCERT-${product.toUpperCase()}-${term}Y`);
    }
    if (!params.has('plan') && product && asset === 'cart-sectigo-ssl-certificates.html') {
      const productCodes: Record<string, string> = {
        'ev-ssl': 'EV-SSL',
        'ov-multi-domain': 'OV-MULTI-DOMAIN',
        'ev-multi-domain': 'EV-MULTI-DOMAIN',
        'code-signing': 'CODE-SIGNING',
        ssl: 'SSL',
        'ssl-wildcard': 'SSL-WILDCARD',
        'acme-dv': 'ACME-DV',
        'dv-multi-domain': 'DV-MULTI-DOMAIN',
        'ov-multi-wildcard': 'OV-MULTI-WILDCARD',
        'dv-multi-wildcard': 'DV-MULTI-WILDCARD',
        'ev-code-signing': 'EV-CODE-SIGNING',
        'ov-ssl': 'OV-SSL',
        'ov-wildcard': 'OV-WILDCARD',
        'positive-acme': 'POSITIVE-ACME',
      };
      const code = productCodes[product];
      if (code) params.set('plan', `SECT-${code}-${term}Y`);
    }
    return `/assets/${asset}${params.size ? `?${params.toString()}` : ''}`;
  }

  onLoad(): void {
    this.observer?.disconnect();
    const frame = this.cartFrame?.nativeElement;
    if (!frame) return;

    let cartDocument: Document | null = null;
    try {
      cartDocument = frame.contentDocument;
    } catch {
      // Zoho Billing is cross-origin, so its document cannot be inspected.
    }

    const body = cartDocument?.body;
    if (!body) {
      this.fitHostedCheckout(frame);
      return;
    }

    frame.classList.remove('external-checkout');
    const content = cartDocument?.querySelector<HTMLElement>('main');
    if (!content) return;

    // A checkout opened from pricing must not inherit the product page's
    // scroll position or start part-way down inside the embedded document.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    frame.contentWindow?.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const resize = () => {
      const contentStyle = frame.contentWindow?.getComputedStyle(content);
      const bottomMargin = Number.parseFloat(contentStyle?.marginBottom || '0') || 0;
      const contentBottom = content.getBoundingClientRect().bottom + (frame.contentWindow?.scrollY || 0);
      const cartHeight = Math.ceil(contentBottom + bottomMargin + 16);
      frame.style.height = `${cartHeight}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(body);
    this.observer.observe(content);
    resize();
  }

  private fitHostedCheckout(frame: HTMLIFrameElement): void {
    frame.classList.add('external-checkout');
    frame.style.removeProperty('height');

    // A fixed payment dialog fills its iframe. Size that viewport from the
    // actual site header so focusing the dialog cannot scroll the header away.
    const fit = () => {
      const checkoutTop = Math.ceil(frame.getBoundingClientRect().top + window.scrollY);
      frame.style.setProperty('--checkout-top', `${checkoutTop}px`);
    };
    fit();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    this.observer = new ResizeObserver(fit);
    const headerSections = frame.ownerDocument.querySelectorAll(
      'xh-utility-bar > .utility, xh-promo-bar > .promo, xh-header > header',
    );
    for (const section of headerSections) this.observer.observe(section);
    // Changes to the frame width can also change its responsive gutter.
    if (frame.parentElement) this.observer.observe(frame.parentElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
