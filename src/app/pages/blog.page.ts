import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { SITE } from '../data/site.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface BodyBlock {
  readonly kind: 'p' | 'h' | 'ul';
  readonly text: string;
  readonly items: readonly string[];
}

interface HeadingEntry {
  readonly index: number;
  readonly text: string;
  readonly id: string;
}

@Component({
  selector: 'xh-blog-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.page.html',
  host: { style: 'display:contents', '(window:scroll)': 'onScroll()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);
  private readonly blogApi = inject(BlogApiService);
  private readonly doc = inject(DOCUMENT);

  readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: '',
  });
  readonly post = signal<CmsBlogPost | null>(null);
  readonly allPosts = signal<readonly CmsBlogPost[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly progress = signal(0);

  readonly blocks = computed(() => this.parseContent(this.post()?.content ?? ''));
  readonly headings = computed<readonly HeadingEntry[]>(() =>
    this.blocks()
      .map((block, index) =>
        block.kind === 'h'
          ? { index, text: block.text, id: this.headingId(block.text, index) }
          : null
      )
      .filter((value): value is HeadingEntry => value !== null)
  );
  readonly more = computed(() =>
    this.allPosts()
      .filter((candidate) => candidate.slug !== this.slug())
      .slice(0, 3)
  );
  readonly waHref = computed(() =>
    this.leads.whatsappLink(
      `Hi XcellHost, I have just read "${this.post()?.title ?? 'your insights'}" and would like to talk.`
    )
  );

  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.allPosts.set(posts),
    });

    toObservable(this.slug)
      .pipe(
        switchMap((slug) => this.blogApi.watchBySlug(slug)),
        takeUntilDestroyed()
      )
      .subscribe({
        next: (post) => {
          this.loading.set(false);
          this.error.set(false);
          this.post.set(post);
          if (!post) void this.router.navigate(['/insights']);
        },
        error: () => {
          this.loading.set(false);
          this.error.set(true);
        },
      });

    effect(() => {
      const post = this.post();
      if (!post) return;

      const canonical = `/insights/${post.slug}/`;
      this.seo.set(`${post.title} - XcellHost`, post.description, canonical);
      this.seo.setJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        articleSection: post.category,
        datePublished: `${post.date}T${post.time}`,
        dateModified: post.updatedAt,
        url: SITE.siteUrl.replace(/\/$/, '') + canonical,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: SITE.company, url: SITE.siteUrl },
      });
    });
  }

  onScroll(): void {
    const element = this.doc.documentElement;
    const height = element.scrollHeight - element.clientHeight;
    this.progress.set(
      height > 0 ? Math.min(100, Math.max(0, (element.scrollTop / height) * 100)) : 0
    );
  }

  openCallback(): void {
    this.topics.ask(this.post()?.title ?? 'Insights');
    this.overlay.open('callback');
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(
      new Date(`${value}T00:00:00`)
    );
  }

  formatTime(value: string): string {
    const [hours, minutes] = value.split(':').map(Number);
    return new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit' }).format(
      new Date(2000, 0, 1, hours, minutes)
    );
  }

  readTime(post: CmsBlogPost | null): string {
    if (!post) return '3 min read';
    const text = `${post.title} ${post.description} ${post.content}`.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return `${Math.max(3, Math.round(words / 180) || 3)} min read`;
  }

  headingAnchor(index: number): string {
    return `#${this.headingBlockId(index)}`;
  }

  headingBlockId(index: number): string {
    const heading = this.headings().find((entry) => entry.index === index);
    return heading?.id ?? `section-${index}`;
  }

  /** Converts Strapi's Markdown-style rich text into safe Angular template blocks. */
  private parseContent(content: string): BodyBlock[] {
    const blocks: BodyBlock[] = [];
    const paragraph: string[] = [];
    let list: string[] = [];

    const flushParagraph = () => {
      const text = paragraph.join(' ').trim();
      if (text) blocks.push({ kind: 'p', text, items: [] });
      paragraph.length = 0;
    };
    const flushList = () => {
      if (list.length) blocks.push({ kind: 'ul', text: '', items: list });
      list = [];
    };

    for (const rawLine of content.replace(/\r/g, '').split('\n')) {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        flushList();
      } else if (/^#{1,6}\s+/.test(line)) {
        flushParagraph();
        flushList();
        blocks.push({ kind: 'h', text: line.replace(/^#{1,6}\s+/, ''), items: [] });
      } else if (/^[-*]\s+/.test(line)) {
        flushParagraph();
        list.push(line.replace(/^[-*]\s+/, ''));
      } else {
        flushList();
        paragraph.push(line);
      }
    }

    flushParagraph();
    flushList();
    return blocks;
  }

  private headingId(text: string, index: number): string {
    const base = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return base ? `${base}-${index}` : `section-${index}`;
  }
}
