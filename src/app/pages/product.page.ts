import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
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
import { HeroNetDirective, ProductFaqComponent } from '../sections/product';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { LottieDirective } from '../shared/lottie.directive';

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

type TallyTerm = 'monthly' | '3m' | '6m' | '1y';

interface TallyPlan {
  users: string;
  name: string;
  edition: string;
  prices: Record<TallyTerm, number>;
  serverType: string;
  cpu: string;
  memory: string;
  disk: string;
}

type CloudDriveTerm = 'monthly' | '3m' | '6m' | '1y';

interface CloudDrivePlan {
  storage: string;
  unit: string;
  qty: number;
  prices: Record<CloudDriveTerm, number>;
  comments: string;
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
  imports: [RouterLink, HeroNetDirective, LottieDirective, ProductFaqComponent],
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

  readonly edrPlanCoverage = ['15 months coverage', '30 months coverage', '48 months coverage'];
  readonly edrPlanFeatures = [
    'Advanced Security + EDR licence',
    'Behavioral and AI-based detection',
    'Anti-ransomware protection with rollback',
    'Exploit prevention and URL filtering',
    'Continuous endpoint monitoring',
    'Endpoint isolation and response actions',
    'Free deployment and onboarding',
    'XcellHost engineer support',
  ];

  readonly rmmPlanFeatures = [
    'Device discovery and asset management',
    'Vulnerability assessment and patch management',
    'System and hardware monitoring',
    'AI-assisted scripting and automation',
    'Software deployment with DeployPilot',
    'Remote desktop and assistance',
    'Microsoft 365 security posture management',
    'XcellHost engineer support',
  ];

  readonly selectedEdrPlanIndex = signal(0);
  readonly edrQuantity = signal(1);

  selectEdrPlan(index: number): void {
    this.selectedEdrPlanIndex.set(index);
  }

  changeEdrQuantity(change: number): void {
    this.edrQuantity.update((quantity) => Math.max(1, quantity + change));
  }

  edrPlanTotal(plan: PricingPlan): string {
    return `₹${this.edrPlanTotalValue(plan).toLocaleString('en-IN')}`;
  }

  private edrPlanTotalValue(plan: PricingPlan): number {
    const annualPrice = Number(plan.amount.replace(/[^0-9.]/g, '')) || 0;
    const years = Number.parseInt(plan.term, 10) || 1;
    return annualPrice * years * this.edrQuantity();
  }

