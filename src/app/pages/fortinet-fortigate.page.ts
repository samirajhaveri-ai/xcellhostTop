import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-fortinet-fortigate-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="fortinet-fortigate" />
    <xh-insights-section pageSlug="fortinet-fortigate" />
  `,
})
export class FortinetFortigatePage {
  constructor() {
    inject(SeoService).set(
      'Fortinet FortiGate India | Firewalls, Setup & Support — XcellHost',
      'Explore Fortinet FortiGate firewalls, FortiGuard bundles, model sizing and configuration with INR billing, GST invoices and setup and support from Mumbai.',
      '/fortinet-fortigate',
    );
  }
}
