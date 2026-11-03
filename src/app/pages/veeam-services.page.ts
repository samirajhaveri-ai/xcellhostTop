import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-veeam-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="veeam-services" />
    <xh-service-default-sections name="Veeam Services" pageSlug="vendor-partners/veeam" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VeeamServicesPage {
  constructor() {
    inject(SeoService).set('Veeam Products and Services | XcellHost',
      'Explore Veeam Data Platform, workload backup, Data Cloud, Kasten, Vault and cyber recovery. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/veeam');
  }
}
