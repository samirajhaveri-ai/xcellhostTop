import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

/** Scope the supplied S/4HANA document to the requested private-cloud route. */
@Component({
  selector: 'xh-sap-s4-hana-private-cloud-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="sap-s4-hana-private-cloud" />
    <xh-insights-section pageSlug="sap-s4-hana-private-cloud" />
  `,
})
export class SapS4HanaPrivateCloudPage {
  constructor() {
    inject(SeoService).set(
      'SAP S/4HANA Private Cloud India | Customer-managed S/4HANA Hosting — XcellHost',
      'Host customer-managed SAP S/4HANA in Mumbai with HANA memory bands, DEV/QAS/PRD landscapes, high availability, disaster recovery and 24×7 Basis. Bring your own SAP licence.',
      '/sap-s4-hana-private-cloud',
    );
  }
}
