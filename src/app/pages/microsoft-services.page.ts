import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-microsoft-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="microsoft-services" />
    <xh-service-default-sections name="Microsoft Services" pageSlug="vendor-partners/microsoft-services" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MicrosoftServicesPage {
  constructor() {
    inject(SeoService).set('Microsoft Products and Services | XcellHost',
      'Explore Microsoft 365, Copilot, Dynamics 365, Azure, security and developer services. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/microsoft-services');
  }
}
