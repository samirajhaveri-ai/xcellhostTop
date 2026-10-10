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
    | 'genai'
    | 'cybird'
    | 'cdr-smb'
    | 'smb-desktop'
    | 'dpdpa-launch'
    | 'dpdpa-growth'
    | 'dpdpa-enterprise';
  private readonly smbDesktopPlan = this.readSmbDesktopPlan();
  private readonly smbDesktopTerm = this.readSmbDesktopTerm();
  readonly productLabel =
    this.checkoutProduct === 'rmm'
      ? 'RMM'
      : this.checkoutProduct === 'genai'
        ? 'Acronis GenAI Protection Enforce'
      : this.checkoutProduct === 'dpdpa-launch'
        ? 'DPDP Compliance for SMB Launch'
      : this.checkoutProduct === 'dpdpa-growth'
        ? 'DPDP Compliance for SMB Growth'
      : this.checkoutProduct === 'dpdpa-enterprise'
        ? 'DPDP Compliance for SMB Enterprise Enquiry'
      : this.checkoutProduct === 'cybird'
        ? 'Cybird SMB Cyber Security Appliance'
        : this.checkoutProduct === 'cdr-smb'
          ? 'Acronis Cloud Disaster Recovery SMB'
        : this.checkoutProduct === 'smb-desktop'
          ? `SMB Cloud Desktop ${this.titleCase(this.smbDesktopPlan)}`
        : 'EDR';
  private readonly checkoutFile =
    this.checkoutProduct === 'rmm'
      ? 'xcellhost-rmm-checkout.html'
      : this.checkoutProduct === 'genai'
        ? 'xcellhost-acronis-genai-protection-enforce-checkout.html'
      : this.checkoutProduct === 'dpdpa-launch'
        ? 'dpdpa-smb/xcellhost-dpdp-smb-launch-checkout.html'
      : this.checkoutProduct === 'dpdpa-growth'
        ? 'dpdpa-smb/xcellhost-dpdp-smb-growth-checkout.html'
      : this.checkoutProduct === 'dpdpa-enterprise'
        ? 'dpdpa-smb/xcellhost-dpdp-smb-enterprise-enquiry.html'
      : this.checkoutProduct === 'cybird'
        ? 'xcellhost-cybird-checkout.html'
        : this.checkoutProduct === 'cdr-smb'
          ? 'xcellhost-acronis-cloud-disaster-recovery-smb-checkout.html'
        : this.checkoutProduct === 'smb-desktop'
          ? `smb-cloud-desktop-checkout/xcellhost-smb-cloud-desktop-${this.smbDesktopPlan}-${this.smbDesktopTerm}-checkout.html`
        : 'xcellhost-checkout.html';
  private readonly checkoutParams = new URLSearchParams(
    this.checkoutProduct === 'rmm'
      ? {
          term: this.route.snapshot.queryParamMap.get('term') || '1y',
          quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
        }
      : this.checkoutProduct === 'genai'
        ? { quantity: this.route.snapshot.queryParamMap.get('quantity') || '1' }
      : this.checkoutProduct === 'edr'
        ? {
            product: 'acronis-edr',
            billing: this.route.snapshot.queryParamMap.get('billing') || '1-year',
            quantity: this.route.snapshot.queryParamMap.get('quantity') || '1',
          }
        : this.checkoutProduct === 'cdr-smb'
          ? { qty: this.route.snapshot.queryParamMap.get('qty') || '1' }
        : this.checkoutProduct === 'smb-desktop'
          ? { quantity: this.route.snapshot.queryParamMap.get('quantity') || '1' }
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

    if (
      this.checkoutProduct === 'smb-desktop' ||
      this.checkoutProduct === 'genai' ||
      this.checkoutProduct === 'cdr-smb' ||
      this.checkoutProduct.startsWith('dpdpa-')
    ) {
      // The website shell already supplies the XcellHost header and footer.
      // Hide the standalone file chrome while retaining its checkout steps and payment URL.
      const embeddedStyles = checkoutDocument.createElement('style');
      embeddedStyles.textContent = '.nav,.foot{display:none!important}';
      checkoutDocument.head.appendChild(embeddedStyles);
    }

    if (this.checkoutProduct === 'smb-desktop') {
      this.applySmbDesktopPricing(checkoutDocument);
      this.applySmbDesktopThreeColumnLayout(checkoutDocument);
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

  private applySmbDesktopPricing(checkoutDocument: Document, selectedQuantity?: number): void {
    const maximumUsers = {
      starter: 5,
      business: 10,
      professional: 20,
      enterprise: 50,
    }[this.smbDesktopPlan];
    const requestedQuantity = selectedQuantity ?? Number(this.route.snapshot.queryParamMap.get('quantity'));
    const quantity = Number.isFinite(requestedQuantity)
      ? Math.min(maximumUsers, Math.max(1, Math.trunc(requestedQuantity)))
      : 1;
    const unitPrice = {
      monthly: 999,
      '3-months': 2_997,
      '6-months': 5_994,
      '1-year': 11_988,
    }[this.smbDesktopTerm];
    const subtotal = unitPrice * quantity;
    const tax = subtotal * 0.09;
    const total = subtotal + tax * 2;

    checkoutDocument.querySelectorAll<HTMLElement>('.ps-price .amt').forEach((amount) => {
      amount.textContent = this.formatInr(subtotal);
    });

    checkoutDocument.querySelectorAll<HTMLElement>('.ps-users').forEach((users) => {
      users.textContent = `${quantity} ${quantity === 1 ? 'USER' : 'USERS'} SELECTED`;
    });

    const term = checkoutDocument.querySelector<HTMLElement>('.sum-prod .term');
    if (term) {
      const termLabel = {
        monthly: 'Monthly',
        '3-months': '3 Months',
        '6-months': '6 Months',
        '1-year': '1 Year',
      }[this.smbDesktopTerm];
      term.textContent = `${termLabel} · ${quantity} ${quantity === 1 ? 'User' : 'Users'}`;
    }

    const summaryAmounts = checkoutDocument.querySelectorAll<HTMLElement>('.summary .pline .amt');
    const calculatedAmounts = [subtotal, tax, tax, total];
    summaryAmounts.forEach((amount, index) => {
      const value = calculatedAmounts[index];
      if (value !== undefined) amount.textContent = this.formatInr(value, index > 0);
    });

    const taxNote = checkoutDocument.querySelector<HTMLElement>('.tax-note');
    if (taxNote) {
      taxNote.textContent = `Taxes shown are an estimate for ${quantity} selected ${quantity === 1 ? 'user' : 'users'} (CGST 9% + SGST 9%). There is no hardware or setup fee. Final billing and payment are completed securely on Zoho Billing.`;
    }

    this.applySmbDesktopQuantityControl(checkoutDocument, quantity, maximumUsers);
  }

  private applySmbDesktopQuantityControl(
    checkoutDocument: Document,
    quantity: number,
    maximumUsers: number,
  ): void {
    const planHeader = checkoutDocument.querySelector<HTMLElement>('#cardReview .ps-top');
    if (!planHeader) return;

    let control = planHeader.querySelector<HTMLElement>('.qty-control');
    if (!control) {
      control = checkoutDocument.createElement('div');
      control.className = 'qty-control';
      control.setAttribute('aria-label', 'Select number of users');

      const decrease = checkoutDocument.createElement('button');
      decrease.type = 'button';
      decrease.className = 'qty-btn qty-minus';
      decrease.setAttribute('aria-label', 'Remove one user');
      decrease.textContent = '−';

      const value = checkoutDocument.createElement('span');
      value.className = 'qty-value';
      value.setAttribute('aria-live', 'polite');

      const increase = checkoutDocument.createElement('button');
      increase.type = 'button';
      increase.className = 'qty-btn qty-plus';
      increase.setAttribute('aria-label', 'Add one user');
      increase.textContent = '+';

      decrease.addEventListener('click', () => {
        this.applySmbDesktopPricing(checkoutDocument, Number(control?.dataset['quantity']) - 1);
      });
      increase.addEventListener('click', () => {
        this.applySmbDesktopPricing(checkoutDocument, Number(control?.dataset['quantity']) + 1);
      });
      control.append(decrease, value, increase);
      planHeader.appendChild(control);
    }

    control.dataset['quantity'] = `${quantity}`;
    const value = control.querySelector<HTMLElement>('.qty-value');
    if (value) value.textContent = `${quantity}`;
    const decrease = control.querySelector<HTMLButtonElement>('.qty-minus');
    const increase = control.querySelector<HTMLButtonElement>('.qty-plus');
    if (decrease) decrease.disabled = quantity <= 1;
    if (increase) increase.disabled = quantity >= maximumUsers;
  }

  private applySmbDesktopThreeColumnLayout(checkoutDocument: Document): void {
    const layout = checkoutDocument.querySelector<HTMLElement>('.layout');
    const reviewCard = checkoutDocument.querySelector<HTMLElement>('#cardReview');
    if (!layout || !reviewCard || layout.querySelector('.col-benefits')) return;

    const sectionForHeading = (label: string): HTMLElement | null => {
      const heading = Array.from(reviewCard.querySelectorAll<HTMLElement>('.card-h')).find(
        (item) => item.textContent?.trim() === label,
      );
      return heading?.parentElement ?? null;
    };
    const whySection = sectionForHeading('Why this plan');
    const includedSection = sectionForHeading("What's included");
    if (!whySection || !includedSection) return;

    const benefitsColumn = checkoutDocument.createElement('aside');
    benefitsColumn.className = 'col-benefits';
    benefitsColumn.setAttribute('aria-label', 'Plan benefits');
    const benefitsCard = checkoutDocument.createElement('div');
    benefitsCard.className = 'card benefits-card';
    benefitsCard.append(whySection, includedSection);
    benefitsColumn.appendChild(benefitsCard);
    layout.appendChild(benefitsColumn);

    const layoutStyles = checkoutDocument.createElement('style');
    layoutStyles.textContent = `
      .stepper { max-width: 1680px !important; }
      .layout {
        width: 100%;
        max-width: 1680px !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        align-items: stretch !important;
      }
      .col-left, .col-right, .col-benefits { min-width: 0; height: 100%; }
      .col-left > .card:not([style*="display: none"]):not([style*="display:none"]),
      .col-right .summary,
      .col-benefits .benefits-card {
        position: static;
        height: 100%;
        margin-bottom: 0;
      }
      .col-benefits .why { margin: 0; }
      #cardReview .ps-top { position: relative; min-height: 148px; padding-right: 166px; }
      .qty-control {
        position: absolute;
        right: 20px;
        bottom: 18px;
        display: inline-grid;
        grid-template-columns: 34px 44px 34px;
        align-items: center;
        border: 1px solid #cbdcf8;
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0 5px 14px rgba(4, 30, 66, .08);
      }
      .qty-btn {
        width: 34px;
        height: 34px;
        border: 0;
        background: #e8f0ff;
        color: #0066ff;
        font: 800 20px/1 'DM Sans', sans-serif;
        cursor: pointer;
      }
      .qty-btn:hover:not(:disabled) { background: #d8e7ff; }
      .qty-btn:disabled { cursor: not-allowed; color: #9aabc4; background: #f2f5f9; }
      .qty-value { text-align: center; font-size: .9rem; font-weight: 800; color: #041e42; }
      @media (max-width: 1280px) {
        .layout {
          max-width: 1080px !important;
          grid-template-columns: minmax(0, 1fr) 340px !important;
        }
        .col-benefits { grid-column: 1 / -1; }
        .col-left, .col-right, .col-benefits,
        .col-left > .card:not([style*="display: none"]):not([style*="display:none"]),
        .col-right .summary,
        .col-benefits .benefits-card { height: auto; }
      }
      @media (max-width: 900px) {
        .layout { max-width: 760px !important; grid-template-columns: 1fr !important; }
        .col-right, .col-benefits { grid-column: auto; }
      }
      @media (max-width: 560px) {
        #cardReview .ps-top { padding-right: 20px; }
        .qty-control { position: static; margin-top: 12px; }
      }
    `;
    checkoutDocument.head.appendChild(layoutStyles);
  }

  private formatInr(amount: number, showPaise = false): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: showPaise ? 2 : 0,
      maximumFractionDigits: showPaise ? 2 : 0,
    }).format(amount);
  }

  private titleCase(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
