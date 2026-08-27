import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({
  selector: 'xh-email-backup-for-microsoft-365-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-backup-for-microsoft-365-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class EmailBackupForMicrosoft365SlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly page = SLA_DOCUMENTS['emailBackup'];

  constructor() {
    this.seo.set(
      'Email Backup for Microsoft 365 SLA — XcellHost',
      this.page.tagline,
      '/email-backup-for-microsoft-365-sla/',
    );
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const location = this.document.defaultView?.location;
    if (location) {
      this.document.defaultView?.history.replaceState(
        null,
        '',
        `${location.pathname}${location.search}#${sectionId}`,
      );
    }
  }
}
