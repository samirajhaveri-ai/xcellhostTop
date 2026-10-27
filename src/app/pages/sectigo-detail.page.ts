import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-sectigo-detail-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="sectigo-detail" [sectigoSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`,
})
export class SectigoDetailPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['sectigoSlug'] as string;
}
