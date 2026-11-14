import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-secure-file-transfer-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './secure-file-transfer.page.html',
  styles: [':host{display:block}.ec-closing{padding:24px 0 48px}.ec-actions{display:flex;gap:12px;flex-wrap:wrap}.ec-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecureFileTransferPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set('Secure File Transfer & Storage | XcellHost', 'Explore XcellVault encrypted file sharing, team storage, sharing controls and plan options from XcellHost.', '/secure-file-transfer');
  }
  request(): void {
    this.topics.ask('Secure File Transfer', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'Secure file sharing, storage and team onboarding enquiry' });
    this.overlay.open('callback');
  }
}
