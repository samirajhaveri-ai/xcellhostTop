import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-indonesia-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="indonesia-go-to-market-strategy" />
    <xh-service-default-sections name="Indonesia Go-to-Market Strategy" pageSlug="indonesia-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndonesiaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Indonesia Go-to-Market Strategy | XcellHost',
      'Explore the Indonesia strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/indonesia-go-to-market-strategy');
  }
}
