import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { JSON_INPUT_LIMIT, JsonAnalysis, JsonFormatError, JsonFormatMode, JsonFormatReport, JsonIndent, analyzeJson, jsonFileText, renderJson } from '../core/json-formatter';

interface JsonPageIssue { message: string; kind: 'syntax' | 'limit' | 'file' | 'output'; position: number | null; line: number | null; column: number | null; }
@Component({
  selector: 'xh-json-formatter-page', standalone: true, imports: [RouterLink],
  templateUrl: './json-formatter.page.html', styleUrls: ['./dns-lookup.page.css', './json-formatter.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormatterPage {
  private readonly document = inject(DOCUMENT);
  private timer: ReturnType<typeof setTimeout> | undefined;
  private revision = 0;
  readonly input = signal('');
  readonly source = signal<'paste' | 'file'>('paste');
  readonly fileName = signal('');
  readonly fileNote = signal('');
  readonly indent = signal<JsonIndent>('2');
  readonly mode = signal<JsonFormatMode>('pretty');
  readonly live = signal(true);
  readonly pending = signal(false);
  readonly reading = signal(false);
  readonly dragging = signal(false);
  readonly analysis = signal<JsonAnalysis | null>(null);
  readonly report = signal<JsonFormatReport | null>(null);
  readonly issue = signal<JsonPageIssue | null>(null);
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly inputLimit = JSON_INPUT_LIMIT;
  readonly tipExample = '{"enabled": true, "items": []}';
  readonly inputInfo = computed(() => ({ bytes: new TextEncoder().encode(this.input()).length, lines: this.input() ? this.input().split(/\r\n|\r|\n/).length : 0 }));
  readonly preview = computed(() => this.report()?.output.slice(0, 100000) || '');
  readonly status = computed(() => this.reading() ? 'Reading file' : this.pending() ? 'Waiting to format' : this.analysis() ? 'Valid JSON' : this.issue()?.kind === 'syntax' ? 'Invalid JSON' : this.issue() ? 'Needs attention' : 'Ready for JSON');
  readonly related = [
    { id: 'json-to-csv', icon: 'table_view', title: 'JSON to CSV', text: 'Convert flat JSON records into tabular data.' },
    { id: 'csv-to-json', icon: 'data_object', title: 'CSV to JSON', text: 'Turn a CSV header and rows into JSON records.' },
    { id: 'base64', icon: 'code', title: 'Base64 Encoder / Decoder', text: 'Work with encoded payloads and file bytes.' },
    { id: 'jwt-decoder', icon: 'key', title: 'JWT Decoder', text: 'Inspect token headers and JSON payloads.' },
  ];
  readonly features = [
    { icon: 'verified', title: 'Syntax validation', text: 'Check one complete JSON document and locate an error by line and column.' },
    { icon: 'format_indent_increase', title: 'Readable indentation', text: 'Choose two spaces, four spaces or tabs while retaining the original tokens.' },
    { icon: 'compress', title: 'Whitespace minification', text: 'Remove spacing outside strings, then compare the UTF-8 input and output sizes.' },
    { icon: 'upload_file', title: 'Local files and exports', text: 'Open a UTF-8 JSON file, edit its contents and copy or download the full result.' },
  ];
  readonly questions = [
    { q: 'What does the validator accept?', a: 'It accepts the JSON syntax for objects, arrays, strings, numbers, true, false and null, including a primitive as the root value. Property names and strings need double quotes. JavaScript expressions, comments, trailing commas and multiple root values are rejected. Syntax validation does not check a JSON Schema or your application’s required fields.' },
    { q: 'Will formatting alter a large number or reorder my keys?', a: 'The formatter retains each original token and changes only the whitespace between tokens. Large integers, decimal spellings such as 1.00, exponent notation, string escape sequences and key order remain intact. It does not round-trip the document through JavaScript objects.' },
    { q: 'Why is there a duplicate-key warning?', a: 'Duplicate property names are retained and counted. Many applications keep only one value when they parse repeated names, so the result can differ between consumers. Escaped equivalents, such as a literal name and its Unicode-escaped spelling, count as the same name within one object. Identical names in different objects do not conflict.' },
    { q: 'What does minification remove?', a: 'Minification removes spaces, tabs and line breaks between tokens. It keeps whitespace inside quoted strings, along with existing escapes. The result stays valid JSON, but it is not a canonical JSON representation for signing or hashing.' },
    { q: 'How do live formatting and error navigation work?', a: 'With Live formatting enabled, the tool waits briefly after an edit before validating and updating the selected output mode. Editing clears stale results immediately. Use Go to error to focus the input at the reported location; columns count UTF-16 code units, as the browser editor does.' },
    { q: 'Which file encodings and sizes are supported?', a: 'Open a UTF-8 file up to 1 MiB. A leading UTF-8 byte-order mark is removed during file import and noted above the editor. Invalid UTF-8 is rejected. Processing is limited to 100,000 tokens and 256 nesting levels; formatted output is limited to 4 MiB. Try minification if indentation exceeds the output limit.' },
    { q: 'Is the full document included when I copy or download?', a: 'Yes. The preview shows up to 100,000 characters to keep the editor responsive. Copy output and Download JSON use the complete result, with no added newline. You can also move the output back into the input when it fits the input-size limit.' },
    { q: 'Are documents uploaded or saved by this tool?', a: 'Formatting and validation run locally in this page. The tool does not send your document to a formatting service, fetch URLs from its contents or save it in browser storage. Copy uses your clipboard; Download JSON saves the chosen output to a file.' },
  ];
  constructor() {
    inject(SeoService).set('JSON Formatter & Validator - Beautify & Minify JSON | XcellHost', 'Format, minify and validate JSON locally with live output, indentation controls, UTF-8 file upload, precise errors and copy or download options.', '/tools/json-formatter');
    inject(DestroyRef).onDestroy(() => { this.cancelTimer(); this.revision++; this.fallback.set(''); });
  }
  private cancelTimer(): void { if (this.timer) clearTimeout(this.timer); this.timer = undefined; this.pending.set(false); }
  private invalidate(): void {
    this.cancelTimer(); this.revision++; this.reading.set(false); this.analysis.set(null); this.report.set(null); this.issue.set(null); this.notice.set(''); this.fallback.set('');
  }
  private schedule(): void {
    if (!this.live() || !this.input().trim()) return;
    const revision = this.revision; this.pending.set(true);
    this.timer = setTimeout(() => { this.timer = undefined; if (revision === this.revision) this.process(); }, 300);
  }
  private process(): void {
    this.cancelTimer();
    try {
      const analysis = analyzeJson(this.input()); this.analysis.set(analysis);
      try { this.report.set(renderJson(analysis, this.mode(), this.indent())); }
      catch (error) { this.issue.set({ message: error instanceof Error ? error.message : 'Unable to produce this output.', kind: 'output', position: null, line: null, column: null }); }
    } catch (error) {
      this.analysis.set(null); this.report.set(null);
      this.issue.set(error instanceof JsonFormatError ? { message: error.message, kind: error.kind, position: error.position, line: error.line, column: error.column } : { message: error instanceof Error ? error.message : 'Unable to validate JSON.', kind: 'syntax', position: null, line: null, column: null });
    }
  }
  edit(event: Event): void { this.invalidate(); this.input.set((event.target as HTMLTextAreaElement).value); this.fileName.set(''); this.fileNote.set(''); this.schedule(); }
  changeSource(source: 'paste' | 'file'): void { if (source === this.source()) return; this.invalidate(); this.source.set(source); this.schedule(); }
  setIndent(event: Event): void { this.invalidate(); this.indent.set((event.target as HTMLSelectElement).value as JsonIndent); if (this.input().trim()) this.process(); }
  toggleLive(event: Event): void { this.invalidate(); this.live.set((event.target as HTMLInputElement).checked); this.schedule(); }
  run(mode: JsonFormatMode): void { this.invalidate(); this.mode.set(mode); this.process(); if (this.report()) this.notice.set(mode === 'pretty' ? 'Formatted JSON is ready.' : 'Minified JSON is ready.'); }
  example(): void {
    this.invalidate(); this.source.set('paste'); this.fileName.set(''); this.fileNote.set('');
    this.input.set('{"service":"XcellHost","active":true,"region":"Mumbai","plans":[{"name":"Cloud","seats":12},{"name":"Security","seats":8}],"metadata":{"currency":"INR","note":"Hello, नमस्ते 🌍","optional":null}}'); this.process();
  }
  clear(): void {
    this.invalidate(); this.input.set(''); this.fileName.set(''); this.fileNote.set(''); this.dragging.set(false);
    const file = this.document.querySelector<HTMLInputElement>('#json-file'); if (file) file.value = '';
  }
  selectFile(event: Event): void { const input = event.target as HTMLInputElement, file = input.files?.[0]; input.value = ''; if (file) void this.loadFile(file); }
  openFile(): void { this.document.querySelector<HTMLInputElement>('#json-file')?.click(); }
  drag(event: DragEvent): void { event.preventDefault(); this.dragging.set(true); }
  leave(event: DragEvent): void { event.preventDefault(); this.dragging.set(false); }
  drop(event: DragEvent): void { event.preventDefault(); this.dragging.set(false); const file = event.dataTransfer?.files[0]; if (file) void this.loadFile(file); }
  async loadFile(file: File): Promise<void> {
    this.invalidate(); const revision = this.revision;
    if (file.size > JSON_INPUT_LIMIT) { this.issue.set({ message: 'Choose a UTF-8 JSON file up to 1 MiB.', kind: 'file', position: null, line: null, column: null }); return; }
    this.reading.set(true);
    try {
      const decoded = jsonFileText(new Uint8Array(await file.arrayBuffer())); if (revision !== this.revision) return;
      this.input.set(decoded.text); this.fileName.set(file.name); this.fileNote.set(decoded.removedBom ? 'A leading UTF-8 BOM was removed during import.' : 'UTF-8 file loaded locally.'); this.process();
    } catch (error) { if (revision === this.revision) this.issue.set({ message: error instanceof Error ? error.message : 'The file could not be read.', kind: 'file', position: null, line: null, column: null }); }
    finally { if (revision === this.revision) this.reading.set(false); }
  }
  goToError(): void {
    const issue = this.issue(), editor = this.document.querySelector<HTMLTextAreaElement>('#json-input');
    if (!editor || issue?.position === null || issue?.position === undefined) return;
    editor.focus(); editor.setSelectionRange(issue.position, Math.min(this.input().length, issue.position + 1));
    editor.scrollTop = Math.max(0, ((issue.line || 1) - 3) * parseFloat(getComputedStyle(editor).lineHeight));
  }
  useOutput(): void {
    const report = this.report(); if (!report || report.outputBytes > JSON_INPUT_LIMIT) return;
    const text = report.output; this.invalidate(); this.source.set('paste'); this.fileName.set(''); this.fileNote.set(''); this.input.set(text); this.process(); this.notice.set('Complete output moved to the input.');
  }
  size(bytes: number): string { return bytes < 1024 ? bytes + ' B' : bytes < 1048576 ? (bytes / 1024).toFixed(1) + ' KiB' : (bytes / 1048576).toFixed(2) + ' MiB'; }
  sizeChange(): string { const report = this.report(); if (!report) return ''; const difference = report.analysis.inputBytes - report.outputBytes; return difference >= 0 ? this.size(difference) + ' smaller' : this.size(-difference) + ' larger'; }
  async copy(): Promise<void> {
    const report = this.report(); if (!report) return; const revision = this.revision;
    try { await navigator.clipboard.writeText(report.output); if (revision === this.revision) { this.fallback.set(''); this.notice.set('Complete JSON output copied.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(report.output); this.notice.set('Clipboard unavailable. Select and copy the complete output below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#json-copy-fallback')?.select(); }, 0); }
  }
  download(): void {
    const report = this.report(); if (!report) return;
    const url = URL.createObjectURL(new Blob([report.output], { type: 'application/json;charset=utf-8' }));
    const link = this.document.createElement('a'); link.href = url; link.download = report.mode === 'minify' ? 'minified.json' : 'formatted.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set('Complete JSON download started.');
  }
}
