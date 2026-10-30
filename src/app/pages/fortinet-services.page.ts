import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-fortinet-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="fortinet-services" />
    <xh-service-default-sections name="Fortinet Services" pageSlug="vendor-partners/fortinet" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FortinetServicesPage {
  constructor() {
    inject(SeoService).set('Fortinet Products and Services | XcellHost',
      'Explore Fortinet Security Fabric, FortiGate, FortiGuard, SD-WAN, SASE, Wi-Fi, endpoint and SecOps. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/fortinet');
  }
}
