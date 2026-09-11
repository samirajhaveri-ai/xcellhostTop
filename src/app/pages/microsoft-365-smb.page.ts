import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-microsoft-365-smb-page',
  standalone: true,
  imports: [InsightsSectionComponent, DecimalPipe],
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
  readonly includesTeams = signal(true);
  readonly quoteQuantities = signal<Record<string, number>>({
    basic: 1,
    standard: 1,
    premium: 1,
  });
  readonly basicTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-WT-A';
  readonly standardTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-WT-A';
  readonly premiumTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-WT-A';
  readonly basicNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-NT-A';
  readonly standardNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-NT-A';
  readonly premiumNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-NT-A';
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

  setTeamsOption(includesTeams: boolean): void {
    this.includesTeams.set(includesTeams);
  }

  adjustQuantity(plan: string, change: number): void {
    this.quoteQuantities.update((quantities) => ({
      ...quantities,
      [plan]: Math.min(300, Math.max(0, (quantities[plan] ?? 0) + change)),
    }));
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
