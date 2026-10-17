import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-managed-microsoft-sentinel-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="managed-microsoft-sentinel" /><xh-insights-section pageSlug="managed-microsoft-sentinel" />`,
})
export class ManagedMicrosoftSentinelPage {}
