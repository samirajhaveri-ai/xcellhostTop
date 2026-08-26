import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, switchMap, timer } from 'rxjs';

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

interface StrapiListResponse {
  readonly data: readonly CmsBlogPost[];
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

  watchBySlug(slug: string): Observable<CmsBlogPost | null> {
    // The hosting WAF rejects Strapi filter parameters containing `$eq` with a
    // 403 response. Reuse the published list and resolve the slug client-side.
    return this.posts$.pipe(
      map((posts) => posts.find((post) => post.slug === slug) ?? null)
    );
  }

  private list(): Observable<readonly CmsBlogPost[]> {
    const params = new HttpParams()
      .set('sort[0]', 'date:desc')
      .set('sort[1]', 'time:desc')
      .set('populate', 'coverImage')
      .set('pagination[pageSize]', '100');

    return this.http
      .get<StrapiListResponse>(this.endpoint, { params })
      .pipe(map((response) => response.data.map((post) => this.normalise(post))));
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
