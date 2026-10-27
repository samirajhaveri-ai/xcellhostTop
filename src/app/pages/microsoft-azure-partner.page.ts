import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-microsoft-azure-partner-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="azure-services" /><xh-insights-section pageSlug="azure-services" />`,
})
export class MicrosoftAzurePartnerPage {
  constructor() {
    inject(SeoService).set(
      'Microsoft Azure Services in India | XcellHost',
      'Explore Microsoft Azure services, find your cloud stack, and request an INR quotation from XcellHost.',
      '/vendor-partners/microsoft-azure',
    );
  }
}
