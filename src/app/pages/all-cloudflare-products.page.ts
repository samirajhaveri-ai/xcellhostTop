import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-all-cloudflare-products-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="all-cloudflare-products" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="All Cloudflare Products" pageSlug="all-cloudflare-products" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllCloudflareProductsPage {
  constructor() {
    inject(SeoService).set(
      'All Cloudflare Products India | CDN, WAF, Zero Trust, Workers & AI | XcellHost',
      'Explore Cloudflare products for security, performance, Zero Trust and developers. Search the catalogue, build your stack and request a quotation from XcellHost.',
      '/all-cloudflare-products',
    );
  }
}
