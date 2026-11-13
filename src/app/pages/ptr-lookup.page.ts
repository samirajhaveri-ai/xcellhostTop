import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { PtrLookupReport, lookupPtr, ptrAnalysis, ptrReportCsv, ptrExportReport, lookupPublicIp } from '../core/ptr-lookup';

@Component({
  selector: 'xh-ptr-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './ptr-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './ptr-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PtrLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly confirm = signal(true);
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly progress = signal('');
  readonly error = signal('');
  readonly report = signal<PtrLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? ptrAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly ipBusy = signal(false);
  readonly ipNote = signal('');
  readonly rows = computed(() => this.report()?.entries.map(entry => ({ ...entry, check: this.report()!.forwardChecks.find(check => check.name === entry.hostname) })) || []);
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
  private ipController?: AbortController;
  readonly related = [
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Inspect forward A / AAAA answers and other DNS records.' },
    { id: 'mx-lookup', icon: 'mail', title: 'MX Lookup', text: 'Review receiving mail-server names and addresses.' },
    { id: 'ns-lookup', icon: 'account_tree', title: 'NS Lookup', text: 'Inspect published nameserver records.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Follow DNS aliases and their endpoint addresses.' },
  ];
  readonly questions = [
    { q: 'What does a PTR lookup return?', a: 'It asks DNS for a reverse-zone record associated with an IP address. A result can contain one or more hostnames, or no PTR at all. An empty reverse answer does not establish whether the IP is assigned, reachable or suitable for a particular service.' },
    { q: 'Does this support IPv6?', a: 'Yes. IPv4 octets are reversed under in-addr.arpa. IPv6 is expanded to 32 hexadecimal digits and queried in reverse nibble order under ip6.arpa. Compressed notation and embedded IPv4 tails are accepted; subnet prefixes, scope IDs and port numbers are not.' },
    { q: 'What does forward-confirmed reverse DNS mean?', a: 'The PTR hostname is queried for A records for an IPv4 input, or AAAA for an IPv6 input. At least one returned address must equal the original IP. Different text forms of the same IPv6 address are normalized before comparison. Query errors are kept separate from mismatches.' },
    { q: 'Who can change the PTR record?', a: 'The reverse-zone operator, normally reached through the IP-block provider or hosting service, manages it. Your ordinary forward DNS zone may be controlled elsewhere. Ask the provider for its reverse-DNS configuration process.' },
    { q: 'Does a matching PTR prove ownership or guarantee email delivery?', a: 'No. Forward and reverse records are useful configuration signals, but do not prove an identity, network owner or mail reputation. Provider hints here come from hostname suffixes. The tool does not test SMTP, blacklist listings or service availability.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('ip') || params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.confirm.set(params.get('confirm') !== '0');
    inject(SeoService).set('PTR Lookup - IPv4 / IPv6 Reverse DNS & Forward Confirmation | XcellHost', 'Look up reverse DNS hostnames for IPv4 and IPv6 addresses, check forward-confirmed DNS and export a readable PTR report.', '/tools/ptr-lookup');
    inject(DestroyRef).onDestroy(() => { this.controller?.abort(); this.ipController?.abort(); });
  }
  private reset(): void { this.controller?.abort(); this.ipController?.abort(); this.ipBusy.set(false); this.ipNote.set(''); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  toggleConfirm(event: Event): void { this.reset(); this.confirm.set((event.target as HTMLInputElement).checked); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try {
      const report = await lookupPtr(this.domain(), this.resolver(), this.confirm(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); });
      if (!controller.signal.aborted) this.report.set(report);
    } catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the PTR lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async useMyIp(): Promise<void> {
    if (this.ipBusy()) return;
    this.reset(); const controller = new AbortController(); this.ipController = controller; this.ipBusy.set(true);
    try { const ip = await lookupPublicIp(controller.signal); if (!controller.signal.aborted) { this.domain.set(ip); this.ipNote.set('Public connection address filled. Run the lookup when ready.'); } }
    catch { if (!controller.signal.aborted) this.ipNote.set('Could not detect your public IP. Enter an address manually.'); }
    finally { if (this.ipController === controller) this.ipBusy.set(false); }
  }
  async copyServer(server: string): Promise<void> {
    try { await navigator.clipboard.writeText(server); this.copyMessage.set('PTR hostname copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Select the hostname or use Export instead.'); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Export a file to keep the results.'); }
  }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href);
    url.search = new URLSearchParams({ ip: report.address.ip, resolver: this.resolver(), confirm: report.confirm ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — PTR Lookup', text: 'PTR records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = ptrExportReport(report); const findings = ptrAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), summary: 'Reverse DNS for ' + report.address.ip + '. ' + findings.matched + ' forward-confirmed hostname(s).', checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'ptr-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = ptrReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain.replace(/:/g, '_') + '-ptr-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
