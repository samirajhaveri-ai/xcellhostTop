import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-public-ip-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="public-ip" />
    <xh-service-default-sections name="Public IP" pageSlug="public-ip" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicIpPage {
  constructor() { inject(SeoService).set('Public IP | XcellHost', 'Explore Public IP services, tools and configuration options with XcellHost.', '/public-ip'); }
}
