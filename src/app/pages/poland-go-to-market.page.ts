import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-poland-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="poland-go-to-market-strategy" />
    <xh-service-default-sections name="Poland Go-to-Market Strategy" pageSlug="poland-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolandGoToMarketPage {
  constructor() {
    inject(SeoService).set('Poland Go-to-Market Strategy | XcellHost',
      'Explore the Poland strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/poland-go-to-market-strategy');
  }
}
