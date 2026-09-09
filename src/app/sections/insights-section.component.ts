import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { RevealDirective } from '../shared/reveal.directive';
import { CASE_STUDIES } from '../data/case-studies.data';

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
        <div class="sec-head insights-heading" xhReveal>
          <div class="eyebrow">Insights</div>
          <div class="insights-heading-row">
            <h2>{{ viewCopy[activeView()].heading }}</h2>
            <p>{{ viewCopy[activeView()].description }}</p>
            <div class="insights-actions" role="group" aria-label="Insight resources">
              <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'blogs'" [attr.aria-pressed]="activeView() === 'blogs'" aria-controls="insights-content" (click)="activeView.set('blogs')">Blogs</button>
              <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'videos'" [attr.aria-pressed]="activeView() === 'videos'" aria-controls="insights-content" (click)="activeView.set('videos')">Videos</button>
              <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'cases'" [attr.aria-pressed]="activeView() === 'cases'" aria-controls="insights-content" (click)="activeView.set('cases')">Case Studies</button>
            </div>
          </div>
        </div>
        <div id="insights-content">
        @if (activeView() === 'blogs') {
        <div class="blog-carousel" role="region" aria-roledescription="carousel" aria-label="Latest insights">
          <button class="blog-nav blog-nav-prev" type="button" aria-label="Previous insights" (click)="scrollCarousel(-1)">‹</button>
          <div class="blog-grid" #blogGrid>
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
          <button class="blog-nav blog-nav-next" type="button" aria-label="Next insights" (click)="scrollCarousel(1)">›</button>
        </div>
        <div class="blog-cta">
          <button class="btn btn-ghost" id="allBlogs" routerLink="/insights">
            View all insights →
          </button>
        </div>
        } @else if (activeView() === 'cases') {
          <div class="case-grid">
            @for (study of studies; track study.id) {
              <a class="cs" routerLink="/case-studies" [fragment]="study.id" [attr.aria-label]="'Read case study: ' + study.metricLabel">
                <div class="cs-tag">{{ study.industry }} · {{ study.profile }}</div>
                <div class="cs-num">{{ study.metric.replace(' to ', ' → ') }}</div>
                <b>{{ study.metricLabel }}</b>
                <p>{{ study.summary }}</p>
                <div class="cs-foot">
                  @for (service of study.services; track service) {
                    <span>{{ service }}</span>
                  }
                </div>
              </a>
            }
          </div>
          <div class="cases-cta"><a class="btn btn-ghost" routerLink="/case-studies">View all case studies →</a></div>
        } @else {
          <div class="insights-video-grid">
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/eb8jyqFV6fM?rel=0&playsinline=1" title="Tally on Cloud video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Tally on Cloud</h3>
            </article>
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/a-Jy7VV13Do?rel=0&playsinline=1" title="Cloud Drive video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Cloud Drive</h3>
            </article>
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/rya4Q4IZniA?rel=0&playsinline=1" title="Cloud Backup video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Cloud Backup</h3>
            </article>
          </div>
          <div class="blog-cta"><a class="btn btn-ghost" href="https://www.youtube.com/@XcellHostCloudServices">View all videos →</a></div>
        }
        </div>
      </div>
    </section>
  `,
  styles: `
    .insights-heading { max-width: none; text-align: center; }
    .insights-heading .eyebrow::after { margin-left: auto; margin-right: auto; }
    .insights-heading-row { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 12px; }
    .insights-heading-row h2 { margin-bottom: 0; }
    .insights-heading p { max-width: 760px; margin: 0; }
    .insights-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; flex-shrink: 0; margin-top: 8px; }
    .insights-actions .btn { background: #fff; white-space: nowrap; }
    .insights-actions .btn.active { background: var(--blue); border-color: var(--blue); color: #fff; }
    .insights-video-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .insights-video-card { min-width: 0; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
    .insights-video-card h3 { margin: 0; padding: 20px; font-family: var(--disp); font-size: 18px; color: var(--navy); }
    .insights-video { aspect-ratio: 16 / 9; background: var(--navy); }
    .insights-video iframe { display: block; width: 100%; height: 100%; border: 0; }
    .insights-actions .btn:focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; }
    @media (max-width: 1000px) {
      .insights-video-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (max-width: 640px) {
      .insights-video-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 760px) {
      .insights-heading-row { gap: 16px; }
    }
  `,
})
export class InsightsSectionComponent {
  private readonly blogApi = inject(BlogApiService);
  readonly posts = signal<readonly CmsBlogPost[]>([]);
  readonly activeView = signal<'blogs' | 'cases' | 'videos'>('blogs');
  readonly viewCopy = {
    blogs: {
      heading: 'Fresh perspectives for smarter IT decisions',
      description: 'Explore practical guides and expert insights on cloud, cybersecurity and Indian compliance to help your business move forward.',
    },
    videos: {
      heading: 'See our cloud solutions in action',
      description: 'Watch product walkthroughs and quick explainers to discover how Tally on Cloud, Cloud Drive and Cloud Backup can simplify your day.',
    },
    cases: {
      heading: 'Real businesses. Measurable results.',
      description: 'Discover how businesses use XcellHost to protect their data, reduce downtime and make everyday operations simpler.',
    },
  } as const;
  readonly studies = CASE_STUDIES;
  @ViewChild('blogGrid') private blogGrid?: ElementRef<HTMLElement>;

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

  scrollCarousel(direction: number): void {
    this.blogGrid?.nativeElement.scrollBy({ left: direction * 331, behavior: 'smooth' });
  }
}
