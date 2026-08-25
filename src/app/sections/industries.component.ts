import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { RevealDirective } from '../shared/reveal.directive';

/** One `.ind` tile in the sector grid. */
interface IndustryCard {
  /** semantic key for the custom SVG shown in `.ind-i` */
  readonly icon: string;
  /** the short label in `<b>` */
  readonly label: string;
  /** the one-line promise in the trailing `<span>` */
  readonly blurb: string;
  /**
   * The catalogue service the tile opens — this was the `data-p` attribute the
   * original script matched against the directory before clicking the link.
   */
  readonly service: string;
}

const INDUSTRY_CARDS: readonly IndustryCard[] = [
  {
    icon: 'bank', label: 'BFSI',
    blurb: 'RBI-aligned cloud, DPDPA readiness, regulated-grade security',
    service: 'BFSI / Financial Services',
  },
  {
    icon: 'factory', label: 'Manufacturing',
    blurb: 'IT + OT security, ERP hosting, production-aware DR',
    service: 'Manufacturing',
  },
  {
    icon: 'accounting', label: 'CA & Accounting',
    blurb: 'The whole practice on cloud — Tally, tax tools, client files',
    service: 'CA Cloud',
  },
  {
    icon: 'government', label: 'Government',
    blurb: 'Indian data residency, tender-ready certifications',
    service: 'Government',
  },
  {
    icon: 'education', label: 'Education',
    blurb: 'Cloud labs, research computing, campus security',
    service: 'Higher Education & University',
  },
  {
    icon: 'pharma', label: 'Pharma & More',
    blurb: 'Validation trails, multi-site connectivity, sector-fit solutions',
    service: 'Pharma · Construction · F&B · Logistics',
  },
];

const INDUSTRY_ICON_PATHS: Readonly<Record<string, string>> = {
  bank: 'M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3 3 8h18l-9-5Z',
  factory: 'M3 21V9l6 4V9l6 4V6h6v15H3Zm3-3h2m3 0h2m3 0h2M18 6V3h3v3',
  accounting: 'M4 3h16v18H4V3Zm4 4h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 4h8',
  government: 'M5 21V5h10v16M15 9h4v12M8 8h4m-4 4h4m-4 4h4M3 21h18M15 5l4-2v6',
  education: 'm2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 3 9 3 12 0v-5m4-2v6',
  pharma: 'M8.5 4.5a4.95 4.95 0 0 1 7 0l4 4a4.95 4.95 0 0 1-7 7l-4-4a4.95 4.95 0 0 1 0-7ZM6.5 13.5l7-7',
};

/**
 * The "built for your sector" grid. Each tile navigates to the matching
 * catalogue service page — the original found that link by scanning the
 * directory for the tile's `data-p` name, which `CatalogService` now does.
 */
@Component({
  selector: 'xh-industries',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="inds" id="industries">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Built for your sector</div>
          <h2>We know how your industry actually works</h2>
          <p>
            Compliance, uptime and workflows differ by sector. Our solutions are shaped by real
            deployments, not generic templates.
          </p>
        </div>
        <div class="ind-grid">
          @for (i of cards; track i.service) {
            <div class="ind" [attr.data-p]="i.service" [routerLink]="i.link">
              <span class="ind-i" [attr.data-icon]="i.icon" aria-hidden="true"
                ><svg viewBox="0 0 24 24"><path [attr.d]="i.iconPath" /></svg></span
              ><b>{{ i.label }}</b
              ><span>{{ i.blurb }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class IndustriesComponent {
  private readonly catalog = inject(CatalogService);

  /** every tile, with the catalogue route resolved once */
  readonly cards = INDUSTRY_CARDS.map((i) => ({
    ...i,
    iconPath: INDUSTRY_ICON_PATHS[i.icon],
    link: '/' + slugify(this.catalog.findInDirectory(i.service)?.name ?? i.service),
  }));
}
