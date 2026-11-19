import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-network-security-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="network-security" />
    <xh-service-default-sections name="Network &amp; Security" pageSlug="network-security" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkSecurityPage {
  constructor() { inject(SeoService).set('Network & Security | XcellHost', 'Explore Network & Security services, tools and configuration options with XcellHost.', '/network-security'); }
}
