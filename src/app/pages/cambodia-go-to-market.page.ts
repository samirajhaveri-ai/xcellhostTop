import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-cambodia-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="cambodia-go-to-market-strategy" />
    <xh-service-default-sections name="Cambodia Go-to-Market Strategy" pageSlug="cambodia-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CambodiaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Cambodia Go-to-Market Strategy | XcellHost',
      'Explore the Cambodia strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/cambodia-go-to-market-strategy');
  }
}
