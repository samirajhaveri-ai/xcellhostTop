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
  { icon: 'business', label: 'CA Cloud', blurb: 'Accounting & audit automation for CAs — free trial', service: 'CA Cloud' },
  { icon: 'business', label: 'SMB Cloud', blurb: 'Simplify operations, mitigate risk', service: 'SMB Cloud' },
  { icon: 'bank', label: 'BFSI Cloud', blurb: 'Explore BFSI Cloud services, features and solutions.', service: 'BFSI Cloud' },
  { icon: 'bank', label: 'Insurance Cloud', blurb: 'Explore Insurance Cloud services, features and solutions.', service: 'Insurance Cloud' },
  { icon: 'factory', label: 'Manufacturing Cloud', blurb: 'Explore Manufacturing Cloud services, features and solutions.', service: 'Manufacturing Cloud' },
  { icon: 'business', label: 'Government Cloud', blurb: 'Explore Government Cloud services, features and solutions.', service: 'Government Cloud' },
  { icon: 'education', label: 'Higher Education Cloud', blurb: 'Explore Higher Education Cloud services, features and solutions.', service: 'Higher Education Cloud' },
  { icon: 'business', label: 'Pharmaceutical Cloud', blurb: 'Explore Pharmaceutical Cloud services, features and solutions.', service: 'Pharmaceutical Cloud' },
  { icon: 'business', label: 'Construction Cloud', blurb: 'Explore Construction Cloud services, features and solutions.', service: 'Construction Cloud' },
  { icon: 'business', label: 'Food & Beverage', blurb: 'Technology designed for food and beverage operations', service: 'Food & Beverage' },
  { icon: 'logistics', label: 'Logistics Cloud', blurb: 'Explore Logistics Cloud services, features and solutions.', service: 'Logistics Cloud' },
  { icon: 'healthcare', label: 'HealthCare Cloud', blurb: 'Explore HealthCare Cloud services, features and solutions.', service: 'HealthCare Cloud' },
  { icon: 'retail', label: 'Retail Cloud', blurb: 'Explore Retail Cloud services, features and solutions.', service: 'Retail Cloud' },
]; 

const INDUSTRY_ICON_PATHS: Readonly<Record<string, string>> = {
  bank: 'M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3 3 8h18l-9-5Z',
  factory: 'M3 21V9l6 4V9l6 4V6h6v15H3Zm3-3h2m3 0h2m3 0h2M18 6V3h3v3',
  accounting: 'M4 3h16v18H4V3Zm4 4h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 4h8',
  education: 'm2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 3 9 3 12 0v-5m4-2v6',
  healthcare: 'M9 4v6a3 3 0 0 0 6 0V4m-8 0h4m2 0h4m-5 9v2a4 4 0 0 0 8 0v-1m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  business: 'M4 21V8h10v13M8 12h2m-2 4h2m7 5V4h3v17M3 21h19',
  retail: 'M5 8h14l-1 13H6L5 8Zm3 0V6a4 4 0 0 1 8 0v2',
  logistics: 'M3 6h11v11H3V6Zm11 4h4l3 4v3h-7v-7ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
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
        <div class="sec-head ind-head" xhReveal>
          <div class="ind-eyebrow">Industries</div>
          <h2>Cloud, Cyber Security & AI Solutions for Every Indian Industry</h2>
          <p>Reliable, secure, and scalable cloud servers in India designed for BFSI, healthcare, e-commerce, SaaS, and more.</p>
        </div>
        <div class="ind-grid">
          @for (i of cards; track i.service) {
            <a class="ind" [attr.data-p]="i.service" [routerLink]="i.link">
              <span class="ind-i" [attr.data-icon]="i.icon" aria-hidden="true"
                ><svg viewBox="0 0 24 24"><path [attr.d]="i.iconPath" /></svg></span
              ><span class="ind-copy"><b>{{ i.label }}</b><span>{{ i.blurb }}</span></span>
            </a>
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
