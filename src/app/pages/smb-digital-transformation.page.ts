import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-smb-digital-transformation-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="smb-digital-transformation" />
    <xh-service-default-sections name="SMB Digital Transformation" pageSlug="smb-digital-transformation" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmbDigitalTransformationPage {
  constructor() {
    inject(SeoService).set('SMB Digital Transformation | XcellHost',
      'Plan cloud, cybersecurity, AI and digital marketing for your SMB. Assess maturity, compare bundles and estimate your transformation budget.',
      '/smb-digital-transformation');
  }
}
