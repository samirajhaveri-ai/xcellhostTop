import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-ibm-multicloud-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="ibm-multicloud-services" />
    <xh-service-default-sections name="IBM Multicloud Services" pageSlug="vendor-partners/ibm-multicloud" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IbmMulticloudServicesPage {
  constructor() {
    inject(SeoService).set('IBM Multicloud Products and Services | XcellHost',
      'Explore IBM Multicloud Cloud, watsonx, Power, IBM Z, storage, security, integration and automation. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/ibm-multicloud');
  }
}
