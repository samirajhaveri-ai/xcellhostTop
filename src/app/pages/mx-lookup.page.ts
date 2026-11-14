import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { MxLookupReport, lookupMx, mxAnalysis, mxAddresses, mxReportCsv, mxExportReport } from '../core/mx-lookup';

@Component({
  selector: 'xh-mx-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './mx-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './mx-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MxLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly resolveAddresses = signal(true);
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly progress = signal('');
  readonly error = signal('');
  readonly report = signal<MxLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? mxAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly rows = computed(() => this.report()?.exchangers.map(entry => {
    const check = this.report()!.addressChecks.find(check => check.name === entry.exchange);
    const ipv4 = mxAddresses(check, 'A'), ipv6 = mxAddresses(check, 'AAAA');
    const failed = check?.ipv4?.status === 'ERROR' || check?.ipv6?.status === 'ERROR';
    return { ...entry, check, ipv4, ipv6, addressState: !entry.valid ? 'Invalid MX value' : entry.nullMx ? 'Not applicable' : check?.skippedReason ? 'Not checked' : failed ? 'Partial / query error' : ipv4.length || ipv6.length ? 'Addresses returned' : 'No addresses returned', role: !entry.valid ? 'Invalid' : entry.nullMx ? 'Null MX' : entry.preference === this.analysis()?.primaryPreference ? 'Preferred' : 'Fallback' };
  }) || []);
  readonly ttlRange = computed(() => {
    const ttls = this.report()?.exchangers.map(entry => entry.ttl) || [];
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
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read verification strings and published email policies.' },
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Inspect address records, aliases and cached DNS answers.' },
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Find the sender policy published for your domain.' },
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Review domain alignment, reporting and policy settings.' },
    { id: 'email-dns-health', icon: 'fact_check', title: 'Email DNS Health', text: 'Check MX, SPF and DMARC together without sending email.' },
  ];
  readonly questions = [
    { q: 'What does an MX record contain?', a: 'An MX answer contains a numeric preference and the hostname of a receiving mail server. It describes where sending servers should attempt delivery for that domain. It does not identify an individual mailbox or prove that messages are accepted.' },
    { q: 'How are priority numbers used?', a: 'Lower numbers are preferred. Servers with the same number share a preference, and senders can try other eligible destinations when delivery fails. The number is an ordering value, not a percentage or a health score.' },
    { q: 'Does having several MX records guarantee reliable email?', a: 'No. Multiple records can provide alternate destinations, while one hostname can represent a redundant hosted platform. DNS alone cannot reveal the full infrastructure, test SMTP connections or predict inbox delivery.' },
    { q: 'What is the difference between no MX and Null MX?', a: 'If a name exists but has no MX, SMTP has an implicit fallback to that name\u2019s A or AAAA addresses. A Null MX record, written as 0 followed by a dot, explicitly says the domain does not accept mail. This lookup does not test implicit SMTP fallback or send messages.' },
    { q: 'Why does an MX target have no IPv4 or IPv6 answer?', a: 'A target might use just one address family, a resolver request may fail, or its DNS configuration may need attention. Review both families and their response details. A cached answer can also differ between resolvers while records change.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.resolveAddresses.set(params.get('addresses') !== '0');
    inject(SeoService).set('MX Lookup - Mail Servers, Priorities & DNS Records | XcellHost', 'Look up MX records, compare mail-server preferences and TTLs, resolve IPv4 and IPv6 addresses, and export a readable mail-routing report.', '/tools/mx-lookup');
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
      const report = await lookupMx(this.domain(), this.resolver(), this.resolveAddresses(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); });
      if (!controller.signal.aborted) this.report.set(report);
    } catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the MX lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
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
        try { await navigator.share({ title: report.domain + ' — MX Lookup', text: 'MX records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = mxExportReport(report); const findings = mxAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'mx-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = mxReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-mx-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
