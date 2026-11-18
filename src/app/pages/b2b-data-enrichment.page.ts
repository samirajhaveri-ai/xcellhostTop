import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-b2b-data-enrichment-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="b2b-data-enrichment" />
    <xh-service-default-sections name="B2B Data Enrichment" pageSlug="b2b-data-enrichment" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class B2bDataEnrichmentPage {
  constructor() {
    inject(SeoService).set('B2B Data Enrichment | XcellHost',
      'Explore B2B contact data enrichment, compare credit plans and estimate email and phone lookup costs with XcellHost.',
      '/b2b-data-enrichment');
  }
}
