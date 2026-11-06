import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-cloud-disaster-recovery-smb-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="cloud-disaster-recovery-smb" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="Cloud Disaster Recovery for SMBs" pageSlug="cloud-disaster-recovery-smb" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudDisasterRecoverySmbPage {
  constructor() {
    inject(SeoService).set(
      'Cloud Disaster Recovery for SMBs India | Managed Failover in Mumbai | XcellHost',
      'Managed cloud disaster recovery for SMBs with Mumbai Tier IV replication, failover and failback, ransomware recovery, recovery tiers and DR drills.',
      '/cloud-disaster-recovery-smb',
    );
  }
}
