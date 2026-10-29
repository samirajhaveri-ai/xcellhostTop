import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-smart-manufacturing-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="smart-manufacturing" />
    <xh-service-default-sections name="Smart Manufacturing" pageSlug="smart-manufacturing" contentSlug="smart-manufacturing" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartManufacturingPage {
  constructor() {
    inject(SeoService).set('Industry 5.0 & Smart Manufacturing | XcellHost',
      'Explore smart manufacturing, IIoT, edge computing, digital twins, predictive maintenance, vision inspection and managed plant infrastructure with XcellHost.', '/smart-manufacturing');
  }
}
