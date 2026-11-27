import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-trinidad-and-tobago-go-to-market-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="trinidad-and-tobago-go-to-market-strategy" />
    <xh-service-default-sections name="Trinidad and Tobago Go-to-Market Strategy" pageSlug="trinidad-and-tobago-go-to-market-strategy" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrinidadAndTobagoGoToMarketPage {
  constructor() {
    inject(SeoService).set('Trinidad and Tobago Go-to-Market Strategy | XcellHost',
      'Explore the Trinidad and Tobago strategy briefing, with source references, screening considerations, sector analysis and an illustrative revenue model.',
      '/trinidad-and-tobago-go-to-market-strategy');
  }
}
