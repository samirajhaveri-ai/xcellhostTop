import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { RevealDirective } from '../shared/reveal.directive';

/** Homepage teaser fed by the five newest posts in Strapi. */
@Component({
  selector: 'xh-insights-section',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="blogs" id="insights">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Insights</div>
          <h2>Read before you need it</h2>
          <p>
            Practical guidance on cloud, security and Indian compliance — written by the engineers
            who do the work.
          </p>
        </div>
        <div class="blog-grid">
          @for (post of posts(); track post.documentId; let first = $first) {
            <article class="bl" [class.feat]="first" [routerLink]="['/insights', post.slug]">
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
              <span class="bl-m">{{ post.author }} · {{ formatDate(post.date) }}</span>
            </article>
          }
        </div>
        <div class="blog-cta">
          <button class="btn btn-ghost" id="allBlogs" routerLink="/insights">
            View all insights →
          </button>
        </div>
      </div>
    </section>
  `,
})
export class InsightsSectionComponent {
  private readonly blogApi = inject(BlogApiService);
  readonly posts = signal<readonly CmsBlogPost[]>([]);

  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.posts.set(posts.slice(0, 5)),
      error: () => this.posts.set([]),
    });
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(
      new Date(`${value}T00:00:00`)
    );
  }
}
