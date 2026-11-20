import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-akamai-cloud-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="akamai-cloud" />
    <xh-service-default-sections name="Akamai Cloud" pageSlug="akamai-cloud" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AkamaiCloudPage {
  constructor() {
    inject(SeoService).set('Akamai Cloud | XcellHost',
      'Explore managed Akamai compute, Kubernetes and storage. Compare regions, configure your workloads and request an INR quotation from XcellHost.',
      '/akamai-cloud');
  }
}
