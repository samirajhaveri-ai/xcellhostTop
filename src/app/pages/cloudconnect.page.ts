import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-cloudconnect-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="cloudconnect" />
    <xh-service-default-sections name="CloudConnect" pageSlug="cloudconnect" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudconnectPage {
  constructor() { inject(SeoService).set('CloudConnect | XcellHost', 'Explore CloudConnect services, tools and configuration options with XcellHost.', '/cloudconnect'); }
}
