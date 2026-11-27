import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-fiji-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="fiji-go-to-market-strategy" />
    <xh-service-default-sections name="Fiji Go-to-Market Strategy" pageSlug="fiji-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FijiGoToMarketPage {
  constructor() {
    inject(SeoService).set('Fiji Go-to-Market Strategy | XcellHost',
      'Explore the Fiji strategy briefing, with source references, screening considerations, sector analysis and an illustrative revenue model.',
      '/fiji-go-to-market-strategy');
  }
}
