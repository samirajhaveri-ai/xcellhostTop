import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-digicert-ev-ssl-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="digicert-ev-ssl" /><xh-insights-section pageSlug="digicert-ev-ssl" />`,
})
export class DigicertEvSslPage {}
