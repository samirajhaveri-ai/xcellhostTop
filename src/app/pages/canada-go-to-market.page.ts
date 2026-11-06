import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-canada-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="canada-go-to-market-strategy" />
    <xh-service-default-sections name="Canada Go-to-Market Strategy" pageSlug="canada-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanadaGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'Canada Go-to-Market Strategy | XcellHost',
      'Explore the Canada strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/canada-go-to-market-strategy',
    );
  }
}
