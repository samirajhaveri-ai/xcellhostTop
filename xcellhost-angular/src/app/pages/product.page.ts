import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { CartService } from '../core/cart.service';
import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { CatalogService, slugify } from '../core/catalog.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { PricingPlan, ProductPageService, ProductView } from '../core/product-page.service';
import { SeoService } from '../core/seo.service';
import { DEEP_CONTENT, PLATFORM_ICONS, RICH_PRODUCTS } from '../data/products.data';
import { SITE, WORLD_MAP_HTML } from '../data/site.data';
import { HeroNetDirective, ProductFaqComponent, ProductVideoComponent } from '../sections/product';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** One row of the EDR comparison table, split into its header cell and body cells. */
interface CompareRow {
  head: string;
  cells: string[];
}

type CybirdTerm = '1y' | '2y' | '3y' | '5y';

interface CybirdPlan {
  name: string;
  users: number;
  prices: Record<CybirdTerm, number>;
  support: number;
  supportRange: string;
  accent: 'essentials' | 'plus' | 'pro' | 'max';
}

/**
 * The routed service / product page — everything the original `#ppage` overlay
 * rendered through its six-script `__ppExtras` pipeline, in one component.
 *
 * All content arrives pre-computed from `ProductPageService.build()`; this class
 * only resolves the slug, keeps the hero/video/FAQ interactions alive, and wires
 * the cart, document gate and callback hand-offs.
 */
