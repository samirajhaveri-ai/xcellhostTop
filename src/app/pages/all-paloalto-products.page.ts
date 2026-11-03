import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-all-paloalto-products-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="all-paloalto-products" />
    <xh-service-default-sections name="Palo Alto Networks Services" pageSlug="all-paloalto-products" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPaloaltoProductsPage {
  constructor() {
    inject(SeoService).set('Palo Alto Networks Products and Services | XcellHost',
      'Explore Palo Alto Networks Strata firewalls, Prisma SASE, Prisma AIRS, Cortex, identity security and Unit 42. Search the catalogue and request a tailored quotation from XcellHost.',
      '/all-paloalto-products');
  }
}
