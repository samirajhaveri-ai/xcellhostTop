import {
  ChangeDetectionStrategy, Component, DestroyRef, ElementRef, InjectionToken,
  afterRenderEffect, inject, input, output, signal, untracked, viewChild,
} from '@angular/core';
import type { DocSearchInstance } from '@docsearch/js';
import type { SearchLaunchMode } from '../core/search-launch.service';
import { normalizeKnowledgebaseHits } from './docsearch-hits';

/** Load the browser-only widget on demand, after Angular has rendered. */
export const DOCSEARCH_LOADER = new InjectionToken('DocSearch loader', {
  providedIn: 'root', factory: () => () => import('@docsearch/js'),
});

@Component({
  selector: 'xh-algolia-search', standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div #docsearchHost id="docsearch" hidden></div>
    @if (active() && !ready()) {
      <div class="algolia-loading" role="dialog" aria-modal="true" aria-label="Knowledgebase search" (click)="onBackdrop($event)">
        <div class="algolia-loading-box">
          <button type="button" class="algolia-close" aria-label="Close search" (click)="closed.emit()">×</button>
          <h2>Search & Ask AI</h2>
          <p role="status">{{ failed() ? 'Search could not load. Please try again.' : 'Loading knowledgebase search…' }}</p>
          @if (failed()) { <button type="button" (click)="retry()">Try again</button> }
          <button type="button" (click)="useWebsiteSearch()">Search website instead</button>
        </div>
      </div>
    }
  `,
  styles: `
    .algolia-loading { position:fixed;inset:0;z-index:10000;display:grid;place-items:start center;padding:64px 20px;background:#040f2ca3;backdrop-filter:blur(7px); }
    .algolia-loading-box { position:relative;width:min(720px,100%);padding:32px;border-radius:14px;background:white;color:#041e42; }
    h2 { font:600 22px var(--disp);margin-bottom:12px; }
    p { margin-bottom:20px; }
    button { padding:8px 12px;margin-right:8px;border:1px solid #dce5f2;border-radius:8px;background:#f2f6fc;color:#1565d8;cursor:pointer;font:inherit; }
    .algolia-close { position:absolute;right:12px;top:12px;font-size:20px; }
  `,
})
export class AlgoliaSearchComponent {
  readonly active = input(false);
  readonly mode = input<SearchLaunchMode>('search');
  readonly closed = output<void>();
  readonly websiteSearch = output<void>();
  readonly ready = signal(false);
  readonly failed = signal(false);
  private readonly host = viewChild.required<ElementRef<HTMLElement>>('docsearchHost');
  private readonly load = inject(DOCSEARCH_LOADER);
  private readonly destroyRef = inject(DestroyRef);
  private instance?: DocSearchInstance;
  private loading = false;
  private switching = false;
  private generation = 0;

  constructor() {
    afterRenderEffect(() => {
      const active = this.active();
      untracked(() => {
        if (active) {
          this.switching = false;
          if (this.instance?.isReady) this.openRequestedMode();
          else if (!this.failed()) void this.initialize();
        } else {
          ++this.generation;
          this.instance?.destroy();
          this.instance = undefined;
          this.ready.set(false);
        }
      });
    });
    this.destroyRef.onDestroy(() => { ++this.generation; this.instance?.destroy(); });
  }

  retry(): void { this.failed.set(false); void this.initialize(); }

  useWebsiteSearch(): void {
    this.switching = true;
    this.websiteSearch.emit();
    this.instance?.close();
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closed.emit();
  }

  private async initialize(): Promise<void> {
    if (this.loading || this.instance || this.destroyRef.destroyed) return;
    this.loading = true;
    const generation = ++this.generation;
    try {
      const { default: docsearch } = await this.load();
      if (this.destroyRef.destroyed || generation !== this.generation || !this.active()) return;
      this.instance = docsearch({
        container: this.host().nativeElement,
        appId: 'GH7MDMKNPP',
        apiKey: 'c5ceee3640b2b59da15b86069c653367',
        indices: [{ name: 'xcellhostknowlegdebase search', searchParameters: { attributesToRetrieve: ['*'] } }],
        transformItems: normalizeKnowledgebaseHits,
        askAi: { agentId: 'd3eb7873-e31f-4418-9b42-9bcaebe2e8f4' },
        placeholder: 'Search the XcellHost knowledgebase…',
        keyboardShortcuts: { '/': false, 'Ctrl/Cmd+K': false },
        onReady: () => {
          if (generation !== this.generation || this.destroyRef.destroyed) return;
          this.ready.set(true);
          if (this.active() && !this.destroyRef.destroyed) this.openRequestedMode();
        },
        onClose: () => {
          if (generation === this.generation && !this.switching && this.active() && !this.instance?.isOpen && !this.destroyRef.destroyed) this.closed.emit();
        },
        footerAction: (_, { html }) => html`<div class="xh-docsearch-actions"><button type="button" class="xh-docsearch-ai" onClick=${() => this.instance?.openAskAi()}>✦ Ask AI</button><button type="button" class="xh-docsearch-website" onClick=${() => this.useWebsiteSearch()}>Search website</button></div>`,
      });
    } catch {
      if (!this.destroyRef.destroyed && generation === this.generation) {
        this.instance?.destroy();
        this.instance = undefined;
        this.ready.set(false);
        this.failed.set(true);
      }
    } finally {
      this.loading = false;
      if (!this.destroyRef.destroyed && this.active() && !this.instance && !this.failed()) void this.initialize();
    }
  }

  private openRequestedMode(): void {
    this.instance?.open();
    if (this.mode() === 'ask-ai') this.instance?.openAskAi();
  }
}
