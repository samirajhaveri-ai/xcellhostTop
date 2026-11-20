import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-commvault-overview-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="commvault-overview" />
    <xh-service-default-sections name="Commvault" pageSlug="commvault-overview" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommvaultOverviewPage {
  constructor() {
    inject(SeoService).set('Commvault Overview | XcellHost',
      'Explore Commvault backup, cyber recovery and data protection. Search the catalogue, build your stack and request a quotation from XcellHost.',
      '/commvault-overview');
  }
}
