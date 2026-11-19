import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';
@Component({
  selector: 'xh-ssl-tools-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="ssl-tools" />
    <xh-service-default-sections name="SSL Tools" pageSlug="ssl-tools" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SslToolsPage {
  constructor() { inject(SeoService).set('SSL Tools | XcellHost', 'Explore SSL Tools services, tools and configuration options with XcellHost.', '/ssl-tools'); }
}
