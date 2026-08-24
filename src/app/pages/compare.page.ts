import { ChangeDetectionStrategy, Component, computed, effect, inject, linkedSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { CartService } from '../core/cart.service';
import { CatalogService, slugify } from '../core/catalog.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CATEGORY_COLORS, CATEGORY_COMPARE_WHY } from '../data/category.data';
import { Category, DirectoryEntry } from '../data/models';
import { CATEGORY_FEATURES } from '../data/services.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** One column of `#cmpTable` — a single service, fully resolved. */
interface CompareCol {
  name: string;
  slug: string;
  desc: string;
  cat: Category;
  color: string;
  price: string;
  features: string[];
  why: string[];
}

/** One row of the picker list. */
interface PickRow {
  name: string;
  desc: string;
  cat: Category;
  color: string;
}

/** Names offered before anything is typed into the picker. */
const FEATURED =
  /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;

const MAX = 4;

/**
 * `/compare` — the side-by-side comparison table.
 *
 * In the original this was a `position:fixed` `#cmpPage` layer that the search
 * dialog filled in with an `innerHTML` string. Here it is a routed page whose
 * selection lives in the `?s=` query parameter, so a comparison can be shared,
 * bookmarked and arrived at from the search dialog or built up on the page
 * itself. The picker is new; everything else keeps the original markup.
 */
@Component({
  selector: 'xh-compare-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './compare.page.html',
})
export class ComparePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly cart = inject(CartService);
  private readonly leads = inject(LeadService);
  private readonly overlay = inject(OverlayService);
  private readonly callbackTopic = inject(CallbackTopicService);
  private readonly seo = inject(SeoService);

  readonly max = MAX;

  /** `?s=tally-on-cloud,microsoft-365` */
  private readonly slugsParam = toSignal(
    this.route.queryParamMap.pipe(map((p) => p.get('s') ?? '')),
    { initialValue: '' }
  );

  /** Selection follows the URL, but the user can also change it in place. */
  readonly selected = linkedSignal(() => this.namesFor(this.slugsParam()));

  readonly columns = computed<CompareCol[]>(() =>
    this.selected()
      .map((name) => this.catalog.findInDirectory(name))
      .filter((e): e is DirectoryEntry => !!e)
      .map((e) => this.column(e))
  );

  /* ------------------------------------------------------------- picker */

  readonly pickQuery = signal('');

  private readonly featured: DirectoryEntry[] = this.catalog.entries
    .filter((e) => FEATURED.test(e.name))
    .slice(0, 8);

  readonly pickRows = computed<PickRow[]>(() => {
    const s = this.pickQuery().trim();
    const hits = s ? this.catalog.search(s, 14) : this.featured;
    return hits.map((e) => ({
      name: e.name,
      desc: e.desc,
      cat: e.cat,
      color: CATEGORY_COLORS[e.cat] ?? '#1565D8',
    }));
  });

  readonly countLabel = computed(() => {
    const n = this.selected().length;
    return `${n} of ${MAX} selected`;
  });

  /* --------------------------------------------------------- hand-offs */

  readonly waHref = computed(() => {
    const names = this.selected();
    return this.leads.whatsappLink(
      names.length
        ? `Hi XcellHost, I am comparing: ${names.join(', ')}`
        : 'Hi XcellHost, I would like help choosing between your services.'
    );
  });

  constructor() {
    effect(() => {
      const names = this.selected();
      this.seo.set(
        'Compare services — XcellHost',
        names.length
          ? `Side-by-side comparison of ${names.join(', ')} — price, features and what XcellHost includes.`
          : 'Compare XcellHost services side by side — price, category, key features and what is included.',
        '/compare/'
      );
    });
  }

  /* ------------------------------------------------------------ actions */

  onPickInput(ev: Event): void {
    this.pickQuery.set((ev.target as HTMLInputElement).value);
  }

  isSelected(name: string): boolean {
    return this.selected().includes(name);
  }

  atLimit(): boolean {
    return this.selected().length >= MAX;
  }

  toggle(name: string): void {
    const cur = this.selected();
    const next = cur.includes(name)
      ? cur.filter((n) => n !== name)
      : cur.length >= MAX
        ? cur
        : [...cur, name];
    if (next === cur) return;
    this.apply(next);
  }

  clear(): void {
    this.apply([]);
  }

  /** "Add all to quote" — every selected service goes into the quote cart. */
  addAll(): void {
    const cols = this.columns();
    if (!cols.length) return;
    for (const c of cols) this.cart.add(c.name, c.price);
    this.cart.open();
  }

  openCallback(ev: Event): void {
    ev.preventDefault();
    const names = this.selected();
    this.callbackTopic.ask(names.length ? `Comparing: ${names.join(', ')}` : 'Comparing services');
    this.overlay.open('callback');
  }

  /* ------------------------------------------------------------ helpers */

  private apply(names: string[]): void {
    this.selected.set(names);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { s: names.length ? names.map(slugify).join(',') : null },
      replaceUrl: true,
    });
  }

  private namesFor(raw: string): string[] {
    const out: string[] = [];
    for (const slug of raw.split(',')) {
      const entry = this.catalog.entryBySlug(slug.trim());
      if (entry && !out.includes(entry.name)) out.push(entry.name);
      if (out.length >= MAX) break;
    }
    return out;
  }

  private column(e: DirectoryEntry): CompareCol {
    const rich = this.catalog.rich(e.name);
    const featSrc = rich?.f ?? CATEGORY_FEATURES[e.cat] ?? CATEGORY_FEATURES['Cloud'];
    return {
      name: e.name,
      slug: slugify(e.name),
      desc: e.desc,
      cat: e.cat,
      color: CATEGORY_COLORS[e.cat] ?? '#1565D8',
      price: rich?.price || this.priceFrom(e.desc),
      features: featSrc.slice(0, 4).map((f) => f[0]),
      why: CATEGORY_COMPARE_WHY[e.cat] ?? CATEGORY_COMPARE_WHY['Cloud'],
    };
  }

  /** The original fallback: pull a "from ₹…" figure out of the directory blurb. */
  private priceFrom(desc: string): string {
    return /from\s*(₹[\d,]+[^\s—]*)/i.exec(desc)?.[1] ?? 'On quote';
  }
}
