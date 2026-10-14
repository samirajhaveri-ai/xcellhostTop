import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-vps-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="vps-page" [vpsSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`,
})
export class VpsImportedPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['vpsSlug'] as string;
}
