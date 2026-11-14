import { DatePipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { DKIM_COMMON_SELECTORS, DkimLookupReport, dkimAnalysis, dkimReportCsv, lookupDkim } from '../core/dkim-lookup';

@Component({
  selector: 'xh-dkim-lookup-page', standalone: true, imports: [RouterLink, DatePipe, JsonPipe],
  templateUrl: './dkim-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './spf-lookup.page.css', './dkim-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DkimLookupPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly commonSelectors = DKIM_COMMON_SELECTORS;
  readonly domain = signal('');
  readonly selector = signal('default');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly sweep = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly progress = signal('');
  readonly report = signal<DkimLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? dkimAnalysis(this.report()!) : null);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly view = signal<'records' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly copiedValue = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Inspect sender policy and static dependencies.' },
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Read mail-policy and reporting tags.' },
    { id: 'txt-lookup', icon: 'notes', title: 'TXT Lookup', text: 'Inspect joined text and original DNS answers.' },
    { id: 'email-dns-health', icon: 'mail', title: 'Email DNS Health', text: 'Check common mail DNS records.' },
  ];
  readonly questions = [
    { q: 'What is a DKIM record?', a: 'It publishes a public key and related parameters at selector._domainkey.domain. A receiving system can use that key when verifying a message signed by the domain. Finding a key does not prove that outgoing mail is signed or that a particular signature is valid.' },
    { q: 'Where do I find the domain and selector?', a: 'Read a real message\'s DKIM-Signature header. The d= value is the signing domain and s= is the selector. Enter those values separately. The DNS record\'s s= tag, if present, is instead a service restriction and is not the selector.' },
    { q: 'Does checking common selectors find every DKIM key?', a: 'No. This option checks a short, visible list plus your supplied selector. Providers can use dated, random or custom selectors, so a missed guess does not prove that a domain has no DKIM. The actual s= value from a message is the best input.' },
    { q: 'What do revoked and testing keys mean?', a: 'An empty p= tag revokes a key. A t=y flag requests testing treatment; it does not verify that signing works. The t=s flag restricts the relationship between a message\'s identity domain and signing domain. This lookup displays those flags without evaluating a message.' },
    { q: 'Which key types and sizes are inspected?', a: 'RSA keys are decoded from PKCS#1 or SubjectPublicKeyInfo representations, with the modulus length reported. RFC 8301 requires at least 1024-bit RSA and recommends at least 2048 bits. Ed25519 uses a raw 32-byte public key under RFC 8463; its encoded size is not directly comparable to RSA key size. This tool checks its length but does not validate the curve point or a signature.' },
    { q: 'Why does a DKIM hostname return CNAME?', a: 'A provider may delegate a selector to another DNS name. This tool follows up to five aliases and queries the target TXT name if needed. Loops, incomplete answers, DNS errors and snapshot limits are shown rather than treated as successful authentication.' },
    { q: 'Does this verify the DKIM signature or DMARC alignment?', a: 'No message is supplied here. DKIM verification needs the signed headers and body, canonicalization, body-hash comparison and cryptographic signature verification. DMARC also evaluates alignment with the visible From domain. A DNS/key snapshot does not establish any of those results or guarantee delivery.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048)); this.selector.set((params.get('selector') ?? 'default').slice(0, 253));
    const resolver = params.get('resolver'); if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.sweep.set(params.get('sweep') === '1');
    inject(SeoService).set('DKIM Lookup - Selector & Public Key Analysis | XcellHost', 'Look up DKIM selectors, follow CNAME delegation, inspect RSA and Ed25519 key records, review flags and export a DNS snapshot.', '/tools/dkim-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.copiedValue.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  inputSelector(event: Event): void { this.reset(); this.selector.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  toggleSweep(event: Event): void { this.reset(); this.sweep.set((event.target as HTMLInputElement).checked); }
  cancel(): void { this.reset(); this.copyMessage.set('Lookup cancelled.'); }
  async run(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return; this.reset();
    const controller = new AbortController(); this.controller = controller; this.busy.set(true); this.view.set('records');
    try { const report = await lookupDkim(this.domain(), this.selector(), this.resolver(), this.sweep(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the DKIM lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyValue(value: string): Promise<void> {
    const report = this.report();
    try { await navigator.clipboard.writeText(value); if (this.report() === report) { this.copyMessage.set('DKIM value copied'); this.copiedValue.set(value); } }
    catch { this.copyMessage.set('Copy is unavailable. Select the record text or use Export.'); }
  }
  async copy(): Promise<void> { try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('DKIM snapshot copied as JSON'); } catch { this.copyMessage.set('Copy is unavailable. Use Export to save this snapshot.'); } }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href); url.search = new URLSearchParams({ domain: report.domain, selector: report.selector, resolver: this.resolver(), sweep: report.sweep ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) { try { await navigator.share({ title: report.domain + ' - DKIM Lookup', text: 'DKIM selector snapshot via ' + report.resolver, url: url.href }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; } }
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
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'), findings = dkimAnalysis(report);
        const analysis = { ...dnsReportAnalysis(report), rootCount: findings.entries.length, checks: findings.checks, tips: findings.tips, badge: findings.badge, summary: findings.summary };
        content = dnsReportPdf(report, { analysis, toolPath: 'dkim-lookup', queryParameters: { selector: report.selector, sweep: report.sweep ? '1' : '0', resolver: this.resolver() } }); mime = 'application/pdf';
      } else if (format === 'csv') { content = dkimReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-dkim-report.' + format; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
