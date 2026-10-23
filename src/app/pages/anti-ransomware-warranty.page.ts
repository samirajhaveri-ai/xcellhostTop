import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-anti-ransomware-warranty-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="acronis-ransomware-warranty" /><xh-insights-section pageSlug="anti-ransomware-warranty" />`,
})
export class AntiRansomwareWarrantyPage {
  constructor() {
    inject(SeoService).set(
      'Acronis Anti-Ransomware Warranty | XcellHost',
      'Explore Acronis warranty prerequisites, recovery protection, eligibility, downtime estimates and XcellHost deployment services.',
      '/anti-ransomware-warranty',
    );
  }
}
