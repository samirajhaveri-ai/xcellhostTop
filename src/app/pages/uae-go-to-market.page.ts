import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-uae-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="uae-go-to-market-strategy" />
    <xh-service-default-sections name="UAE Go-to-Market Strategy" pageSlug="uae-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UAEGoToMarketPage {
  constructor() {
    inject(SeoService).set('UAE Go-to-Market Strategy | XcellHost',
      'Explore the UAE strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/uae-go-to-market-strategy');
  }
}
