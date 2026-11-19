import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-bandwidth-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="bandwidth" />
    <xh-service-default-sections name="Bandwidth" pageSlug="bandwidth" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BandwidthPage {
  constructor() { inject(SeoService).set('Bandwidth | XcellHost', 'Explore Bandwidth services, tools and configuration options with XcellHost.', '/bandwidth'); }
}
