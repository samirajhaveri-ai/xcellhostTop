import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';

const UPPERCASE_WORDS = new Set([
  'ai', 'api', 'aws', 'bimi', 'caa', 'cdn', 'csr', 'dkim', 'dmarc', 'dns', 'dpdpa',
  'dsc', 'edr', 'gcp', 'gpu', 'iso', 'mdr', 'mta', 'pki', 'rpt', 'sase', 'seo',
  'siem', 'smb', 'soc', 'spf', 'ssl', 'sts', 'tls', 'vapt', 'vdi', 'vpn', 'xdr',
]);

function pageNameFromSlug(slug: string): string {
  if (!slug) return 'This Page';
  return slug.split('-').filter(Boolean).map((word) =>
    UPPERCASE_WORDS.has(word.toLowerCase())
      ? word.toUpperCase()
      : word.charAt(0).toUpperCase() + word.slice(1),
  ).join(' ');
}

@Component({
  selector: 'xh-under-construction-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './under-construction.page.html',
  styleUrl: './under-construction.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstructionPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private readonly routeTitle = this.route.snapshot.data['title'] as string | undefined;

  private readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly pageName = computed(() => this.routeTitle ?? pageNameFromSlug(this.slug()));
  readonly pageInitial = computed(() => this.pageName().charAt(0).toUpperCase());

  constructor() {
    const pageName = this.routeTitle ?? pageNameFromSlug(this.route.snapshot.paramMap.get('slug') ?? '');
    const pagePath = this.route.snapshot.routeConfig?.path?.split('/:')[0] ?? 'under-construction';
    this.seo.set(
      `${pageName} - Under Construction | XcellHost`,
      `The ${pageName} page is currently being prepared. Please check back soon.`,
      `/${pagePath}/`,
    );
  }

}
