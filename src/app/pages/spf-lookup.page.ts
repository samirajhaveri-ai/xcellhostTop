import { DatePipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { SpfLookupReport, lookupSpf, spfAnalysis, spfReportCsv } from '../core/spf-lookup';

@Component({
  selector: 'xh-spf-lookup-page', standalone: true, imports: [RouterLink, DatePipe, JsonPipe],
  templateUrl: './spf-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './spf-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpfLookupPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly expand = signal(true);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly progress = signal('');
  readonly report = signal<SpfLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? spfAnalysis(this.report()!) : null);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly view = signal<'records' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly copiedPolicy = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'spf-generator', icon: 'edit_note', title: 'SPF Generator', text: 'Build a policy for your sending services.' },
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Read mail-policy and reporting tags.' },
    { id: 'dkim-lookup', icon: 'key', title: 'DKIM Lookup', text: 'Query a signing key using its real selector.' },
    { id: 'email-dns-health', icon: 'mark_email_read', title: 'Email DNS Health', text: 'Check common email DNS records.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Inspect complete DNS text values.' },
    { id: 'mx-lookup', icon: 'mail', title: 'MX Lookup', text: 'Find mail destinations and preferences.' },
  ];
  readonly questions = [
    { q: 'What does SPF authenticate?', a: 'SPF checks whether a sending IP is authorized for an SMTP envelope identity, usually the MAIL FROM domain or the HELO domain for an empty reverse path. It does not directly authenticate the visible From header. This tool inspects published policies rather than evaluating a particular message.' },
    { q: 'What is the SPF ten-lookup limit?', a: 'RFC 7208 limits DNS-querying terms evaluated during an SPF check to ten across include and redirect processing. The terms include a, mx, ptr, exists, include and redirect. Literal ip4, ip6 and all terms do not count. This page counts active terms in a static expansion; earlier matches can stop a real evaluation, so the total is not an exact per-message count. Address sub-limits and void-lookup limits also need sender-aware evaluation.' },
    { q: 'What do -all, ~all, ?all and +all mean?', a: 'The all mechanism always matches when reached. Its qualifier gives fail (-), softfail (~), neutral (?) or pass (+). Receiver actions depend on local policy; -all does not itself guarantee rejection, and ~all does not guarantee delivery. Review all legitimate senders before changing the default.' },
    { q: 'Can a domain publish more than one SPF record?', a: 'Only one selected v=spf1 TXT record may exist at an owner name. Multiple selected records produce permerror. Several character strings within one TXT record are joined without adding spaces; they are not multiple SPF records. Other TXT records can coexist with SPF.' },
    { q: 'How are include and redirect expanded here?', a: 'The tool fetches TXT policies for static include and active redirect targets. Plain %{d} can be expanded from the current domain; other macro targets are deferred. It detects cycles and limits work to 20 TXT queries, 40 dependency nodes, eight levels and 30 seconds. Policies after all and redirects overridden by all are not fetched. A, MX, PTR and exists mechanisms are described but not evaluated against a sender.' },
    { q: 'Does a subdomain inherit its parent SPF record?', a: 'No. Query the exact domain used for the SMTP envelope identity. This lookup does not fall back to a parent domain and does not add www. A missing policy is different from an explicit fail policy.' },
    { q: 'Does an SPF policy stop spoofing or guarantee delivery?', a: 'SPF is one part of email authentication. DKIM and DMARC alignment address other aspects of identity, while reputation, forwarding, filtering and receiver policy also affect delivery. A policy snapshot cannot establish that an individual email passed authentication or will reach an inbox.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver'); if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.expand.set(params.get('expand') !== '0');
    inject(SeoService).set('SPF Lookup - Sender Policy & DNS Analysis | XcellHost', 'Look up SPF TXT records, inspect mechanisms and bounded include/redirect dependencies, review diagnostics, and export a policy snapshot.', '/tools/spf-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.copiedPolicy.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  toggleExpand(event: Event): void { this.reset(); this.expand.set((event.target as HTMLInputElement).checked); }
  cancel(): void { this.reset(); this.copyMessage.set('Lookup cancelled.'); }
  async run(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return; this.reset();
    const controller = new AbortController(); this.controller = controller; this.busy.set(true); this.view.set('records');
    try { const report = await lookupSpf(this.domain(), this.resolver(), this.expand(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the SPF lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyPolicy(value: string): Promise<void> {
    const report = this.report();
    try { await navigator.clipboard.writeText(value); if (this.report() === report) { this.copyMessage.set('SPF policy copied'); this.copiedPolicy.set(value); } }
    catch { this.copyMessage.set('Copy is unavailable. Select the policy text or use Export.'); }
  }
  async copy(): Promise<void> { try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('SPF snapshot copied as JSON'); } catch { this.copyMessage.set('Copy is unavailable. Use Export to save this snapshot.'); } }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href); url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver(), expand: report.expand ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) { try { await navigator.share({ title: report.domain + ' - SPF Lookup', text: 'SPF policy snapshot via ' + report.resolver, url: url.href }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; } }
      try { await navigator.clipboard.writeText(url.href); this.copyMessage.set('Lookup settings link copied'); }
      catch { this.shareLink.set(url.href); this.copyMessage.set('Copy this link to share the lookup settings.'); }
    } finally { this.sharing.set(false); }
  }
  toggleExport(event: MouseEvent): void { this.exportOpen.update(open => !open); if (this.exportOpen() && event.detail === 0) this.focusExportItem(); }
  openExport(event: Event): void { event.preventDefault(); this.exportOpen.set(true); this.focusExportItem(); }
  private focusExportItem(): void { setTimeout(() => this.document.querySelector<HTMLButtonElement>('.dns-export-options button')?.focus(), 0); }
  exportKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') { event.preventDefault(); this.exportOpen.set(false); this.document.querySelector<HTMLButtonElement>('.dns-export-trigger')?.focus(); return; }
    if (event.key === 'Tab') { this.exportOpen.set(false); return; }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return; event.preventDefault();
    const items = [...this.document.querySelectorAll<HTMLButtonElement>('.dns-export-options button')], index = items.indexOf(this.document.activeElement as HTMLButtonElement);
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
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'), findings = spfAnalysis(report);
        const analysis = { ...dnsReportAnalysis(report), rootCount: report.nodes[0].records.length, checks: findings.diagnostics, tips: [...findings.tips, ...findings.warnings], badge: findings.badge, summary: findings.summary };
        content = dnsReportPdf(report, { analysis, toolPath: 'spf-lookup' }); mime = 'application/pdf';
      } else if (format === 'csv') { content = spfReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-spf-report.' + format; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
