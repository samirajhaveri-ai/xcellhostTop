import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-microsoft-365-smb-page',
  standalone: true,
  templateUrl: './microsoft-365-smb.page.html',
  styleUrl: './microsoft-365-smb.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Microsoft365SmbPage {
  private readonly docs = inject(DocRequestService);
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly topics = inject(CallbackTopicService);

  readonly openFaq = signal<number | null>(0);
  readonly callbackMessage = signal(
    'We respond within one business day · No spam, ever.',
  );

  constructor() {
    this.seo.set(
      'Microsoft 365 India — Authorised Microsoft Partner | XcellHost',
      'Buy Microsoft 365 in India from XcellHost. Outlook, Teams, Word, Excel, OneDrive, SharePoint and Copilot AI, with migration and 24×7 support.',
      '/microsoft-365-smb/',
    );
  }

  toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }

  requestPresentation(event: Event): void {
    event.preventDefault();
    this.docs.ask('presentation', 'Microsoft 365');
  }

  openCallback(event: Event): void {
    event.preventDefault();
    this.topics.ask('Microsoft 365');
    this.overlay.open('callback');
  }

  submitCallback(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    form.reset();
    this.callbackMessage.set(
      'Thanks — our team will call you within one business day.',
    );
  }
}
