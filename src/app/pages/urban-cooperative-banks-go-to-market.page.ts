import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-urban-cooperative-banks-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content source="urban-cooperative-banks-go-to-market-strategy" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UrbanCooperativeBanksGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'Urban Co-operative Banks Go-to-Market Strategy | XcellHost',
      'Explore the UCB strategy, bank segments, buying triggers, service recommendations, editable revenue model and partner routes to market.',
      '/urban-cooperative-banks-go-to-market-strategy',
    );
  }
}
