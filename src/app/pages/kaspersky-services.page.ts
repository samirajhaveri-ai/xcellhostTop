import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-kaspersky-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="kaspersky-services" />
    <xh-service-default-sections name="Kaspersky Services" pageSlug="vendor-partners/kaspersky" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KasperskyServicesPage {
  constructor() {
    inject(SeoService).set('Kaspersky Products and Services | XcellHost',
      'Explore Kaspersky endpoint protection, EDR, XDR, MDR, cloud security and threat intelligence. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/kaspersky');
  }
}
