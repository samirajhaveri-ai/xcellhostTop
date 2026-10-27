import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type ManagedProductivitySource = 'managed-gws' | 'managed-mdm' | 'managed-intune-services' | 'managed-phishing-simulation';

@Component({
  selector: 'xh-managed-productivity-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class ManagedProductivityImportedPage {
  readonly source = inject(ActivatedRoute).snapshot.data['managedProductivitySource'] as ManagedProductivitySource;
}