@Component({
  selector: 'xh-product-page',
  standalone: true,
  imports: [RouterLink, HeroNetDirective, ProductVideoComponent, ProductFaqComponent],
  templateUrl: './product.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly products = inject(ProductPageService);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly blogApi = inject(BlogApiService);

  /** five star slots, so the template does not rebuild an array on every check */
  readonly starSlots = [0, 1, 2, 3, 4];

  readonly cybirdTerms: readonly { key: CybirdTerm; label: string }[] = [
    { key: '1y', label: '1 Year' },
    { key: '2y', label: '2 Years · 10% Saving' },
    { key: '3y', label: '3 Years · 15% Saving' },
    { key: '5y', label: '5 Years · 20% Saving' },
  ];

  readonly cybirdPlans: readonly CybirdPlan[] = [
    {
      name: 'Essentials', users: 10, support: 999, supportRange: '1 to 10 Employees', accent: 'essentials',
      prices: { '1y': 14999, '2y': 26999, '3y': 37999, '5y': 71999 },
    },
    {
      name: 'Plus', users: 25, support: 1499, supportRange: '10 to 24 Employees', accent: 'plus',
      prices: { '1y': 24999, '2y': 44999, '3y': 63999, '5y': 99999 },
    },
    {
      name: 'Pro', users: 50, support: 1999, supportRange: '24 to 50 Employees', accent: 'pro',
      prices: { '1y': 44999, '2y': 80999, '3y': 114999, '5y': 179999 },
    },
    {
      name: 'Max', users: 100, support: 3999, supportRange: '50 to 100 Employees', accent: 'max',
      prices: { '1y': 94999, '2y': 170999, '3y': 241999, '5y': 379999 },
    },
  ];

  readonly selectedCybirdTerm = signal<CybirdTerm>('1y');

  readonly activeCybirdTerm = computed(
    () => this.cybirdTerms.find((term) => term.key === this.selectedCybirdTerm()) ?? this.cybirdTerms[0]
  );

  /** Names that have a page of their own but are missing from the directory. */
  private static readonly EXTRA_NAMES: readonly string[] = [
    ...new Set([...Object.keys(DEEP_CONTENT), ...Object.keys(RICH_PRODUCTS)]),
  ];

  readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  /** `null` while the slug matches nothing — the effect below sends those home. */
  readonly view = computed<ProductView | null>(() => this.resolve(this.slug()));

  /** Current portion of an optional rotating product hero message. */
  readonly typedHeroText = signal('');

  /** The animated hero SVG, injected verbatim because it is our own data file. */
  /** The dotted world map behind the hero. Static markup from our own data file. */
  readonly worldMap: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);

  readonly sceneHtml = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.view()?.heroScene ?? '')
  );

  /** `Tally on Cloud` and `Cloud Backup (Acronis)` get the illustrated hero. */
  readonly isFlagship = computed(() => !!this.view()?.heroImage);

  /** The EDR campaign places its commercial offer immediately after the videos. */
  readonly isAdvancedEdr = computed(
    () => this.view()?.name === 'Advanced Endpoint Security (EDR)'
  );

  readonly isSmbCyber = computed(
    () => this.view()?.name === 'SMB Cyber Security Appliance'
  );

  readonly isRmm = computed(
    () => this.view()?.name === 'Remote Monitoring & Mgmt (RMM)'
  );

  /** Long product names sit below the XcellSecure brand in every product hero. */
  readonly stackHeroTitle = computed(
    () => (this.view()?.name.trim().split(/\s+/).filter(Boolean).length ?? 0) > 3
  );

  readonly platforms = computed(() =>
    (this.view()?.platforms ?? []).map((name) => ({ name, icon: PLATFORM_ICONS[name] ?? '🔹' }))
  );

  /** Published Strapi posts, already sorted newest-first by BlogApiService. */
  private readonly cmsPosts = signal<readonly CmsBlogPost[]>([]);

  /** The product-page row always shows the three newest CMS articles. */
  readonly blogs = computed(() =>
    this.cmsPosts()
      .filter((post) => this.isForCurrentPage(post))
      .slice(0, 3)
      .map((post) => ({
        kicker: post.category,
        meta: this.formatBlogDate(post.date),
        imageUrl: post.coverImageUrl,
        imageAlt: post.coverImage?.alternativeText || post.title,
        title: post.title,
        excerpt: post.description,
        link: ['/insights', post.slug],
      }))
  );

  readonly compareRows = computed<CompareRow[]>(() =>
    (this.view()?.edr?.compare.rows ?? []).map((r) => ({ head: r[0], cells: r.slice(1) }))
  );

  readonly waHref = computed(() =>
    this.leads.whatsappLink(`Hi XcellHost, I would like to know more about ${this.view()?.name ?? 'your services'}.`)
  );

  readonly mailHref = computed(() => {
    const name = this.view()?.name ?? 'your services';
    return this.leads.mailtoLink(
      `Enquiry: ${name}`,
      [
        `Hi XcellHost,`,
        ``,
        `We are looking at ${name}.`,
        ``,
        `Company:`,
        `Number of users / scale:`,
        `What we are trying to solve:`,
        `Best time to call:`,
      ].join('\n')
    );
  });

  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.cmsPosts.set(posts),
      error: () => this.cmsPosts.set([]),
    });

    effect(() => {
      const v = this.view();
      if (!v) {
        void this.router.navigate(['/']);
        return;
      }
      const slug = this.slug();
      this.seo.set(`${v.name} — XcellHost`, v.overview.slice(0, 160), `/${slug}/`);
      this.seo.setJsonLd('product', this.jsonLd(v, slug));
    });

    effect((onCleanup) => {
      const messages = this.view()?.heroMessages ?? [];
      this.typedHeroText.set('');
      if (!messages.length) return;

      let messageIndex = 0;
      let characterIndex = 0;
      let deleting = false;
      let timer: ReturnType<typeof setTimeout>;

      const typeNextCharacter = () => {
        const message = messages[messageIndex];
        characterIndex += deleting ? -1 : 1;
        this.typedHeroText.set(message.slice(0, characterIndex));

        let delay = deleting ? 35 : 70;
        if (!deleting && characterIndex === message.length) {
          deleting = true;
          delay = 1600;
        } else if (deleting && characterIndex === 0) {
          deleting = false;
          messageIndex = (messageIndex + 1) % messages.length;
          delay = 350;
        }
        timer = setTimeout(typeNextCharacter, delay);
      };

      timer = setTimeout(typeNextCharacter, 300);
      onCleanup(() => clearTimeout(timer));
    });
  }

  private formatBlogDate(value: string): string {
    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(
      new Date(`${value}T00:00:00`)
    );
  }

  /** Exact targeting prevents Tally posts appearing on Bare Metal or Acronis pages. */
  private isForCurrentPage(post: CmsBlogPost): boolean {
    const currentSlug = this.slug();
    const assignedSlugs = (post.relatedPages ?? '')
      .split(',')
      .map((value) => value.trim().toLowerCase().replace(/^\/+|\/+$/g, ''))
      .filter(Boolean);

    // A category matching the exact service name remains a convenient fallback.
    return (
      assignedSlugs.includes(currentSlug) ||
      (!assignedSlugs.length && slugify(post.category) === currentSlug)
    );
  }

  /* -------------------------------------------------------------- routing */

  /**
   * 1. the directory, 2. the hand-written product content (so `Acronis EDR`,
   * which never appears in the directory, still resolves), 3. give up.
   */
  private resolve(slug: string): ProductView | null {
    if (!slug) return null;

    const entry = this.catalog.entryBySlug(slug);
    if (entry) {
      return this.products.build({
        name: entry.name,
        tag: entry.desc,
        cat: entry.cat,
        crumb: `${entry.cat} › ${entry.group}`,
      });
    }

    const name = ProductPage.EXTRA_NAMES.find((k) => slugify(k) === slug);
    return name ? this.products.build({ name }) : null;
  }

  /* ------------------------------------------------------------ cart / CTA */

  /** `.pl-add` — drop the plan in the quote cart and stay put. */
  addPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.cart.add(plan.cartName, plan.cartPrice);
  }

  /** RMM "View Plan" keeps the visitor on-page and opens the selected plan in the cart. */
  viewPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.cart.add(plan.cartName, plan.cartPrice);
    this.cart.open();
  }

  /** `.pl-buy` and the hero Buy Now — add, open the drawer, go straight to checkout. */
  buyPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.cart.add(plan.cartName, plan.cartPrice);
    this.cart.open();
    this.cart.toCheckout();
  }

  /** Hero "Buy Now" buys the entry-level term, which is what the ladder starts at. */
  buyNow(ev: Event): void {
    const plan = this.view()?.plans[0];
    if (!plan) {
      ev.preventDefault();
      return;
    }
    this.buyPlan(plan, ev);
  }

  requestDoc(kind: DocKind, ev: Event): void {
    ev.preventDefault();
    const v = this.view();
    if (!v) return;
    this.docs.ask(kind, v.name);
    this.overlay.open('doc');
  }

  openTrial(ev: Event): void {
    ev.preventDefault();
    this.overlay.open('trial');
  }

  openCallback(ev: Event): void {
    ev.preventDefault();
    this.topics.ask(this.view()?.name ?? "");
    this.overlay.open('callback');
  }

  selectCybirdTerm(term: CybirdTerm): void {
    this.selectedCybirdTerm.set(term);
  }

  cybirdPrice(plan: CybirdPlan): number {
    return plan.prices[this.selectedCybirdTerm()];
  }

  formatInr(value: number): string {
    return new Intl.NumberFormat('en-IN').format(value);
  }

  selectCybirdPlan(plan: CybirdPlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`Cybird ${plan.name} - ${this.activeCybirdTerm().label}`);
    this.overlay.open('callback');
  }

  /* ----------------------------------------------------------------- seo */

  private jsonLd(v: ProductView, slug: string): Record<string, unknown> {
    const price = v.chips.find((c) => c.kind === 'price')?.label ?? '';
    const amount = /₹\s*([\d,]+)/.exec(price)?.[1]?.replace(/,/g, '');
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: v.name,
      description: v.overview.slice(0, 300),
      category: v.cat,
      url: SITE.siteUrl.replace(/\/$/, '') + '/' + slug + '/',
      brand: { '@type': 'Brand', name: SITE.shortName },
      provider: {
        '@type': 'Organization',
        name: SITE.company,
        url: SITE.siteUrl,
        telephone: SITE.phone,
        email: SITE.email,
      },
      ...(amount
        ? {
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: amount,
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'Organization', name: SITE.company },
            },
          }
        : {}),
    };
  }
}
