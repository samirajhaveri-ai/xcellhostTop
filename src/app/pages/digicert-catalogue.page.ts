import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-digicert-catalogue-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content source="digicert-catalogue" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertCataloguePage {
  constructor() {
    inject(SeoService).set('DigiCert SSL Certificates | XcellHost', 'Compare 17 DigiCert SSL editions, OV and EV validation, coverage, subscription prices and installation services from XcellHost.', '/digicert-ssl-certificates');
  }
}
