import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, combineLatest, EMPTY, expand, map, Observable, of, reduce, shareReplay, switchMap, timer, timeout, tap } from 'rxjs';

import { environment } from '../../environments/environment';

export interface CmsArticle {
  readonly id: number;
  readonly documentId: string;
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly content: string;
  readonly author: string;
  readonly date: string;
  readonly time: string;
  readonly category: string;
  readonly mainCategory?: string | null;
  readonly subCategory?: string | null;
  /** Product label from the website menu. `category` remains supported for older entries. */
  readonly product?: string | null;
  /** Comma-separated service URL slugs, e.g. tally-on-cloud,bare-metal-server. */
  readonly relatedPages: string | null;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly coverImage: CmsImage | null;
  readonly coverImageUrl: string | null;
}

export interface CmsBlogPost extends CmsArticle {}

export interface CmsImage {
  readonly id: number;
  readonly documentId: string;
  readonly url: string;
  readonly alternativeText: string | null;
  readonly width: number;
  readonly height: number;
}

export const INSIGHT_DOCUMENT_TYPES = [
  { label: 'Data Sheets', singular: 'data sheet', kind: 'data-sheet', endpoint: 'data-sheets' },
  { label: 'Cheat Sheets', singular: 'cheat sheet', kind: 'cheat-sheet', endpoint: 'cheat-sheets' },
  { label: 'Whitepapers', singular: 'whitepaper', kind: 'whitepaper', endpoint: 'whitepapers' },
  { label: 'Guides', singular: 'guide', kind: 'guide', endpoint: 'guides' },
  { label: 'Ebooks', singular: 'ebook', kind: 'ebook', endpoint: 'ebooks' },
] as const;

export type CmsResourceKind = 'video' | 'use-case' | typeof INSIGHT_DOCUMENT_TYPES[number]['kind'];

/** Shared Strapi shape for the optional Videos and Use Cases collections. */
export interface CmsInsightResource extends CmsArticle {
  readonly kind: CmsResourceKind;
  readonly videoUrl: string | null;
  readonly downloadUrl?: string | null;
  /** Legacy external service link retained for older Video/Use Case entries. */
  readonly relatedPage: string | null;
}

interface RawCmsInsightResource extends Partial<Omit<CmsInsightResource, 'kind'>> {
  readonly youtubeUrl?: string | null;
  readonly link?: string | null;
}

interface StrapiListResponse {
  readonly data: readonly CmsBlogPost[];
  readonly meta?: { readonly pagination: { readonly page: number; readonly pageCount: number } };
}

interface StrapiResourceListResponse {
  readonly data: readonly RawCmsInsightResource[];
  readonly meta?: { readonly pagination: { readonly page: number; readonly pageCount: number } };
}

interface YouTubeFeedResponse {
  readonly status: 'ok' | 'error';
  readonly stale?: boolean;
  readonly items?: readonly YouTubeFeedItem[];
}

interface YouTubeFeedItem {
  readonly title: string;
  readonly pubDate: string;
  readonly link: string;
  readonly guid: string;
  readonly author: string;
  readonly thumbnail: string;
  readonly description: string;
  readonly content: string;
}

