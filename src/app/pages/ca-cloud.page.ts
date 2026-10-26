import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-ca-cloud-page',
  standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './ca-cloud.page.html',
  styles: [':host{display:block}.ca-closing{padding:24px 0 48px}.ca-closing>.wrap{max-width:1280px}.ca-actions{display:flex;gap:12px;flex-wrap:wrap}.ca-actions .btn-ghost{background:transparent;border-color:rgba(255,255,255,.4);color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaCloudPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('CA Cloud | XcellHost', 'Explore cloud desktops, Tally, security, AI and practice apps for chartered accountants, with CA Cloud pricing and managed support from XcellHost.', '/ca-cloud');
  }
  request(trial = false): void {
    this.topics.ask('CA Cloud', {firstName: '', lastName: '', company: '', email: '', help: trial ? 'Ask For FREE Trial' : 'Request a CallBack', details: trial ? '7-day CA Cloud trial' : 'CA Cloud consultation'});
    this.overlay.open('callback');
  }
}
