import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-teamviewer-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="teamviewer" />
    <xh-insights-section pageSlug="teamviewer" />
  `,
})
export class TeamviewerPage {
  constructor() {
    inject(SeoService).set(
      'TeamViewer India | Remote Access Licences & Support — XcellHost',
      'Explore TeamViewer Remote Access, Business, Premium, Corporate and Tensor with INR billing, GST invoices, plan selection tools and setup and support from Mumbai.',
      '/teamviewer',
    );
  }
}
