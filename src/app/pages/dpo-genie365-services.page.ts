import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-dpo-genie365-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="dpo-genie365-services" />
    <xh-service-default-sections name="DPO Genie365 Services" pageSlug="vendor-partners/dpo-genie" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpoGenie365ServicesPage {
  constructor() {
    inject(SeoService).set('DPO Genie365 Products and Services | XcellHost',
      'Explore DPO Genie365 privacy operations, consent, managed GRC, data protection and breach readiness. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/dpo-genie');
  }
}
