import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-hungary-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="hungary-go-to-market-strategy" />
    <xh-service-default-sections name="Hungary Go-to-Market Strategy" pageSlug="hungary-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HungaryGoToMarketPage {
  constructor() {
    inject(SeoService).set('Hungary Go-to-Market Strategy | XcellHost',
      'Explore the Hungary strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/hungary-go-to-market-strategy');
  }
}
