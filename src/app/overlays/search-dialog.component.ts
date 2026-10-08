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

import { slugify } from '../core/catalog.service';
import { AlgoliaSearchService } from '../core/algolia-search.service';
import { OverlayService } from '../core/overlay.service';
import { SiteSearchResult, SiteSearchService } from '../core/site-search.service';
import { environment } from '../../environments/environment';

const DEBOUNCE_MS = 120;
const MAX_COMPARE = 4;

/**
 * The full-screen `#srch` dialog: free-text search across products, pages and
 * live CMS blogs, plus keyboard navigation and product comparison.
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
  styleUrl: './search.component.css',
})
export class SearchDialogComponent {
  private readonly search = inject(SiteSearchService);
  private readonly algolia = inject(AlgoliaSearchService);
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
  readonly loading = signal(false);
  readonly remoteFailed = signal(false);
  private readonly remoteResults = signal<SiteSearchResult[] | null>(null);
  private requestId = 0;
  readonly aiMode = signal(false);
  readonly sources = signal<string[]>([]);
  readonly categories = signal<string[]>([]);
  readonly visibleLimit = signal(6);
  readonly answer = signal('');
  readonly answering = signal(false);
  readonly generatedAnswer = signal(false);
  private answerController?: AbortController;
  private answerId = 0;
  private previousFocus: HTMLElement | null = null;
  readonly questions = [
    { text: 'How can I protect my business from cyber threats?', query: 'security' },
    { text: 'Which cloud solution is right for my business?', query: 'cloud' },
    { text: 'How do I back up Microsoft 365 data?', query: 'Microsoft 365 Backup' },
    { text: 'Can you help me manage and monitor my IT?', query: 'managed' },
  ];
  readonly suggestions = ['Cloud backup', 'Microsoft 365', 'Tally on Cloud', 'VAPT Services'];

  private timer: ReturnType<typeof setTimeout> | null = null;

  private readonly candidates = computed<SiteSearchResult[]>(() => {
    const s = this.query().trim();
    if (!s) {
      const featured = this.search.featured();
      const seen = new Set(featured.map((hit) => hit.url));
      return [...featured, ...this.search.browse().filter((hit) => !seen.has(hit.url))];
    }
    const local = this.search.search(s, this.search.browse().length);
    const remote = this.remoteResults() ?? [];
    const seen = new Set(remote.map((hit) => hit.url));
    return [...remote, ...local.filter((hit) => !seen.has(hit.url))];
  });

  readonly sourceOptions = computed(() => ['Product', 'Page', 'Blog'].map((value) => ({
    value, label: value === 'Product' ? 'Products & services' : value === 'Page' ? 'Website pages' : 'Blog & insights',
    count: this.candidates().filter((hit) => hit.kind === value && (!this.categories().length || this.categories().includes(hit.label))).length,
  })));
  readonly categoryOptions = computed(() => {
    const items = this.candidates().filter((hit) => hit.kind === 'Product');
    const labels = new Set(this.search.browse().filter((hit) => hit.kind === 'Product').map((hit) => hit.label));
    return [...labels].sort().map((value) => ({ value, count: items.filter((hit) => hit.label === value && (!this.sources().length || this.sources().includes(hit.kind))).length }));
  });
  readonly filteredResults = computed(() => this.candidates().filter((hit) =>
    (!this.sources().length || this.sources().includes(hit.kind)) &&
    (!this.categories().length || this.categories().includes(hit.label))
  ));
  readonly results = computed(() => this.filteredResults().slice(0, this.visibleLimit()));
  readonly hasFilters = computed(() => this.sources().length > 0 || this.categories().length > 0);

  readonly resultStatus = computed(() => {
    if (!this.query().trim()) return this.hasFilters() ? `${this.filteredResults().length} results` : 'Explore products & resources';
    if (this.loading()) return 'Searching…';
    if (this.remoteFailed()) return 'Live search unavailable · showing site results';
    return `${this.filteredResults().length} site results`;
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
      if (!this.overlay.isOpen('search')) {
        untracked(() => {
          this.resetAnswer();
          this.requestId++;
          if (this.timer) clearTimeout(this.timer);
          if (this.focusTimer) clearTimeout(this.focusTimer);
          this.previousFocus?.focus();
          this.previousFocus = null;
        });
        return;
      }
      untracked(() => {
        this.previousFocus = this.inputRef()?.nativeElement.ownerDocument.activeElement as HTMLElement | null;
        this.resetAnswer();
        this.aiMode.set(false);
        this.clearFilters();
        this.q.set('');
        this.query.set('');
        this.cur.set(0);
        this.remoteResults.set(null);
        this.remoteFailed.set(false);
        this.loading.set(false);
        this.requestId++;
      });
      /* `.srch` transitions `visibility`, so the field is still hidden — and
         therefore unfocusable — in the same task the class is applied. Defer
         past the transition, exactly as the original did. */
      this.focusTimer = setTimeout(() => this.inputRef()?.nativeElement.focus(), 140);
    });

    inject(DestroyRef).onDestroy(() => {
      if (this.timer) clearTimeout(this.timer);
      if (this.focusTimer) clearTimeout(this.focusTimer);
      this.answerController?.abort();
    });
  }

  /* ------------------------------------------------------------ input */

  onInput(ev: Event): void {
    const v = (ev.target as HTMLInputElement).value;
    this.setQuery(v);
  }

  setQuery(v: string): void {
    this.q.set(v);
    this.resetAnswer();
    this.visibleLimit.set(6);
    this.requestId++;
    this.remoteResults.set(null);
    this.remoteFailed.set(false);
    this.loading.set(false);
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.query.set(v);
      this.cur.set(0);
      if (v.trim() && this.algolia.configured) void this.searchAlgolia(v.trim(), this.requestId);
    }, DEBOUNCE_MS);
  }

  toggleFilter(type: 'source' | 'category', value: string): void {
    const selected = type === 'source' ? this.sources : this.categories;
    selected.update((values) => values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
    this.visibleLimit.set(6);
    this.cur.set(0);
    this.resetAnswer();
  }

  clearFilters(): void {
    this.sources.set([]);
    this.categories.set([]);
    this.cur.set(0);
    this.visibleLimit.set(6);
    this.resetAnswer();
  }

  showMore(): void { this.visibleLimit.update((limit) => limit + 10); }

  toggleAi(): void {
    this.aiMode.update((mode) => !mode);
    this.resetAnswer();
    this.inputRef()?.nativeElement.focus();
  }

  askQuestion(question: { text: string; query: string }): void {
    this.aiMode.set(true);
    this.setQuery(question.text);
    if (this.timer) clearTimeout(this.timer);
    void this.askAi(question.query);
  }

  private resetAnswer(): void {
    this.answerId++;
    this.answerController?.abort();
    this.answer.set('');
    this.answering.set(false);
    this.generatedAnswer.set(false);
  }

  async askAi(retrievalQuery?: string): Promise<void> {
    const message = this.q().trim();
    if (!message || this.answering()) return;
    if (this.timer) clearTimeout(this.timer);
    this.requestId++;
    this.loading.set(false);
    // Strip conversational filler for retrieval; the original question goes to the AI endpoint.
    const terms = (retrievalQuery ?? message).toLowerCase().replace(/\bcyber\b/g, 'cybersecurity').replace(/[^a-z0-9 ]/g, ' ').split(/\s+/)
      .filter((term) => term.length > 2 && !/^(how|can|you|help|which|what|the|for|with|from|are|and|does|have|right|business|data|my|our|protect|need|want|best|should|use|would|could)$/.test(term));
    const retrieval = terms.join(' ') || message;
    this.query.set(retrieval);
    this.resetAnswer();
    const id = this.answerId;
    this.answering.set(true);
    const controller = new AbortController();
    this.answerController = controller;
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      // Broader local retrieval supports questions whose wording differs from product titles.
      const local = terms.flatMap((term) => this.search.search(term, 12));
      const ranked = new Map<string, { hit: SiteSearchResult; score: number }>();
      for (const hit of local) {
        const previous = ranked.get(hit.url);
        ranked.set(hit.url, { hit, score: (previous?.score ?? 0) + 1 });
      }
      let remote: SiteSearchResult[] = [];
      if (this.algolia.configured) {
        try { remote = await this.algolia.search(retrieval); } catch { if (id === this.answerId) this.remoteFailed.set(true); }
      }
      if (id !== this.answerId) return;
      const recommendations = [...remote, ...[...ranked.values()].sort((a, b) => b.score - a.score).map((entry) => entry.hit)];
      this.remoteResults.set([...new Map(recommendations.map((hit) => [hit.url, hit])).values()]);
      const context = this.filteredResults().slice(0, 5).map((hit) => ({ title: hit.name, description: hit.desc, url: hit.url }));
      if (environment.chatEndpoint) {
        try {
          const response = await fetch(environment.chatEndpoint, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
            body: JSON.stringify({ message, system: 'Answer questions about XcellHost using only the supplied search context. If context is insufficient, say so. Do not invent prices or capabilities.', context }),
          });
          if (!response.ok) throw new Error('AI response unavailable');
          const body = await response.json();
          if (id !== this.answerId) return;
          if (typeof body.answer === 'string' && body.answer.trim()) {
            this.answer.set(body.answer);
            this.generatedAnswer.set(true);
            return;
          }
        } catch { /* Keep the retrieved recommendations available. */ }
      }
      if (id !== this.answerId) return;
      this.answer.set(context.length
        ? 'Explore these services related to your question. Open a result for details, or compare products to find the right fit.'
        : 'Try a service or topic such as cloud backup, Microsoft 365 or cybersecurity. Our team can also help you choose a solution.');
    } finally {
      clearTimeout(timeout);
      if (id === this.answerId) this.answering.set(false);
    }
  }

  private async searchAlgolia(query: string, requestId: number): Promise<void> {
    this.loading.set(true);
    try {
      const hits = await this.algolia.search(query);
      if (requestId !== this.requestId || !this.overlay.isOpen('search')) return;
      this.remoteResults.set(hits);
      this.cur.set(0);
    } catch {
      if (requestId !== this.requestId || !this.overlay.isOpen('search')) return;
      this.remoteFailed.set(true);
    } finally {
      if (requestId === this.requestId) this.loading.set(false);
    }
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
    if (ev.key === 'Tab') {
      const box = this.inputRef()?.nativeElement.closest('.srch-box');
      const focusable = Array.from(box?.querySelectorAll<HTMLElement>('input, button:not(:disabled), a[href]') ?? []);
      const first = focusable[0];
      const final = focusable[focusable.length - 1];
      if (ev.shiftKey && ev.target === first) { ev.preventDefault(); final?.focus(); }
      else if (!ev.shiftKey && ev.target === final) { ev.preventDefault(); first?.focus(); }
      return;
    }
    if (ev.target !== this.inputRef()?.nativeElement) return;
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      this.cur.update((i) => Math.min(i + 1, last));
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      this.cur.update((i) => Math.max(i - 1, 0));
    } else if (ev.key === 'Enter') {
      if (this.aiMode()) { ev.preventDefault(); void this.askAi(); return; }
      const hit = this.results()[this.cur()];
      if (hit) {
        ev.preventDefault();
        this.go(hit);
      }
    }
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      const input = this.inputRef()?.nativeElement;
      input?.ownerDocument.defaultView?.requestAnimationFrame(() =>
        input.closest('.srch-box')?.querySelector('.sr.on')?.scrollIntoView({ block: 'nearest' })
      );
    }
  }

  /* ----------------------------------------------------------- results */

  /** Backdrop click — only when the click landed on the layer itself. */
  onBackdrop(ev: MouseEvent): void {
    if (ev.target === ev.currentTarget) this.close();
  }

  close(): void {
    this.requestId++;
    if (this.timer) clearTimeout(this.timer);
    this.resetAnswer();
    this.overlay.close('search');
    this.previousFocus?.focus();
  }

  go(hit: SiteSearchResult): void {
    this.close();
    void this.router.navigateByUrl(hit.url);
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
