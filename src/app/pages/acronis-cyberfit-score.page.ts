import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-acronis-cyberfit-score-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="acronis-cyberfit-score" /><xh-insights-section pageSlug="cyberfit-score-tool" />`,
})
export class AcronisCyberfitScorePage {
  constructor() {
    inject(SeoService).set('Acronis CyberFit Score Tool | XcellHost', 'Explore CyberFit scoring, estimate your security posture and prioritise improvements with XcellHost.', '/cyberfit-score-tool');
  }
}
