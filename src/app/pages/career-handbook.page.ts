import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-career-handbook-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './career-handbook.page.html',
  styles: [':host{display:block}.ec-closing{padding:24px 0 48px}.ec-actions{display:flex;gap:12px;flex-wrap:wrap}.ec-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerHandbookPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Career Handbook | XcellHost', 'Explore XcellHost teams, career paths, interview preparation, learning and working practices in the Career Handbook.', '/company/career-handbook');
  }
  request(): void {
    this.topics.ask('Career Handbook', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Career opportunities, interview preparation and handbook enquiry' });
    this.overlay.open('callback');
  }
}
