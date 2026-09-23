import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { BlogApiService, CmsBlogPost, CmsInsightResource, CmsResourceKind, INSIGHT_DOCUMENT_TYPES } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import {
  INSIGHTS_MENU_TAXONOMY,
  resolveInsightPlacement,
} from '../data/insights-taxonomy.data';
import { SIMPLE_PAGES } from '../data/site.data';

const ALL = 'All';
type InsightTab = 'Blogs' | 'Videos' | 'Use Cases' | typeof INSIGHT_DOCUMENT_TYPES[number]['label'];

interface InsightItem {
  readonly id: number;
  readonly documentId: string;
  readonly kind: 'blog' | CmsResourceKind;
  readonly title: string;
  readonly slug: string;
  readonly description: string;
  readonly content: string;
  readonly author: string;
  readonly date: string;
  readonly time: string;
  readonly category: string;
  readonly mainCategory: string;
  readonly subCategory: string;
  readonly product: string;
  readonly coverImage: CmsBlogPost['coverImage'];
  readonly coverImageUrl: string | null;
  readonly actionUrl: string | null;
}

interface InsightCategoryBranch {
  readonly name: string;
  readonly count: number;
  readonly children: readonly {
    readonly name: string;
    readonly count: number;
    readonly products: readonly { readonly name: string; readonly count: number }[];
  }[];
}

