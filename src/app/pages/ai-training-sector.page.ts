import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-ai-training-sector-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content [source]="slug" />
    <xh-service-default-sections [name]="title" [pageSlug]="slug" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiTrainingSectorPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['trainingSector'] as 'ai-training-bankers' | 'ai-training-government-psu';
  readonly title = this.slug === 'ai-training-bankers' ? 'AI Training for Bankers' : 'AI Training for Government & PSUs';
  constructor() {
    inject(SeoService).set(this.title + ' | XcellHost',
      'Explore practical AI course modules, sample-data labs, responsible AI, delivery formats, seat pricing and team enrolment with XcellHost.', '/' + this.slug);
  }
}
