import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { RevealDirective } from '../shared/reveal.directive';

/** One `#flagship .card`. */
interface FlagshipCard {
  /** the emoji in `.cicon` */
  readonly icon: string;
  /** the `.badge` text — `hot` gives it the highlighted variant */
  readonly badge: string;
  readonly hot?: boolean;
  readonly title: string;
  readonly blurb: string;
  /** `.price` is `{lead}<b>{amount}</b>{tail}` */
  readonly lead: string;
  readonly amount: string;
  readonly tail: string;
  /** the `a.more` label */
  readonly cta: string;
  /** which practice the card belongs to */
  readonly category: 'Cloud' | 'Security';
  /**
   * Catalogue service this card opens. Defaults to `title`; set explicitly
   * where the card headline is shorter than the catalogue name.
   */
  readonly service?: string;
}

const FLAGSHIP_CARDS: readonly FlagshipCard[] = [
  
  {
    icon: '📊', badge: 'Top seller', hot: true, title: 'Tally on Cloud',
    blurb: 'Run Tally from any device, anywhere — ransomware-proof backups every 3 hours.',
    lead: 'from ', amount: '₹499', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: '🛡️', badge: 'Flagship', hot: true, title: 'Acronis EDR',
    blurb: 'AI-powered Endpoint Detection & Response — detect, analyse and stop advanced threats across every endpoint, backed by our 24×7 SOC.',
    lead: 'from ', amount: '₹999', tail: ' quote', cta: 'View plans →', category: 'Security',
  },
  {
    icon: '🛡️', badge: 'Data protection', title: 'Acronis Cloud Backup',
    blurb: 'Encrypted, ransomware-proof backup for servers, endpoints and M365.',
    lead: 'from ', amount: '₹6', tail: '/GB/mo', cta: 'View plans →', category: 'Cloud',
    service: 'Cloud Backup (Acronis)',
  },
  {
    icon: '💻', badge: 'Workspace', title: 'SMB Cloud Desktop',
    blurb: 'Secure desktop, apps and files from any device — work from anywhere.',
    lead: 'from ', amount: '₹999', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: '📧', badge: 'Productivity', title: 'Microsoft 365',
    blurb: 'Collaborate, create and innovate with the full M365 suite.',
    lead: 'from ', amount: '₹135', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: '⚡', badge: 'Compute', title: 'Performance Cloud',
    blurb: 'Screaming-fast cloud servers optimised for demanding workloads.',
    lead: 'from ', amount: '₹999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: '🖥️', badge: 'Infrastructure', title: 'Bare Metal Servers',
    blurb: 'Single-tenant dedicated hardware in Indian Tier-4 datacenters.',
    lead: 'from ', amount: '₹6,999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
    service: 'Bare Metal Server',
  },
  {
    icon: '🚀', badge: 'AI / ML', title: 'GPU Cloud',
    blurb: 'NVIDIA GPU servers for ML, rendering and scientific computing.',
    lead: 'from ', amount: '₹14,999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: '⚙️', badge: 'Remote management', title: 'Acronis RMM',
    blurb: 'Monitor, manage and secure endpoints with proactive alerts, remote access, patching and automation.',
    lead: 'from ', amount: '₹1,199', tail: '/user/year', cta: 'View plans →', category: 'Cloud',
    service: 'Remote Monitoring & Mgmt (RMM)',
  },
  {
    icon: '⚖️', badge: 'In focus', hot: true, title: 'DPDPA Platform',
    blurb: 'Consent, data mapping, DPO services and audit readiness — platform + experts.',
    lead: '', amount: 'Free', tail: ' readiness assessment', cta: 'Book assessment →', category: 'Security',
    service: 'DPDPA Platform & Consulting',
  },
];

/** The ten headline products, priced, above the full directory. */
@Component({
  selector: 'xh-flagship',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="flagship">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Flagship services</div>
          <h2>Deploy the future, today</h2>
          <p>Transparent INR pricing. Every plan includes 24×7 support and free migration.</p>
        </div>
        <div class="prod-grid">
          @for (c of cards; track c.title) {
            <article class="card" xhReveal [routerLink]="c.link">
              <span class="cicon">{{ c.icon }}</span><span class="badge" [class.hot]="c.hot">{{ c.badge }}</span>
              <h3>{{ c.title }}</h3>
              <p>{{ c.blurb }}</p>
              <div class="price">{{ c.lead }}<b>{{ c.amount }}</b>{{ c.tail }}</div>
              <a class="more" [routerLink]="c.link" (click)="$event.stopPropagation()">{{ c.cta }}</a>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class FlagshipComponent {
  private readonly catalog = inject(CatalogService);

  /** every card, with the product route resolved through the catalogue */
  readonly cards = FLAGSHIP_CARDS.map((c) => {
    const name = c.service ?? c.title;
    return { ...c, link: '/' + slugify(this.catalog.findInDirectory(name)?.name ?? name) };
  });
}
