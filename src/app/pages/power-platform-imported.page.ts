import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type PowerPlatformSource = 'power-pages' | 'power-apps' | 'power-automate' | 'power-bi';

@Component({
  selector: 'xh-power-platform-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class PowerPlatformImportedPage {
  readonly source = inject(ActivatedRoute).snapshot.data['powerPlatformSource'] as PowerPlatformSource;
}
