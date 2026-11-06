import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-digital-twin-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="digital-twin" />
    <section id="contact" style="scroll-margin-top:120px">
      <xh-service-default-sections name="Digital Twin" pageSlug="digital-twin" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalTwinPage {
  constructor() {
    inject(SeoService).set(
      'Digital Twin as a Service India | XcellHost',
      'Explore digital twins for factories, buildings, data centres and supply chains, with live data, anomaly detection and what-if simulations.',
      '/digital-twin',
    );
  }
}
