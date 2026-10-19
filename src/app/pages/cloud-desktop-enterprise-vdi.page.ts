import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

/** Scope the supplied enterprise VDI content and animations to this route. */
@Component({
  selector: 'xh-cloud-desktop-enterprise-vdi-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="cloud-desktop-enterprise-vdi" />
    <xh-insights-section pageSlug="cloud-desktop-enterprise-vdi" />
  `,
})
export class CloudDesktopEnterpriseVdiPage {
  constructor() {
    inject(SeoService).set(
      'Cloud Desktop Enterprise (VDI) India | Managed VDI on Citrix, Horizon, AVD or Accops — XcellHost',
      'Managed enterprise VDI hosted in Mumbai: pooled and personal Windows desktops, autoscaling, golden-image patching, GPU options and 24×7 operations.',
      '/cloud-desktop-enterprise-vdi',
    );
  }
}
