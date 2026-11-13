import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { DnssecReport, DnssecQuery, checkDnssec, dnssecAnalysis, dnssecAlgorithm, dnssecReportCsv, dnssecExportReport } from '../core/dnssec-check';

@Component({
  selector: 'xh-dnssec-check-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './dnssec-check.page.html', styleUrls: ['./dns-lookup.page.css', './dnssec-check.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DnssecCheckPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly report = signal<DnssecReport | null>(null);
  readonly analysis = computed(() => this.report() ? dnssecAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
  readonly progress = signal('');
  readonly algorithm = dnssecAlgorithm;
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly copyMessage = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly related = [
  {
    "id": "dns-lookup",
    "icon": "dns",
    "title": "DNS Lookup",
    "text": "Inspect common DNS records at an exact hostname."
  },
  {
    "id": "all-dns-records",
    "icon": "list_alt",
    "title": "All DNS Records",
    "text": "Review common record types for a hostname."
  },
  {
    "id": "soa-lookup",
    "icon": "account_tree",
    "title": "SOA Lookup",
    "text": "Inspect zone authority and maintenance timers."
  },
  {
    "id": "ns-lookup",
    "icon": "hub",
    "title": "NS Lookup",
    "text": "Inspect nameservers and their published addresses."
  }
];
  readonly questions = [
  {
    "q": "What does DNSSEC protect?",
    "a": "DNSSEC uses digital signatures to authenticate DNS data. A validating resolver can detect when protected DNS answers fail authentication. DNSSEC does not encrypt the query or assess the safety of the website at the returned address."
  },
  {
    "q": "What connects DNSKEY, DS and RRSIG?",
    "a": "DNSKEY publishes a zone public key. A DS record in its parent identifies a key by its digest, algorithm and tag. RRSIG contains a signature over a record set. Validating resolvers evaluate these relationships using a configured trust anchor."
  },
  {
    "q": "Does this browser verify the complete trust chain?",
    "a": "The selected public resolver performs DNSSEC validation. This page displays its AD flag and captures DNSSEC evidence with DO=1 and CD=0. It also compares supported DS digests locally, but it does not independently verify RRSIG signatures or walk every delegation from the root."
  },
  {
    "q": "Why can keys exist without an authenticated answer?",
    "a": "Signing may be enabled without a matching parent delegation, a rollover may be in progress, or an alias may lead to an unsigned target. Errors and missing evidence can also prevent a conclusion. Inspect the records and query log instead of treating record presence as proof of a secure chain."
  },
  {
    "q": "How do I investigate a suspected validation failure?",
    "a": "Compare another resolver, then ask the DNS host and registrar to review signing, the published DS values and signature timing. This tool retries SERVFAIL requests with checking disabled only to gather diagnostic evidence. Those replies are not authenticated, and a successful retry suggests rather than proves a DNSSEC-specific failure."
  }
];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('DNSSEC Check - DNSKEY, DS & Signature Diagnostics | XcellHost', 'Check DNSSEC through a validating resolver, inspect DNSKEY, DS and RRSIG records, compare delegation digests and export the results.', '/tools/dnssec-check');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  async run(event: Event): Promise<void> {
    event.preventDefault(); if (this.busy()) return;
    this.reset(); const controller = new AbortController(); this.controller = controller;
    this.busy.set(true); this.view.set('records');
    try { const report = await checkDnssec(this.domain(), this.resolver(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the DNSSEC lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copy(): Promise<void> {
    try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Results copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Export a file to keep the results.'); }
  }
  rawResponse(query: DnssecQuery): string { return JSON.stringify(query.raw || { error: query.error }, null, 2); }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href);
    url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver() }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) {
        try { await navigator.share({ title: report.domain + ' — DNSSEC Lookup', text: 'DNSSEC records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') {
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf');
        const snapshot = dnssecExportReport(report), findings = dnssecAnalysis(report);
        const records = [...report.keys, ...report.delegations, ...report.signatures], ttls = records.map(record => record.ttl);
        const ttlRange = !ttls.length ? 'Not returned' : Math.min(...ttls) === Math.max(...ttls) ? Math.min(...ttls) + 's' : Math.min(...ttls) + '-' + Math.max(...ttls) + 's';
        const analysis = { ...dnsReportAnalysis(snapshot), ttlRange, summary: findings.title + '. ' + findings.summary, badge: report.outcome.replaceAll('_', ' '), rootCount: records.length, checks: findings.diagnostics, tips: findings.recommendations };
        content = dnsReportPdf(snapshot, { analysis, toolPath: 'dnssec-check' }); mime = 'application/pdf';
      }
      else if (format === 'csv') { content = dnssecReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-dnssec-report.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
