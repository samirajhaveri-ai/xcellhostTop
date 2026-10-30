import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-hpe-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="hpe-services" />
    <xh-service-default-sections name="HPE Services" pageSlug="vendor-partners/hpe" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HpeServicesPage {
  constructor() {
    inject(SeoService).set('HPE Products and Services | XcellHost',
      'Explore HPE ProLiant servers, AI systems, Alletra storage, GreenLake, Aruba and Juniper networking. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/hpe');
  }
}
