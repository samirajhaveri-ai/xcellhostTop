import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-media-kit-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './media-kit.page.html',
  styles: [':host{display:block}.ec-closing{padding:24px 0 48px}.ec-actions{display:flex;gap:12px;flex-wrap:wrap}.ec-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaKitPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Media Kit | XcellHost', 'Explore XcellHost company descriptions, brand guidelines, logos, palettes, downloadable assets and media contacts.', '/media-kit');
  }
  request(): void {
    this.topics.ask('Media Kit', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Media enquiry, brand assets or interview request' });
    this.overlay.open('callback');
  }
}
