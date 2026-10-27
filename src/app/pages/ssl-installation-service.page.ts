import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-ssl-installation-service-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="ssl-installation-service" /><xh-insights-section pageSlug="ssl-installation-service" />`,
})
export class SslInstallationServicePage {}
