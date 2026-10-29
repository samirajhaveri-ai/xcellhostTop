import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-oracle-cloud-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="oracle-cloud-services" />
    <xh-service-default-sections name="Oracle Cloud Services" pageSlug="vendor-partners/oracle-cloud" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OracleCloudServicesPage {
  constructor() {
    inject(SeoService).set('Oracle Cloud Products and Services | XcellHost',
      'Explore Oracle Cloud Infrastructure compute, databases, AI, integration, security and multicloud services. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/oracle-cloud');
  }
}
