import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type AiSecuritySource = 'ai-identity-security' | 'ai-security-platform' | 'ai-security-audit' | 'ai-security-assessment' | 'ai-red-teaming-services';

@Component({
  selector: 'xh-ai-security-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class AiSecurityImportedPage {
  readonly source = inject(ActivatedRoute).snapshot.data['aiSecuritySource'] as AiSecuritySource;
}
