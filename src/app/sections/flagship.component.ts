import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

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

type FlagshipGroup = 'business' | 'infrastructure' | 'protection' | 'workplace';

interface FlagshipTab {
  readonly id: FlagshipGroup;
  readonly label: string;
}

const FLAGSHIP_TABS: readonly FlagshipTab[] = [
  { id: 'business', label: 'SMB Cloud' },
  { id: 'infrastructure', label: 'Cloud Infra' },
  { id: 'protection', label: 'Cloud Data Protect' },
  { id: 'workplace', label: 'Cloud Productivity' },
];

const FLAGSHIP_CARD_GROUPS: Readonly<Record<string, readonly FlagshipGroup[]>> = {
  'Tally on Cloud': ['business'],
  'Backup Cloud': ['business'],
  'Cloud Drive': ['business'],
  'Advanced EDR': ['business'],
  'Advanced RMM': ['business'],
  'SMB Cyber Security Appliance': ['business'],
  'SMB Cloud Desktop': ['business'],
  'WhatsApp SMB': ['business'],
  'Performance Cloud': ['infrastructure'],
  'Bare Metal Server': ['infrastructure'],
  'GPU Cloud': ['infrastructure'],
  'Global Cloud': ['infrastructure'],
  'Cloud Object Storage': ['protection'],
  'Cloud Disaster Recovery': ['protection'],
  'Microsoft 365 Backup': ['protection'],
  'Cloud Mobile Device Mgmt': ['protection'],
  'DPDPA Platform': [],
  'Business Email': ['workplace'],
  'Advanced Email Security': ['workplace'],
  'Google Workspace': ['workplace'],
  DMARC: ['workplace'],
  'Microsoft 365': [],
};

const SMB_CLOUD_ORDER = [
  'Tally on Cloud',
  'Backup Cloud',
  'Cloud Drive',
  'Advanced EDR',
  'Advanced RMM',
  'SMB Cyber Security Appliance',
  'SMB Cloud Desktop',
  'WhatsApp SMB',
] as const;

const CLOUD_INFRA_ORDER = [
  'Bare Metal Server',
  'Performance Cloud',
  'GPU Cloud',
  'Global Cloud',
] as const;

const CLOUD_DATA_PROTECT_ORDER = [
  'Cloud Object Storage',
  'Cloud Disaster Recovery',
  'Microsoft 365 Backup',
  'Cloud Mobile Device Mgmt',
] as const;

const CLOUD_PRODUCTIVITY_ORDER = [
  'Business Email',
  'Advanced Email Security',
  'Google Workspace',
  'DMARC',
] as const;

/** Lightweight line icons used by the flagship cards (24px view box). */
const FLAGSHIP_ICON_PATHS: Readonly<Record<string, string>> = {
  chart: 'M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M2 20h20',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4',
  backup: 'M3 12a9 9 0 1 0 3-6.7M3 4v5h5m4-2v5l3 2',
  desktop: 'M3 4h18v12H3V4Zm5 16h8m-4-4v4',
  folder: 'M3 6h7l2 2h9v10H3V6Z',
  lock: 'M7 10V7a5 5 0 0 1 10 0v3m-11 0h12v10H6V10Zm6 4v2',
  message: 'M4 5h16v12H8l-4 3V5Zm4 6h.01M12 11h.01M16 11h.01',
  mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7',
  bolt: 'm13 2-9 12h7l-1 8 10-13h-7V2Z',
  server: 'M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6M11 17h6',
  chip: 'M7 7h10v10H7V7Zm3 3h4v4h-4v-4ZM9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3',
  globe: 'M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18M4.9 7h14.2M4.9 17h14.2',
  database: 'M4 6c0-2 3.6-3 8-3s8 1 8 3-3.6 3-8 3-8-1-8-3Zm0 0v6c0 2 3.6 3 8 3s8-1 8-3V6m-16 6v6c0 2 3.6 3 8 3s8-1 8-3v-6',
  recovery: 'M4 4v6h6M5.5 15a8 8 0 1 0 .5-7',
  mobile: 'M7 2h10v20H7V2Zm4 16h2',
  workspace: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z',
  verified: 'M12 3 20 7v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V7l8-4Zm-4 9 2.5 2.5L16 9',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4',
  compliance: 'M6 3h12v18H6V3Zm3 5h6m-6 4h6m-6 4h3',
};