  readonly cybirdTerms: readonly { key: CybirdTerm; label: string; saving: string }[] = [
    { key: '1y', label: '1 Year', saving: '' },
    { key: '2y', label: '2 Years', saving: 'Save 10%' },
    { key: '3y', label: '3 Years', saving: 'Save 15%' },
    { key: '5y', label: '5 Years', saving: 'Save 20%' },
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

  readonly tallyTerms: readonly { key: TallyTerm; label: string; saving: string }[] = [
    { key: 'monthly', label: 'Monthly', saving: '' },
    { key: '3m', label: '3 Months', saving: 'Save 5%' },
    { key: '6m', label: '6 Months', saving: 'Save 7.5%' },
    { key: '1y', label: '1 Year', saving: 'Save 10%' },
  ];

  readonly tallyPlans: readonly TallyPlan[] = [
    { users: '3 to 4', name: 'Tally Private', edition: 'Cloud Lite', prices: { monthly: 1776, '3m': 5061.6, '6m': 9856.8, '1y': 19180.8 }, serverType: 'Dedicated VM', cpu: '4 vCPU', memory: '6 GB', disk: '100 GB' },
    { users: '5', name: 'Tally Private', edition: 'Cloud X Small', prices: { monthly: 2616, '3m': 7455.6, '6m': 14518.8, '1y': 28252.8 }, serverType: 'Dedicated VM', cpu: '4 vCPU', memory: '8 GB', disk: '150 GB' },
    { users: '10', name: 'Tally Private', edition: 'Cloud Small', prices: { monthly: 5520, '3m': 15732, '6m': 30636, '1y': 59616 }, serverType: 'Dedicated VM', cpu: '6 vCPU', memory: '12 GB', disk: '150 GB' },
    { users: '11 to 15', name: 'Tally Private', edition: 'Cloud Medium', prices: { monthly: 7200, '3m': 20520, '6m': 39960, '1y': 77760 }, serverType: 'Dedicated VM', cpu: '8 vCPU', memory: '16 GB', disk: '200 GB' },
    { users: '16 to 20', name: 'Tally Private', edition: 'Cloud X Large', prices: { monthly: 11664, '3m': 33242.4, '6m': 64735.2, '1y': 125971.2 }, serverType: 'Dedicated VM', cpu: '12 vCPU', memory: '32 GB', disk: '300 GB' },
    { users: '21+ to 30', name: 'Tally Private', edition: 'Cloud XX Large', prices: { monthly: 21168, '3m': 60328.8, '6m': 117482.4, '1y': 228614.4 }, serverType: 'Dedicated VM', cpu: '16 vCPU', memory: '64 GB', disk: '400 GB' },
    { users: '31+ to 50', name: 'Tally Private', edition: 'Cloud XXX Large', prices: { monthly: 26640, '3m': 75924, '6m': 147852, '1y': 287712 }, serverType: 'Dedicated VM', cpu: '20 vCPU', memory: '96 GB', disk: '500 GB' },
    { users: '51+ to 75', name: 'Tally Private', edition: 'Cloud XXX Large', prices: { monthly: 48912, '3m': 139399.2, '6m': 271461.6, '1y': 528249.6 }, serverType: 'Dedicated VM', cpu: '24 vCPU', memory: '128 GB', disk: '750 GB' },
  ];

  readonly selectedTallyTerm = signal<TallyTerm>('monthly');

  readonly activeTallyTerm = computed(
    () => this.tallyTerms.find((term) => term.key === this.selectedTallyTerm()) ?? this.tallyTerms[0]
  );

  tallyPrice(plan: TallyPlan): number {
    return plan.prices[this.selectedTallyTerm()];
  }

  readonly cloudDriveTerms: readonly { key: CloudDriveTerm; label: string; saving: string }[] = [
    { key: 'monthly', label: 'Monthly', saving: '' },
    { key: '3m', label: '3 Months', saving: 'Save 5%' },
    { key: '6m', label: '6 Months', saving: 'Save 7.5%' },
    { key: '1y', label: '1 Year', saving: 'Save 10%' },
  ];

  readonly cloudDrivePlans: readonly CloudDrivePlan[] = [
    {
      storage: '500 GB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 4999, '3m': 14247.15, '6m': 27744.45, '1y': 53989.2 },
      comments: 'Enterprise File & Sync with 500 GB Storage | Unlimited Users',
    },
    {
      storage: '1 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 9999, '3m': 28497.15, '6m': 55494.45, '1y': 107989.2 },
      comments: 'Enterprise File & Sync with 1 TB Storage | Unlimited Users',
    },
    {
      storage: '2 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 19000, '3m': 54150, '6m': 105450, '1y': 205200 },
      comments: 'Enterprise File & Sync with 2 TB Storage | Unlimited Users',
    },
    {
      storage: '5 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 35625, '3m': 101531.25, '6m': 197718.75, '1y': 384750 },
      comments: 'Enterprise File & Sync with 5 TB Storage | Unlimited Users',
    },
  ];

  readonly selectedCloudDriveTerm = signal<CloudDriveTerm>('monthly');

  readonly activeCloudDriveTerm = computed(
    () => this.cloudDriveTerms.find((term) => term.key === this.selectedCloudDriveTerm()) ?? this.cloudDriveTerms[0]
  );

  cloudDrivePrice(plan: CloudDrivePlan): number {
    return plan.prices[this.selectedCloudDriveTerm()];
  }

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

  /** Every resolved product gets a localized or category-level hero illustration. */
  readonly isFlagship = computed(() => !!this.view()?.heroImage);

  /** The EDR campaign places its commercial offer immediately after the videos. */
  readonly isAdvancedEdr = computed(
    () => this.view()?.name === 'Advanced Endpoint Security (EDR)'
  );

  readonly isSmbCyber = computed(
    () => this.view()?.name === 'SMB Cyber Security Appliance'
  );

  readonly isTally = computed(() => this.view()?.name === 'Tally on Cloud');

  readonly isCloudDrive = computed(() => this.view()?.name === 'Cloud Drive');

  /** Every product's available videos, shown together immediately before reviews. */
  readonly showcaseVideos = computed<readonly { label: string; url: SafeResourceUrl }[]>(() => {
    const view = this.view();
    if (!view) return [];

    return view.videos.slice(0, 2).flatMap((video, index) => {
      if (!video) return [];
      return [{
        label: view.videoLabels[index] ?? (index === 0 ? 'Product Intro' : 'Use Cases'),
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube-nocookie.com/embed/${video}?rel=0&playsinline=1`,
        ),
      }];
    });
  });

  readonly isRmm = computed(
    () => this.view()?.name === 'Remote Monitoring & Mgmt (RMM)'
  );

  /** Long hero headings use the compact single-line treatment as one whole title. */
  readonly compactHeroTitle = computed(() => {
    const v = this.view();
    if (!v) return false;
    const title = `Xcell${v.brandSuffix} | ${v.name}`;
    return title.length > 34 || title.trim().split(/\s+/).filter(Boolean).length > 5;
  });

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

  readonly askAiPrompt = computed(() => {
    const view = this.view();
    const productName = view?.name ?? 'this service';
    const tagline = view?.tagline ?? '';
    const overview = view?.overview ?? '';

    return [
      `Give me a quick overview of XcellHost's ${productName} service.`,
      tagline ? `Tagline: ${tagline}` : '',
      overview ? `Context: ${overview}` : '',
      'Summarize the ideal use cases, benefits, and what a business buyer should ask before purchasing.',
    ]
      .filter(Boolean)
      .join(' ');
  });

  askAiHref(platform: 'chatgpt' | 'perplexity' | 'claude' | 'google' | 'grok'): string {
    const prompt = encodeURIComponent(this.askAiPrompt());

    switch (platform) {
      case 'chatgpt':
        return `https://chatgpt.com/?q=${prompt}`;
      case 'perplexity':
        return `https://www.perplexity.ai/search/new?q=${prompt}`;
      case 'claude':
        return `https://claude.ai/new?q=${prompt}`;
      case 'google':
        return `https://gemini.google.com/app`;
      case 'grok':
        return `https://grok.com/?q=${prompt}`;
    }
  }

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
  viewRmmPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    const quantity = this.edrQuantity();
    const total = this.edrPlanTotalValue(plan);
    const price = total ? `â‚¹${total.toLocaleString('en-IN')} total` : plan.cartPrice;

    this.cart.add(`${plan.cartName} Ã— ${quantity} users`, price);
    this.cart.open();
  }

  /** `.pl-buy` and the hero Buy Now — add, open the drawer, go straight to checkout. */
  buyPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.cart.add(plan.cartName, plan.cartPrice);
    this.cart.open();
    this.cart.toCheckout();
  }

  buyEdrPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    const quantity = this.edrQuantity();
    const total = this.edrPlanTotalValue(plan);
    const price = total ? `₹${total.toLocaleString('en-IN')} total` : plan.cartPrice;

    this.cart.add(`${plan.cartName} × ${quantity} users`, price);
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

  selectTallyTerm(term: TallyTerm): void {
    this.selectedTallyTerm.set(term);
  }

  selectTallyPlan(plan: TallyPlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`${plan.name} (${plan.edition}) - ${plan.users} users - ${this.activeTallyTerm().label}`);
    this.overlay.open('callback');
  }

  selectCloudDriveTerm(term: CloudDriveTerm): void {
    this.selectedCloudDriveTerm.set(term);
  }

  selectCloudDrivePlan(plan: CloudDrivePlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`Cloud Drive ${plan.storage} - ${this.activeCloudDriveTerm().label}`);
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
