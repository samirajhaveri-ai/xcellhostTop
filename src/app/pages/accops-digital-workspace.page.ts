import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

/** Keep the supplied Accops document and animation isolated to this route. */
@Component({
  selector: 'xh-accops-digital-workspace-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="accops-digital-workspace" />
    <xh-insights-section pageSlug="accops-digital-workspace" />
  `,
})
export class AccopsDigitalWorkspacePage {
  constructor() {
    inject(SeoService).set(
      'Accops Digital Workspace India | HyWorks VDI, HySecure ZTNA & HyID MFA — XcellHost',
      'Accops virtual desktops, zero-trust access and MFA, delivered and managed by XcellHost in Mumbai or on your premises, with 24×7 support.',
      '/accops-digital-workspace',
    );
  }
}
