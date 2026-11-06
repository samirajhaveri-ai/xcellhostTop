import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-qualys-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="qualys-services" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="All Qualys Products" pageSlug="qualys-services" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualysServicesPage {
  constructor() {
    inject(SeoService).set(
      'All Qualys Products India | VMDR, TruRisk, Patch & Compliance | XcellHost',
      'Explore Qualys products for vulnerability management, risk reduction, cloud security and compliance. Search the catalogue, build your stack and request a quotation from XcellHost.',
      '/qualys-services',
    );
  }
}
