import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-japan-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="japan-go-to-market-strategy" />
    <xh-service-default-sections name="Japan Go-to-Market Strategy" pageSlug="japan-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JapanGoToMarketPage {
  constructor() {
    inject(SeoService).set('Japan Go-to-Market Strategy | XcellHost',
      'Explore the Japan strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/japan-go-to-market-strategy');
  }
}
