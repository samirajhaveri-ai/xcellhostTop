import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type CloudSource = 'hybrid-cloud' | 'co-location-services' | 'global-cloud';

@Component({
  selector: 'xh-cloud-infrastructure-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class CloudInfrastructurePage {
  readonly source = inject(ActivatedRoute).snapshot.data['cloudSource'] as CloudSource;
}
