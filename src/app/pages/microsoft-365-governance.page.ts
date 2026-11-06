import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-microsoft-365-governance-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="microsoft-365-governance" />
    <section id="contact" style="scroll-margin-top:120px">
      <xh-service-default-sections name="Microsoft 365 Governance" pageSlug="microsoft-365-governance" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Microsoft365GovernancePage {
  constructor() {
    inject(SeoService).set(
      'Microsoft 365 Governance Reference Architecture India | XcellHost',
      'Explore Microsoft 365 governance across identity, information protection, workloads, monitoring and resilience, with maturity checks, RACI templates and licence coverage tools.',
      '/microsoft-365-governance',
    );
  }
}
