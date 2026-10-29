import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-sentinelone-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="sentinelone-services" />
    <xh-service-default-sections name="SentinelOne Services" pageSlug="vendor-partners/sentinelone" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SentinelOneServicesPage {
  constructor() {
    inject(SeoService).set('SentinelOne Products and Services | XcellHost',
      'Explore SentinelOne Singularity endpoint protection, XDR, cloud security, identity, AI SIEM and MDR. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/sentinelone');
  }
}
