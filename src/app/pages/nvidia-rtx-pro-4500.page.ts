import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-nvidia-rtx-pro-4500-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="nvidia-rtx-pro-4500-blackwell" />
    <xh-service-default-sections name="NVIDIA RTX PRO 4500 Blackwell" pageSlug="nvidia-rtx-pro-4500-blackwell" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaRtxPro4500Page {
  constructor() {
    inject(SeoService).set('NVIDIA RTX PRO 4500 Blackwell | XcellHost',
      'Explore NVIDIA RTX PRO 4500 Blackwell GPU server configurations, workload suitability and model memory requirements with XcellHost.',
      '/nvidia-rtx-pro-4500-blackwell');
  }
}
