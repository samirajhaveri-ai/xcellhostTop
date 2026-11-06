import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-new-zealand-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="new-zealand-go-to-market-strategy" />
    <xh-service-default-sections name="New Zealand Go-to-Market Strategy" pageSlug="new-zealand-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewZealandGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'New Zealand Go-to-Market Strategy | XcellHost',
      'Explore the New Zealand strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/new-zealand-go-to-market-strategy',
    );
  }
}
