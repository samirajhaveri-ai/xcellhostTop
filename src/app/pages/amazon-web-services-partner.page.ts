import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-amazon-web-services-partner-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="aws-services" /><xh-insights-section pageSlug="aws-services" />`,
})
export class AmazonWebServicesPartnerPage {
  constructor() {
    inject(SeoService).set(
      'Amazon Web Services in India | XcellHost',
      'Explore 257 AWS services across 23 categories, build your cloud stack, and request an INR quotation with deployment and support from XcellHost.',
      '/vendor-partners/amazon-web-services',
    );
  }
}
