import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type AccopsSource = 'accops-hyworks' | 'accops-hysecure' | 'accops-hyid' | 'accops-hylabs' | 'accops-hydesk' | 'more-from-accops';

@Component({
  selector: 'xh-accops-product-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class AccopsProductPage {
  readonly source = inject(ActivatedRoute).snapshot.data['accopsSource'] as AccopsSource;
}
