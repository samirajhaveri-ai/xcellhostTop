import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-rwanda-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="rwanda-go-to-market-strategy" />
    <xh-service-default-sections name="Rwanda Go-to-Market Strategy" pageSlug="rwanda-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RwandaGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'Rwanda Go-to-Market Strategy | XcellHost',
      'Explore the Rwanda strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/rwanda-go-to-market-strategy',
    );
  }
}
