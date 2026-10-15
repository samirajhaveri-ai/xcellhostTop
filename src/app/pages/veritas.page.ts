import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-veritas-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content class="veritas-source-content" source="veritas" />`,
})
export class VeritasPage {
  constructor() {
    inject(SeoService).set(
      'Veritas AI Visibility & SEO | XcellHost',
      'Veritas brings site audits, keyword research, rank tracking, local SEO and AI-answer visibility into one workspace, with INR billing and support from XcellHost Mumbai.',
      '/veritas',
    );
  }
}
