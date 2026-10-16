import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Route, Router } from '@angular/router';

import { BlogApiService, CmsBlogPost } from './blog-api.service';
import { CaseStudiesApiService } from './case-studies-api.service';
import { CaseStudy } from '../data/case-studies.data';
import { MEGA_MENU } from '../data/nav.data';
import { menuItemLink } from './menu-link';
import { CatalogService, slugify } from './catalog.service';
import { CATEGORY_COLORS } from '../data/category.data';
import { COMPANY_PAGES } from '../data/company.data';
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
  readonly publishedAt?: string;
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
  private readonly caseStudiesApi = inject(CaseStudiesApiService);
  readonly contentStatus = this.blogApi.postsStatus;

  private readonly staticItems = signal(this.buildStaticItems());
  private readonly blogItems = signal<readonly SiteSearchResult[]>([]);
  private readonly useCaseItems = signal<readonly SiteSearchResult[]>([]);
  private readonly caseStudyItems = signal<readonly SiteSearchResult[]>([]);

  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.blogItems.set(posts.map((post) => this.blogResult(post))),
      // Products and pages remain searchable if the CMS is temporarily offline.
      error: () => {},
    });
    this.blogApi.useCases$.pipe(takeUntilDestroyed()).subscribe({
      next: items => this.useCaseItems.set(items.map(item => ({
        ...this.blogResult(item), label: item.mainCategory || item.category || 'Use Case',
        url: `/use-cases/${item.slug}`,
      }))),
      error: () => {},
    });
    this.caseStudiesApi.studies$.pipe(takeUntilDestroyed()).subscribe({
      next: items => this.caseStudyItems.set(items.map(item => this.caseStudyResult(item))),
      error: () => {},
    });
  }

  /** Re-read concrete routes and menu links when opening search, including resetConfig changes. */
  refreshInventory(): void { this.staticItems.set(this.buildStaticItems()); }

  featured(limit = 8): SiteSearchResult[] {
    const pattern =
      /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;
    const products = this.staticItems().filter((item) => item.kind === 'Product' && pattern.test(item.name));
    const latest = this.liveItems().filter(item => item.publishedAt);
    return [...latest.slice(0, 4), ...products, ...latest.slice(4)].slice(0, limit);
  }

  /** Current site inventory, including blogs as they arrive from the CMS. */
  browse(): SiteSearchResult[] {
    const items = new Map<string, SiteSearchResult>();
    for (const item of [...this.liveItems(), ...this.staticItems()]) {
      const path = this.normalisePath(item.url);
      const previous = items.get(path);
      items.set(path, previous ? { ...previous, searchText: previous.searchText + ' ' + item.searchText } : item);
    }
    return [...items.values()];
  }

  search(query: string, limit = 16): SiteSearchResult[] {
    const normalised = this.normalise(query);
    if (!normalised) return [];
    const terms = normalised.split(' ').filter(Boolean);

    return this.browse()
      .map((item) => ({ item, score: this.score(item, normalised, terms) }))
      .filter((candidate) => candidate.score > 0)
      .sort((a, b) => b.score - a.score || this.timestamp(b.item) - this.timestamp(a.item) || a.item.name.localeCompare(b.item.name))
      .slice(0, limit)
      .map((candidate) => candidate.item);
  }

  /** Resolve an indexed path only when it belongs to a page in this Angular site. */
  resultForUrl(url: string): SiteSearchResult | undefined {
    const path = this.normalisePath(url);
    return this.browse().find(
      (item) => this.normalisePath(item.url) === path
    );
  }

  private normalisePath(url: string): string {
    return url.split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
  }

  private buildStaticItems(): SiteSearchResult[] {
    const items: SiteSearchResult[] = [];
    const urls = new Map<string, number>();
    const add = (item: SiteSearchResult): void => {
      const url = this.canonicalPath(item.url);
      if (!url) return;
      const position = urls.get(url);
      if (position !== undefined) {
        const previous = items[position];
        items[position] = { ...previous, desc: previous.desc || item.desc,
          searchText: `${previous.searchText} ${item.searchText}` };
      } else {
        urls.set(url, items.length);
        items.push({ ...item, url, searchText: `${item.searchText} ${this.normalise(url)}` });
      }
    };

    // Use exactly the destinations used by the header, including explicit hrefs.
    const menuUrls = new Map<string, string>();
    for (const menu of MEGA_MENU) for (const tab of menu.tabs) for (const group of tab.groups) {
      for (const item of group.items) {
        const url = menuItemLink(item.title, menu.label, this.catalog, item.href);
        menuUrls.set(item.title, url);
        const editorial = menu.label === 'Insights' || menu.label === 'Company';
        add(editorial ? this.pageResult(item.title, item.desc || '', url) : {
          name: item.title, desc: this.plainText(item.desc || ''), label: menu.label,
          url, color: CATEGORY_COLORS[this.catalog.categoryForMenu(menu.label)] ?? PRODUCT_COLOR, kind: 'Product',
          compareName: this.catalog.findInDirectory(item.title)?.name,
          searchText: this.normalise(`${item.title} ${item.desc || ''} ${menu.label} ${tab.label}`),
        });
      }
      for (const card of tab.featureCards ?? []) add(this.pageResult(card.title, card.body, card.link));
    }

    // Includes both directory products and menu-only products.
    for (const slug of this.catalog.slugs) {
      // The plural menu entry points to the same product as the canonical
      // singular directory entry, so do not show it as a second search result.
      if (slug === 'bare-metal-servers' || slug === 'acronis-genai') continue;
      const entry = this.catalog.entryBySlug(slug);
      if (!entry) continue;
      add({
        name: entry.name,
        desc: entry.desc,
        label: entry.cat,
        url: menuUrls.get(entry.name) ?? `/${slug}`,
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
        url: menuUrls.get(name) ?? `/${slug}`,
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
    for (const category of this.catalog.categories) {
      add(this.pageResult(category.name, category.sub, `/category/${encodeURIComponent(category.name)}`));
    }

    // Every new non-parameterised route becomes searchable without another list.
    for (const route of this.router.config) this.addRoute(route, '', add);
    return items;
  }

  private addRoute(route: Route, parent: string, add: (item: SiteSearchResult) => void): void {
    const path = route.path ?? '';
    if (path.includes(':') || path.includes('*') || route.redirectTo !== undefined) return;
    const fullPath = [parent, path].filter(Boolean).join('/');
    if (fullPath) {
      const simpleKey = typeof route.data?.['key'] === 'string' ? route.data['key'] : '';
      const simple = simpleKey ? SIMPLE_PAGES[simpleKey] : undefined;
      const title =
        String(route.data?.['searchTitle'] ?? route.data?.['title'] ?? (typeof route.title === 'string' ? route.title.replace(/\s*\|\s*XcellHost.*$/i, '') : undefined) ?? simple?.t ?? '') ||
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
      label: post.mainCategory || post.category || 'Blog',
      url: `/insights/${post.slug}`,
      color: BLOG_COLOR,
      kind: 'Blog',
      publishedAt: post.publishedAt || post.date,
      searchText: this.normalise(
        `${post.title} ${desc} ${this.plainText(post.content)} ${post.category} ${post.mainCategory || ''} ${post.subCategory || ''} ${post.product || ''} ${post.author} ${post.slug} ${post.relatedPages || ''}`
      ),
    };
  }

  private liveItems(): SiteSearchResult[] {
    return [...this.blogItems(), ...this.useCaseItems(), ...this.caseStudyItems()]
      .sort((a, b) => this.timestamp(b) - this.timestamp(a));
  }

  private timestamp(item: SiteSearchResult): number { return Date.parse(item.publishedAt || '') || 0; }

  private caseStudyResult(study: CaseStudy): SiteSearchResult {
    const name = study.headline || study.metricLabel || study.customer || 'Customer story';
    return {
      name, desc: this.plainText(study.summary), label: 'Case Study', kind: 'Blog',
      url: `/case-studies/${study.id}`, color: BLOG_COLOR, publishedAt: study.publishedAt,
      searchText: this.normalise(`${name} ${study.summary} ${study.challenge} ${study.solution} ${study.impact.join(' ')} ${study.services.join(' ')} ${study.customer || ''} ${study.industry} ${study.id} ${(study.relatedPages || []).join(' ')}`),
    };
  }

  /** Exclude external destinations and collapse static redirects to a single real result. */
  private canonicalPath(value: string): string | null {
    if (!value.startsWith('/') || value.startsWith('//')) return null;
    let path = this.normalisePath(value);
    const visited = new Set<string>();
    for (;;) {
      if (visited.has(path)) return null;
      visited.add(path);
      const route = this.router.config.find(item => item.path === path.slice(1));
      if (typeof route?.redirectTo !== 'string') return path;
      if (!route.redirectTo) return null;
      path = this.normalisePath('/' + route.redirectTo.replace(/^\//, ''));
    }
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

  private plainText(value = ''): string {
    return value.replace(/<[^>]*>/g, ' ').replace(/&[a-z0-9#]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  }

  private normalise(value: string): string {
    return this.plainText(value).toLocaleLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }
}
