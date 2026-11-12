import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-podcast-catalog-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './podcast-catalog.page.html',
  styles: [':host{display:block}.podcast-closing{padding:24px 0 48px}.podcast-actions{display:flex;gap:12px;flex-wrap:wrap}.podcast-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PodcastCatalogPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('The XcellHost Podcast | Podcasts Catalog', 'Explore the planned XcellHost podcast: twelve cloud, security, data and AI topics, episode briefs, guest applications and launch updates.', '/under-construction/podcasts-catalog');
  }
  request(): void {
    this.topics.ask('The XcellHost Podcast', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Podcast guest, topic or partnership enquiry' });
    this.overlay.open('callback');
  }
}