/** The single source of truth for blog content displayed by the Angular app. */
@Injectable({ providedIn: 'root' })
export class BlogApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.strapiUrl.replace(/\/$/, '');
  private readonly endpoint = `${this.baseUrl}/api/blogs`;
  readonly videoStatus = signal<'loading' | 'ready' | 'cached' | 'error'>('loading');
  private lastVideos: readonly CmsInsightResource[] = [];

  /** Refreshes in the background so CMS edits appear without rebuilding the UI. */
  readonly posts$: Observable<readonly CmsBlogPost[]> = timer(0, 30_000).pipe(
    switchMap(() => this.list()),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Latest channel uploads, with a saved channel snapshot during outages. */
  readonly videos$ = timer(0, 15 * 60_000).pipe(
    switchMap(() =>
      this.listYouTubeVideos().pipe(
        catchError(() => this.http.get<YouTubeFeedResponse>('/feeds/youtube-snapshot.json').pipe(
          timeout(10_000),
          map(response => this.readYouTubeFeed({ ...response, stale: true })),
          catchError(() => {
            this.videoStatus.set(this.lastVideos.length ? 'cached' : 'error');
            return of(this.lastVideos);
          })
        )),
        tap(items => { this.lastVideos = items; })
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Strapi Use Case collection, presented alongside blogs in the Insights hub. */
  readonly useCases$ = this.resourceStream('use-cases', 'use-case');

  /** Each document collection uses the same category fields as blogs. */
  readonly documents$ = combineLatest(INSIGHT_DOCUMENT_TYPES.map(type =>
    this.resourceStream(type.endpoint, type.kind)
  )).pipe(
    map(collections => collections.flat().filter(item => Boolean(item.downloadUrl))),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  watchBySlug(slug: string): Observable<CmsBlogPost | null> {
    // The hosting WAF rejects Strapi filter parameters containing `$eq` with a
    // 403 response. Reuse the published list and resolve the slug client-side.
    return this.posts$.pipe(
      map((posts) => posts.find((post) => post.slug === slug) ?? null)
    );
  }

  watchUseCaseBySlug(slug: string): Observable<CmsInsightResource | null> {
    return this.useCases$.pipe(
      map((items) => items.find((item) => item.slug === slug) ?? null)
    );
  }

  private list(): Observable<readonly CmsBlogPost[]> {
    return this.listPage(1).pipe(
      expand((response) => {
        const pagination = response.meta?.pagination;
        return pagination && pagination.page < pagination.pageCount
          ? this.listPage(pagination.page + 1)
          : EMPTY;
      }),
      reduce(
        (posts, response) => posts.concat(
          response.data
            .filter((post) => this.isAvailableArticle(post))
            .map((post) => this.normalise(post))
        ),
        [] as CmsBlogPost[]
      )
    );
  }

  private listPage(page: number): Observable<StrapiListResponse> {
    const params = new HttpParams()
      .set('sort[0]', 'date:desc')
      .set('sort[1]', 'time:desc')
      .set('populate', 'coverImage')
      .set('pagination[page]', page)
      .set('pagination[pageSize]', '100');

    return this.http.get<StrapiListResponse>(this.endpoint, { params });
  }

  private resourceStream(endpoint: string, kind: CmsResourceKind): Observable<readonly CmsInsightResource[]> {
    return timer(0, 30_000).pipe(
      // These collections are optional while they are being created in Strapi.
      // Keep the timer alive after a 404 so newly published content appears later.
      switchMap(() => this.listResources(endpoint, kind).pipe(catchError(() => of([])))),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  private listResources(endpoint: string, kind: CmsResourceKind): Observable<readonly CmsInsightResource[]> {
    return this.listResourcePage(endpoint, 1).pipe(
      expand((response) => {
        const pagination = response.meta?.pagination;
        return pagination && pagination.page < pagination.pageCount
          ? this.listResourcePage(endpoint, pagination.page + 1)
          : EMPTY;
      }),
      reduce(
        (items, response) => items.concat(response.data.map((item) => this.normaliseResource(item, kind))),
        [] as CmsInsightResource[]
      )
    );
  }

  private listResourcePage(endpoint: string, page: number): Observable<StrapiResourceListResponse> {
    const params = new HttpParams()
      .set('sort[0]', 'date:desc')
      .set('sort[1]', 'time:desc')
      .set('populate', 'coverImage')
      .set('pagination[page]', page)
      .set('pagination[pageSize]', '100');

    return this.http.get<StrapiResourceListResponse>(`${this.baseUrl}/api/${endpoint}`, { params });
  }

  private listYouTubeVideos(): Observable<readonly CmsInsightResource[]> {
    return this.http.get<YouTubeFeedResponse>(environment.youtubeFeedApi).pipe(
      timeout(20_000),
      map(response => this.readYouTubeFeed(response))
    );
  }

  private readYouTubeFeed(response: YouTubeFeedResponse): readonly CmsInsightResource[] {
    if (response.status !== 'ok' || !response.items?.length) throw new Error('YouTube feed unavailable');
    const items = response.items.map(item => this.normaliseYouTubeVideo(item));
    this.videoStatus.set(response.stale ? 'cached' : 'ready');
    return items;
  }

  private normalise(post: CmsBlogPost): CmsBlogPost {
    const url = post.coverImage?.url;
    return {
      ...post,
      mainCategory: post.mainCategory?.trim() || this.parentCategory(post.category),
      subCategory: post.subCategory?.trim() || post.category,
      coverImageUrl: url
        ? url.startsWith('http')
          ? url
          : `${this.baseUrl}${url}`
        : this.fallbackCover(post.category),
    };
  }

  private isAvailableArticle(post: CmsBlogPost): boolean {
    return Boolean(post.slug?.trim() && post.title?.trim() && post.content?.trim());
  }

  private normaliseResource(item: RawCmsInsightResource, kind: CmsResourceKind): CmsInsightResource {
    const imageUrl = item.coverImage?.url;
    const category = item.category ?? (kind === 'video' ? 'Videos' : kind === 'use-case' ? 'Use Cases' : 'General');
    return {
      id: item.id ?? 0,
      documentId: item.documentId ?? `${kind}-${item.slug ?? item.title ?? 'item'}`,
      kind,
      title: item.title ?? 'Untitled',
      slug: item.slug ?? '',
      description: item.description ?? '',
      content: item.content ?? '',
      author: item.author ?? 'XcellHost Team',
      date: item.date ?? item.publishedAt?.slice(0, 10) ?? new Date().toISOString().slice(0, 10),
      time: item.time ?? '09:00',
      category,
      mainCategory: item.mainCategory?.trim() || this.parentCategory(category),
      subCategory: item.subCategory?.trim() || category,
      product: item.product?.trim() || null,
      videoUrl: item.videoUrl ?? item.youtubeUrl ?? (kind === 'video' ? item.link ?? null : null),
      downloadUrl: this.documentUrl(item.downloadUrl ?? item.link),
      relatedPage: item.relatedPage ?? (kind === 'use-case' ? item.link ?? null : null),
      relatedPages: item.relatedPages ?? item.relatedPage ?? (kind === 'use-case' ? item.link ?? null : null),
      publishedAt: item.publishedAt ?? '',
      updatedAt: item.updatedAt ?? '',
      coverImage: item.coverImage ?? null,
      coverImageUrl: imageUrl
        ? imageUrl.startsWith('http')
          ? imageUrl
          : `${this.baseUrl}${imageUrl}`
        : this.fallbackCover(item.category ?? kind),
    };
  }

  private documentUrl(value: string | null | undefined): string | null {
    if (!value?.trim()) return null;
    try {
      const url = new URL(value.trim(), this.baseUrl || window.location.origin);
      return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : null;
    } catch {
      return null;
    }
  }

  private normaliseYouTubeVideo(item: YouTubeFeedItem): CmsInsightResource {
    const videoId = item.guid.replace(/^yt:video:/, '') || this.youtubeVideoId(item.link);
    const published = new Date(item.pubDate ? (/Z$|[+-]\d{2}:\d{2}$/.test(item.pubDate)
      ? item.pubDate : item.pubDate.replace(' ', 'T') + 'Z') : NaN);
    const title = this.decodeEntities(item.title);
    const description = this.decodeEntities(item.description || item.content).replace(/<[^>]+>/g, '').trim();
    const category = this.youtubeCategory(title);
    return {
      id: 0,
      documentId: `youtube-${videoId}`,
      kind: 'video',
      title,
      slug: videoId,
      description: description || `Watch ${title} from XcellHost Cloud Services.`,
      content: description,
      author: item.author || 'XcellHost Cloud Services',
      date: Number.isNaN(published.valueOf()) ? '' : published.toISOString().slice(0, 10),
      time: Number.isNaN(published.valueOf()) ? '' : published.toISOString().slice(11, 16),
      category,
      mainCategory: this.parentCategory(category),
      subCategory: category,
      product: null,
      videoUrl: item.link || `https://www.youtube.com/watch?v=${videoId}`,
      relatedPage: null,
      relatedPages: null,
      publishedAt: Number.isNaN(published.valueOf()) ? '' : published.toISOString(),
      updatedAt: '',
      coverImage: null,
      coverImageUrl: item.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    };
  }

  private youtubeCategory(value: string): string {
    const text = value.toLowerCase();
    const categories: readonly [RegExp, string][] = [
      [/dpdpa|data protection|privacy|consent|ropa|breach notification/, 'DPDPA'],
      [/tally/, 'Tally on Cloud'],
      [/microsoft 365|m365|office 365|copilot/, 'Microsoft 365'],
      [/backup|disaster recovery|ransomware/, 'Backup & Recovery'],
      [/email|dmarc|domain|ssl|certificate|digicert/, 'Digital Trust'],
      [/cyber|security|soc|siem|edr|malware|firewall/, 'Cybersecurity'],
      [/partner|reseller|cybird/, 'Partner Program'],
      [/cloud|server|hosting|storage|desktop/, 'Cloud'],
      [/\bai\b|artificial intelligence/, 'AI'],
    ];
    return categories.find(([pattern]) => pattern.test(text))?.[1] ?? 'Technology';
  }

  private parentCategory(category: string): string {
    const value = category.toLowerCase();
    if (/dpdpa|privacy|compliance|data protection/.test(value)) return 'Data Protection';
    if (/dmarc|domain|email|ssl|certificate|digital trust/.test(value)) return 'Digital Trust';
    if (/cyber|security|soc|siem|edr|malware|firewall/.test(value)) return 'Security';
    if (/microsoft 365|m365|tally|productivity|workspace/.test(value)) return 'Productivity';
    if (/backup|recovery/.test(value)) return 'Data Protection';
    if (/cloud|server|hosting|storage|desktop/.test(value)) return 'Cloud';
    if (/partner|reseller/.test(value)) return 'Partner Program';
    if (/\bai\b|artificial intelligence|automation/.test(value)) return 'AI';
    return 'Technology';
  }

  private youtubeVideoId(url: string): string {
    return url.match(/[?&]v=([^&]+)/)?.[1] ?? url.split('/').pop() ?? '';
  }

  private decodeEntities(value: string): string {
    const named: Record<string, string> = { amp: '&', apos: "'", quot: '"', lt: '<', gt: '>' };
    return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
      if (code[0] !== '#') return named[code.toLowerCase()] ?? entity;
      const point = code[1].toLowerCase() === 'x'
        ? Number.parseInt(code.slice(2), 16)
        : Number.parseInt(code.slice(1), 10);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    });
  }

  /** Keeps older posts attractive until an editor uploads their own cover. */
  private fallbackCover(category: string): string {
    const value = category.toLowerCase();
    if (value.includes('cloud drive') || value.includes('file shar')) {
      return '/assets/images/orb-smb-cloud-desktop.png';
    }
    if (value.includes('security') || value.includes('protection') || value.includes('backup')) {
      return '/assets/images/hero-cloud-backup-acronis.png';
    }
    if (value.includes('payroll')) return '/assets/images/orb-smb-cloud-desktop.png';
    if (value.includes('gst')) return '/assets/images/orb-microsoft-365.png';
    if (value.includes('account')) return '/assets/images/orb-cloud-backup.png';
    return '/assets/images/hero-tally-on-cloud.png';
  }
}
