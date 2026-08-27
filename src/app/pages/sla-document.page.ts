import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { SLA_DOCUMENTS } from '../data/sla-documents.data';

@Component({
  selector: 'xh-sla-document-page', standalone: true, imports: [RouterLink],
  templateUrl: './sla-document.page.html', styleUrl: './acronis-advanced-edr-sla.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush, host: { style: 'display: contents' },
})
export class SlaDocumentPage {
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly key = toSignal(this.route.data.pipe(map((data) => String(data['slaKey'] ?? ''))), { initialValue: '' });
  readonly page = computed(() => SLA_DOCUMENTS[this.key()] ?? null);

  constructor() {
    effect(() => {
      const page = this.page();
      if (!page) { void this.router.navigate(['/']); return; }
      this.seo.set(`${page.title} — XcellHost`, page.tagline, `/${page.slug}/`);
    });
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
