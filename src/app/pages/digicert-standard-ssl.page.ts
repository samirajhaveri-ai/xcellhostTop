import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-digicert-standard-ssl-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="digicert-standard-ssl" /><xh-insights-section pageSlug="digicert-standard-ssl" />`,
})
export class DigicertStandardSslPage {}
