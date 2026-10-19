import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-anydesk-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="anydesk" />
    <xh-insights-section pageSlug="anydesk" />
  `,
})
export class AnydeskPage {
  constructor() {
    inject(SeoService).set(
      'AnyDesk India | Remote Access Licences & Support — XcellHost',
      'Explore AnyDesk Solo, Standard, Advanced and Ultimate with INR billing, GST invoices, edition selection tools and setup and support from Mumbai.',
      '/anydesk',
    );
  }
}
