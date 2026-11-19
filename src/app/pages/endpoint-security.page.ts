import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-endpoint-security-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="endpoint-security" />
    <xh-service-default-sections name="Endpoint Security" pageSlug="endpoint-security" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndpointSecurityPage {
  constructor() { inject(SeoService).set('Endpoint Security | XcellHost', 'Explore Endpoint Security services, tools and configuration options with XcellHost.', '/endpoint-security'); }
}
