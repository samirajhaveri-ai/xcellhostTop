import { DatePipe, DOCUMENT, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { DNS_LOOKUP_RESOLVERS, DnsResolverId } from '../core/dns-lookup';
import { EmailHealthReport, emailHealthAnalysis, emailHealthReportCsv, lookupEmailDnsHealth } from '../core/email-dns-health';

@Component({
  selector: 'xh-email-dns-health-page', standalone: true, imports: [RouterLink, DatePipe, JsonPipe],
  templateUrl: './email-dns-health.page.html', styleUrls: ['./dns-lookup.page.css', './spf-lookup.page.css', './email-dns-health.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailDnsHealthPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  readonly resolvers = DNS_LOOKUP_RESOLVERS;
  readonly domain = signal('');
  readonly resolver = signal<DnsResolverId>('google');
  readonly activeResolver = computed(() => this.resolvers.find(item => item.id === this.resolver())!);
  readonly selector = signal('default');
  readonly deep = signal(false);
  readonly selectedGroup = signal('all');
  readonly visibleGroups = computed(() => this.report()?.groups.filter(group => this.selectedGroup() === 'all' || group.id === this.selectedGroup()) || []);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly progress = signal('');
  readonly report = signal<EmailHealthReport | null>(null);
  readonly analysis = computed(() => this.report() ? emailHealthAnalysis(this.report()!) : null);
  readonly json = computed(() => JSON.stringify(this.report(), null, 2));
  readonly view = signal<'records' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly copiedValue = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'spf-lookup', icon: 'mark_email_read', title: 'SPF Lookup', text: 'Inspect sender policies and DNS dependencies.' },
    { id: 'dkim-lookup', icon: 'key', title: 'DKIM Lookup', text: 'Inspect signing selectors and public keys.' },
    { id: 'dmarc-lookup', icon: 'policy', title: 'DMARC Lookup', text: 'Read policy discovery and alignment requirements.' },
    { id: 'mx-lookup', icon: 'dns', title: 'MX Lookup', text: 'Inspect exchangers, priorities and addresses.' },
    { id: 'bimi-lookup', icon: 'verified', title: 'BIMI Lookup', text: 'Review brand assertion and evidence assets.' },
  ];
  readonly questions = [
    { q: 'What does this email DNS health check include?', a: 'It consolidates SPF policy syntax and static dependencies, DKIM key publication for selected names, DMARC discovery, MX routing and address records, MTA-STS/TLS-RPT DNS markers, a small inbound-MX reverse-DNS sample and the default BIMI assertion. It does not send email or change DNS.' },
    { q: 'Can I enter an email address?', a: 'Yes. Only the domain after @ is used for DNS queries. The local part is discarded, omitted from reports and not checked as a mailbox. A valid domain, an email address or a website URL can be entered; this does not test whether an individual address exists.' },
    { q: 'What do the summary and category statuses mean?', a: 'PASS means the scoped configuration checks in that category found no issue. REVIEW means missing, uncertain or incomplete evidence needs attention. FAIL identifies an explicit configuration problem in the captured records, and INFO is context or optional publication. The summary counts categories; it is not an A-F deliverability grade, spam score or promise of inbox placement.' },
    { q: 'Does a missing guessed DKIM selector mean DKIM is absent?', a: 'No. The basic check uses your supplied selector, defaulting to default. Extended mode adds eight listed common selectors, plus your supplied name if different. Providers use arbitrary or dated selectors. Retry with the s= selector and d= signing domain from a real message. This page does not verify its cryptographic signature.' },
    { q: 'Does this verify SMTP, STARTTLS or blocklists?', a: 'No. This browser tool uses DNS over HTTPS, which cannot establish a raw SMTP connection or reliably perform provider-authorized reputation checks. MTA-STS and TLS-RPT DNS markers do not prove encryption is active. SMTP availability, TLS negotiation, HTTPS policy enforcement, blocklists and sender reputation are explicitly untested.' },
    { q: 'Which IPs are used for reverse DNS?', a: 'Up to two unique addresses from the first three inbound MX targets are sampled. Up to two PTR names per sampled IP are forward-confirmed with A or AAAA answers. Inbound receivers may differ from outbound sending IPs, so this is not an audit of your sender IP reputation or all mail infrastructure.' },
    { q: 'Why can some checks be missing or incomplete?', a: 'DNS errors, aliases, record limits, a 25-second overall deadline or a provider-specific configuration can limit the snapshot. Null MX can intentionally declare that a domain accepts no email. Optional BIMI or transport markers may be absent. Confirm your domain purpose and compare dedicated tools before making changes.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    this.domain.set((params.get('domain') || '').slice(0, 2048));
    const resolver = params.get('resolver'); if (this.resolvers.some(item => item.id === resolver)) this.resolver.set(resolver as DnsResolverId);
    this.selector.set((params.get('selector') ?? 'default').slice(0, 253)); this.deep.set(params.get('deep') === '1');
    inject(SeoService).set('Email DNS Health Checker - SPF, DKIM, DMARC & MX | XcellHost', 'Check your domain email DNS configuration, authentication publication, mail routing, transport markers and reverse DNS, with exportable reports.', '/tools/email-dns-health');
    inject(DestroyRef).onDestroy(() => this.controller?.abort());
  }
  private reset(): void { this.controller?.abort(); this.busy.set(false); this.report.set(null); this.error.set(''); this.copyMessage.set(''); this.copiedValue.set(''); this.exportOpen.set(false); this.shareLink.set(''); this.progress.set(''); }
  input(event: Event): void { this.reset(); this.domain.set((event.target as HTMLInputElement).value); }
  example(domain: string): void { this.reset(); this.domain.set(domain); }
  chooseResolver(event: Event): void { this.reset(); this.resolver.set((event.target as HTMLSelectElement).value as DnsResolverId); }
  inputSelector(event: Event): void { this.reset(); this.selector.set((event.target as HTMLInputElement).value); }
  toggleDeep(event: Event): void { this.reset(); this.deep.set((event.target as HTMLInputElement).checked); }
  cancel(): void { this.reset(); this.copyMessage.set('Lookup cancelled.'); }
  async run(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return; this.reset();
    const controller = new AbortController(); this.controller = controller; this.busy.set(true); this.view.set('records'); this.selectedGroup.set('all');
    try { const report = await lookupEmailDnsHealth(this.domain(), this.selector(), this.resolver(), this.deep(), controller.signal, message => { if (!controller.signal.aborted) this.progress.set(message); }); if (!controller.signal.aborted) this.report.set(report); }
    catch (error) { if (!controller.signal.aborted) this.error.set(error instanceof Error ? error.message : 'Could not complete the Email DNS health lookup.'); }
    finally { if (this.controller === controller) this.busy.set(false); }
  }
  async copyValue(value: string): Promise<void> {
    const report = this.report();
    try { await navigator.clipboard.writeText(value); if (this.report() === report) { this.copyMessage.set('Email DNS health value copied'); this.copiedValue.set(value); } }
    catch { this.copyMessage.set('Copy is unavailable. Select the record text or use Export.'); }
  }
  async copy(): Promise<void> { try { await navigator.clipboard.writeText(this.json()); this.copyMessage.set('Email DNS health snapshot copied as JSON'); } catch { this.copyMessage.set('Copy is unavailable. Use Export to save this snapshot.'); } }
  async share(): Promise<void> {
    const report = this.report(); if (!report || this.sharing()) return;
    const url = new URL(this.document.location.href); url.search = new URLSearchParams({ domain: report.domain, selector: report.selector, resolver: this.resolver(), deep: report.deep ? '1' : '0' }).toString(); url.hash = '';
    this.sharing.set(true); this.copyMessage.set('');
    try {
      if (navigator.share) { try { await navigator.share({ title: report.domain + ' - Email DNS health Lookup', text: 'Email DNS health selector snapshot via ' + report.resolver, url: url.href }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; } }
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
        const { dnsReportPdf, dnsReportAnalysis } = await import('../core/dns-report-pdf'), findings = emailHealthAnalysis(report);
        const analysis = { ...dnsReportAnalysis(report), rootCount: findings.passed, checks: findings.checks, tips: findings.tips, badge: findings.badge, summary: findings.summary };
        content = dnsReportPdf(report, { analysis, toolPath: 'email-dns-health', queryParameters: { selector: report.selector, deep: report.deep ? '1' : '0', resolver: this.resolver() } }); mime = 'application/pdf';
      } else if (format === 'csv') { content = emailHealthReportCsv(report); mime = 'text/csv;charset=utf-8'; }
      else { content = JSON.stringify(report, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = report.domain + '-email-dns-report.' + format; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.report() === report) this.copyMessage.set(format.toUpperCase() + ' download started');
    } catch { this.copyMessage.set('The export could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