const FLAGSHIP_CARDS: readonly FlagshipCard[] = [
  
  {
    icon: 'chart', badge: 'Top seller', hot: true, title: 'Tally on Cloud',
    blurb: 'Run Tally anywhere with ransomware-proof backups every 3 hours.',
    lead: 'from ', amount: '₹499', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'shield', badge: 'Flagship', hot: true, title: 'Advanced EDR',
    blurb: 'AI-powered endpoint detection and response, backed by our 24×7 SOC.',
    lead: 'from ', amount: '₹999', tail: ' quote', cta: 'View plans →', category: 'Security',
    service: 'Advanced Endpoint Security (EDR)',
  },
  {
    icon: 'backup', badge: 'Data protection', title: 'Backup Cloud',
    blurb: 'Encrypted, ransomware-proof backup for servers, endpoints and M365.',
    lead: 'from ', amount: '₹6', tail: '/GB/mo', cta: 'View plans →', category: 'Cloud',
    service: 'Cloud Backup (Acronis)',
  },
  {
    icon: 'desktop', badge: 'Workspace', title: 'SMB Cloud Desktop',
    blurb: 'Secure desktop, apps and files from any device, anywhere.',
    lead: 'from ', amount: '₹999', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'folder', badge: 'File share', title: 'Cloud Drive',
    blurb: 'Secure file sync, team folders and controlled sharing on every device.',
    lead: '', amount: '₹499/-', tail: ' /50 GB · unlimited users', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'lock', badge: 'New', hot: true, title: 'SMB Cyber Security Appliance',
    blurb: 'Cloud firewall, secure Wi-Fi Routers & threat protection for Small Businesses up to 100 users.',
    lead: 'from ', amount: '₹24,999', tail: '/year', cta: 'View plans →', category: 'Security',
  },
  {
    icon: 'message', badge: 'Business messaging', title: 'WhatsApp SMB',
    blurb: 'WhatsApp Business API for campaigns, automation and a shared inbox.',
    lead: 'from ', amount: '₹1,249', tail: '/month', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'workspace', badge: 'Productivity', title: 'Microsoft 365',
    blurb: 'Collaborate, create and innovate with the full M365 suite.',
    lead: 'from ', amount: '₹135', tail: '/user/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'bolt', badge: 'Compute', title: 'Performance Cloud',
    blurb: 'Screaming-fast cloud servers optimised for demanding workloads.',
    lead: 'from ', amount: '₹999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'server', badge: 'Infrastructure', title: 'Bare Metal Server',
    blurb: 'Single-tenant dedicated hardware in Indian Tier-4 datacenters.',
    lead: 'from ', amount: '₹6,999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
    service: 'Bare Metal Server',
  },
  {
    icon: 'chip', badge: 'AI / ML', title: 'GPU Cloud',
    blurb: 'NVIDIA GPU servers for ML, rendering and scientific computing.',
    lead: 'from ', amount: '₹14,999', tail: '/server/mo', cta: 'View plans →', category: 'Cloud',
  },
  {
    icon: 'globe', badge: 'Multi-region', title: 'Global Cloud',
    blurb: 'Deploy and manage workloads across multiple global cloud regions.',
    lead: '', amount: 'Regional', tail: ' pricing', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'database', badge: 'Object storage', title: 'Cloud Object Storage',
    blurb: 'S3 storage for media, backups and datasets with Indian data residency.',
    lead: '', amount: 'Per-GB', tail: ' slabs', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'recovery', badge: 'Business continuity', title: 'Cloud Disaster Recovery',
    blurb: 'Automated replication, tested failover and one-click disaster recovery.',
    lead: '', amount: 'Per-VM', tail: ' plans', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'backup', badge: 'Best seller', hot: true, title: 'Microsoft 365 Backup',
    blurb: 'Backup Exchange, SharePoint, OneDrive and Teams with granular recovery.',
    lead: '', amount: 'Per-user', tail: '/month', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'mobile', badge: 'Device security', title: 'Cloud Mobile Device Mgmt',
    blurb: 'Manage mobile devices with encryption, app controls and remote wipe.',
    lead: '', amount: 'Per-device', tail: '/month', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'mail', badge: 'Business mail', title: 'Business Email',
    blurb: 'Professional business email with spam protection and mobile sync.',
    lead: '', amount: 'Per-mailbox', tail: '/month', cta: 'Explore →', category: 'Cloud',
    service: 'Business E-Mail',
  },
  {
    icon: 'shield', badge: 'Email defence', title: 'Advanced Email Security',
    blurb: 'AI protection against phishing, impersonation, BEC and zero-day threats.',
    lead: '', amount: 'Per-user', tail: '/month', cta: 'Explore →', category: 'Security',
  },
  {
    icon: 'workspace', badge: 'Collaboration', title: 'Google Workspace',
    blurb: 'Gmail, Drive, Meet and Docs with migration and local support.',
    lead: '', amount: 'Per-user', tail: '/month', cta: 'Explore →', category: 'Cloud',
  },
  {
    icon: 'verified', badge: 'Best seller', hot: true, title: 'DMARC',
    blurb: 'Stop domain spoofing with managed SPF, DKIM and DMARC enforcement.',
    lead: '', amount: 'Per-domain', tail: ' plans', cta: 'Explore →', category: 'Security',
    service: 'Secure DMARC',
  },
  {
    icon: 'settings', badge: 'Remote management', title: 'Advanced RMM',
    blurb: 'Manage endpoints with alerts, remote access, patching and automation.',
    lead: 'from ', amount: '₹1,199', tail: '/user/year', cta: 'View plans →', category: 'Cloud',
    service: 'Remote Monitoring & Mgmt (RMM)',
  },
  {
    icon: 'compliance', badge: 'In focus', hot: true, title: 'DPDPA Platform',
    blurb: 'Consent, data mapping, DPO services and audit readiness — platform + experts.',
    lead: '', amount: 'Free', tail: ' readiness assessment', cta: 'Book assessment →', category: 'Security',
    service: 'DPDPA Platform & Consulting',
  },
];

