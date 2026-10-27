import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';
import { SeoService } from '../core/seo.service';

interface SitemapEntry {
  href: string;
  path: string;
  title: string;
}

interface SitemapSection {
  title: string;
  tone: string;
  entries: SitemapEntry[];
}

interface SitemapSectionDefinition {
  title: string;
  tone: string;
  matches: RegExp;
}

const SITEMAP_SECTIONS: SitemapSectionDefinition[] = [
  {
    title: 'Web Presence',
    tone: 'green',
    matches: /domain|hosting|wordpress|website|web-design|webuzo|cpanel|plesk|seo|email-hosting|business-email|professional-email|tally-on-cloud/,
  },
  {
    title: 'Cloud & Infrastructure',
    tone: 'blue',
    matches: /cloud|server|vps|virtual|kubernetes|container|database|storage|compute|network|load-balancer|vmware|red-hat|linux|windows|gpu|colocation|bare-metal|infrastructure|devops/,
  },
  {
    title: 'Cyber Security',
    tone: 'yellow',
    matches: /security|cyber|firewall|waf|waap|sase|zero-trust|ztna|soc|siem|xdr|edr|mdr|ndr|ransomware|malware|threat|vapt|penetration|vulnerability|identity|access|endpoint|phishing|forensic|risk|compliance|dpdpa|vciso|vdpo/,
  },
  {
    title: 'Backup & Data Protection',
    tone: 'orange',
    matches: /backup|recovery|disaster|acronis|veeam|data-protection|data-loss|archive|archiving|replication|business-continuity/,
  },
  {
    title: 'Digital Workplace',
    tone: 'purple',
    matches: /microsoft|office-365|m365|workspace|desktop|remote-work|collaboration|productivity|teams|sharepoint|exchange|zoho|google-workspace|zoom|whatsapp|workforce|accops/,
  },
  {
    title: 'AI & Automation',
    tone: 'green',
    matches: /(^|\/)ai-|artificial-intelligence|automation|agent|chatbot|chat-bot|copilot|genai|machine-learning|n8n|receptionist|logo-maker/,
  },
  {
    title: 'Digital Trust',
    tone: 'blue',
    matches: /ssl|certificate|pki|digital-sign|code-sign|document-sign|e-sign|trust|geotrust|digicert|sectigo|thawte|rapidssl|wildcard|s-mime|vmc/,
  },
  {
    title: 'Company & Partners',
    tone: 'yellow',
    matches: /about|company|contact|career|partner|leadership|team|customer|testimonial|review|affiliate|reseller|vendor|investor|press|news|event|award|why-xcellhost/,
  },
  {
    title: 'Resources & Insights',
    tone: 'orange',
    matches: /blog|insight|resource|guide|glossary|podcast|webinar|case-stud|knowledge|demo|faq|what-s-new|whats-new|calculator|tool/,
  },
  {
    title: 'Legal & Help Center',
    tone: 'purple',
    matches: /privacy|legal|terms|policy|agreement|sla|support|help|refund|acceptable-use|cookie|disclaimer|grievance|copyright|sitemap/,
  },
];

@Component({
  selector: 'xh-sitemap-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sitemap.page.html',
  styleUrl: './sitemap.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SitemapPage {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  readonly entries = signal<SitemapEntry[]>([]);
  readonly loading = signal(true);
  readonly loadError = signal(false);

  readonly sections = computed(() => this.groupEntries(this.entries()));

  constructor() {
    inject(SeoService).set(
      'Sitemap | XcellHost',
      'Browse every XcellHost cloud, security, AI, infrastructure and business solution page from one searchable sitemap.',
      '/sitemap/',
    );

    forkJoin({
      xml: this.http.get('/sitemap.xml', { responseType: 'text' }),
      titles: this.http.get<Record<string, string>>('/sitemap-pages.json').pipe(catchError(() => of({}))),
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ xml, titles }) => {
          this.entries.set(this.parseSitemap(xml, titles));
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.loadError.set(true);
        },
      });
  }

  private parseSitemap(xml: string, titles: Record<string, string>): SitemapEntry[] {
    const locations = Array.from(xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi), (match) =>
      this.decodeXml(match[1].trim()),
    );

    return locations
      .map((href) => {
        try {
          const url = new URL(href);
          if (url.hostname !== 'xcellhost.cloud' && url.hostname !== 'www.xcellhost.cloud') return null;
          const path = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
          return {
            href: url.pathname,
            path,
            title: titles[path] || this.titleFromPath(path),
          } satisfies SitemapEntry;
        } catch {
          return null;
        }
      })
      .filter((entry): entry is SitemapEntry => entry !== null)
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  private titleFromPath(path: string): string {
    if (path === '/') return 'XcellHost Home';
    const segment = path.split('/').filter(Boolean).at(-1) ?? '';
    const abbreviations: Record<string, string> = {
      ai: 'AI', api: 'API', aws: 'AWS', cdn: 'CDN', crm: 'CRM', ctem: 'CTEM', dpdpa: 'DPDPA',
      edr: 'EDR', erp: 'ERP', gcp: 'GCP', gpu: 'GPU', mdr: 'MDR', nac: 'NAC', ndr: 'NDR',
      pki: 'PKI', rmm: 'RMM', sase: 'SASE', siem: 'SIEM', sla: 'SLA', smb: 'SMB', soc: 'SOC',
      ssl: 'SSL', vapt: 'VAPT', vdi: 'VDI', vpn: 'VPN', vps: 'VPS', waap: 'WAAP', waf: 'WAF', xdr: 'XDR',
    };
    return segment
      .split('-')
      .filter(Boolean)
      .map((word) => abbreviations[word] ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ');
  }

  private groupEntries(entries: SitemapEntry[]): SitemapSection[] {
    const grouped = new Map<string, SitemapEntry[]>();
    SITEMAP_SECTIONS.forEach(({ title }) => grouped.set(title, []));
    grouped.set('More XcellHost Pages', []);

    for (const entry of entries) {
      const searchable = `${entry.path} ${entry.title}`.toLowerCase();
      const section = SITEMAP_SECTIONS.find(({ matches }) => matches.test(searchable));
      grouped.get(section?.title ?? 'More XcellHost Pages')?.push(entry);
    }

    return [
      ...SITEMAP_SECTIONS.map(({ title, tone }) => ({ title, tone, entries: grouped.get(title) ?? [] })),
      { title: 'More XcellHost Pages', tone: 'gray', entries: grouped.get('More XcellHost Pages') ?? [] },
    ].filter((section) => section.entries.length > 0);
  }

  private decodeXml(value: string): string {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  }
}
