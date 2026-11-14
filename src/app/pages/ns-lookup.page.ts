import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { NsLookupReport, lookupNs, nsAnalysis, nsAddresses, nsReportCsv, nsExportReport } from '../core/ns-lookup';

@Component({
  selector: 'xh-ns-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './ns-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './ns-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly resolveAddresses = signal(true);
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly progress = signal('');
  readonly error = signal('');
  readonly report = signal<NsLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? nsAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly rows = computed(() => this.report()?.entries.map(entry => {
    const check = this.report()!.addressChecks.find(check => check.name === entry.server);
    const ipv4 = nsAddresses(check, 'A'), ipv6 = nsAddresses(check, 'AAAA');
    const failed = check?.ipv4?.status === 'ERROR' || check?.ipv6?.status === 'ERROR';
    return { ...entry, check, ipv4, ipv6, addressState: !entry.valid ? 'Unsupported hostname' : check?.skippedReason ? 'Not checked' : failed ? 'Partial / query error' : ipv4.length || ipv6.length ? 'Addresses returned' : 'No addresses returned' };
  }) || []);
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
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Inspect addresses, aliases and other DNS records.' },
    { id: 'soa-lookup', icon: 'account_tree', title: 'SOA Lookup', text: 'Read zone authority, serial and maintenance timers.' },
    { id: 'all-dns-records', icon: 'view_list', title: 'All DNS Records', text: 'Review a broader DNS snapshot for a name.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Trace aliases and their endpoint addresses.' },
  ];
  readonly questions = [
    { q: 'What information does an NS record publish?', a: 'It names a server responsible for a DNS zone. NS records appear in delegations and within authoritative zones. The results on this page are the NS answers returned by your selected recursive resolver, followed by optional address lookups for those names.' },
    { q: 'Will a website URL be changed to its registered domain?', a: 'The URL is reduced to its hostname, but subdomains are kept. For example, www.example.com remains www.example.com. Enter the zone apex from your DNS provider if that is the nameserver set you want to inspect.' },
    { q: 'Do multiple nameservers guarantee a resilient service?', a: 'Multiple server names are a useful starting point, but names alone do not establish separate networks, independent infrastructure or availability. Check your provider design and direct server monitoring when assessing resilience.' },
    { q: 'Are the IP addresses shown here glue records?', a: 'These are A and AAAA answers from a recursive resolver. Glue is address data supplied by a parent zone to help reach delegated servers, especially names within the delegated zone. Verify parent glue separately with your registrar or a direct delegation audit.' },
    { q: 'Does this check parent and child nameserver agreement?', a: 'No. It does not query the parent referral and each authoritative server directly. Compare those sources when investigating a delegation mismatch. After a change, cached answers may differ between resolvers; the TTL here is not a global propagation deadline.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.resolveAddresses.set(params.get('addresses') !== '0');
    inject(SeoService).set('NS Lookup - Nameserver Records & Addresses | XcellHost', 'Look up NS records, inspect nameserver hostnames, provider-name hints, TTLs and optional IPv4/IPv6 answers, and export your report.', '/tools/ns-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  toggleAddresses(event: Event): void { this.reset(); this.resolveAddresses.set((event.target as HTMLInputElement).checked); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try {
      const report = await lookupNs(this.domain(), this.resolver(), this.resolveAddresses(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); });
      if (!controller.signal.aborted) this.report.set(report);
    } catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the NS lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyServer(server: string): Promise<void> {
    try { await navigator.clipboard.writeText(server); this.copyMessage.set('Nameserver hostname copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Select the hostname or use Export instead.'); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Export a file to keep the results.'); }
  }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href);
    url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver(), addresses: this.resolveAddresses() ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — NS Lookup', text: 'NS records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = nsExportReport(report); const findings = nsAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'ns-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = nsReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-ns-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
