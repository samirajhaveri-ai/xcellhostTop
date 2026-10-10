import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-sectigo-code-signing-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="sectigo" /><xh-insights-section pageSlug="sectigo-code-signing" />`,
})
export class SectigoCodeSigningPage {}
