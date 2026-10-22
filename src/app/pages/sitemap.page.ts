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

  readonly query = signal('');
  readonly entries = signal<SitemapEntry[]>([]);
  readonly loading = signal(true);
  readonly loadError = signal(false);

  readonly filteredEntries = computed(() => {
    const query = this.query().trim().toLowerCase();
    return query
      ? this.entries().filter((entry) => `${entry.title} ${entry.path}`.toLowerCase().includes(query))
      : this.entries();
  });

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

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.query.set('');
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

  private decodeXml(value: string): string {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'");
  }
}
