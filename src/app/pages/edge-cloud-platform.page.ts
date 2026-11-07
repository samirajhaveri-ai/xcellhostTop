import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-edge-cloud-platform-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content source="edge-cloud-platform" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdgeCloudPlatformPage {
  constructor() {
    inject(SeoService).set(
      'Edge Cloud Platform | XcellHost',
      'Run AI inference, GPU and CPU virtual machines and managed Kubernetes close to your users in India. Explore edge zones, hourly pricing and workload configuration.',
      '/edge-cloud-platform',
    );
  }
}
