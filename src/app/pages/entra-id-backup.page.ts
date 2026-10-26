import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-entra-id-backup-page',
  standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './entra-id-backup.page.html',
  styles: [':host{display:block}.entra-closing{padding:24px 0 48px}.entra-closing>.wrap{max-width:1280px}.entra-actions{display:flex;gap:12px;flex-wrap:wrap}.entra-actions .btn-ghost{background:transparent;border-color:rgba(255,255,255,.4);color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntraIdBackupPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Entra ID Backup | XcellHost', 'Explore independent Entra ID backup, object-level recovery, identity change tracking, INR pricing and managed support from XcellHost.', '/entra-id-backup');
  }
  request(trial = false): void {
    this.topics.ask('Entra ID Backup', {firstName: '', lastName: '', company: '', email: '', help: trial ? 'Ask For FREE Trial' : 'Request a CallBack', details: trial ? '7-day Entra ID Backup trial' : 'Entra ID Backup consultation'});
    this.overlay.open('callback');
  }
}
