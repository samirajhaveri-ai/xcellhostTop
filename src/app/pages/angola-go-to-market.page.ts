import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-angola-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="angola-go-to-market-strategy" />
    <xh-service-default-sections name="Angola Go-to-Market Strategy" pageSlug="angola-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngolaGoToMarketPage {
  constructor() {
    inject(SeoService).set('Angola Go-to-Market Strategy | XcellHost',
      'Explore the Angola strategy briefing, with source references, screening considerations, sector analysis and an illustrative revenue model.',
      '/angola-go-to-market-strategy');
  }
}
