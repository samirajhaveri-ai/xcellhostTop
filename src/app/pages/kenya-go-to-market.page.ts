import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-kenya-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="kenya-go-to-market-strategy" />
    <xh-service-default-sections name="Kenya Go-to-Market Strategy" pageSlug="kenya-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KenyaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Kenya Go-to-Market Strategy | XcellHost',
      'Explore the Kenya strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/kenya-go-to-market-strategy');
  }
}
