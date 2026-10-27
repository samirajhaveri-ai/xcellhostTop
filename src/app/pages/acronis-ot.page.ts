import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-acronis-ot-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="acronis-ot" />
    <xh-insights-section pageSlug="acronis-ot" />
  `,
})
export class AcronisOtPage {
  constructor() {
    inject(SeoService).set(
      'Acronis Cyber Protect for OT India | Industrial Backup & Recovery — XcellHost',
      'Explore Acronis Cyber Protect for OT with plant-level sizing, legacy OS compatibility, recovery planning and deployment and support from XcellHost in Mumbai.',
      '/acronis-ot',
    );
  }
}
