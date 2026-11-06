import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-india-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="india-go-to-market-strategy" />
    <xh-service-default-sections name="India Go-to-Market Strategy" pageSlug="india-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndiaGoToMarketPage {
  constructor() {
    inject(SeoService).set('India Go-to-Market Strategy | XcellHost',
      'Explore the India strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/india-go-to-market-strategy');
  }
}
