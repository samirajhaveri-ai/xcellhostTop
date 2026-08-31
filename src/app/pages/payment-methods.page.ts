import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-payment-methods-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './payment-methods.page.html',
  styleUrl: './payment-methods.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentMethodsPage {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.set(
      'Payment Methods - XcellHost',
      'View secure online and offline payment options accepted by XcellHost, including bank transfer, cheque, cash, credit cards and debit cards.',
      '/payment-methods/',
    );
  }
}
