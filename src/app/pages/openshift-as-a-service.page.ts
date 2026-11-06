import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-openshift-as-a-service-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="openshift-as-a-service" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="OpenShift as a Service" pageSlug="openshift-as-a-service" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenShiftAsAServicePage {
  constructor() {
    inject(SeoService).set(
      'OpenShift as a Service India | Managed Red Hat OpenShift | XcellHost',
      'Managed Red Hat OpenShift clusters in Mumbai with GitOps, pipelines, virtualization, day-2 operations, cluster configuration and workload sizing.',
      '/openshift-as-a-service',
    );
  }
}
