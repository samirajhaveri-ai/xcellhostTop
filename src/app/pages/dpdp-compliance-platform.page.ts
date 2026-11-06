import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-dpdp-compliance-platform-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="dpdp-compliance-platform" />
    <section id="contact" style="scroll-margin-top:120px">
      <xh-service-default-sections name="DPDP Compliance Platform" pageSlug="dpdp-compliance-platform" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpdpCompliancePlatformPage {
  constructor() {
    inject(SeoService).set(
      'DPDP Compliance Platform India | XcellHost',
      'Explore consent and notice management, privacy rights, records of processing, DPIAs, discovery and breach response workflows in one platform.',
      '/dpdp-compliance-platform',
    );
  }
}
