import { DatePipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { DmarcLookupReport, DmarcPreview, dmarcAnalysis, dmarcReportCsv, dmarcScenarios, dmarcTreatment, lookupDmarc } from '../core/dmarc-lookup';

@Component({
  selector: 'xh-dmarc-lookup-page', standalone: true, imports: [RouterLink, DatePipe, JsonPipe],
  templateUrl: './dmarc-lookup.page.html', styleUrls: ['./dns-lookup.page.css', './spf-lookup.page.css', './dmarc-lookup.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DmarcLookupPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly preview = signal<DmarcPreview>('domain');
  readonly previewPolicy = computed(() => { const record = this.report()?.selected?.record; if (!record) return null; return dmarcTreatment(this.preview() === 'domain' ? record.policy : this.preview() === 'subdomain' ? record.subdomain : record.nonexistent, record.testing); });
  readonly scenarios = computed(() => this.report()?.selected ? dmarcScenarios(this.report()!.selected!.record) : []);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly progress = signal('');
  readonly report = signal<DmarcLookupReport | null>(null);
  readonly analysis = computed(() => this.report() ? dmarcAnalysis(this.report()!) : null);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly view = signal<'records' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly copiedValue = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'dmarc-generator', icon: 'edit_note', title: 'DMARC Generator', text: 'Build a policy record for your domain.' },
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Inspect sender policy and DNS dependencies.' },
    { id: 'dkim-lookup', icon: 'key', title: 'DKIM Lookup', text: 'Read selector records and public keys.' },
    { id: 'email-dns-health', icon: 'mail', title: 'Email DNS Health', text: 'Check common email DNS records.' },
  ];
  readonly questions = [
    { q: 'What does p=none mean?', a: 'It expresses no preference for special handling of DMARC failures. It is useful while reviewing reports, but it does not request quarantine or rejection. Receivers still apply their own spam and security policies; delivery is never guaranteed.' },
    { q: 'How do quarantine and reject differ?', a: 'Quarantine asks receivers to treat failing mail as suspicious. Reject expresses that failures are considered unauthorized. Both are requests: a receiver can apply local handling or overrides. Check legitimate senders before tightening the policy.' },
    { q: 'Must SPF and DKIM both pass?', a: 'No. A message passes DMARC when at least one SPF or DKIM result passes and its authenticated domain aligns with the visible From domain. Using both mechanisms gives resilience, especially across forwarding. A DNS lookup alone cannot establish a message result.' },
    { q: 'What are strict and relaxed alignment?', a: 'Strict alignment requires the authenticated identifier to exactly match the From domain. Relaxed alignment allows identifiers with the same organizational domain. The scenario cards assume that relationship; they do not discover or authenticate actual sending systems.' },
    { q: 'How are inherited policies discovered?', a: 'This tool checks the exact From domain first. If there is no usable direct policy, it follows the bounded RFC 9989 DNS tree walk and psd boundaries. The trace shows each policy name. An additional A query distinguishes an existing name from NXDOMAIN when selecting inherited sp or np. DNS errors leave the result unresolved. Legacy RFC 7489 receivers may discover policy differently.' },
    { q: 'What changed in the 2026 DMARC standard?', a: 'RFC 9989 replaces RFC 7489 and RFC 9091. It adds DNS tree discovery and a t testing flag, and removes the legacy pct, ri and rf tags. Those published legacy values remain visible here but do not control the current-standard interpretation. Receiver adoption varies.' },
    { q: 'Are my report destinations verified?', a: 'Only URI syntax is inspected. External reporting destinations may require DNS authorization, which this tool does not check. No reports are sent and no reporting endpoint is contacted. Publication of rua or ruf does not prove that reports will arrive; support and privacy rules vary.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver'); if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    const preview = params.get('preview'); if (preview === 'subdomain' || preview === 'nonexistent') this.preview.set(preview);
    inject(SeoService).set('DMARC Lookup - Policy, Alignment & Reporting | XcellHost', 'Look up DMARC DNS records, inspect policy inheritance, alignment modes and report destinations, and export a policy snapshot.', '/tools/dmarc-lookup');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.copiedValue.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  choosePreview(preview: DmarcPreview): void { this.preview.set(preview); }
  cancel(): void { this.reset(); this.copyMessage.set('Lookup cancelled.'); }
  async run(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return; this.reset();
    const controller = new AbortController(); this.controller = controller; this.busy.set(true); this.view.set('records');
    try { const report = await lookupDmarc(this.domain(), this.resolver(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the DMARC lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyValue(value: string): Promise<void> {
    const report = this.report();
    try { await navigator.clipboard.writeText(value); if (this.report() === report) { this.copyMessage.set('DMARC value copied'); this.copiedValue.set(value); } }
    catch { this.copyMessage.set('Copy is unavailable. Select the record text or use Export.'); }
  }
  async copy(): Promise<void> { try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('DMARC snapshot copied as JSON'); } catch { this.copyMessage.set('Copy is unavailable. Use Export to save this snapshot.'); } }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href); url.search = new URLSearchParams({ domain: report.domain, resolver: this.resolver(), preview: this.preview() }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) { try { await navigator.share({ title: report.domain + ' - DMARC Lookup', text: 'DMARC policy snapshot via ' + report.resolver, url: url.href }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; } }
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
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'), findings = dmarcAnalysis(report);
        const analysis = { ...dnsReportAnalysis(report), rootCount: report.selected ? 1 : 0, checks: findings.checks, tips: findings.tips, badge: findings.badge, summary: findings.summary };
        content = dnsReportPdf(report, { analysis, toolPath: 'dmarc-lookup', queryParameters: { preview: this.preview(), resolver: this.resolver() } }); mime = 'application/pdf';
      } else if (format === 'csv') { content = dmarcReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-dmarc-report.' + format; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
