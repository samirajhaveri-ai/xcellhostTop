import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-website-design-packages-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="website-design-packages" />
    <xh-service-default-sections name="Website Design Packages" pageSlug="website-design-packages" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebsiteDesignPackagesPage {
  constructor() {
    inject(SeoService).set('Website Design Packages | XcellHost',
      'Compare five website design packages, estimate your build and maintenance costs, and plan your website with XcellHost.',
      '/website-design-packages');
  }
}
