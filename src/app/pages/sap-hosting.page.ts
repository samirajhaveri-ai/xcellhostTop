import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

/** Isolate the supplied SAP Hosting content and animations to this route. */
@Component({
  selector: 'xh-sap-hosting-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="sap-hosting" />
    <xh-insights-section pageSlug="sap-hosting" />
  `,
})
export class SapHostingPage {
  constructor() {
    inject(SeoService).set(
      'SAP Hosting India | Managed SAP Cloud in Mumbai — XcellHost',
      'SAP Hosting in Mumbai for ECC, S/4HANA, BW, SAP Business One and Solution Manager, with managed Basis, backups, disaster recovery and INR billing.',
      '/sap-hosting',
    );
  }
}
