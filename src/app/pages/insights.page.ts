import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { BlogApiService, CmsBlogPost, CmsInsightResource } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import { SIMPLE_PAGES } from '../data/site.data';

const ALL = 'All';
type InsightTab = 'Blogs' | 'Videos' | 'Use Cases';

interface InsightItem {
  readonly id: number;
  readonly documentId: string;
  readonly kind: 'blog' | 'video' | 'use-case';
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly content: string;
  readonly author: string;
  readonly date: string;
  readonly time: string;
  readonly category: string;
  readonly coverImage: CmsBlogPost['coverImage'];
  readonly coverImageUrl: string | null;
  readonly actionUrl: string | null;
}

@Component({
  selector: 'xh-insights-page',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './insights.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ppage as-page" id="ipage">
      <div class="pp-hero insights-hero">
        <span class="orb orb-1"></span>
        <div class="wrap">
          <div class="pp-crumb">{{ page.c }}</div>
          <div class="insights-hero-grid">
            <div class="insights-hero-copy">
              <span class="insights-kicker">Resource Center</span>
              <h1>{{ page.t }}</h1>
              <p class="pp-tagline">{{ page.g }}</p>
              <div class="insights-hero-stats" aria-label="Insights overview">
                <article>
                  <b>{{ posts().length }}</b>
                  <span>Published articles</span>
                </article>
                <article>
                  <b>{{ categories().length - 1 }}</b>
                  <span>Topic collections</span>
                </article>
                <article>
                  <b>{{ active() === allCategory ? 'Live' : categoryCount(active()) }}</b>
                  <span>{{ active() === allCategory ? 'CMS synced' : 'Posts in topic' }}</span>
                </article>
              </div>
            </div>
            @if (featured(); as lead) {
              <article class="insights-hero-feature" [routerLink]="['/insights', lead.slug]">
                <span class="insights-feature-label">Featured article</span>
                <strong>{{ lead.category }}</strong>
                <h2>{{ lead.title }}</h2>
                <p>{{ lead.description }}</p>
                <div class="insights-feature-meta">
                  <span>{{ formatDate(lead.date) }}</span>
                  <span>{{ lead.author }}</span>
                  <span>{{ readTime(lead) }}</span>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
      <div class="pp-body">
        <div class="wrap">
          @if (loading()) {
            <p role="status">Loading insights...</p>
          } @else if (error()) {
            <p role="alert">Blog content is temporarily unavailable. Please try again shortly.</p>
          } @else {
            <section class="insights-discovery" aria-label="Insight content filters">
              <div class="insights-tabs" role="tablist" aria-label="Insight content type">
                @for (tab of tabs; track tab) {
                  <button
                    type="button"
                    role="tab"
                    [class.active]="tab === activeTab()"
                    [attr.aria-selected]="tab === activeTab()"
                    (click)="selectTab(tab)"
                  >
                    {{ tab }} <span>{{ tabCount(tab) }}</span>
                  </button>
                }
              </div>
              <label class="insights-search">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6.5"></circle>
                  <path d="m16 16 4 4"></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search insights..."
                  [value]="query()"
                  (input)="search($event)"
                />
                @if (query()) {
                  <button type="button" aria-label="Clear search" (click)="clearSearch()">&times;</button>
                }
              </label>
            </section>
            <section class="insights-shell">
              <aside class="insights-sidebar">
                <div class="insights-sidebar-card">
                  <div class="pp-sec">Browse by topic</div>
                  <div class="insights-topics" role="group" aria-label="Filter insights by category">
                    @for (category of categories(); track category) {
                      <button
                        class="insights-topic"
                        [class.active]="category === active()"
                        [attr.aria-pressed]="category === active()"
                        (click)="selectCategory(category)"
                      >
                        <span>{{ category }}</span>
                        <b>{{ categoryCount(category) }}</b>
                      </button>
                    }
                  </div>
                </div>
              </aside>
              <div class="insights-main">
                <div class="insights-toolbar" #results tabindex="-1">
                  <div>
                    <span class="insights-toolbar-label">Showing</span>
                    <h2>{{ resultHeading() }}</h2>
                  </div>
                  <p role="status">{{ rangeStart() }}–{{ rangeEnd() }} of {{ visible().length }} article{{ visible().length === 1 ? '' : 's' }}</p>
                </div>
                @if (featuredVisible(); as lead) {
                  <a
                    class="insights-lead"
                    [routerLink]="lead.kind === 'blog' ? ['/insights', lead.slug] : null"
                    [href]="lead.kind === 'blog' ? null : lead.actionUrl"
                    [target]="lead.kind === 'video' ? '_blank' : undefined"
                    [attr.rel]="lead.kind === 'video' ? 'noopener noreferrer' : null"
                  >
                    <div class="insights-lead-media">
                      @if (lead.coverImageUrl) {
                        <img
                          class="insights-lead-cover"
                          [src]="lead.coverImageUrl"
                          [alt]="lead.coverImage?.alternativeText || lead.title"
                        />
                      }
                      @if (lead.kind === 'video') {
                        <span class="insights-play" aria-hidden="true">&#9654;</span>
                      }
                    </div>
                    <div class="insights-lead-copy">
                      <span class="insights-feature-label">{{ leadLabel() }}</span>
                      <span class="bl-k">{{ lead.category }}</span>
                      <h3>{{ lead.title }}</h3>
                      <p>{{ lead.description }}</p>
                      <div class="insights-feature-meta">
                        <span>{{ formatDate(lead.date) }}</span>
                        <span>{{ lead.author }}</span>
                        <span>{{ formatTime(lead.time) }}</span>
                      </div>
                    </div>
                  </a>
                }
                <div class="insights-grid">
                  @for (post of gridPosts(); track post.documentId) {
                    <a
                      class="bl insights-card"
                      [routerLink]="post.kind === 'blog' ? ['/insights', post.slug] : null"
                      [href]="post.kind === 'blog' ? null : post.actionUrl"
                      [target]="post.kind === 'video' ? '_blank' : undefined"
                      [attr.rel]="post.kind === 'video' ? 'noopener noreferrer' : null"
                    >
                      <div class="insights-card-media">
                      @if (post.coverImageUrl) {
                        <img
                          class="blog-cover"
                          [src]="post.coverImageUrl"
                          [alt]="post.coverImage?.alternativeText || post.title"
                        />
                      }
                        @if (post.kind === 'video') {
                          <span class="insights-play" aria-hidden="true">&#9654;</span>
                        }
                      </div>
                      <div class="insights-card-meta">
                        <span class="bl-k">{{ post.category }}</span>
                        <span class="insights-card-date">{{ formatDate(post.date) }}</span>
                      </div>
                      <h3>{{ post.title }}</h3>
                      <p>{{ post.description }}</p>
                      <span class="bl-m">{{ post.author }} · {{ readTime(post) }} read</span>
                    </a>
                  } @empty {
                    @if (!visible().length) {
                      <div class="insights-empty">
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <circle cx="21" cy="21" r="12"></circle>
                          <path d="m30 30 9 9M8 8l32 32"></path>
                        </svg>
                        <h3>No matching {{ activeTab().toLowerCase() }}</h3>
                        <p>{{ emptyHelp() }}</p>
                      </div>
                    }
                  }
                </div>
                @if (visible().length) {
                  <nav class="insights-pagination" aria-label="Blog pagination">
                    <button type="button" [disabled]="currentPage() === 1"
                      (click)="goToPage(currentPage() - 1, results)">Previous</button>
                    <div class="insights-page-numbers">
                      @for (pageNumber of pageNumbers(); track $index) {
                        @if (pageNumber === null) {
                          <span class="insights-page-gap" aria-hidden="true">…</span>
                        } @else {
                          <button type="button" [class.active]="pageNumber === currentPage()"
                            [attr.aria-current]="pageNumber === currentPage() ? 'page' : null"
                            [attr.aria-label]="'Page ' + pageNumber"
                            (click)="goToPage(pageNumber, results)">{{ pageNumber }}</button>
                        }
                      }
                    </div>
                    <button type="button" [disabled]="currentPage() === totalPages()"
                      (click)="goToPage(currentPage() + 1, results)">Next</button>
                  </nav>
                }
              </div>
            </section>
          }
        </div>
      </div>
    </div>
  `,
})
export class InsightsPage {
  private readonly seo = inject(SeoService);
  private readonly blogApi = inject(BlogApiService);

  readonly page = SIMPLE_PAGES['blog'];
  readonly tabs: readonly InsightTab[] = ['Blogs', 'Videos', 'Use Cases'];
  readonly posts = signal<readonly CmsBlogPost[]>([]);
  readonly videos = signal<readonly CmsInsightResource[]>([]);
  readonly useCases = signal<readonly CmsInsightResource[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly activeTab = signal<InsightTab>('Blogs');
  readonly active = signal(ALL);
  readonly query = signal('');
  readonly allCategory = ALL;

  readonly blogItems = computed<readonly InsightItem[]>(() =>
    this.posts().map((post) => this.toBlogItem(post))
  );
  readonly videoItems = computed<readonly InsightItem[]>(() =>
    this.videos().map((item) => this.toResourceItem(item))
  );
  readonly useCaseItems = computed<readonly InsightItem[]>(() =>
    this.useCases().map((item) => this.toResourceItem(item))
  );
  readonly sourceItems = computed<readonly InsightItem[]>(() => {
    switch (this.activeTab()) {
      case 'Videos': return this.videoItems();
      case 'Use Cases': return this.useCaseItems();
      default: return this.blogItems();
    }
  });
  readonly categories = computed<readonly string[]>(() => [
    ALL,
    ...new Set(this.sourceItems().map((item) => item.category)),
  ]);
  readonly featured = computed(() => this.posts()[0] ?? null);
  readonly visible = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.sourceItems().filter((item) => {
      const matchesCategory = this.active() === ALL || item.category === this.active();
      const haystack = `${item.title} ${item.description} ${item.category} ${item.author}`.toLocaleLowerCase();
      return matchesCategory && (!query || haystack.includes(query));
    });
  });
  readonly pageSize = 20;
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.visible().length / this.pageSize)));
  readonly currentPage = linkedSignal<number, number>({
    source: this.totalPages,
    computation: (total, previous) => Math.min(previous?.value ?? 1, total),
  });
  readonly pagedPosts = computed(() =>
    this.visible().slice((this.currentPage() - 1) * this.pageSize, this.currentPage() * this.pageSize)
  );
  readonly rangeStart = computed(() => this.visible().length ? (this.currentPage() - 1) * this.pageSize + 1 : 0);
  readonly rangeEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.visible().length));
  readonly featuredVisible = computed(() => this.pagedPosts()[0] ?? null);
  readonly gridPosts = computed(() => this.pagedPosts().slice(1));
  readonly pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: (number | null)[] = [];
    for (let page = 1; page <= total; page++) {
      if (total <= 7 || page === 1 || page === total || Math.abs(page - current) <= 1) {
        pages.push(page);
      } else if (pages[pages.length - 1] !== null) {
        pages.push(null);
      }
    }
    return pages;
  });

  constructor() {
    this.seo.set(`${this.page.t} - XcellHost`, this.page.g, `/${this.page.u}/`);
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
        this.error.set(false);
        if (!this.categories().includes(this.active())) this.selectCategory(ALL);
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      },
    });

    this.blogApi.videos$.pipe(takeUntilDestroyed()).subscribe((items) => this.videos.set(items));
    this.blogApi.useCases$.pipe(takeUntilDestroyed()).subscribe((items) => this.useCases.set(items));
  }

  selectTab(tab: InsightTab): void {
    this.activeTab.set(tab);
    this.active.set(ALL);
    this.currentPage.set(1);
  }

  selectCategory(category: string): void {
    this.active.set(category);
    this.currentPage.set(1);
  }

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.currentPage.set(1);
  }

  clearSearch(): void {
    this.query.set('');
    this.currentPage.set(1);
  }

  goToPage(page: number, results: HTMLElement): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) return;
    this.currentPage.set(page);
    results.focus({ preventScroll: true });
    results.scrollIntoView({ block: 'start' });
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(
      new Date(`${value}T00:00:00`)
    );
  }

  formatTime(value: string): string {
    const [hours, minutes] = value.split(':').map(Number);
    return new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit' }).format(
      new Date(2000, 0, 1, hours, minutes)
    );
  }

  categoryCount(category: string): number {
    return category === ALL
      ? this.sourceItems().length
      : this.sourceItems().filter((item) => item.category === category).length;
  }

  tabCount(tab: InsightTab): number {
    if (tab === 'Videos') return this.videos().length;
    if (tab === 'Use Cases') return this.useCases().length;
    return this.posts().length;
  }

  resultHeading(): string {
    return `${this.active() === ALL ? 'All' : this.active()} ${this.activeTab()}`;
  }

  leadLabel(): string {
    if (this.activeTab() === 'Videos') return 'Featured video';
    if (this.activeTab() === 'Use Cases') return 'Featured use case';
    return 'Top story';
  }

  emptyHelp(): string {
    return this.activeTab() === 'Videos'
      ? 'Try another topic or search term. New YouTube uploads will appear here automatically.'
      : 'Try another topic or search term. New Strapi content will appear here automatically.';
  }

  readTime(post: Pick<InsightItem, 'title' | 'description' | 'content'> | CmsBlogPost): string {
    const text = `${post.title} ${post.description} ${post.content}`.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return `${Math.max(3, Math.round(words / 180) || 3)} min`;
  }

  private toBlogItem(post: CmsBlogPost): InsightItem {
    return { ...post, kind: 'blog', actionUrl: null };
  }

  private toResourceItem(item: CmsInsightResource): InsightItem {
    return {
      ...item,
      actionUrl: item.kind === 'video' ? item.videoUrl : item.relatedPage,
    };
  }
}
