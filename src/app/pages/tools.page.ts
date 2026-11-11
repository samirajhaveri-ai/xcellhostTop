import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TOOL_CATEGORIES, SITE_TOOLS, ToolField } from '../data/tools.data';
import { runSiteTool, ToolResult } from '../core/tool-runner';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-tools-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tools.page.html',
  styleUrl: './tools.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  private readonly queryParams = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  private readonly seo = inject(SeoService);
  private request = 0;
  readonly categories = TOOL_CATEGORIES;
  readonly tools = SITE_TOOLS;
  readonly tool = computed(() => SITE_TOOLS.find(t => t.id === this.params().get('tool')));
  readonly unknown = computed(() => !!this.params().get('tool') && !this.tool());
  readonly category = signal('all');
  readonly query = signal('');
  readonly values = signal<Record<string, string>>({});
  readonly busy = signal(false);
  readonly result = signal<ToolResult | null>(null);
  readonly error = signal('');
  readonly copied = signal(false);
  readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    return SITE_TOOLS.filter(t => (this.category() === 'all' || t.categoryId === this.category()) && (!query || `${t.name} ${t.description} ${t.categoryName}`.toLowerCase().includes(query)));
  });
  readonly related = computed(() => SITE_TOOLS.filter(t => t.categoryId === this.tool()?.categoryId && t.id !== this.tool()?.id).slice(0, 4));

  constructor() {
    effect(() => {
      const tool = this.tool();
      this.request++;
      this.values.set(Object.fromEntries((tool?.fields || []).map(f => [f.key, f.value || ''])));
      this.result.set(null); this.error.set(''); this.busy.set(false); this.copied.set(false);
      this.seo.set(tool ? tool.name + ' | XcellHost Tools' : 'Free Online Tools | XcellHost', tool?.description || 'DNS and email lookups, security utilities, generators, converters and network calculators on XcellHost.', tool ? '/tools/' + tool.id : '/tools');
    });
    effect(() => { const category = this.queryParams().get('category'); this.category.set(TOOL_CATEGORIES.some(c => c.id === category) ? category! : 'all'); });
  }

  search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); }
  update(field: ToolField, event: Event): void {
    this.request++; this.busy.set(false); this.result.set(null); this.error.set(''); this.copied.set(false);
    this.values.update(values => ({ ...values, [field.key]: (event.target as HTMLInputElement).value }));
  }
  async run(event: Event): Promise<void> {
    event.preventDefault(); const tool = this.tool(); if (!tool || this.busy()) return;
    const request = ++this.request; this.busy.set(true); this.error.set(''); this.result.set(null); this.copied.set(false);
    try { const result = await runSiteTool(tool, { ...this.values() }); if (request === this.request) this.result.set(result); }
    catch (error) { if (request === this.request) this.error.set(error instanceof Error ? error.message : 'The tool could not complete the request.'); }
    finally { if (request === this.request) this.busy.set(false); }
  }
  async copy(): Promise<void> {
    const text = this.result()?.text; if (text === undefined) return;
    try { await navigator.clipboard.writeText(text); this.copied.set(true); }
    catch { this.error.set('Copy is unavailable in this browser. Select the result text or download it instead.'); }
  }
  download(): void {
    const result = this.result(); if (!result) return;
    const url = URL.createObjectURL(new Blob([result.text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = (this.tool()?.id || 'tool-result') + '.txt'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
