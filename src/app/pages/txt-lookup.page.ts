import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { TXT_PURPOSES, TxtEntry, TxtLookupReport, TxtPurpose, lookupTxt, txtAnalysis, txtReportCsv } from '../core/txt-lookup';

@Component({
  selector: 'xh-txt-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './txt-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './txt-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TxtLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly purposes = TXT_PURPOSES;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly report = signal<TxtLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? txtAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly selected = signal<TxtPurpose | 'ALL'>('ALL');
  readonly visibleEntries = computed(() => this.report()?.entries.map((entry, index) => ({ ...entry, index })).filter(entry => this.selected() === 'ALL' || entry.purpose === this.selected()) || []);
  readonly aliases = computed(() => this.report()?.hosts[0].records.filter(record => record.type === 'CNAME') || []);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly ttlRange = computed(() => {
    const ttls = this.report()?.entries.map(entry => entry.ttl) || [];
    return ttls.length ? Math.min(...ttls) === Math.max(...ttls) ? Math.min(...ttls) + 's' : Math.min(...ttls) + '-' + Math.max(...ttls) + 's' : '\u2014';
  });
  readonly copyMessage = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly related = [
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Inspect the sender policy published for a domain.' },
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Read domain mail-policy and reporting tags.' },
    { id: 'dkim-lookup', icon: 'key', title: 'DKIM Lookup', text: 'Look up a signing key using its real selector.' },
    { id: 'mx-lookup', icon: 'mail', title: 'MX Lookup', text: 'Find mail destinations, preferences and server addresses.' },
  ];
  readonly questions = [
    { q: 'What information can a TXT record contain?', a: 'TXT can hold arbitrary text. Common examples include service-verification tokens, SPF policies and mail-signing keys. A purpose label is inferred from the content; it does not confirm that a service accepted the token or that an email policy is valid.' },
    { q: 'Why are some values shown as several quoted strings?', a: 'A TXT record can contain several character strings. This page joins strings within a single record without adding spaces, while keeping the original response available. Separate TXT records remain separate, even when they look similar.' },
    { q: 'Will entering my main domain find every email policy?', a: 'No. The lookup checks only the name entered. DMARC is normally published at _dmarc.example.com. DKIM uses a selector-specific name such as selector._domainkey.example.com. Enter that exact name or use the dedicated tool.' },
    { q: 'Are several TXT records at one name allowed?', a: 'Yes, different services can publish separate records. Multiple SPF policies beginning with v=spf1 at the same owner name require attention: combine the authorized senders into one SPF policy with your provider. Other TXT records are not automatically a problem.' },
    { q: 'Why is a TXT record missing from the results?', a: 'Check the exact hostname, selected resolver and remaining cache lifetime. An empty successful answer differs from NXDOMAIN, which means that name does not exist. A failed query is shown separately and should be retried before changing records.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('TXT Lookup - DNS Text Records, SPF & Verification | XcellHost', 'Look up TXT records, read joined text and original responses, identify email-policy and verification patterns, and export TXT lookup reports.', '/tools/txt-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.selected.set('ALL'); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try { const report = await lookupTxt(this.domain(), this.resolver(), controller.signal); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the TXT lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyEntry(entry: TxtEntry): Promise<void> {
    try { await navigator.clipboard.writeText(entry.value); this.copyMessage.set('TXT value copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Select the value or use Export instead.'); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Export a file to keep the results.'); }
  }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href);
    url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver() }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — TXT Lookup', text: 'TXT records via ' + report.resolver, url: url.href }); return; }
        catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; }
      }
      try { await navigator.clipboard.writeText(url.href); this.copyMessage.set('Lookup link copied'); }
      catch { this.shareLink.set(url.href); this.copyMessage.set('Copy this link to share the lookup settings.'); }
    } finally { this.sharing.set(false); }
  }
  selectShareLink(event: Event): void { (event.target as HTMLInputElement).select(); }
  toggleExport(event: MouseEvent): void { this.exportOpen.update(open => !open); if (this.exportOpen() && event.detail === 0) this.focusExportItem(); }
  openExport(event: Event): void { event.preventDefault(); this.exportOpen.set(true); this.focusExportItem(); }
  private focusExportItem(): void { setTimeout(() => this.document.querySelector<HTMLButtonElement>('.dns-export-options button')?.focus(), 0); }
  exportKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') { event.preventDefault(); this.exportOpen.set(false); this.document.querySelector<HTMLButtonElement>('.dns-export-trigger')?.focus(); return; }
    if (event.key === 'Tab') { this.exportOpen.set(false); return; }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const items = [...this.document.querySelectorAll<HTMLButtonElement>('.dns-export-options button')];
    const index = items.indexOf(this.document.activeElement as HTMLButtonElement);
    items[event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length]?.focus();
  }
  @HostListener('document:click', ['$event']) outsideExport(event: Event): void { if (!(event.target instanceof Element) || !event.target.closest('.dns-export-menu')) this.exportOpen.set(false); }
  @HostListener('document:keydown.escape') closeExport(): void { this.exportOpen.set(false); }
  async export(format: 'pdf' | 'csv' | 'json'): Promise<void> {
    const report = this.report(); if (!report || this.exporting()) return;
    this.exportOpen.set(false); this.exporting.set(format); this.copyMessage.set('');
    try {
      let content: BlobPart, mime: string;
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = report; const findings = txtAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'txt-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = txtReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-txt-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
