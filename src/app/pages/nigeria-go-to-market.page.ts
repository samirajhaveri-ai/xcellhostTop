import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-nigeria-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="nigeria-go-to-market-strategy" />
    <xh-service-default-sections name="Nigeria Go-to-Market Strategy" pageSlug="nigeria-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NigeriaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Nigeria Go-to-Market Strategy | XcellHost',
      'Explore the Nigeria strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/nigeria-go-to-market-strategy');
  }
}
