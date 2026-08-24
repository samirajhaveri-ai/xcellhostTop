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
      <div class="pp-hero">
        <span class="orb orb-1"></span>
        <div class="wrap">
          <div class="pp-crumb">{{ page.c }}</div>
          <h1>{{ page.t }}</h1>
          <p class="pp-tagline">{{ page.g }}</p>
        </div>
      </div>
      <div class="pp-body"><div class="wrap">
        <div class="pp-sec">Browse by topic</div>
        @if (loading()) {
          <p role="status">Loading insights...</p>
        } @else if (error()) {
          <p role="alert">Blog content is temporarily unavailable. Please try again shortly.</p>
        } @else {
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px" role="group" aria-label="Filter insights by category">
            @for (category of categories(); track category) {
              <button
                class="btn"
                [class.btn-primary]="category === active()"
                [class.btn-ghost]="category !== active()"
                [attr.aria-pressed]="category === active()"
                (click)="active.set(category)"
              >{{ category }}</button>
            }
          </div>
          <div class="sp-blog">
            @for (post of visible(); track post.documentId) {
              <article class="bl" tabindex="0" [routerLink]="['/insights', post.slug]">
                @if (post.coverImageUrl) {
                  <img
                    class="blog-cover"
                    [src]="post.coverImageUrl"
                    [alt]="post.coverImage?.alternativeText || post.title"
                  />
                }
                <span class="bl-k">{{ post.category }}</span>
                <h3>{{ post.title }}</h3>
                <p>{{ post.description }}</p>
                <span class="bl-m">
                  {{ post.author }} · {{ formatDate(post.date) }} · {{ formatTime(post.time) }}
                </span>
              </article>
            } @empty {
              <p>No published posts are available in this category yet.</p>
            }
          </div>
        }
      </div></div>
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

  readonly categories = computed<readonly string[]>(() => [
    ALL,
    ...new Set(this.posts().map((post) => post.category)),
  ]);
  readonly visible = computed(() =>
    this.active() === ALL
      ? this.posts()
      : this.posts().filter((post) => post.category === this.active())
  );

  constructor() {
    this.seo.set(`${this.page.t} — XcellHost`, this.page.g, `/${this.page.u}/`);
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
}
