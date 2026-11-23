import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-russia-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="russia-go-to-market-strategy" />
    <xh-service-default-sections name="Russia Go-to-Market Strategy" pageSlug="russia-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RussiaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Russia Go-to-Market Strategy | XcellHost',
      'Explore the Russia strategy briefing, with source references, screening considerations, sector analysis and an illustrative revenue model.',
      '/russia-go-to-market-strategy');
  }
}
