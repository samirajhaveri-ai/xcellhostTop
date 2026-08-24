import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { CATEGORY_COLORS } from '../data/category.data';
import { Category, DirectoryEntry } from '../data/models';

/** One rendered `.sr` row. */
interface Hit {
  name: string;
  desc: string;
  cat: Category;
  slug: string;
  color: string;
}

/** Names the original showed before anything was typed. */
const FEATURED =
  /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;

const DEBOUNCE_MS = 120;
const MAX_COMPARE = 4;

/**
 * The full-screen `#srch` dialog: free-text search across the 205-service
 * catalogue, arrow-key navigation, and the compare basket that hands two to
 * four services over to `/compare`.
 *
 * Visibility is owned by `OverlayService` under the id `'search'`. Escape is
 * bound once on the app shell (`OverlayService.closeTop()`), so this component
 * only handles `/` to open, and the arrows / Enter while it is open.
 */
@Component({
  selector: 'xh-search-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    style: 'display: contents',
    '(document:keydown)': 'onDocumentKey($event)',
  },
  imports: [RouterLink],
  templateUrl: './search.component.html',
})
export class SearchDialogComponent {
  private readonly catalog = inject(CatalogService);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  readonly overlay = inject(OverlayService);

  private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('srchI');

  /** Raw field value, repainted every keystroke. */
  readonly q = signal('');
  /** Debounced copy of `q` — the only thing `results` depends on. */
  private readonly query = signal('');
  /** Index of the highlighted row. */
  readonly cur = signal(0);
  /** Service names ticked for comparison, capped at four. */
  readonly picked = signal<string[]>([]);

  private timer: ReturnType<typeof setTimeout> | null = null;

  private readonly featured: DirectoryEntry[] = this.catalog.entries
    .filter((e) => FEATURED.test(e.name))
    .slice(0, 8);

  readonly results = computed<Hit[]>(() => {
    const s = this.query().trim();
    const hits = s ? this.catalog.search(s, 12) : this.featured;
    return hits.map((e) => ({
      name: e.name,
      desc: e.desc,
      cat: e.cat,
      slug: slugify(e.name),
      color: CATEGORY_COLORS[e.cat] ?? '#1565D8',
    }));
  });

  readonly countLabel = computed(() => {
    const n = this.picked().length;
    return `${n} selected to compare${n >= MAX_COMPARE ? ' (max)' : ''}`;
  });

  readonly canCompare = computed(() => this.picked().length >= 2);

  private focusTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    /* every open starts from a clean field with the caret in it */
    effect(() => {
      if (!this.overlay.isOpen('search')) return;
      untracked(() => {
        this.q.set('');
        this.query.set('');
        this.cur.set(0);
      });
      /* `.srch` transitions `visibility`, so the field is still hidden — and
         therefore unfocusable — in the same task the class is applied. Defer
         past the transition, exactly as the original did. */
      this.focusTimer = setTimeout(() => this.inputRef()?.nativeElement.focus(), 140);
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.timer) clearTimeout(this.timer);
      if (this.focusTimer) clearTimeout(this.focusTimer);
    });
  }

  /* ------------------------------------------------------------ input */

  onInput(ev: Event): void {
    const v = (ev.target as HTMLInputElement).value;
    this.q.set(v);
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.query.set(v);
      this.cur.set(0);
    }, DEBOUNCE_MS);
  }

  /**
   * `/` opens the dialog from anywhere; the arrows and Enter drive the result
   * list while it is open, wherever focus happens to be.
   */
  onDocumentKey(ev: KeyboardEvent): void {
    const open = this.overlay.isOpen('search');

    if (!open) {
      const tag = (ev.target as HTMLElement | null)?.tagName ?? '';
      if (ev.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) {
        ev.preventDefault();
        this.overlay.open('search');
      }
      return;
    }

    const last = this.results().length - 1;
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      this.cur.update((i) => Math.min(i + 1, last));
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      this.cur.update((i) => Math.max(i - 1, 0));
    } else if (ev.key === 'Enter') {
      const hit = this.results()[this.cur()];
      if (hit) {
        ev.preventDefault();
        this.go(hit);
      }
    }
  }

  /* ----------------------------------------------------------- results */

  /** Backdrop click — only when the click landed on the layer itself. */
  onBackdrop(ev: MouseEvent): void {
    if (ev.target === ev.currentTarget) this.close();
  }

  close(): void {
    this.overlay.close('search');
  }

  go(hit: Hit): void {
    this.close();
    void this.router.navigate(['/', hit.slug]);
  }

  isPicked(name: string): boolean {
    return this.picked().includes(name);
  }

  /** `.sr-cmp` sits inside the result link, so its click must not navigate. */
  toggle(name: string, ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.picked.update((p) =>
      p.includes(name) ? p.filter((n) => n !== name) : p.length >= MAX_COMPARE ? p : [...p, name]
    );
  }

  goCompare(): void {
    const names = this.picked();
    if (names.length < 2) return;
    this.close();
    void this.router.navigate(['/compare'], {
      queryParams: { s: names.map(slugify).join(',') },
    });
  }
}
