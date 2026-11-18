import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-naam-ai-caller-id-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="naam-ai-caller-id" />
    <xh-service-default-sections name="Naam AI Caller ID" pageSlug="naam-ai-caller-id" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaamAiCallerIdPage {
  constructor() {
    inject(SeoService).set('Naam AI Caller ID | XcellHost',
      'Explore Naam caller identification and spam protection, estimate team rollout costs, and plan support with XcellHost.',
      '/naam-ai-caller-id');
  }
}
