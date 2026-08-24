import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { CatalogService, slugify } from '../core/catalog.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CATEGORY_FAQ_BASE, CATEGORY_FAQ_EXTRA, CATEGORY_LEDE } from '../data/category.data';
import { Category, Faq } from '../data/models';
import { MENU_CATEGORY_MAP } from '../data/services.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** One service link inside a group. */
interface CatLink {
  readonly name: string;
  readonly desc: string;
  readonly link: string;
  readonly core: boolean;
}

interface CatGroup {
  readonly name: string;
  readonly items: readonly CatLink[];
}

/** Everything the template needs for one category landing page. */
interface CategoryView {
  /** the label in the URL — a menu label such as "Software" keeps its own name */
  readonly label: string;
  readonly lowerLabel: string;
  readonly cat: Category;
  readonly lede: string;
  readonly groups: readonly CatGroup[];
  readonly serviceCount: number;
  readonly faqs: readonly Faq[];
}

/**
 * `/category/:name` — the landing page for one practice. The service list is
 * the same directory data the homepage section renders, so the two can never
 * drift apart; `:name` also resolves menu labels such as `software`.
 */
@Component({
  selector: 'xh-category-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.page.html',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly overlay = inject(OverlayService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);

  readonly name = toSignal(this.route.paramMap.pipe(map((p) => p.get('name') ?? '')), {
    initialValue: '',
  });

  /** `null` when the slug matches neither a category nor a menu label. */
  readonly view = computed<CategoryView | null>(() => this.resolve(this.name()));

  readonly waHref = computed(() =>
    this.leads.whatsappLink(
      `Hi XcellHost, I would like help choosing a ${this.view()?.lowerLabel ?? ''} service.`
    )
  );

  readonly mailHref = computed(() => {
    const label = this.view()?.label ?? 'services';
    return this.leads.mailtoLink(
      `Enquiry: ${label}`,
      [
        'Hi XcellHost,',
        '',
        `We are looking at your ${label} services.`,
        '',
        'Company:',
        'What we are trying to solve:',
        'Best time to call:',
      ].join('\n')
    );
  });

  constructor() {
    effect(() => {
      const v = this.view();
      if (!v) {
        void this.router.navigate(['/']);
        return;
      }
      this.seo.set(`${v.label} services — XcellHost`, v.lede, `/category/${slugify(v.label)}/`);
    });
  }

  /**
   * Compare the slug against every category name first, then the menu labels in
   * `MENU_CATEGORY_MAP` — that is what makes `/category/software` resolve to the
   * Web Presence catalogue while keeping "Software" as the visible title.
   */
  private resolve(slug: string): CategoryView | null {
    if (!slug) return null;

    const grouped = this.catalog.grouped();
    const direct = grouped.find((g) => slugify(g.cat) === slug);
    const label =
      direct?.cat ?? Object.keys(MENU_CATEGORY_MAP).find((k) => slugify(k) === slug) ?? '';
    if (!label) return null;

    const cat: Category = direct ? direct.cat : MENU_CATEGORY_MAP[label];
    const block = grouped.find((g) => g.cat === cat);
    if (!block) return null;

    const groups: CatGroup[] = block.groups.map((g) => ({
      name: g.name,
      items: g.items.map((e) => ({
        name: e.name,
        desc: e.desc,
        link: '/' + slugify(e.name),
        core: this.catalog.isCore(e.name),
      })),
    }));

    return {
      label,
      lowerLabel: label.toLowerCase(),
      cat,
      lede: CATEGORY_LEDE[label] ?? CATEGORY_LEDE[cat] ?? '',
      groups,
      serviceCount: groups.reduce((n, g) => n + g.items.length, 0),
      faqs: [...CATEGORY_FAQ_BASE[cat], ...CATEGORY_FAQ_EXTRA[cat]],
    };
  }

  openCallback(ev: Event): void {
    ev.preventDefault();
    this.topics.ask((this.view()?.label ?? '') + ' services');
    this.overlay.open('callback');
  }
}
