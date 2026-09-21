import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { distinctUntilChanged, map, Observable, switchMap, tap } from 'rxjs';

import { BlogApiService, CmsArticle } from '../core/blog-api.service';
import { DocRequestService } from '../core/doc-request.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { PRODUCT_INFOSHEETS } from '../data/products.data';
import { SITE } from '../data/site.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface BodyBlock {
  readonly kind: 'p' | 'h' | 'ul' | 'img';
  readonly text: string;
  readonly items: readonly string[];
  readonly imageUrl?: string;
}

interface HeadingEntry {
  readonly index: number;
  readonly text: string;
  readonly id: string;
}

interface ArticleNeighbors {
  readonly previous: CmsArticle | null;
  readonly next: CmsArticle | null;
}

type ShareNetwork = 'linkedin' | 'facebook' | 'x' | 'whatsapp' | 'email';

const DEFAULT_AUTHOR_PHOTO = '/assets/images/xcellhost-logo.png';
const AUTHOR_PHOTOS: Readonly<Record<string, string>> = {
  'samir jhaveri': '/assets/images/website-photo-frame-samir-jhaveri-1.png',
  'dr samir jhaveri': '/assets/images/website-photo-frame-samir-jhaveri-1.png',
  'purva angre': '/assets/images/team-purva-angre.png',
  'ravi sharma': '/assets/images/team-ravi-sharma.png',
};

