import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-germany-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="germany-go-to-market-strategy" />
    <xh-service-default-sections name="Germany Go-to-Market Strategy" pageSlug="germany-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GermanyGoToMarketPage {
  constructor() {
    inject(SeoService).set('Germany Go-to-Market Strategy | XcellHost',
      'Explore the Germany strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/germany-go-to-market-strategy');
  }
}
