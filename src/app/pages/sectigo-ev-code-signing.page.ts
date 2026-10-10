import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-sectigo-ev-code-signing-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="sectigo-ev" /><xh-insights-section pageSlug="sectigo-ev-code-signing" />`,
})
export class SectigoEvCodeSigningPage {}
