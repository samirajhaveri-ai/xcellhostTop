import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { RevealDirective } from '../shared/reveal.directive';

/** One catalogue entry as the template needs it. */
interface DirLink {
  readonly name: string;
  readonly desc: string;
  readonly link: string;
  /** has hand-written deep content — gets the "Core service" badge */
  readonly core: boolean;
}

interface DirGroup {
  readonly name: string;
  readonly items: DirLink[];
}

interface DirCat {
  readonly cat: string;
  readonly count: string;
  readonly sub: string;
  readonly groups: DirGroup[];
}

/** The group open inside one `.dir-cat`, plus its circle-burst origin. */
interface OpenGroup {
  readonly group: string;
  /** `--rx` for `@keyframes dgburst`, or `null` to keep the CSS default */
  readonly rx: string | null;
}

/** A single live `.dg-ripple`; `id` forces a fresh node so the CSS restarts. */
interface Ripple {
  readonly id: number;
  readonly cat: string;
  readonly group: string;
  readonly x: number;
  readonly y: number;
}

const NO_RIPPLE: readonly Ripple[] = [];

/** `@keyframes dgshock` runs .6s; the original removed the node after 650 ms. */
const RIPPLE_MS = 650;

/** Domino delays: `0.12 + min(i * 0.028, 0.9)` seconds. */
const DOMINO_BASE_S = 0.12;
const DOMINO_STEP_S = 0.028;
const DOMINO_MAX_S = 0.9;

/**
 * The full 205-service catalogue, grouped by practice and collapsed into the
 * `details.dg` pills. Everything comes from `CatalogService.grouped()`.
 *
 * Three micro-interactions from the original ride along:
 * - `script_11` — one open group per `.dir-cat`; opening a sibling closes it.
 *   The open state is a signal, and `[open]` is bound from it, so the native
 *   toggle is suppressed rather than undone after the fact.
 * - `script_12` — a `.dg-ripple` at the tap point, the `--rx` burst origin on
 *   the panel, and the per-`li` domino delays.
 * - `script_06` — `.sec-head` and every `.dir-cat` scroll-reveal.
 */
@Component({
  selector: 'xh-directory',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './directory.component.html',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectoryComponent {
  private readonly catalog = inject(CatalogService);

  readonly cats = computed<DirCat[]>(() =>
    this.catalog.grouped().map((c) => ({
      cat: c.cat,
      count: c.count,
      sub: c.sub,
      groups: c.groups.map((g) => ({
        name: g.name,
        items: g.items.map((e) => ({
          name: e.name,
          desc: e.desc,
          link: '/' + slugify(e.name),
          core: this.catalog.isCore(e.name),
        })),
      })),
    }))
  );

  /** category name → the one group open inside it */
  private readonly openGroups = signal<ReadonlyMap<string, OpenGroup>>(new Map());

  private readonly ripple = signal<Ripple | null>(null);
  private rippleId = 0;
  private rippleTimer: ReturnType<typeof setTimeout> | undefined;

  private readonly reduced =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.rippleTimer));
  }

  isOpen(cat: string, group: string): boolean {
    return this.openGroups().get(cat)?.group === group;
  }

  /** The circle-burst origin for an open panel, or `null` for the CSS default. */
  burstX(cat: string, group: string): string | null {
    const open = this.openGroups().get(cat);
    return open?.group === group ? open.rx : null;
  }

  /** `animation-delay` for the i-th product in a freshly opened panel. */
  dominoDelay(i: number): string {
    return (DOMINO_BASE_S + Math.min(i * DOMINO_STEP_S, DOMINO_MAX_S)).toFixed(3) + 's';
  }

  /** Zero or one ripple — only the summary that was tapped renders it. */
  rippleIn(cat: string, group: string): readonly Ripple[] {
    const r = this.ripple();
    return r && r.cat === cat && r.group === group ? [r] : NO_RIPPLE;
  }

  /**
   * Owns the disclosure: `preventDefault` stops the browser toggling `open`
   * behind our back, then the signal decides which group is open.
   */
  onSummary(ev: MouseEvent, cat: string, group: string): void {
    ev.preventDefault();

    const summary = ev.currentTarget as HTMLElement;
    // `detail === 0` means Enter/Space on the summary — there is no tap point
    const pointer = ev.detail > 0 && !this.reduced;
    const opening = !this.isOpen(cat, group);

    this.openGroups.update((prev) => {
      const next = new Map(prev);
      if (opening) next.set(cat, { group, rx: pointer ? this.burstOrigin(summary, ev) : null });
      else next.delete(cat);
      return next;
    });

    if (pointer) this.showRipple(summary, ev, cat, group);
  }

  /**
   * Where the tap sits across the panel, as a percentage. An open `details.dg`
   * is `flex-basis:100%`, so the panel spans the whole `.dir-grid` — which we
   * can measure now, before the panel has any layout of its own.
   */
  private burstOrigin(summary: HTMLElement, ev: MouseEvent): string | null {
    const grid = summary.closest('.dir-grid');
    if (!grid) return null;
    const r = grid.getBoundingClientRect();
    if (r.width <= 0) return null;
    const x = Math.max(4, Math.min(96, ((ev.clientX - r.left) / r.width) * 100));
    return x.toFixed(1) + '%';
  }

  private showRipple(summary: HTMLElement, ev: MouseEvent, cat: string, group: string): void {
    const r = summary.getBoundingClientRect();
    clearTimeout(this.rippleTimer);
    this.ripple.set({
      id: ++this.rippleId,
      cat,
      group,
      x: ev.clientX - r.left,
      y: ev.clientY - r.top,
    });
    this.rippleTimer = setTimeout(() => this.ripple.set(null), RIPPLE_MS);
  }
}
