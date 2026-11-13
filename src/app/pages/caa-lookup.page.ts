import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { CaaEntry, CaaLookupReport, lookupCaa, caaAnalysis, caaReportCsv } from '../core/caa-lookup';

@Component({
  selector: 'xh-caa-lookup-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './caa-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './caa-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaaLookupPage {
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly report = signal<CaaLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? caaAnalysis(this.report()!) : null);
  readonly view = signal<'records' | 'json'>('records');
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
    { id: 'caa-generator', icon: 'edit_note', title: 'CAA Generator', text: 'Build a CAA issue or issuewild record for your provider.' },
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Inspect common DNS records at an exact hostname.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Read verification strings and other published text.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Follow aliases and inspect their DNS targets.' },
    { id: 'soa-lookup', icon: 'account_tree', title: 'SOA Lookup', text: 'Inspect zone authority and maintenance timers.' },
  ];
  readonly questions = [
    { q: 'What does CAA control?', a: 'CAA expresses certificate-issuance policy in DNS. It can name issuers, set a different wildcard rule or publish a reporting destination. This page describes the records returned by your public resolver; a CA must evaluate the complete relevant policy and its other issuance requirements.' },
    { q: 'Does an empty result mean any CA may issue?', a: 'Not by itself. A parent name can supply the relevant CAA set, and aliases also affect lookup processing. This page queries only the exact hostname entered. Check parent records and alias resolution before concluding that no CAA restriction applies.' },
    { q: 'How do issue and issuewild work together?', a: 'Within the relevant RRset, issue applies to ordinary names. For wildcard requests, an explicit issuewild property takes precedence; otherwise issue is used. Grants are additive: an empty issuer entry does not cancel a separate valid issuer grant.' },
    { q: 'What does the issuer-critical flag mean?', a: 'The critical flag is the high bit, represented by 128. A CA that cannot understand a critical property must not issue. Flag 1 is a reserved bit, not the critical bit. Issuer-specific extensions can require additional interpretation.' },
    { q: 'Can this validate or revoke my current certificate?', a: 'No. CAA is evaluated for issuance and is not a certificate-validation or revocation mechanism. A current certificate may have been issued under earlier DNS settings. This lookup does not test TLS or send reports to iodef destinations.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver');
    if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    inject(SeoService).set('CAA Lookup - Certificate Authority Rules & DNS Records | XcellHost', 'Look up CAA records, read issue, issuewild and iodef values, inspect flags and export your DNS certificate-issuance snapshot.', '/tools/caa-lookup');
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
    try { const report = await lookupCaa(this.domain(), this.resolver(), controller.signal); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the CAA lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyEntry(entry: CaaEntry): Promise<void> {
    try { await navigator.clipboard.writeText(entry.rawValue); this.copyMessage.set('CAA record copied'); }
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
        try { await navigator.share({ title: report.domain + ' — CAA Lookup', text: 'CAA records via ' + report.resolver, url: url.href }); return; }
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
      if (format === 'pdf') { const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'); const snapshot = report; const findings = caaAnalysis(report); const analysis = { ...dnsReportAnalysis(snapshot), checks: findings.diagnostics, tips: findings.recommendations }; content = dnsReportPdf(snapshot, { analysis, toolPath: 'caa-lookup' }); mime = 'application/pdf'; }
      else if (format === 'csv') { content = caaReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime }));
      const link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-caa-records.' + format; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
