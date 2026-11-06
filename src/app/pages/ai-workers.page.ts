import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-ai-workers-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="ai-workers" />
    <section id="contact" style="scroll-margin-top: 120px">
      <xh-service-default-sections name="AI Workers Workspace" pageSlug="ai-workers" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiWorkersPage {
  constructor() {
    inject(SeoService).set(
      'AI Workers Workspace India | Your Team and AI Agents in One Channel | XcellHost',
      'Bring your people and AI agents together in one shared workspace. Explore ready-made agents, a no-code builder, approval controls and India-hosted options.',
      '/ai-workers',
    );
  }
}
