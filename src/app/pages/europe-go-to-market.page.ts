import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-europe-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="europe-go-to-market-strategy" />
    <xh-service-default-sections name="Europe Go-to-Market Strategy" pageSlug="europe-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EuropeGoToMarketPage {
  constructor() {
    inject(SeoService).set('Europe Go-to-Market Strategy | XcellHost',
      'Explore the Europe strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with regional market insights, sector recommendations and an editable revenue model.',
      '/europe-go-to-market-strategy');
  }
}
