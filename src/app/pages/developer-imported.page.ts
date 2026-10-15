import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-developer-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="developer-page" [developerSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`,
})
export class DeveloperImportedPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['developerSlug'] as string;
}
