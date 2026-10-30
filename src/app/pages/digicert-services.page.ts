import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-digicert-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="digicert-services" />
    <xh-service-default-sections name="DigiCert Services" pageSlug="vendor-partners/digicert" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertServicesPage {
  constructor() {
    inject(SeoService).set('DigiCert Products and Services | XcellHost',
      'Explore DigiCert certificates, signing, email trust, certificate management and digital trust services. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/digicert');
  }
}
