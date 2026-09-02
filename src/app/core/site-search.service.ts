import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Route, Router } from '@angular/router';

import { BlogApiService, CmsBlogPost } from './blog-api.service';
import { CatalogService, slugify } from './catalog.service';
import { CATEGORY_COLORS } from '../data/category.data';
import { COMPANY_PAGES } from '../data/company.data';
import { DPDPA_MODULES } from '../data/dpdpa.data';
import { DEEP_CONTENT, RICH_PRODUCTS } from '../data/products.data';
import { SIMPLE_PAGES } from '../data/site.data';

export type SearchResultKind = 'Product' | 'Blog' | 'Page';

export interface SiteSearchResult {
  readonly name: string;
  readonly desc: string;
  readonly label: string;
  readonly url: string;
  readonly color: string;
  readonly kind: SearchResultKind;
  readonly compareName?: string;
  /** Normalised text used for matching but never rendered. */
  readonly searchText: string;
}

const PRODUCT_COLOR = '#1565D8';
const BLOG_COLOR = '#FF7A1A';
const PAGE_COLOR = '#6B46C1';

/**
 * One index for products, routed pages, generated content pages and live CMS blogs.
 * Product additions flow from the catalogue, CMS posts refresh with BlogApiService,
 * and any new concrete Angular route is included automatically.
 */
@Injectable({ providedIn: 'root' })
export class SiteSearchService {
  private readonly catalog = inject(CatalogService);
  private readonly router = inject(Router);
  private readonly blogApi = inject(BlogApiService);

  private readonly staticItems = this.buildStaticItems();
  private readonly blogItems = signal<readonly SiteSearchResult[]>([]);

  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.blogItems.set(posts.map((post) => this.blogResult(post))),
      // Products and pages remain searchable if the CMS is temporarily offline.
      error: () => this.blogItems.set([]),
    });
  }

  featured(limit = 8): SiteSearchResult[] {
    const pattern =
      /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;
    return this.staticItems.filter((item) => item.kind === 'Product' && pattern.test(item.name)).slice(0, limit);
  }

  search(query: string, limit = 16): SiteSearchResult[] {
    const normalised = this.normalise(query);
    if (!normalised) return [];
    const terms = normalised.split(' ').filter(Boolean);

    return [...this.staticItems, ...this.blogItems()]
      .map((item) => ({ item, score: this.score(item, normalised, terms) }))
      .filter((candidate) => candidate.score > 0)
      .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
      .slice(0, limit)
      .map((candidate) => candidate.item);
  }

  private buildStaticItems(): SiteSearchResult[] {
    const items: SiteSearchResult[] = [];
    const urls = new Set<string>();
    const add = (item: SiteSearchResult): void => {
      if (urls.has(item.url)) return;
      urls.add(item.url);
      items.push(item);
    };

    // Includes both directory products and menu-only products.
    for (const slug of this.catalog.slugs) {
      const entry = this.catalog.entryBySlug(slug);
      if (!entry) continue;
      add({
        name: entry.name,
        desc: entry.desc,
        label: entry.cat,
        url: `/${slug}`,
        color: CATEGORY_COLORS[entry.cat] ?? PRODUCT_COLOR,
        kind: 'Product',
        compareName: entry.name,
        searchText: this.normalise(`${entry.name} ${entry.desc} ${entry.cat} ${entry.group}`),
      });
    }

    // Hand-written product pages can exist before they are added to the directory.
    const extraProductNames = new Set([...Object.keys(DEEP_CONTENT), ...Object.keys(RICH_PRODUCTS)]);
    for (const name of extraProductNames) {
      const slug = slugify(name);
      const rich = RICH_PRODUCTS[name];
      const overview = this.catalog.rich(name)?.ov;
      add({
        name,
        desc: rich?.tagline ?? overview ?? 'Explore this XcellHost product and its capabilities.',
        label: 'Product',
        url: `/${slug}`,
        color: PRODUCT_COLOR,
        kind: 'Product',
        searchText: this.normalise(
          `${name} ${rich?.tagline ?? ''} ${overview ?? ''} ${rich?.heroPoints.join(' ') ?? ''}`
        ),
      });
    }

    add(this.pageResult('Home', 'Cloud, cybersecurity, digital trust and managed services.', '/'));

    // Pages backed by keyed content collections cannot be inferred from a :slug route.
    for (const [slug, page] of Object.entries(COMPANY_PAGES)) {
      add(this.pageResult(page.title, `${page.tagline} ${page.intro}`, `/company/${slug}`));
    }
    for (const module of Object.values(DPDPA_MODULES)) {
      add(this.pageResult(module.t, module.tag, `/securesetu-dpdpa/${module.slug}`));
    }
    for (const category of this.catalog.categories) {
      add(this.pageResult(category.name, category.sub, `/category/${encodeURIComponent(category.name)}`));
    }

    // Every new non-parameterised route becomes searchable without another list.
    for (const route of this.router.config) this.addRoute(route, '', add);
    return items;
  }

  private addRoute(route: Route, parent: string, add: (item: SiteSearchResult) => void): void {
    const path = route.path ?? '';
    if (path.includes(':') || path.includes('*') || route.redirectTo) return;
    const fullPath = [parent, path].filter(Boolean).join('/');
    if (fullPath) {
      const simpleKey = typeof route.data?.['key'] === 'string' ? route.data['key'] : '';
      const simple = simpleKey ? SIMPLE_PAGES[simpleKey] : undefined;
      const title =
        String(route.data?.['searchTitle'] ?? route.data?.['title'] ?? simple?.t ?? '') ||
        this.humanise(path);
      const desc = String(
        route.data?.['searchDescription'] ?? simple?.g ?? `Explore XcellHost's ${title} page.`
      );
      add(this.pageResult(title, desc, `/${fullPath}`));
    }
    for (const child of route.children ?? []) this.addRoute(child, fullPath, add);
  }

  private pageResult(name: string, desc: string, url: string): SiteSearchResult {
    return {
      name,
      desc: this.plainText(desc),
      label: 'Page',
      url,
      color: PAGE_COLOR,
      kind: 'Page',
      searchText: this.normalise(`${name} ${this.plainText(desc)} ${url.replace(/[/-]/g, ' ')}`),
    };
  }

  private blogResult(post: CmsBlogPost): SiteSearchResult {
    const desc = this.plainText(post.description);
    return {
      name: post.title,
      desc,
      label: 'Blog',
      url: `/insights/${post.slug}`,
      color: BLOG_COLOR,
      kind: 'Blog',
      searchText: this.normalise(
        `${post.title} ${desc} ${this.plainText(post.content)} ${post.category} ${post.author}`
      ),
    };
  }

  private score(item: SiteSearchResult, query: string, terms: readonly string[]): number {
    const title = this.normalise(item.name);
    if (!terms.every((term) => item.searchText.includes(term))) return 0;
    let score = terms.length * 10;
    if (title === query) score += 200;
    else if (title.startsWith(query)) score += 120;
    else if (title.includes(query)) score += 80;
    else if (item.searchText.includes(query)) score += 35;
    if (item.kind === 'Product') score += 3;
    return score;
  }

  private humanise(path: string): string {
    return path
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  private plainText(value: string): string {
    return value.replace(/<[^>]*>/g, ' ').replace(/&[a-z0-9#]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  }

  private normalise(value: string): string {
    return this.plainText(value).toLocaleLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
}
