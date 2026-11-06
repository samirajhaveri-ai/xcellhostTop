import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-uk-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="uk-go-to-market-strategy" />
    <xh-service-default-sections name="UK Go-to-Market Strategy" pageSlug="uk-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UkGoToMarketPage {
  constructor() {
    inject(SeoService).set(
      'UK Go-to-Market Strategy | XcellHost',
      'Explore the UK strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/uk-go-to-market-strategy',
    );
  }
}