@Component({
  selector: 'xh-insights-page',
  standalone: true,
  imports: [],
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
                  <b>{{ categoryTree().length }}</b>
                  <span>Topic collections</span>
                </article>
                <article>
                  <b>{{ active() === allCategory ? 'Live' : categoryCount(active()) }}</b>
                  <span>{{ active() === allCategory ? 'CMS synced' : 'Posts in topic' }}</span>
                </article>
              </div>
            </div>

            <div class="insights-hub-visual" role="img" aria-label="Animated XcellHost insights resource hub">
              <div class="insights-hub-stage" aria-hidden="true">
                <span class="hub-pulse hub-pulse-one"></span>
                <span class="hub-pulse hub-pulse-two"></span>
                <span class="hub-pulse hub-pulse-three"></span>
                <span class="hub-orbit hub-orbit-one"><i></i><i></i></span>
                <span class="hub-orbit hub-orbit-two"><i></i><i></i></span>

                <div class="hub-rotor">
                  <svg class="hub-lines" viewBox="0 0 760 760">
                    <defs>
                      <filter id="insights-hub-glow"><feGaussianBlur stdDeviation="2" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      <path id="hub-spoke-0" d="M380 292 L380 175"/><path id="hub-spoke-1" d="M442 318 L525 235"/>
                      <path id="hub-spoke-2" d="M468 380 L585 380"/><path id="hub-spoke-3" d="M442 442 L525 525"/>
                      <path id="hub-spoke-4" d="M380 468 L380 585"/><path id="hub-spoke-5" d="M318 442 L235 525"/>
                      <path id="hub-spoke-6" d="M292 380 L175 380"/><path id="hub-spoke-7" d="M318 318 L235 235"/>
                    </defs>
                    @for (spoke of hubSpokes; track spoke) {
                      <use [attr.href]="'#hub-spoke-' + spoke" class="hub-connector"/>
                      <use [attr.href]="'#hub-spoke-' + spoke" class="hub-connector hub-connector-flow"/>
                      <circle r="3.5" class="hub-particle"><animateMotion [attr.dur]="(2.6 + (spoke % 4) * .35) + 's'" repeatCount="indefinite"><mpath [attr.href]="'#hub-spoke-' + spoke"/></animateMotion></circle>
                    }
                  </svg>

                  @for (card of hubCards; track card.label; let index = $index) {
                    <div class="hub-item" [style.--hub-angle]="(-90 + index * 45) + 'deg'">
                      <div class="hub-counter-spin">
                        <article class="hub-card" [class]="'hub-card hub-card-' + card.tone">
                          <div class="hub-card-top"><span class="hub-card-icon">{{ card.icon }}</span><b>{{ card.label }}</b></div>
                          <strong>{{ card.title }}</strong>
                          <p>{{ card.description }}</p>
                          <div class="hub-card-meta"><span>{{ card.meta }}</span><i>&rarr;</i></div>
                        </article>
                      </div>
                    </div>
                  }
                </div>

                <div class="hub-center">
                  <div class="hub-center-ring">
                    <img src="/assets/images/xcellhost-login-logo.png" alt="" />
                    <span>INSIGHTS HUB</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="pp-body">
        <div class="wrap">
          @if (loading() && activeTab() === 'Blogs') {
            <p role="status">Loading insights...</p>
          } @else if (error() && activeTab() === 'Blogs') {
            <p role="alert">Blog content is temporarily unavailable. Please try again shortly.</p>
          }
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
                    <button class="insights-topic insights-topic-all" [class.active]="active() === allCategory"
                      [attr.aria-pressed]="active() === allCategory" (click)="selectAllCategories()">
                      <span>All {{ activeTab() }}</span><b>{{ sourceItems().length }}</b>
                    </button>
                    @for (branch of categoryTree(); track branch.name) {
                      <div class="insights-topic-branch">
                        <button class="insights-topic insights-topic-main"
                          [class.active]="activeMain() === branch.name && !activeSub()"
                          [class.has-selection]="activeMain() === branch.name"
                          [attr.aria-expanded]="expandedMain() === branch.name"
                          [attr.aria-controls]="categoryPanelId(branch.name)"
                          (click)="selectMainCategory(branch.name)">
                          <span>{{ branch.name }}</span><b>{{ branch.count }}</b>
                          <i aria-hidden="true">&#8964;</i>
                        </button>
                        @if (expandedMain() === branch.name) {
                          <div class="insights-subtopics" [id]="categoryPanelId(branch.name)">
                            @for (child of branch.children; track child.name) {
                              <button type="button" class="insights-submenu"
                                [class.active]="activeSub() === child.name && !activeProduct()"
                                [class.has-selection]="activeSub() === child.name"
                                [attr.aria-pressed]="activeSub() === child.name"
                                [attr.aria-expanded]="expandedSub() === submenuKey(branch.name, child.name)"
                                (click)="selectSubCategory(branch.name, child.name)">
                                <span>{{ child.name }}</span><b>{{ child.count }}</b><i aria-hidden="true">&#8964;</i>
                              </button>
                              @if (expandedSub() === submenuKey(branch.name, child.name)) {
                                <div class="insights-products">
                                  @for (product of child.products; track product.name) {
                                    <button type="button"
                                      [class.active]="activeProduct() === product.name"
                                      [attr.aria-pressed]="activeProduct() === product.name"
                                      (click)="selectProduct(branch.name, child.name, product.name)">
                                      <span>{{ product.name }}</span><b>{{ product.count }}</b>
                                    </button>
                                  }
                                </div>
                              }
                            }
                          </div>
                        }
                      </div>
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
                  <p role="status">{{ rangeStart() }}–{{ rangeEnd() }} of {{ visible().length }} {{ resultNoun() }}{{ visible().length === 1 ? '' : 's' }}</p>
                </div>
                @if (activeTab() === 'Videos') {
                  <div class="insights-channel" role="status">
                    <p>{{ videoStatus() === 'cached' ? 'Showing saved channel uploads. Live updates are temporarily unavailable.' : 'Latest uploads from XcellHost Cloud Services' }}</p>
                    <a href="https://www.youtube.com/@XcellHostCloudServices/videos" target="_blank" rel="noopener noreferrer">View YouTube channel &rarr;</a>
                  </div>
                }
                @if (featuredVisible(); as lead) {
                  <a
                    class="insights-lead"
                    (click)="openInsight($event, lead)"
                    [attr.href]="insightHref(lead)"
                    [attr.target]="isExternal(lead) ? '_blank' : null"
                    [attr.rel]="isExternal(lead) ? 'noopener noreferrer' : null"
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
                        <span>{{ isExternal(lead) ? resourceAction(lead) : formatTime(lead.time) }}</span>
                      </div>
                    </div>
                  </a>
                }
                <div class="insights-grid">
                  @for (post of gridPosts(); track post.documentId) {
                    <a
                      class="bl insights-card"
                      (click)="openInsight($event, post)"
                      [attr.href]="insightHref(post)"
                      [attr.target]="isExternal(post) ? '_blank' : null"
                      [attr.rel]="isExternal(post) ? 'noopener noreferrer' : null"
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
                      <span class="bl-m">{{ post.author }} · {{ isExternal(post) ? resourceAction(post) : readTime(post) + ' read' }}</span>
                    </a>
                  } @empty {
                    @if (!visible().length) {
                      <div class="insights-empty">
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <circle cx="21" cy="21" r="12"></circle>
                          <path d="m30 30 9 9M8 8l32 32"></path>
                        </svg>
                        <h3>{{ activeTab() === 'Videos' && videoStatus() === 'loading' ? 'Loading channel videos...' : activeTab() === 'Videos' && videoStatus() === 'error' ? 'Videos temporarily unavailable' : 'No matching ' + activeTab().toLowerCase() }}</h3>
                        <p>{{ emptyHelp() }}</p>
                      </div>
                    }
                  }
                </div>
                @if (visible().length) {
                  <nav class="insights-pagination" aria-label="Insights pagination">
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
        </div>
      </div>
    </div>
  `,
})
export class InsightsPage {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly blogApi = inject(BlogApiService);

  readonly videoStatus = this.blogApi.videoStatus;
  readonly page = SIMPLE_PAGES['blog'];
  readonly tabs: readonly InsightTab[] = ['Blogs', 'Videos', 'Use Cases', ...INSIGHT_DOCUMENT_TYPES.map(type => type.label)];
  readonly posts = signal<readonly CmsBlogPost[]>([]);
  readonly videos = signal<readonly CmsInsightResource[]>([]);
  readonly documents = signal<readonly CmsInsightResource[]>([]);
  readonly useCases = signal<readonly CmsInsightResource[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly activeTab = signal<InsightTab>('Blogs');
  readonly active = signal(ALL);
  readonly activeMain = signal('');
  readonly activeSub = signal('');
  readonly activeProduct = signal('');
  readonly expandedMain = signal<string | null>(null);
  readonly expandedSub = signal<string | null>(null);
  readonly query = signal('');
  readonly allCategory = ALL;

  readonly encodeURIComponent = encodeURIComponent;

  readonly hubSpokes = [0, 1, 2, 3, 4, 5, 6, 7] as const;
  readonly hubCards = [
    { icon: '📄', label: 'WHITE PAPER', title: 'Cloud Security Playbook for Indian SMBs', description: 'Zero-trust cloud security posture with ISO 27001 compliance.', meta: '12 pages · PDF', tone: 'blue' },
    { icon: '✍️', label: 'BLOG', title: 'Why DPDPA Changes Everything', description: 'How the Digital Personal Data Protection Act reshapes cloud data.', meta: '5 min read · New', tone: 'green' },
    { icon: '📊', label: 'CASE STUDY', title: '500-User Enterprise Cuts Cloud Costs 40%', description: 'Legacy-to-managed-cloud migration with zero downtime.', meta: 'Manufacturing', tone: 'orange' },
    { icon: '🎥', label: 'WEBINAR', title: 'Acronis Cyber Protect: Backup Beyond', description: 'Live demo of unified backup, anti-ransomware and DR.', meta: '45 min · Recorded', tone: 'cyan' },
    { icon: '🎨', label: 'INFOGRAPHIC', title: 'The Anatomy of a Ransomware Attack', description: 'Attack vectors, defence layers and SOC response timeline.', meta: 'Visual guide', tone: 'purple' },
    { icon: '📈', label: 'INDUSTRY REPORT', title: 'State of Cloud Security in India 2026', description: 'Annual analysis of threats, compliance and cloud adoption.', meta: '28 pages · Annual', tone: 'red' },
    { icon: '📧', label: 'NEWSLETTER', title: 'XcellHost Security Digest', description: 'Monthly threat intel, patch alerts and compliance updates.', meta: 'Monthly · Subscribe', tone: 'green' },
    { icon: '📚', label: 'GUIDE', title: 'Microsoft 365 Migration Checklist', description: 'Step-by-step enterprise migration for Exchange and Teams.', meta: 'Checklist · Free', tone: 'blue' },
  ] as const;


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
      case 'Blogs': return this.blogItems();
      default: return this.documents().filter(item => item.kind === this.documentType()?.kind).map(item => this.toResourceItem(item));
    }
  });
  readonly categories = computed<readonly string[]>(() => [
    ALL,
    ...new Set(this.sourceItems().map((item) => item.category)),
  ]);
  readonly categoryTree = computed<readonly InsightCategoryBranch[]>(() => {
    const items = this.sourceItems();
    const branches = INSIGHTS_MENU_TAXONOMY.map((menu) => ({
      name: menu.name,
      count: items.filter((item) => item.mainCategory === menu.name).length,
      children: menu.submenus.map((submenu) => ({
        name: submenu.name,
        count: items.filter((item) =>
          item.mainCategory === menu.name && item.subCategory === submenu.name
        ).length,
        products: submenu.products.map((product) => ({
          name: product.name,
          count: items.filter((item) =>
            item.mainCategory === menu.name && item.subCategory === submenu.name && item.product === product.name
          ).length,
        })),
      })),
    }));

    // Keep editorial content visible even when it has not yet been assigned to a menu product.
    for (const item of items) {
      let branch = branches.find((candidate) => candidate.name === item.mainCategory);
      if (!branch) {
        const related = items.filter((candidate) => candidate.mainCategory === item.mainCategory);
        branch = { name: item.mainCategory, count: related.length, children: [] };
        branches.push(branch);
      }
      let submenu = branch.children.find((candidate) => candidate.name === item.subCategory);
      if (!submenu) {
        const related = items.filter((candidate) =>
          candidate.mainCategory === item.mainCategory && candidate.subCategory === item.subCategory
        );
        submenu = { name: item.subCategory, count: related.length, products: [] };
        branch.children.push(submenu);
      }
      if (!submenu.products.some((candidate) => candidate.name === item.product)) {
        submenu.products.push({
          name: item.product,
          count: items.filter((candidate) =>
            candidate.mainCategory === item.mainCategory &&
            candidate.subCategory === item.subCategory &&
            candidate.product === item.product
          ).length,
        });
      }
    }
    return branches;
  });
  readonly visible = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.sourceItems().filter((item) => {
      const matchesCategory = !this.activeMain() || (
        item.mainCategory === this.activeMain() &&
        (!this.activeSub() || item.subCategory === this.activeSub()) &&
        (!this.activeProduct() || item.product === this.activeProduct())
      );
      const haystack = `${item.title} ${item.description} ${item.mainCategory} ${item.subCategory} ${item.product} ${item.author}`.toLocaleLowerCase();
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
        if (this.active() !== ALL && this.categoryCount(this.active()) === 0) this.selectAllCategories();
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      },
    });

    this.blogApi.videos$.pipe(takeUntilDestroyed()).subscribe((items) => this.videos.set(items));
    this.blogApi.documents$.pipe(takeUntilDestroyed()).subscribe(items => this.documents.set(items));
    this.blogApi.useCases$.pipe(takeUntilDestroyed()).subscribe((items) => this.useCases.set(items));
  }

  selectTab(tab: InsightTab): void {
    this.activeTab.set(tab);
    this.selectAllCategories();
    this.currentPage.set(1);
  }

  selectCategory(category: string): void {
    if (category === ALL) {
      this.selectAllCategories();
      return;
    }
    const main = this.categoryTree().find((branch) => branch.name === category);
    if (main) {
      this.selectMainCategory(main.name);
      return;
    }
    const parent = this.categoryTree().find((branch) => branch.children.some((child) => child.name === category));
    if (parent) {
      this.selectSubCategory(parent.name, category);
      return;
    }
    for (const branch of this.categoryTree()) {
      const child = branch.children.find((submenu) =>
        submenu.products.some((product) => product.name === category)
      );
      if (child) {
        this.selectProduct(branch.name, child.name, category);
        return;
      }
    }
  }

  selectAllCategories(): void {
    this.active.set(ALL);
    this.activeMain.set('');
    this.activeSub.set('');
    this.activeProduct.set('');
    this.expandedMain.set(null);
    this.expandedSub.set(null);
    this.currentPage.set(1);
  }

  selectMainCategory(category: string): void {
    this.active.set(category);
    this.activeMain.set(category);
    this.activeSub.set('');
    this.activeProduct.set('');
    this.expandedMain.update((expanded) => expanded === category ? null : category);
    this.expandedSub.set(null);
    this.currentPage.set(1);
  }

  selectSubCategory(mainCategory: string, subCategory: string): void {
    this.active.set(subCategory);
    this.activeMain.set(mainCategory);
    this.activeSub.set(subCategory);
    this.activeProduct.set('');
    this.expandedMain.set(mainCategory);
    const key = this.submenuKey(mainCategory, subCategory);
    this.expandedSub.update((expanded) => expanded === key ? null : key);
    this.currentPage.set(1);
  }

  selectProduct(mainCategory: string, subCategory: string, product: string): void {
    this.active.set(product);
    this.activeMain.set(mainCategory);
    this.activeSub.set(subCategory);
    this.activeProduct.set(product);
    this.expandedMain.set(mainCategory);
    this.expandedSub.set(this.submenuKey(mainCategory, subCategory));
    this.currentPage.set(1);
  }

  submenuKey(mainCategory: string, subCategory: string): string {
    return `${mainCategory}::${subCategory}`;
  }

  categoryPanelId(category: string): string {
    return `insights-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
    this.currentPage.set(1);
  }

  clearSearch(): void {
    this.query.set('');
    this.currentPage.set(1);
  }

  openInsight(event: MouseEvent, item: InsightItem): void {
    if (this.isExternal(item) || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    void this.router.navigateByUrl(this.insightHref(item));
  }

  insightHref(item: InsightItem): string {
    if (this.isExternal(item)) return item.actionUrl ?? '#';
    return item.kind === 'use-case'
      ? `/use-cases/${encodeURIComponent(item.slug)}`
      : `/insights/${encodeURIComponent(item.slug)}`;
  }

  goToPage(page: number, results: HTMLElement): void {
    if (page < 1 || page > this.totalPages() || page === this.currentPage()) return;
    this.currentPage.set(page);
    results.focus({ preventScroll: true });
    results.scrollIntoView({ block: 'start' });
  }

  formatDate(value: string): string {
    if (!value) return "";
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(
      new Date(`${value}T00:00:00`)
    );
  }

  formatTime(value: string): string {
    if (!value) return "";
    const [hours, minutes] = value.split(':').map(Number);
    return new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit' }).format(
      new Date(2000, 0, 1, hours, minutes)
    );
  }

  categoryCount(category: string): number {
    return category === ALL
      ? this.sourceItems().length
      : this.sourceItems().filter((item) =>
        item.category === category || item.mainCategory === category || item.subCategory === category
        || item.product === category
      ).length;
  }

  tabCount(tab: InsightTab): number {
    if (tab === 'Videos') return this.videos().length;
    if (tab === 'Use Cases') return this.useCases().length;
    if (tab === 'Blogs') return this.posts().length;
    return this.documents().filter(item => item.kind === INSIGHT_DOCUMENT_TYPES.find(type => type.label === tab)?.kind).length;
  }

  documentType() {
    return INSIGHT_DOCUMENT_TYPES.find(type => type.label === this.activeTab());
  }

  resultNoun(): string {
    return this.documentType()?.singular ?? (this.activeTab() === 'Videos' ? 'video' : this.activeTab() === 'Use Cases' ? 'use case' : 'article');
  }

  isExternal(item: InsightItem): boolean {
    return item.kind !== 'blog' && item.kind !== 'use-case';
  }

  resourceAction(item: InsightItem): string {
    return item.kind === 'video' ? 'Watch on YouTube' : 'View ' + (INSIGHT_DOCUMENT_TYPES.find(type => type.kind === item.kind)?.singular ?? 'resource');
  }

  resultHeading(): string {
    return `${this.active() === ALL ? 'All' : this.active()} ${this.activeTab()}`;
  }

  leadLabel(): string {
    if (this.activeTab() === 'Videos') return 'Featured video';
    if (this.activeTab() === 'Use Cases') return 'Featured use case';
    return this.documentType() ? 'Featured ' + this.documentType()!.singular : 'Top story';
  }

  emptyHelp(): string {
    if (this.documentType() && !this.sourceItems().length) return 'Published ' + this.activeTab().toLowerCase() + ' will appear here. Browse another resource type in the meantime.';
    if (this.activeTab() === 'Videos' && this.videoStatus() === 'loading') return 'Fetching uploads from XcellHost Cloud Services.';
    if (this.activeTab() === 'Videos' && this.videoStatus() === 'error') return 'Please visit our YouTube channel or try again shortly.';
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
    const placement = resolveInsightPlacement(post);
    return {
      ...post,
      kind: 'blog',
      ...placement,
      actionUrl: null,
    };
  }

  private toResourceItem(item: CmsInsightResource): InsightItem {
    const placement = resolveInsightPlacement(item);
    return {
      ...item,
      ...placement,
      actionUrl: item.kind === 'video' ? item.videoUrl : item.downloadUrl ?? null,
    };
  }
}
