import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({
  selector: 'xh-video-surveillance-as-a-service-vsaas-sla-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './video-surveillance-as-a-service-vsaas-sla.page.html',
  styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
})
export class VideoSurveillanceAsAServiceVsaasSlaPage {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);
  readonly page = SLA_DOCUMENTS['vsaas'];

  constructor() {
    this.seo.set(this.page.title + ' — XcellHost', this.page.tagline, '/video-surveillance-as-a-service-vsaas-sla/');
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const location = this.document.defaultView?.location;
    if (location) this.document.defaultView?.history.replaceState(null, '', `${location.pathname}${location.search}#${sectionId}`);
  }
}
