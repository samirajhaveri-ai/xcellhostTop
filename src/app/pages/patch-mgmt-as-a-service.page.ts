import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-patch-mgmt-as-a-service-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="patch-mgmt-as-a-service" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="Patch Management as a Service" pageSlug="patch-mgmt-as-a-service" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatchManagementAsAServicePage {
  constructor() {
    inject(SeoService).set(
      'Patch Management as a Service India | OS & Third-Party Patching | XcellHost',
      'Managed Windows, Linux, macOS and third-party application patching with risk prioritisation, maintenance windows, rollback and compliance reporting.',
      '/patch-mgmt-as-a-service',
    );
  }
}
