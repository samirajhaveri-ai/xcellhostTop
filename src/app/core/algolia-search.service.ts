import { Injectable, inject } from '@angular/core';
import { liteClient } from 'algoliasearch/lite';

import { environment } from '../../environments/environment';
import { SiteSearchResult, SiteSearchService } from './site-search.service';

type SearchHit = Record<string, unknown>;

/** Reads only public search credentials and never makes indexing requests. */
@Injectable({ providedIn: 'root' })
export class AlgoliaSearchService {
  private readonly siteSearch = inject(SiteSearchService);
  readonly configured = Boolean(
    environment.algoliaAppId && environment.algoliaIndexName && environment.algoliaSearchApiKey
  );

  private readonly client = this.configured
    ? liteClient(environment.algoliaAppId, environment.algoliaSearchApiKey)
    : null;

  async search(query: string): Promise<SiteSearchResult[]> {
    if (!this.client) return [];
    const response = await this.client.search<SearchHit>({
      requests: [{ indexName: environment.algoliaIndexName, query, hitsPerPage: 16 }],
    });
    const result = response.results[0];
    if (!result || !('hits' in result)) return [];
    const seen = new Set<string>();
    return result.hits
      .map((hit) => this.toResult(hit))
      .filter((hit): hit is SiteSearchResult => {
        if (!hit || seen.has(hit.url)) return false;
        seen.add(hit.url);
        return true;
      });
  }

  private toResult(hit: SearchHit): SiteSearchResult | null {
    // The supplied WordPress index still contains links from the older site.
    // Use only paths that exist in this Angular site, with current site text.
    const rawUrl = this.firstString(hit['url'], hit['path'], hit['permalink']);
    const path = this.resultPath(rawUrl);
    return path ? (this.siteSearch.resultForUrl(path) ?? null) : null;
  }

  private firstString(...values: unknown[]): string {
    return values.find((value): value is string => typeof value === 'string' && !!value.trim())?.trim() ?? '';
  }

  private resultPath(value: string): string | null {
    if (!value) return null;
    if (value.startsWith('/') && !value.startsWith('//')) return value.split(/[?#]/, 1)[0];
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
      return url.pathname;
    } catch {
      return null;
    }
  }
}
