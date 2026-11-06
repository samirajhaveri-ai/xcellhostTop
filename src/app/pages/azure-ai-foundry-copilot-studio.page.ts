import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-azure-ai-foundry-copilot-studio-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="azure-ai-foundry-copilot-studio" />
    <section id="contact" style="scroll-margin-top:120px">
      <xh-service-default-sections name="Azure AI Foundry & Copilot Studio" pageSlug="azure-ai-foundry-copilot-studio" [closingOnly]="true" />
    </section>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AzureAiFoundryCopilotStudioPage {
  constructor() {
    inject(SeoService).set(
      'Azure AI Foundry & Copilot Studio India | XcellHost',
      'Build enterprise AI agents with Azure AI Foundry and Microsoft Copilot Studio. Explore advanced RAG, governance, evaluations and credit estimation.',
      '/azure-ai-foundry-copilot-studio',
    );
  }
}
