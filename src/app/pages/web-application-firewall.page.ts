import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-web-application-firewall-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="web-application-firewall" />
    <xh-service-default-sections name="Web Application Firewall" pageSlug="web-application-firewall" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebApplicationFirewallPage {
  constructor() { inject(SeoService).set('Web Application Firewall | XcellHost', 'Explore Web Application Firewall services, tools and configuration options with XcellHost.', '/web-application-firewall'); }
}
