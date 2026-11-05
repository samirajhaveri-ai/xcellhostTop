import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-tanzania-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="tanzania-go-to-market-strategy" />
    <xh-service-default-sections name="Tanzania Go-to-Market Strategy" pageSlug="tanzania-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TanzaniaGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'Tanzania Go-to-Market Strategy | XcellHost',
      'Explore the Tanzania strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/tanzania-go-to-market-strategy',
    );
  }
}
