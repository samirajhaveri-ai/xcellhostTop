import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-faceoff-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './faceoff.page.html',
  styles: [':host{display:block}.faceoff-closing{padding:24px 0 48px}.faceoff-actions{display:flex;gap:12px;flex-wrap:wrap}.faceoff-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceOffPage {
  readonly source = inject(ActivatedRoute).snapshot.data['faceoffSource'] as 'faceoff-privacy-in-a-box' | 'faceoff-security-in-a-box';
  readonly title = this.source === 'faceoff-privacy-in-a-box' ? 'FaceOff Privacy in a Box' : 'FaceOff Security in a Box';
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set(this.title + ' | XcellHost', this.source === 'faceoff-privacy-in-a-box'
      ? 'Explore the FaceOff on-premise privacy appliance, nine privacy modules, readiness checks and XcellHost deployment services.'
      : 'Explore FaceOff on-premise deepfake and synthetic fraud defence, deployment tools and XcellHost security services.', '/' + this.source);
  }
  request(): void {
    this.topics.ask(this.title, { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Appliance scoping, demonstration and quotation request' });
    this.overlay.open('callback');
  }
}
