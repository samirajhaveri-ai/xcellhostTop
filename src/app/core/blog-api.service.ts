import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, EMPTY, expand, map, Observable, of, reduce, shareReplay, switchMap, timer } from 'rxjs';

import { environment } from '../../environments/environment';

export interface CmsBlogPost {
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
  /** Comma-separated service URL slugs, e.g. tally-on-cloud,bare-metal-server. */
  readonly relatedPages: string | null;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly coverImage: CmsImage | null;
  readonly coverImageUrl: string | null;
}

export interface CmsImage {
  readonly id: number;
  readonly documentId: string;
  readonly url: string;
  readonly alternativeText: string | null;
  readonly width: number;
  readonly height: number;
}

export type CmsResourceKind = 'video' | 'use-case';

/** Shared Strapi shape for the optional Videos and Use Cases collections. */
export interface CmsInsightResource {
  readonly id: number;
  readonly documentId: string;
  readonly kind: CmsResourceKind;
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly content: string;
  readonly author: string;
  readonly date: string;
  readonly time: string;
  readonly category: string;
  readonly videoUrl: string | null;
  readonly relatedPage: string | null;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly coverImage: CmsImage | null;
  readonly coverImageUrl: string | null;
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

  /** Refreshes in the background so CMS edits appear without rebuilding the UI. */
  readonly posts$: Observable<readonly CmsBlogPost[]> = timer(0, 30_000).pipe(
    switchMap(() => this.list()),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Latest channel uploads, with the optional Strapi collection as a fallback. */
  readonly videos$ = timer(0, 15 * 60_000).pipe(
    switchMap(() =>
      this.listYouTubeVideos().pipe(
        catchError(() => this.listResources('videos', 'video').pipe(catchError(() => of([]))))
      )
    ),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /** Optional Strapi collection: title, slug, description, category, relatedPage and coverImage. */
  readonly useCases$ = this.resourceStream('use-cases', 'use-case');

  watchBySlug(slug: string): Observable<CmsBlogPost | null> {
    // The hosting WAF rejects Strapi filter parameters containing `$eq` with a
    // 403 response. Reuse the published list and resolve the slug client-side.
    return this.posts$.pipe(
      map((posts) => posts.find((post) => post.slug === slug) ?? null)
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
      reduce((posts, response) => posts.concat(response.data.map((post) => this.normalise(post))), [] as CmsBlogPost[])
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
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${environment.youtubeChannelId}`;
    const params = new HttpParams().set('rss_url', feedUrl);
    return this.http.get<YouTubeFeedResponse>(environment.youtubeFeedApi, { params }).pipe(
      map((response) => {
        if (response.status !== 'ok') throw new Error('YouTube feed unavailable');
        return (response.items ?? []).map((item) => this.normaliseYouTubeVideo(item));
      })
    );
  }

  private normalise(post: CmsBlogPost): CmsBlogPost {
    const url = post.coverImage?.url;
    return {
      ...post,
      coverImageUrl: url
        ? url.startsWith('http')
          ? url
          : `${this.baseUrl}${url}`
        : this.fallbackCover(post.category),
    };
  }

  private normaliseResource(item: RawCmsInsightResource, kind: CmsResourceKind): CmsInsightResource {
    const imageUrl = item.coverImage?.url;
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
      category: item.category ?? (kind === 'video' ? 'Videos' : 'Use Cases'),
      videoUrl: item.videoUrl ?? item.youtubeUrl ?? (kind === 'video' ? item.link ?? null : null),
      relatedPage: item.relatedPage ?? (kind === 'use-case' ? item.link ?? null : null),
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

  private normaliseYouTubeVideo(item: YouTubeFeedItem): CmsInsightResource {
    const videoId = item.guid.replace(/^yt:video:/, '') || this.youtubeVideoId(item.link);
    const published = new Date(item.pubDate.replace(' ', 'T') + 'Z');
    const title = this.decodeEntities(item.title);
    const description = this.decodeEntities(item.description || item.content).replace(/<[^>]+>/g, '').trim();
    return {
      id: 0,
      documentId: `youtube-${videoId}`,
      kind: 'video',
      title,
      slug: videoId,
      description: description || `Watch ${title} from XcellHost Cloud Services.`,
      content: description,
      author: item.author || 'XcellHost Cloud Services',
      date: Number.isNaN(published.valueOf()) ? new Date().toISOString().slice(0, 10) : published.toISOString().slice(0, 10),
      time: Number.isNaN(published.valueOf()) ? '09:00' : published.toISOString().slice(11, 16),
      category: this.youtubeCategory(`${title} ${description}`),
      videoUrl: item.link || `https://www.youtube.com/watch?v=${videoId}`,
      relatedPage: null,
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
    if (value.includes('account')) return '/assets/images/orb-gpu-cloud.png';
    return '/assets/images/hero-tally-on-cloud.png';
  }
}
