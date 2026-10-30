import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-geotrust-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="geotrust-services" />
    <xh-service-default-sections name="GeoTrust Services" pageSlug="vendor-partners/geotrust" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeotrustServicesPage {
  constructor() {
    inject(SeoService).set('GeoTrust Products and Services | XcellHost',
      'Explore GeoTrust QuickSSL Premium, True BusinessID, DV, OV, EV, wildcard and multi-domain SSL certificates. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/geotrust');
  }
}
