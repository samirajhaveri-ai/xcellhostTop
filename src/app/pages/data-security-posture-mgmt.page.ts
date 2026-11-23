import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-data-security-posture-mgmt-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="data-security-posture-mgmt" />
    <xh-service-default-sections name="Data Security Posture Management" pageSlug="data-security-posture-mgmt" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataSecurityPostureMgmtPage {
  constructor() {
    inject(SeoService).set('Data Security Posture Management | XcellHost',
      'Discover sensitive data, review access and exposure, explore DSPM assessments and configure managed data security posture management with XcellHost.',
      '/data-security-posture-mgmt');
  }
}
