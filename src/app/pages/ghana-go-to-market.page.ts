import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-ghana-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="ghana-go-to-market-strategy" />
    <xh-service-default-sections name="Ghana Go-to-Market Strategy" pageSlug="ghana-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GhanaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Ghana Go-to-Market Strategy | XcellHost',
      'Explore the Ghana strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/ghana-go-to-market-strategy');
  }
}
