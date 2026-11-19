import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-directconnect-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="directconnect" />
    <xh-service-default-sections name="DirectConnect" pageSlug="directconnect" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectconnectPage {
  constructor() { inject(SeoService).set('DirectConnect | XcellHost', 'Explore DirectConnect services, tools and configuration options with XcellHost.', '/directconnect'); }
}
