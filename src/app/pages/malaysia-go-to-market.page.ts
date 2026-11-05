import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-malaysia-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="malaysia-go-to-market-strategy" />
    <xh-service-default-sections name="Malaysia Go-to-Market Strategy" pageSlug="malaysia-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MalaysiaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Malaysia Go-to-Market Strategy | XcellHost',
      'Explore the Malaysia strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/malaysia-go-to-market-strategy');
  }
}
