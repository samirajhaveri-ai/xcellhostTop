import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { CnameHop, CnameLookupReport, lookupCname, cnameAnalysis, cnameReportCsv, cnameExportReport } from '../core/cname-lookup';

@Component({
  selector: 'xh-cname-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './cname-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './cname-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CnameLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly report = signal<CnameLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? cnameAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly resolveAddresses = signal(true);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly ttlRange = computed(() => {
    const ttls = this.report()?.hops.map(hop => hop.ttl) || [];
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
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Query address, alias and other common DNS record types.' },
    { id: 'all-dns-records', icon: 'view_list', title: 'All DNS Records', text: 'Inspect a broader snapshot of the records at a name.' },
    { id: 'soa-lookup', icon: 'account_tree', title: 'SOA Lookup', text: 'Read zone authority, serial and timing information.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read policies and service-verification text.' },
  ];
  readonly questions = [
    { q: 'What does a CNAME change?', a: 'It makes a DNS name an alias of another name. An A record supplies an IPv4 address, and an AAAA record supplies an IPv6 address. A CNAME instead delegates the next DNS step to a hostname, allowing its addresses to change independently.' },
    { q: 'Is a CNAME the same as a website redirect?', a: 'No. A CNAME affects DNS resolution. A website redirect is an HTTP response that can send a browser to a different URL. This tool does not fetch the website or test HTTP redirects, certificates or application availability.' },
    { q: 'Why does my root domain show no CNAME?', a: 'A standard zone apex already has SOA and NS data and cannot also be an ordinary CNAME. Some DNS providers offer ALIAS, ANAME or flattening features that return address records instead. Enter the exact subdomain if you expected a visible alias.' },
    { q: 'Can an alias point to another alias?', a: 'Yes. This page follows up to 12 CNAME hops, stopping when no further alias is returned or when it detects a loop, conflicting targets, a query failure or an unsupported target. It keeps intermediate answers and the stopping reason in the report.' },
    { q: 'Does a service hint confirm that my hosting is configured?', a: 'No. The hint matches a known suffix in a returned hostname. It does not verify a provider account, service ownership or takeover risk. Check the target against your provider configuration and compare resolvers after the cached TTL expires.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    this.resolveAddresses.set(params.get('addresses') !== '0');
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('CNAME Lookup - DNS Alias Chain & Targets | XcellHost', 'Trace CNAME records, inspect alias targets and TTLs, check endpoint addresses, and export a DNS alias report.', '/tools/cname-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  chooseAddresses(event: Event): void { this.reset(); this.resolveAddresses.set((event.target as HTMLInputElement).checked); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try { const report = await lookupCname(this.domain(), this.resolver(), this.resolveAddresses(), controller.signal); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the CNAME lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyEntry(entry: CnameHop): Promise<void> {
    try { await navigator.clipboard.writeText(entry.target); this.copyMessage.set('Target hostname copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Select the value or use Export instead.'); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Export a file to keep the results.'); }
  }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href);
    url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver(), addresses: report.resolveAddresses ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — CNAME Lookup', text: 'CNAME trace via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = cnameExportReport(report); const findings = cnameAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), rootCount: report.hops.length, summary: report.detail, badge: findings.complete ? report.hops.length ? 'TRACE COMPLETE' : 'NO ALIAS RETURNED' : 'REVIEW TRACE', checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'cname-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = cnameReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-cname-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
