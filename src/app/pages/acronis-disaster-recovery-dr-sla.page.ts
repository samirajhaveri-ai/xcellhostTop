import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({
  selector: 'xh-acronis-disaster-recovery-dr-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-disaster-recovery-dr-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class AcronisDisasterRecoveryDrSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  readonly page = SLA_DOCUMENTS['dr'];

  constructor() {
    this.seo.set(
      'Acronis Disaster Recovery (DR) SLA — XcellHost',
      this.page.tagline,
      '/acronis-disaster-recovery-dr-sla/',
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
