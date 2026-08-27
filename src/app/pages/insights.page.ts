import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import { SIMPLE_PAGES } from '../data/site.data';

const ALL = 'All';

@Component({
  selector: 'xh-insights-page',
  standalone: true,
  imports: [RouterLink],
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
                        (click)="active.set(category)"
                      >
                        <span>{{ category }}</span>
                        <b>{{ categoryCount(category) }}</b>
                      </button>
                    }
                  </div>
                </div>
              </aside>
              <div class="insights-main">
                <div class="insights-toolbar">
                  <div>
                    <span class="insights-toolbar-label">Showing</span>
                    <h2>{{ active() === allCategory ? 'All Insights' : active() }}</h2>
                  </div>
                  <p>{{ visible().length }} article{{ visible().length === 1 ? '' : 's' }}</p>
                </div>
                @if (featuredVisible(); as lead) {
                  <article class="insights-lead" [routerLink]="['/insights', lead.slug]">
                    <div class="insights-lead-media">
                      @if (lead.coverImageUrl) {
                        <img
                          class="insights-lead-cover"
                          [src]="lead.coverImageUrl"
                          [alt]="lead.coverImage?.alternativeText || lead.title"
                        />
                      }
                    </div>
                    <div class="insights-lead-copy">
                      <span class="insights-feature-label">Top story</span>
                      <span class="bl-k">{{ lead.category }}</span>
                      <h3>{{ lead.title }}</h3>
                      <p>{{ lead.description }}</p>
                      <div class="insights-feature-meta">
                        <span>{{ formatDate(lead.date) }}</span>
                        <span>{{ lead.author }}</span>
                        <span>{{ formatTime(lead.time) }}</span>
                      </div>
                    </div>
                  </article>
                }
                <div class="insights-grid">
                  @for (post of gridPosts(); track post.documentId) {
                    <article class="bl insights-card" tabindex="0" [routerLink]="['/insights', post.slug]">
                      @if (post.coverImageUrl) {
                        <img
                          class="blog-cover"
                          [src]="post.coverImageUrl"
                          [alt]="post.coverImage?.alternativeText || post.title"
                        />
                      }
                      <div class="insights-card-meta">
                        <span class="bl-k">{{ post.category }}</span>
                        <span class="insights-card-date">{{ formatDate(post.date) }}</span>
                      </div>
                      <h3>{{ post.title }}</h3>
                      <p>{{ post.description }}</p>
                      <span class="bl-m">{{ post.author }} · {{ readTime(post) }} read</span>
                    </article>
                  } @empty {
                    <p>No published posts are available in this category yet.</p>
                  }
                </div>
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
  readonly posts = signal<readonly CmsBlogPost[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly active = signal(ALL);
  readonly allCategory = ALL;

  readonly categories = computed<readonly string[]>(() => [
    ALL,
    ...new Set(this.posts().map((post) => post.category)),
  ]);
  readonly featured = computed(() => this.posts()[0] ?? null);
  readonly visible = computed(() =>
    this.active() === ALL
      ? this.posts()
      : this.posts().filter((post) => post.category === this.active())
  );
  readonly featuredVisible = computed(() => this.visible()[0] ?? null);
  readonly gridPosts = computed(() => this.visible().slice(1));

  constructor() {
    this.seo.set(`${this.page.t} - XcellHost`, this.page.g, `/${this.page.u}/`);
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
        this.error.set(false);
        if (!this.categories().includes(this.active())) this.active.set(ALL);
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      },
    });
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
      ? this.posts().length
      : this.posts().filter((post) => post.category === category).length;
  }

  readTime(post: CmsBlogPost): string {
    const text = `${post.title} ${post.description} ${post.content}`.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return `${Math.max(3, Math.round(words / 180) || 3)} min`;
  }
}
