import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { RevealDirective } from '../shared/reveal.directive';

/** One `.ind` tile in the sector grid. */
interface IndustryCard {
  /** the emoji in `.ind-i` */
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
    icon: '🏦', label: 'BFSI',
    blurb: 'RBI-aligned cloud, DPDPA readiness, regulated-grade security',
    service: 'BFSI / Financial Services',
  },
  {
    icon: '🏭', label: 'Manufacturing',
    blurb: 'IT + OT security, ERP hosting, production-aware DR',
    service: 'Manufacturing',
  },
  {
    icon: '📊', label: 'CA & Accounting',
    blurb: 'The whole practice on cloud — Tally, tax tools, client files',
    service: 'CA Cloud',
  },
  {
    icon: '🏛', label: 'Government',
    blurb: 'Indian data residency, tender-ready certifications',
    service: 'Government',
  },
  {
    icon: '🎓', label: 'Education',
    blurb: 'Cloud labs, research computing, campus security',
    service: 'Higher Education & University',
  },
  {
    icon: '💊', label: 'Pharma & More',
    blurb: 'Validation trails, multi-site connectivity, sector-fit solutions',
    service: 'Pharma · Construction · F&B · Logistics',
  },
];

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
              <span class="ind-i">{{ i.icon }}</span
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
    link: '/' + slugify(this.catalog.findInDirectory(i.service)?.name ?? i.service),
  }));
}
