import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-red-hat-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="red-hat" /><xh-insights-section pageSlug="red-hat" />`,
})
export class RedHatPage {
  constructor() {
    inject(SeoService).set(
      'Red Hat Partner India | XcellHost',
      'Explore Red Hat Enterprise Linux, OpenShift, Ansible and hybrid cloud services from XcellHost, and build your stack for a quotation.',
      '/vendor-partners/red-hat',
    );
  }
}
