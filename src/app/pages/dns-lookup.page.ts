import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DNS_LOOKUP_TYPES, DnsLookupReport, DnsLookupType, DnsResolverId, lookupDns } from '../core/dns-lookup';
import { dnsReportCsv, dnsShareUrl } from '../core/dns-report-export';

@Component({
  selector: 'xh-dns-lookup-page',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './dns-lookup.page.html',
  styleUrl: './dns-lookup.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DnsLookupPage {
  readonly types = DNS_LOOKUP_TYPES;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly type = signal<DnsLookupType>('A');
  readonly resolver = signal<DnsResolverId>('google');
  readonly includeWww = signal(true);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly copyMessage = signal('');
  readonly report = signal<DnsLookupReport | null>(null);
  readonly view = signal<'records' | 'json'>('records');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly activeResolver = computed(() => this.resolvers.find(r => r.id === this.resolver())!);
  readonly recordCount = computed(() => this.report()?.hosts.reduce((n, h) => n + h.records.length, 0) || 0);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  private controller?: AbortController;
  private readonly document = inject(DOCUMENT);
  readonly related = [
    { id: 'all-dns-records', icon: 'dns', title: 'All DNS Records', text: 'Review several record types in one lookup.' },
    { id: 'mx-lookup', icon: 'mail', title: 'MX Lookup', text: 'Find mail servers and their delivery priorities.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read verification and email authentication records.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Trace the alias published for a hostname.' },
  ];
  readonly questions = [
    { q: 'What does an A record tell me?', a: 'It gives an IPv4 address associated with a hostname. A domain can publish more than one address, and a subdomain can use different addresses from the main domain.' },
    { q: 'How are A and AAAA records different?', a: 'A records contain IPv4 addresses. AAAA records contain IPv6 addresses. Use the record-type buttons to check either address family.' },
    { q: 'Why can Google and Cloudflare show different answers?', a: 'Resolvers maintain their own caches. During an update, one cache may still hold an earlier answer. Traffic routing and resolver policies can also affect the response.' },
    { q: 'What does the TTL column mean?', a: 'TTL is the remaining cache lifetime, measured in seconds. A cached answer can stay in use until its TTL expires, so a record change may not appear everywhere immediately.' },
    { q: 'Why check the www hostname separately?', a: 'The main domain and www are separate DNS names. One may use a CNAME alias or point at a different destination, so checking both can reveal configuration differences.' },
    { q: 'Does NXDOMAIN mean my website is offline?', a: 'NXDOMAIN means the queried DNS name does not exist according to that resolver. It is different from an existing name with no records of the requested type. DNS answers alone do not test whether a web server is reachable.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const type = params.get('type');
    if (DNS_LOOKUP_TYPES.includes(type as DnsLookupType)) this.type.set(type as DnsLookupType);
    const resolver = params.get('resolver');
    if (DNS_LOOKUP_RESOLVERS.some(r => r.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.includeWww.set(params.get('www') !== '0');
    inject(SeoService).set('DNS Lookup — A Records, TTL & DNS Answers | XcellHost', 'Look up DNS records with Google or Cloudflare. Check A, AAAA, MX, TXT, CNAME, NS, SOA and CAA records, compare root and www answers, and export your results.', '/tools/dns-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseType(type: DnsLookupType): void { this.reset(); this.type.set(type); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  toggleWww(event: Event): void { this.reset(); this.includeWww.set((event.target as HTMLInputElement).checked); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try { const report = await lookupDns(this.domain(), this.type(), this.resolver(), this.includeWww(), controller.signal); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Use Export to download the results instead.'); }
  }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = dnsShareUrl(this.document.location.href, report.domain, report.type, this.resolver(), this.includeWww());
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — DNS Lookup', text: report.type + ' lookup via ' + report.resolver, url }); return; }
        catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; }
      }
      try { await navigator.clipboard.writeText(url); this.copyMessage.set('Lookup link copied'); }
      catch { this.shareLink.set(url); this.copyMessage.set('Copy this link to share the lookup settings.'); }
    } finally { this.sharing.set(false); }
  }
  selectShareLink(event: Event): void { (event.target as HTMLInputElement).select(); }
  toggleExport(event: MouseEvent): void {
    this.exportOpen.update(open => !open);
    if (this.exportOpen() && event.detail === 0) this.focusExportItem();
  }
  openExport(event: Event): void { event.preventDefault(); this.exportOpen.set(true); this.focusExportItem(); }
  private focusExportItem(): void { setTimeout(() => this.document.querySelector<HTMLButtonElement>('.dns-export-options button')?.focus(), 0); }
  exportKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') { event.preventDefault(); this.exportOpen.set(false); this.document.querySelector<HTMLButtonElement>('.dns-export-trigger')?.focus(); return; }
    if (event.key === 'Tab') { this.exportOpen.set(false); return; }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const items = [...this.document.querySelectorAll<HTMLButtonElement>('.dns-export-options button')];
    const index = items.indexOf(this.document.activeElement as HTMLButtonElement);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  }
  @HostListener('document:click', ['$event']) outsideExport(event: Event): void { if (!(event.target instanceof Element) || !event.target.closest('.dns-export-menu')) this.exportOpen.set(false); }
  @HostListener('document:keydown.escape') closeExport(): void { this.exportOpen.set(false); }
  async export(format: 'pdf' | 'csv' | 'json'): Promise<void> {
    const report = this.report(); if (!report || this.exporting()) return;
    this.exportOpen.set(false); this.exporting.set(format); this.copyMessage.set('');
    try {
      let content: BlobPart, mime: string;
      if (format === 'pdf') { const { dnsReportPdf } = await import('../core/dns-report-pdf'); content = dnsReportPdf(report); mime = 'application/pdf'; }
      else if (format === 'csv') { content = dnsReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      this.saveExport(report, content, mime, format);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
  private saveExport(report: DnsLookupReport, content: BlobPart, mime: string, format: string): void {
    const url = URL.createObjectURL(new Blob([content], { type: mime }));
    const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-dns-' + report.type + '.' + format; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
