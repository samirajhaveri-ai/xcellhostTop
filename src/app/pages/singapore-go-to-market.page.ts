import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-singapore-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="singapore-go-to-market-strategy" />
    <xh-service-default-sections name="Singapore Go-to-Market Strategy" pageSlug="singapore-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingaporeGoToMarketPage {
  constructor() {
    inject(SeoService).set('Singapore Go-to-Market Strategy | XcellHost',
      'Explore the Singapore strategy briefing across cloud, cyber security, data protection, digital trust, AI and training, with sector recommendations and an editable revenue model.',
      '/singapore-go-to-market-strategy');
  }
}
