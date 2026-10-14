import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-inference-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="inference-page" [inferenceSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`,
})
export class InferenceImportedPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['inferenceSlug'] as string;
}
