import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-opentext-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="opentext-services" />
    <xh-service-default-sections name="OpenText Services" pageSlug="vendor-partners/opentext" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenTextServicesPage {
  constructor() {
    inject(SeoService).set('OpenText Products and Services | XcellHost',
      'Explore OpenText content management, cybersecurity, data protection, IT operations, DevOps and Aviator AI. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/opentext');
  }
}
