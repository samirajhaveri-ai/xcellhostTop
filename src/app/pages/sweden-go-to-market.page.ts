import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-sweden-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="sweden-go-to-market-strategy" />
    <xh-service-default-sections name="Sweden Go-to-Market Strategy" pageSlug="sweden-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwedenGoToMarketPage {
  constructor() {
    inject(SeoService).set('Sweden Go-to-Market Strategy | XcellHost',
      'Explore the Sweden strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/sweden-go-to-market-strategy');
  }
}
