import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-mark-certificates-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="mark" /><xh-insights-section pageSlug="mark-certificates" />`,
})
export class MarkCertificatesPage {}
