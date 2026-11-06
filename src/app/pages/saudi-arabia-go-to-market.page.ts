import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-saudi-arabia-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="saudi-arabia-go-to-market-strategy" />
    <xh-service-default-sections name="Saudi Arabia Go-to-Market Strategy" pageSlug="saudi-arabia-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaudiArabiaGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'Saudi Arabia Go-to-Market Strategy | XcellHost',
      'Explore the Saudi Arabia strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/saudi-arabia-go-to-market-strategy',
    );
  }
}
