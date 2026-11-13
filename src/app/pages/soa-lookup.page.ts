import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { SoaEntry, SoaLookupReport, lookupSoa, soaAnalysis, soaReportCsv, soaDuration } from '../core/soa-lookup';

@Component({
  selector: 'xh-soa-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './soa-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './soa-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoaLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly report = signal<SoaLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? soaAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly duration = soaDuration;
  readonly firstEntry = computed(() => this.report()?.entries.find(entry => !!entry.fields));
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
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Inspect common DNS records for an exact hostname.' },
    { id: 'all-dns-records', icon: 'view_list', title: 'All DNS Records', text: 'See a broader snapshot of your domain configuration.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Trace the alias chain and its final DNS target.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read published policies and verification strings.' },
  ];
  readonly questions = [
    { q: 'What can an SOA tell me about a zone?', a: 'It publishes a primary server name, a DNS-formatted contact, a serial and maintenance timers. This page decodes those fields from a public resolver response. It does not contact each authoritative server or confirm that all servers hold the same zone version.' },
    { q: 'Why is there no SOA answer for my website hostname?', a: 'The SOA belongs at a zone apex. A hostname such as www.example.com may be inside the example.com zone and have no SOA of its own. Enter the zone name listed by your DNS provider; this tool does not search parent zones automatically.' },
    { q: 'Does the serial number show the last update date?', a: 'A serial is an unsigned 32-bit zone version number. Some operators encode a date in it, while others use different schemes. A date-like value alone does not establish when a change happened. Serial comparison also has wraparound rules.' },
    { q: 'How should I read refresh, retry and expire?', a: 'Refresh is a secondary server check interval. Retry is the wait after an unsuccessful refresh. Expire limits how long a secondary can continue without a successful refresh. These are maintenance values, not a promise that every cached website answer changes within that interval.' },
    { q: 'Is MINIMUM the same as the SOA record TTL?', a: 'They are separate values. Negative answers use a TTL constrained by the smaller of the SOA TTL and MINIMUM. The comparison shown here uses this snapshot; an actual negative response or a resolver cache may have a different remaining lifetime.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('SOA Lookup - Zone Authority, Serial & DNS Timers | XcellHost', 'Look up SOA records, inspect primary nameservers, DNS contacts, serial numbers and timers, and export your DNS snapshot.', '/tools/soa-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try { const report = await lookupSoa(this.domain(), this.resolver(), controller.signal); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the SOA lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  timers(entry: SoaEntry) {
    if (!entry.fields) return [];
    return [
      { label: 'Refresh', seconds: entry.fields.refresh, icon: 'update', text: 'Secondary-server check interval.' },
      { label: 'Retry', seconds: entry.fields.retry, icon: 'replay', text: 'Wait before retrying an unsuccessful refresh.' },
      { label: 'Expire', seconds: entry.fields.expire, icon: 'hourglass_bottom', text: 'Secondary-server expiry without a successful refresh.' },
      { label: 'MINIMUM', seconds: entry.fields.minimum, icon: 'timer', text: 'SOA value used in negative-cache TTL calculation.' },
    ];
  }
  async copyEntry(entry: SoaEntry): Promise<void> {
    try { await navigator.clipboard.writeText(entry.rawValue); this.copyMessage.set('SOA value copied'); }
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
        try { await navigator.share({ title: report.domain + ' — SOA Lookup', text: 'SOA records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = report; const findings = soaAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'soa-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = soaReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-soa-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
