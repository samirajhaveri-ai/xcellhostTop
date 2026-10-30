import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-dell-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="dell-services" />
    <xh-service-default-sections name="Dell Services" pageSlug="vendor-partners/dell" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DellServicesPage {
  constructor() {
    inject(SeoService).set('Dell Products and Services | XcellHost',
      'Explore Dell PowerEdge servers, AI systems, PowerStore, PowerProtect, private cloud, APEX and networking. Search the catalogue and request a tailored quotation from XcellHost.',
      '/vendor-partners/dell');
  }
}
