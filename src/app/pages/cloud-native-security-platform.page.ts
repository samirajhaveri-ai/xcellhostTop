import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-cloud-native-security-platform-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="cloud-native-security-platform" />
    <section id="contact" style="scroll-margin-top:120px">
      <xh-service-default-sections name="Cloud Native Security Platform" pageSlug="cloud-native-security-platform" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudNativeSecurityPlatformPage {
  constructor() {
    inject(SeoService).set(
      'Cloud Native Security Platform (CNAPP) India | XcellHost',
      'Explore cloud posture management, workload protection, Kubernetes security, identity permissions, application security and AI security in one CNAPP.',
      '/cloud-native-security-platform',
    );
  }
}
