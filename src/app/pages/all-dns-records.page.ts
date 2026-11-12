import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { ALL_DNS_SECTIONS, AllDnsReport, DnsSectionKey, allDnsExportReport, allDnsReportCsv, lookupAllDns } from '../core/all-dns-records';

@Component({
  selector: 'xh-all-dns-records-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './all-dns-records.page.html',
  styleUrls: ['./dns-lookup.page.css', './all-dns-records.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllDnsRecordsPage {
  readonly definitions = ALL_DNS_SECTIONS;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly completed = signal(0);
  readonly error = signal('');
  readonly report = signal<AllDnsReport | null>(null);
  readonly view = signal<'records' | 'json'>('records');
  readonly selected = signal<DnsSectionKey | 'ALL'>('ALL');
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly sections = computed(() => {
    const report = this.report();
    return report ? this.definitions.map(definition => ({ ...definition, ...report.sections.find(section => section.key === definition.key)! })) : [];
  });
  readonly visibleSections = computed(() => this.sections().filter(section => this.selected() === 'ALL' || section.key === this.selected()));
  readonly recordCount = computed(() => { const report = this.report(); return report ? allDnsExportReport(report).hosts.reduce((total, host) => total + host.records.length, 0) : 0; });
  readonly populatedCount = computed(() => this.report()?.sections.filter(section => section.records.length).length || 0);
  readonly failedQueries = computed(() => this.report()?.sections.filter(section => section.key !== 'SPF' && section.status === 'ERROR').length || 0);
  readonly copyMessage = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly related = [
    { id: 'dns-lookup', icon: 'search', title: 'DNS Lookup', text: 'Focus on one record type or compare the root and www.' },
    { id: 'mx-lookup', icon: 'mail', title: 'MX Lookup', text: 'Inspect mail delivery destinations and priorities.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read domain verification and email policy text.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Find the alias configured for a hostname.' },
    { id: 'soa-lookup', icon: 'admin_panel_settings', title: 'SOA Lookup', text: 'Review zone authority and timing information.' },
  ];
  readonly questions = [
    { q: 'Which records are included?', a: 'The tool queries A, AAAA, MX, TXT, CNAME, NS, SOA and CAA for the hostname you enter. It also looks up TXT at _dmarc for that name. SPF policies are extracted from the original TXT answers, so they do not require another DNS request.' },
    { q: 'Does this list my entire DNS zone?', a: 'No. It checks common types at the supplied hostname and its _dmarc name. DNS does not normally expose a directory of every subdomain. Records at www, other subdomains and named DKIM selectors need separate lookups.' },
    { q: 'Is a missing record an error?', a: 'Not necessarily. A hostname may have no IPv6 address, no mail service or no certificate policy. An empty successful answer means no records of that type were returned; NXDOMAIN means that exact name does not exist. A resolver failure is shown separately.' },
    { q: 'What do the TTL and DNSSEC labels mean?', a: 'TTL is the number of seconds left in a cached answer. An authenticated label means the selected resolver set the DNSSEC authenticated-data flag on that response. An absent flag alone does not establish that the domain is insecure.' },
    { q: 'Why do answers change between lookups?', a: 'Public resolvers cache answers independently. Recent DNS changes, destination routing and different remaining cache lifetimes can produce different results. Repeat a query after its TTL expires and compare another resolver when investigating a change.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('All DNS Records — A, MX, TXT, SPF & DMARC | XcellHost', 'Check common DNS record types together. Review A, AAAA, MX, TXT, CNAME, NS, SOA, CAA, SPF and DMARC answers with TTLs, resolver settings and downloadable reports.', '/tools/all-dns-records');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.completed.set(0); this.selected.set('ALL'); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try {
      const report = await lookupAllDns(this.domain(), this.resolver(), controller.signal, completed => { if (!controller.signal.aborted) this.completed.set(completed); });
      if (!controller.signal.aborted) this.report.set(report);
    } catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the DNS checks.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
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
        try { await navigator.share({ title: report.domain + ' — All DNS Records', text: 'DNS records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf } = await import('../core/dns-report-pdf'); content = dnsReportPdf(allDnsExportReport(report)); mime = 'application/pdf'; }
      else if (format === 'csv') { content = allDnsReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-all-dns-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
