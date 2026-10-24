import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-ai-factory-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="ai-factory" /><xh-insights-section pageSlug="ai-factory" />`,
})
export class AiFactoryPage {
  constructor() {
    inject(SeoService).set('AI Factory India | XcellHost', 'Explore XcellHost AI Factory: sovereign GPU infrastructure, model training and inference in Mumbai, with GPU sizing, readiness checks and managed MLOps.', '/ai-factory');
  }
}
