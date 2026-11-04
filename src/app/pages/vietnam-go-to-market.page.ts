import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-vietnam-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="vietnam-go-to-market-strategy" />
    <xh-service-default-sections name="Vietnam Go-to-Market Strategy" pageSlug="vietnam-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VietnamGoToMarketPage {
  constructor() {
    inject(SeoService).set('Vietnam Go-to-Market Strategy | XcellHost',
      'Explore the Vietnam strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/vietnam-go-to-market-strategy');
  }
}
