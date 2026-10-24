import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-mobile-app-security-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="mobile-app-security" />
    <xh-insights-section pageSlug="mobile-app-security" [videos]="[]" />`,
})
export class MobileAppSecurityPage {
  constructor() {
    inject(SeoService).set('Mobile App Security | XcellHost',
      'Explore Android and iOS runtime protection, device and SIM binding, mobile API security, SDK integration and managed support from XcellHost.',
      '/mobile-app-security');
  }
}
