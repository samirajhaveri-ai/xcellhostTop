import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-whats-new-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<xh-imported-interactive-content source="whats-new" />`,
})
export class WhatsNewPage {
  constructor() {
    inject(SeoService).set(
      "What's New at XcellHost | Cloud, Security & AI Launches",
      'Explore the XcellHost release log with new cloud, security, AI, Microsoft, SAP, hosting and developer services, category filters and launch spotlights.',
      '/whats-new',
    );
  }
}
