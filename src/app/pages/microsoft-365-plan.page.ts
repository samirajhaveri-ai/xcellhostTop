import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type Microsoft365PlanSource = 'office-365-e1-nonprofit' | 'teams-essentials-frontline' | 'office-365-e5' | 'microsoft-365-f1' | 'microsoft-365-e5' | 'microsoft-365-e3' | 'office-365-e1' | 'office-365-e3' | 'office-365-f3' | 'microsoft-365-f3' | 'office-365-e3-nonprofit' | 'microsoft-365-business-premium-nonprofit' | 'microsoft-365-e3-nonprofit' | 'microsoft-365-f3-nonprofit' | 'microsoft-365-e5-nonprofit';

@Component({
  selector: 'xh-microsoft-365-plan-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class Microsoft365PlanPage {
  readonly source = inject(ActivatedRoute).snapshot.data['microsoft365PlanSource'] as Microsoft365PlanSource;
}
