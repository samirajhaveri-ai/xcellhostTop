import { DatePipe, DecimalPipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { BimiLookupReport, bimiAnalysis, bimiReportCsv, lookupBimi } from '../core/bimi-lookup';

@Component({
  selector: 'xh-bimi-lookup-page', standalone: true, imports: [RouterLink, DatePipe, DecimalPipe, JsonPipe],
  templateUrl: './bimi-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './spf-lookup.page.css', './bimi-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BimiLookupPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly selector = signal('default');
  readonly inspectAssets = signal(true);
  readonly logoPreview = signal('');
  readonly busy = signal(false);
  readonly error = signal('');
  readonly progress = signal('');
  readonly report = signal<BimiLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? bimiAnalysis(this.report()!) : null);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly view = signal<'records' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly copiedValue = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Inspect policy, alignment and reporting settings.' },
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Read sender policy and DNS dependencies.' },
    { id: 'dkim-lookup', icon: 'key', title: 'DKIM Lookup', text: 'Inspect selectors and public-key records.' },
    { id: 'email-dns-health', icon: 'mail', title: 'Email DNS Health', text: 'Check common mail DNS configuration.' },
  ];
  readonly questions = [
    { q: 'What does a BIMI record do?', a: 'It publishes brand-indicator preferences at selector._bimi.domain. The l tag locates a logo and the optional a tag locates evidence, often a VMC or CMC certificate. Supporting mailbox providers decide whether an authenticated message qualifies for logo display.' },
    { q: 'Which selector should I enter?', a: 'Use default unless your email provider or a signed BIMI-Selector header specifies another selector. This page checks that exact selector/domain and follows CNAME delegation. It does not enumerate selectors, evaluate local-part selectors or search organizational-domain BIMI fallback.' },
    { q: 'Does BIMI require DMARC enforcement?', a: 'The BIMI Group requires enforcement on the organizational domain and subdomains, and does not accept monitoring policies or legacy pct values below 100. This page shows current-standard DMARC policy context and flags legacy percentage settings. It does not establish organizational coverage or authenticate a real message.' },
    { q: 'Does the SVG check fully validate SVG Tiny P/S?', a: 'No. The browser preflight inspects well-formed SVG, declared profile, title, square viewBox and a conservative set of portable elements and attributes. It rejects scripts and external references. Full schema compliance, visual brand accuracy and provider acceptance require specialist validation. Only an asset passing every preflight check is previewed.' },
    { q: 'What is the difference between VMC and CMC?', a: 'Both are mark-certificate evidence types, with different issuance requirements. Provider support varies. This tool can decode the first X.509 certificate in a readable PEM chain and show its dates and SHA-256 fingerprint. It does not validate a trusted chain, mark type, revocation, brand ownership, domain authorization or embedded-logo matching.' },
    { q: 'Why is an asset marked unreadable?', a: 'Browsers can block cross-origin responses without suitable CORS headers. Network, TLS, redirect and timeout restrictions can also prevent inspection. Unreadable here does not prove the asset is down. This tool uses credential-free HTTPS requests, follows no redirects and limits each asset to 256 KiB and 10 seconds.' },
    { q: 'Why is my logo still missing in email?', a: 'Mailbox providers apply their own authentication, evidence, reputation and display rules. A published assertion and a readable logo are only parts of that process. Review actual messages and your provider requirements. An explicit v=BIMI1; l=; a= record declines publication for that selector.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver'); if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.selector.set((params.get('selector') ?? 'default').slice(0, 253)); this.inspectAssets.set(params.get('assets') !== '0');
    inject(SeoService).set('BIMI Lookup - Brand Logo, Evidence & DNS | XcellHost', 'Look up BIMI selectors, inspect logo URLs and certificate metadata, review DMARC context, and export a DNS snapshot.', '/tools/bimi-lookup');
    inject(DestroyRef).onDestroy(() => { this.controller?.abort(); this.clearPreview(); });
  }
  private clearPreview(): void { const url = this.logoPreview(); if (url) URL.revokeObjectURL(url); this.logoPreview.set(''); }
  private reset(): void { this.clearPreview(); this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.copiedValue.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  inputSelector(event: Event): void { this.reset(); this.selector.set((event.target as HTMLInputElement).value); }
  toggleAssets(event: Event): void { this.reset(); this.inspectAssets.set((event.target as HTMLInputElement).checked); }
  cancel(): void { this.reset(); this.copyMessage.set('Lookup cancelled.'); }
  async run(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return; this.reset();
    const controller = new AbortController(); this.controller = controller; this.busy.set(true); this.view.set('records');
    try { const report = await lookupBimi(this.domain(), this.selector(), this.resolver(), this.inspectAssets(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }, new DOMParser()); if (!controller.signal.aborted) { this.report.set(report); if (report.logo.content && report.logo.svg?.previewAllowed) this.logoPreview.set(URL.createObjectURL(new Blob([report.logo.content], { type: 'image/svg+xml' }))); } }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the BIMI lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyValue(value: string): Promise<void> {
    const report = this.report();
    try { await navigator.clipboard.writeText(value); if (this.report() === report) { this.copyMessage.set('BIMI value copied'); this.copiedValue.set(value); } }
    catch { this.copyMessage.set('Copy is unavailable. Select the record text or use Export.'); }
  }
  async copy(): Promise<void> { try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('BIMI snapshot copied as JSON'); } catch { this.copyMessage.set('Copy is unavailable. Use Export to save this snapshot.'); } }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href); url.search = new URLSearchParams({ domain: report.domain, selector: report.selector, resolver: this.resolver(), assets: report.inspectAssets ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) { try { await navigator.share({ title: report.domain + ' - BIMI Lookup', text: 'BIMI selector snapshot via ' + report.resolver, url: url.href }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; } }
      try { await navigator.clipboard.writeText(url.href); this.copyMessage.set('Lookup settings link copied'); }
      catch { this.shareLink.set(url.href); this.copyMessage.set('Copy this link to share the lookup settings.'); }
    } finally { this.sharing.set(false); }
  }
  toggleExport(event: MouseEvent): void { this.exportOpen.update(open => !open); if (this.exportOpen() && event.detail === 0) this.focusExportItem(); }
  openExport(event: Event): void { event.preventDefault(); this.exportOpen.set(true); this.focusExportItem(); }
  private focusExportItem(): void { setTimeout(() => this.document.querySelector<HTMLButtonElement>('.dns-export-options button')?.focus(), 0); }
  exportKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') { event.preventDefault(); this.exportOpen.set(false); this.document.querySelector<HTMLButtonElement>('.dns-export-trigger')?.focus(); return; }
    if (event.key === 'Tab') { this.exportOpen.set(false); return; }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return; event.preventDefault();
    const items = [...this.document.querySelectorAll<HTMLButtonElement>('.dns-export-options button')], index = items.indexOf(this.document.activeElement as HTMLButtonElement);
    items[event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length]?.focus();
  }
  @HostListener('document:click', ['$event']) outsideExport(event: Event): void { if (!(event.target instanceof Element) || !event.target.closest('.dns-export-menu')) this.exportOpen.set(false); }
  @HostListener('document:keydown.escape') closeExport(): void { this.exportOpen.set(false); }
  async export(format: 'pdf' | 'csv' | 'json'): Promise<void> {
    const report = this.report(); if (!report || this.exporting()) return;
    this.exportOpen.set(false); this.exporting.set(format); this.copyMessage.set('');
    try {
      let content: BlobPart, mime: string;
      if (format === 'pdf') {
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'), findings = bimiAnalysis(report);
        const analysis = { ...dnsReportAnalysis(report), rootCount: report.entries.length, checks: findings.checks, tips: findings.tips, badge: findings.badge, summary: findings.summary };
        content = dnsReportPdf(report, { analysis, toolPath: 'bimi-lookup', queryParameters: { selector: report.selector, assets: report.inspectAssets ? '1' : '0', resolver: this.resolver() } }); mime = 'application/pdf';
      } else if (format === 'csv') { content = bimiReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-bimi-report.' + format; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