@Component({
  selector: 'xh-blog-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.css',
  host: { style: 'display:contents', '(window:scroll)': 'onScroll()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);
  private readonly blogApi = inject(BlogApiService);
  private readonly doc = inject(DOCUMENT);

  readonly isUseCase = this.route.snapshot.data['contentType'] === 'use-case';
  readonly detailBase = this.isUseCase ? '/use-cases' : '/insights';
  readonly contentLabel = this.isUseCase ? 'Use Case' : 'Insights';
  readonly contentPlural = this.isUseCase ? 'use cases' : 'blogs';
  readonly slug = signal(this.route.snapshot.paramMap.get('slug') ?? '');
  readonly post = signal<CmsArticle | null>(null);
  readonly allPosts = signal<readonly CmsArticle[]>([]);
  readonly loading = signal(true);
  readonly error = signal(false);
  readonly progress = signal(0);
  readonly copiedLink = signal(false);
  readonly shareNetworks: readonly ShareNetwork[] = ['linkedin', 'facebook', 'x', 'whatsapp', 'email'];

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
  readonly neighbors = computed<ArticleNeighbors>(() => {
    const posts = this.allPosts();
    const currentIndex = posts.findIndex((candidate) => candidate.slug === this.slug());
    if (currentIndex < 0) return { previous: null, next: null };
    return {
      // The API is newest-first: the preceding article is older and the next is newer.
      previous: posts[currentIndex + 1] ?? null,
      next: posts[currentIndex - 1] ?? null,
    };
  });
  readonly relatedBlogs = computed(() => {
    const current = this.post();
    if (!current) return [];

    return this.allPosts()
      .map((candidate, index) => ({
        candidate,
        index,
        score: candidate.slug === current.slug ? -1 : this.relatedScore(current, candidate),
      }))
      .filter(({ score }) => score >= 0)
      .sort((left, right) => right.score - left.score || left.index - right.index)
      .slice(0, 3)
      .map(({ candidate }) => candidate);
  });
  readonly waHref = computed(() =>
    this.leads.whatsappLink(
      `Hi XcellHost, I have just read "${this.post()?.title ?? 'your insights'}" and would like to talk.`
    )
  );
  readonly tallyInfosheet = PRODUCT_INFOSHEETS['Tally on Cloud'];
  readonly mailHref = computed(() => this.leads.mailtoLink(
    `Enquiry: ${this.post()?.product || this.post()?.title || 'XcellHost services'}`,
    `Hi XcellHost,\n\nI would like to know more about ${this.post()?.product || this.post()?.title || 'your services'}.\n\nCompany:\nNumber of users:\nBest time to call:`
  ));
  readonly primaryRelatedPage = computed(() =>
    (this.post()?.relatedPages ?? '')
      .split(',')
      .map((value) => value.trim().replace(/^\/+|\/+$/g, ''))
      .find(Boolean) ?? null
  );

  constructor() {
    const articles$: Observable<readonly CmsArticle[]> = this.isUseCase
      ? this.blogApi.useCases$
      : this.blogApi.posts$;
    this.route.paramMap
      .pipe(
        map((params) => params.get('slug') ?? ''),
        distinctUntilChanged(),
        tap((slug) => {
          this.slug.set(slug);
          this.loading.set(true);
          this.error.set(false);
          this.post.set(null);
          this.progress.set(0);
          this.doc.defaultView?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }),
        switchMap((slug) => articles$.pipe(
          map((posts) => ({
            posts,
            post: posts.find((candidate) =>
              this.normaliseRouteSlug(candidate.slug) === this.normaliseRouteSlug(slug)
            ) ?? null,
          }))
        )),
        takeUntilDestroyed()
      )
      .subscribe({
        next: ({ posts, post }) => {
          this.allPosts.set(posts);
          this.loading.set(false);
          this.error.set(false);
          this.post.set(post);
          if (!post) void this.router.navigate(['/insights'], { replaceUrl: true });
        },
        error: () => {
          this.loading.set(false);
          this.error.set(true);
        },
      });

    effect(() => {
      const post = this.post();
      if (!post) return;

      const canonical = `${this.detailBase}/${post.slug}/`;
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

  requestPresentation(event: Event): void {
    event.preventDefault();
    this.docs.ask('presentation', 'Tally on Cloud');
    this.overlay.open('doc');
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

  readTime(post: CmsArticle | null): string {
    if (!post) return '3 min read';
    const text = `${post.title} ${post.description} ${post.content}`.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return `${Math.max(3, Math.round(words / 180) || 3)} min read`;
  }

  titleCase(value: string): string {
    return value
      .toLowerCase()
      .replace(/(^|[\s(/&-])([a-z])/g, (_, separator: string, letter: string) =>
        `${separator}${letter.toUpperCase()}`
      );
  }

  headingAnchor(index: number): string {
    return `#${this.headingBlockId(index)}`;
  }

  headingBlockId(index: number): string {
    const heading = this.headings().find((entry) => entry.index === index);
    return heading?.id ?? `section-${index}`;
  }

  authorPhoto(author: string): string {
    return AUTHOR_PHOTOS[this.normaliseAuthorName(author)] ?? DEFAULT_AUTHOR_PHOTO;
  }

  hasAuthorPortrait(author: string): boolean {
    return this.normaliseAuthorName(author) in AUTHOR_PHOTOS;
  }

  useAuthorPhotoFallback(event: Event): void {
    const image = event.target as HTMLImageElement;
    if (image.src.endsWith(DEFAULT_AUTHOR_PHOTO)) return;
    image.src = DEFAULT_AUTHOR_PHOTO;
    image.classList.add('is-brand-avatar');
  }

  socialShareUrl(network: ShareNetwork, post: CmsArticle): string {
    const articleUrl = encodeURIComponent(this.articleUrl(post));
    const title = encodeURIComponent(post.title);
    switch (network) {
      case 'linkedin': return `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`;
      case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
      case 'x': return `https://twitter.com/intent/tweet?url=${articleUrl}&text=${title}`;
      case 'whatsapp': return `https://wa.me/?text=${title}%20${articleUrl}`;
      case 'email': return `mailto:?subject=${title}&body=${encodeURIComponent(`Read this article: ${post.title}\n\n${this.articleUrl(post)}`)}`;
    }
  }

  shareNetworkLabel(network: ShareNetwork): string {
    const labels: Record<ShareNetwork, string> = {
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      x: 'X',
      whatsapp: 'WhatsApp',
      email: 'email',
    };
    return labels[network];
  }

  async sharePost(post: CmsArticle): Promise<void> {
    const url = this.articleUrl(post);
    if (globalThis.navigator?.share) {
      try {
        await globalThis.navigator.share({ title: post.title, text: post.description, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }

    const clipboard = globalThis.navigator?.clipboard;
    if (!clipboard) {
      globalThis.open(this.socialShareUrl('email', post), '_blank', 'noopener,noreferrer');
      return;
    }

    try {
      await clipboard.writeText(url);
      this.copiedLink.set(true);
      globalThis.setTimeout(() => this.copiedLink.set(false), 2000);
    } catch {
      globalThis.open(this.socialShareUrl('email', post), '_blank', 'noopener,noreferrer');
    }
  }

  /** Renders a small, escaped subset of inline Markdown used by Strapi. */
  inlineMarkdown(value: string): string {
    const escaped = value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    return escaped
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      );
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

    // Strapi's editor can put the image URL on the following line. Markdown
    // normally requires `](` to be adjacent, so normalize that form first.
    const normalizedContent = content
      .replace(/\r/g, '')
      .replace(/!\[([^\]]*)\]\s*\n\s*\(\s*((?:https?:\/\/|\/)[^\s)]+)\s*\)/g, '![$1]($2)');

    for (const rawLine of normalizedContent.split('\n')) {
      const line = rawLine.trim();
      const image = line.match(/^(?:---\s*)?!\[([^\]]*)\]\(\s*((?:https?:\/\/|\/)[^\s)]+)\s*\)$/);
      if (!line) {
        flushParagraph();
        flushList();
      } else if (image) {
        flushParagraph();
        flushList();
        blocks.push({ kind: 'img', text: image[1], imageUrl: image[2], items: [] });
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

  private articleUrl(post: CmsArticle): string {
    const siteUrl = SITE.siteUrl.replace(/\/$/, '');
    return `${siteUrl}${this.detailBase}/${encodeURIComponent(post.slug)}`;
  }

  private normaliseAuthorName(author: string): string {
    return author.trim().toLowerCase().replace(/\./g, '').replace(/\s+/g, ' ');
  }

  private normaliseRouteSlug(slug: string): string {
    return decodeURIComponent(slug).trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  }

  private relatedScore(current: CmsArticle, candidate: CmsArticle): number {
    let score = 0;
    const currentPages = this.relatedPageKeys(current);
    const candidatePages = this.relatedPageKeys(candidate);
    if ([...currentPages].some((page) => candidatePages.has(page))) score += 16;
    if (current.product && candidate.product === current.product) score += 12;
    if (current.subCategory && candidate.subCategory === current.subCategory) score += 8;
    if (current.mainCategory && candidate.mainCategory === current.mainCategory) score += 4;
    if (candidate.category === current.category) score += 6;
    return score;
  }

  private relatedPageKeys(post: CmsArticle): ReadonlySet<string> {
    return new Set(
      (post.relatedPages ?? '')
        .split(',')
        .map((value) => value.trim().toLowerCase().replace(/^\/+|\/+$/g, ''))
        .filter(Boolean)
    );
  }

}
