import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-acronis-ai-solution-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="acronis-ai-solution" /><xh-insights-section pageSlug="acronis-ai" />`,
})
export class AcronisAiSolutionPage {
  constructor() {
    inject(SeoService).set('Acronis AI Platform | XcellHost', 'Explore Acronis AI protection, management and automation, interactive agent demos and workload pricing from XcellHost.', '/acronis-ai');
  }
}
