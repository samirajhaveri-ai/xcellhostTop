import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

/** Keep the supplied SAP Business One document isolated to /sap-b1-cloud. */
@Component({
  selector: 'xh-sap-b1-cloud-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="sap-b1-cloud" />
    <xh-insights-section pageSlug="sap-b1-cloud" />
  `,
})
export class SapB1CloudPage {
  constructor() {
    inject(SeoService).set(
      'SAP B1 HANA on Cloud India | SAP Business One Hosting — XcellHost',
      'SAP Business One on HANA hosted in Mumbai, with desktop and Web Client access, backups, optional disaster recovery and 24×7 support. Bring your own SAP licence.',
      '/sap-b1-cloud',
    );
  }
}
