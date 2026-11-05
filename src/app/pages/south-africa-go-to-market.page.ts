import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-south-africa-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="south-africa-go-to-market-strategy" />
    <xh-service-default-sections name="South Africa Go-to-Market Strategy" pageSlug="south-africa-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SouthAfricaGoToMarketPage {
  constructor() {
    inject(SeoService).set('South Africa Go-to-Market Strategy | XcellHost',
      'Explore the South Africa strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/south-africa-go-to-market-strategy');
  }
}
