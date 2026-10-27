import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-digicert-multi-domain-ssl-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="digicert-multi-domain-ssl" /><xh-insights-section pageSlug="digicert-multi-domain-ssl" />`,
})
export class DigicertMultiDomainSslPage {}
