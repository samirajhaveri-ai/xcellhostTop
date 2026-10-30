import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-sectigo-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="sectigo-services" />
    <xh-service-default-sections name="Sectigo Services" pageSlug="vendor-partners/sectigo" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectigoServicesPage {
  constructor() {
    inject(SeoService).set('Sectigo Products and Services | XcellHost',
      'Explore Sectigo SSL certificates, code signing, secure email and certificate lifecycle management. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/sectigo');
  }
}
