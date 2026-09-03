import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-promo-offers-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './promo-offers.page.html',
  styleUrl: './promo-offers.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoOffersPage {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.set(
      'Promo & Offers - XcellHost',
      'The XcellHost promos and offers page is currently under construction.',
      '/promo-offers/',
    );
  }
}
