import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-cybird-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="cybird-services" />
    <xh-insights-section pageSlug="vendor-partners/cybird" />
    <xh-service-default-sections name="Cybird Services" pageSlug="vendor-partners/cybird" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CybirdServicesPage {
  constructor() {
    inject(SeoService).set('Cybird Products and Services | XcellHost',
      'Explore Cybird X2 network security, Wi-Fi, firewall, cloud management, bundles and support. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/cybird');
  }
}
