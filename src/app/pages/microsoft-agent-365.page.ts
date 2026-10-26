import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-microsoft-agent-365-page',
  standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './microsoft-agent-365.page.html',
  styles: [':host{display:block}.agent-closing{padding:24px 0 48px}.agent-closing>.wrap{max-width:1280px}.agent-actions{display:flex;gap:12px;flex-wrap:wrap}.agent-actions .btn-ghost{background:transparent;border-color:rgba(255,255,255,.4);color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MicrosoftAgent365Page {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Microsoft Agent 365 | XcellHost', 'Explore Microsoft Agent 365 governance, licensing, readiness checks and deployment with XcellHost.', '/microsoft-agent-365');
  }
  request(trial = false): void {
    this.topics.ask('Microsoft Agent 365', {firstName: '', lastName: '', company: '', email: '', help: trial ? 'Ask For FREE Trial' : 'Request a CallBack', details: trial ? '7-day Microsoft Agent 365 trial' : 'Microsoft Agent 365 consultation'});
    this.overlay.open('callback');
  }
}