/** The ten headline products, priced, above the full directory. */
@Component({
  selector: 'xh-flagship',
  standalone: true,
  imports: [RevealDirective],
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
        <div class="flag-tabs" role="tablist" aria-label="Flagship service categories" xhReveal>
          @for (tab of tabs; track tab.id) {
            <button
              type="button"
              role="tab"
              [id]="'flag-tab-' + tab.id"
              [class.active]="activeTab() === tab.id"
              [attr.aria-selected]="activeTab() === tab.id"
              [attr.aria-controls]="'flag-panel-' + tab.id"
              (click)="selectTab(tab.id)"
            >
              <span>{{ tab.label }}</span>
            </button>
          }
        </div>
        <div
          class="prod-grid prod-grid-tabbed"
          [class.smb-grid]="activeTab() === 'business'"
          [class.infra-grid]="activeTab() === 'infrastructure'"
          [class.protect-grid]="activeTab() === 'protection'"
          [class.productivity-grid]="activeTab() === 'workplace'"
          role="tabpanel"
          [id]="'flag-panel-' + activeTab()"
          [attr.aria-labelledby]="'flag-tab-' + activeTab()"
        >
          @for (c of visibleCards(); track c.title) {
            <a
              class="card"
              xhReveal
              [href]="c.link"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="'Explore ' + c.title + ' (opens in a new tab)'"
            >
              <span class="cicon" [attr.data-icon]="c.icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path [attr.d]="c.iconPath" />
                </svg>
              </span>
              <span class="badge" [class.hot]="c.hot">{{ c.badge }}</span>
              <h3>{{ c.title }}</h3>
              <p>{{ c.blurb }}</p>
              <div class="price">{{ c.lead }}<b>{{ c.amount }}</b>{{ c.tail }}</div>
              <span class="more">{{ c.cta }}</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class FlagshipComponent {
  private readonly catalog = inject(CatalogService);

  readonly tabs = FLAGSHIP_TABS;
  readonly activeTab = signal<FlagshipGroup>('business');

  /** every card, with the product route resolved through the catalogue */
  readonly cards = FLAGSHIP_CARDS.map((c) => {
    const name = c.service ?? c.title;
    return {
      ...c,
      cta: 'Explore →',
      iconPath: FLAGSHIP_ICON_PATHS[c.icon],
      groups: FLAGSHIP_CARD_GROUPS[c.title],
      link: '/' + slugify(this.catalog.findInDirectory(name)?.name ?? name),
    };
  });

  readonly visibleCards = computed(() => {
    const group = this.activeTab();
    const cards = this.cards.filter((card) => card.groups.includes(group));

    if (group === 'business') {
      return cards.sort(
        (a, b) => SMB_CLOUD_ORDER.indexOf(a.title as (typeof SMB_CLOUD_ORDER)[number])
          - SMB_CLOUD_ORDER.indexOf(b.title as (typeof SMB_CLOUD_ORDER)[number]),
      );
    }

    if (group === 'infrastructure') {
      return cards.sort(
        (a, b) => CLOUD_INFRA_ORDER.indexOf(a.title as (typeof CLOUD_INFRA_ORDER)[number])
          - CLOUD_INFRA_ORDER.indexOf(b.title as (typeof CLOUD_INFRA_ORDER)[number]),
      );
    }

    if (group === 'protection') {
      return cards.sort(
        (a, b) => CLOUD_DATA_PROTECT_ORDER.indexOf(a.title as (typeof CLOUD_DATA_PROTECT_ORDER)[number])
          - CLOUD_DATA_PROTECT_ORDER.indexOf(b.title as (typeof CLOUD_DATA_PROTECT_ORDER)[number]),
      );
    }

    if (group === 'workplace') {
      return cards.sort(
        (a, b) => CLOUD_PRODUCTIVITY_ORDER.indexOf(a.title as (typeof CLOUD_PRODUCTIVITY_ORDER)[number])
          - CLOUD_PRODUCTIVITY_ORDER.indexOf(b.title as (typeof CLOUD_PRODUCTIVITY_ORDER)[number]),
      );
    }

    return cards;
  });

  selectTab(tab: FlagshipGroup): void {
    this.activeTab.set(tab);
  }
}
