import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-smime-certificates-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="smime-certificates" />
    <xh-service-default-sections name="S/MIME Certificates" pageSlug="smime-certificates" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmimeCertificatesPage {
  constructor() {
    inject(SeoService).set('S/MIME Certificates | XcellHost',
      'Explore DigiCert S/MIME email signing and encryption certificates, compare Individual and Business options, and configure an INR quotation with XcellHost.',
      '/smime-certificates');
  }
}
