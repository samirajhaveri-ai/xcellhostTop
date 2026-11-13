import { DatePipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { CAA_PROVIDERS, CaaAuthority, CaaGeneratorInput, GeneratedCaaPolicy, GeneratedCaaRecord, generateCaaPolicy, normalizeCaaIssuer, parseCaaGeneratorSettings, caaGeneratorCsv, caaGeneratorShareUrl } from '../core/caa-generator';

interface AuthorityRow extends CaaAuthority { id: number; }
interface ReportRow { id: number; value: string; }
@Component({
  selector: 'xh-caa-generator-page', standalone: true, imports: [RouterLink, DatePipe],
  templateUrl: './caa-generator.page.html', styleUrls: ['./dns-lookup.page.css', './caa-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaaGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private nextId = 1;
  readonly providers = CAA_PROVIDERS;
  readonly domain = signal('');
  readonly customIssuer = signal('');
  readonly authorities = signal<AuthorityRow[]>([{ id: 0, issuer: 'letsencrypt.org', issue: true, issuewild: false }]);
  readonly ordinary = signal<CaaGeneratorInput['ordinary']>('selected');
  readonly wildcard = signal<CaaGeneratorInput['wildcard']>('inherit');
  readonly ttl = signal('3600');
  readonly critical = signal(false);
  readonly reports = signal<ReportRow[]>([{ id: this.nextId++, value: '' }]);
  readonly result = signal<GeneratedCaaPolicy | null>(null);
  readonly error = signal('');
  readonly view = signal<'records' | 'zone' | 'json'>('records');
  readonly copyMessage = signal('');
  readonly exportOpen = signal(false);
  readonly exporting = signal<'zone' | 'pdf' | 'csv' | 'json' | null>(null);
  readonly sharing = signal(false);
  readonly shareLink = signal('');
  readonly related = [
    { id: 'caa-lookup', icon: 'verified_user', title: 'CAA Lookup', text: 'Read published CAA records after your DNS update.' },
    { id: 'dns-lookup', icon: 'dns', title: 'DNS Lookup', text: 'Check the record types around your domain.' },
    { id: 'dnssec-check', icon: 'shield_lock', title: 'DNSSEC Check', text: 'Inspect signed DNS responses and delegation evidence.' },
    { id: 'cname-lookup', icon: 'link', title: 'CNAME Lookup', text: 'Check whether a hostname is an alias before adding records.' },
  ];
  readonly questions = [
    { q: 'What does this generator change?', a: 'It creates a proposed CAA configuration in your browser. It does not edit DNS, request a certificate or contact reporting destinations. Publish the resulting records through your DNS provider, then check the published values.' },
    { q: 'Which certificate authorities should I select?', a: 'Include the CAs needed by every certificate workflow you use, including managed hosting and CDN renewals. Use the identifier documented by the CA, which can differ from its website address. You can add a custom identifier.' },
    { q: 'How should I configure wildcard certificates?', a: 'Use Inherit issue rules when ordinary and wildcard issuance should use the same authorities. Choose Separate issuer list to generate issuewild records, or Block wildcard issuance to generate an empty wildcard issuer grant.' },
    { q: 'Can an empty issuer entry block only one CA?', a: 'No. An empty grant does not cancel another valid grant in the same applicable RRset. The block options generate empty grants without adding competing grants for that tag. Review existing records when publishing the complete policy.' },
    { q: 'Does CAA revoke an existing certificate or guarantee reports?', a: 'CAA is an issuance policy, so it does not revoke an already issued certificate. A policy can affect later issuance and renewal. Reporting depends on the CA; publishing iodef does not guarantee that a report will be sent.' },
  ];
  constructor() {
    const params = inject(ActivatedRoute).snapshot.queryParamMap;
    if (params.has('config')) {
      try { this.apply(parseCaaGeneratorSettings(params.get('config')!)); }
      catch (error) { this.error.set(error instanceof Error ? error.message : 'The shared configuration could not be loaded.'); }
    } else {
      this.domain.set((params.get('domain') || '').slice(0, 2048));
      const issuer = params.get('authority');
      if (issuer) try { this.authorities.set([{ id: this.nextId++, issuer: normalizeCaaIssuer(issuer), issue: true, issuewild: params.get('tag') === 'issuewild' }]); if (params.get('tag') === 'issuewild') this.wildcard.set('selected'); } catch { this.error.set('The shared CA identifier is invalid. Choose an authority below.'); }
    }
    inject(SeoService).set('CAA Record Generator - Issuers, Wildcards & Reporting | XcellHost', 'Build CAA issue, issuewild and iodef records with CA selection, wildcard policy, TTL, reporting contacts and downloadable configuration files.', '/tools/caa-generator');
  }
  private changed(): void { this.result.set(null); this.error.set(''); this.copyMessage.set(''); this.exportOpen.set(false); this.shareLink.set(''); }
  private apply(input: CaaGeneratorInput): void {
    this.domain.set(input.domain); this.ttl.set(input.ttl); this.ordinary.set(input.ordinary); this.wildcard.set(input.wildcard); this.critical.set(input.critical);
    this.authorities.set(input.authorities.map(row => ({ ...row, id: this.nextId++ })));
    this.reports.set(input.reports.map(value => ({ id: this.nextId++, value })));
  }
  edit(field: 'domain' | 'customIssuer' | 'ttl', event: Event): void { this.changed(); this[field].set((event.target as HTMLInputElement).value); }
  policy(field: 'ordinary' | 'wildcard', event: Event): void { this.changed(); const value = (event.target as HTMLSelectElement).value; if (field === 'ordinary' && ['selected', 'block'].includes(value)) this.ordinary.set(value as CaaGeneratorInput['ordinary']); if (field === 'wildcard' && ['inherit', 'selected', 'block'].includes(value)) this.wildcard.set(value as CaaGeneratorInput['wildcard']); }
  setCritical(event: Event): void { this.changed(); this.critical.set((event.target as HTMLInputElement).checked); }
  selected(issuer: string): boolean { return this.authorities().some(row => row.issuer === issuer); }
  toggleProvider(issuer: string): void { if (this.selected(issuer)) this.removeAuthority(this.authorities().find(row => row.issuer === issuer)!.id); else this.addAuthority(issuer); }
  private addAuthority(value: string): void {
    this.changed();
    try { const issuer = normalizeCaaIssuer(value); if (this.selected(issuer)) { this.copyMessage.set('That CA identifier is already selected.'); return; } if (this.authorities().length >= 20) throw new Error('Use up to 20 CA identifiers.'); this.authorities.update(rows => [...rows, { id: this.nextId++, issuer, issue: true, issuewild: false }]); this.customIssuer.set(''); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'Enter a valid CA identifier.'); }
  }
  addCustom(event?: Event): void { event?.preventDefault(); this.addAuthority(this.customIssuer()); }
  removeAuthority(id: number): void { this.changed(); this.authorities.update(rows => rows.filter(row => row.id !== id)); }
  setAuthority(id: number, field: 'issue' | 'issuewild', event: Event): void { this.changed(); const checked = (event.target as HTMLInputElement).checked; this.authorities.update(rows => rows.map(row => row.id === id ? { ...row, [field]: checked } : row)); }
  addReport(): void { this.changed(); if (this.reports().length < 5) this.reports.update(rows => [...rows, { id: this.nextId++, value: '' }]); }
  editReport(id: number, event: Event): void { this.changed(); const value = (event.target as HTMLInputElement).value; this.reports.update(rows => rows.map(row => row.id === id ? { ...row, value } : row)); }
  removeReport(id: number): void { this.changed(); this.reports.update(rows => rows.filter(row => row.id !== id)); }
  generate(event: Event): void {
    event.preventDefault(); this.changed();
    try { this.result.set(generateCaaPolicy({ domain: this.domain(), authorities: this.authorities().map(({ issuer, issue, issuewild }) => ({ issuer, issue, issuewild })), ordinary: this.ordinary(), wildcard: this.wildcard(), ttl: this.ttl(), critical: this.critical(), reports: this.reports().map(row => row.value) })); this.view.set('records'); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'Could not generate the CAA records.'); }
  }
  reset(): void { this.changed(); this.domain.set(''); this.customIssuer.set(''); this.ordinary.set('selected'); this.wildcard.set('inherit'); this.ttl.set('3600'); this.critical.set(false); this.authorities.set([{ id: this.nextId++, issuer: 'letsencrypt.org', issue: true, issuewild: false }]); this.reports.set([{ id: this.nextId++, value: '' }]); }
  json(): string { return JSON.stringify(this.result(), null, 2); }
  async copy(record?: GeneratedCaaRecord, valueOnly = false): Promise<void> {
    const result = this.result(); if (!result) return;
    try { await navigator.clipboard.writeText(record ? valueOnly ? record.value : record.line : result.zoneFile); this.copyMessage.set(record ? valueOnly ? 'Value copied without quotes' : 'CAA record copied' : 'All CAA records copied'); }
    catch { this.copyMessage.set('Copy is unavailable. Select the zone-file text or download a file instead.'); }
  }
  async share(): Promise<void> {
    const result = this.result(); if (!result || this.sharing()) return;
    this.sharing.set(true); this.copyMessage.set('');
    try {
      const url = caaGeneratorShareUrl(this.document.location.href, result);
      if (navigator.share) try { await navigator.share({ title: result.domain + ' CAA configuration', text: 'Generated CAA settings, not a live DNS result.', url }); return; } catch (error) { if (error instanceof DOMException && error.name === 'AbortError') return; }
      try { await navigator.clipboard.writeText(url); this.copyMessage.set('Configuration link copied'); } catch { this.shareLink.set(url); this.copyMessage.set('Copy this link to share the configuration.'); }
    } catch (error) { this.copyMessage.set(error instanceof Error ? error.message : 'Could not create a share link. Download JSON instead.'); }
    finally { this.sharing.set(false); }
  }
  selectShareLink(event: Event): void { (event.target as HTMLInputElement).select(); }
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
  async export(format: 'zone' | 'pdf' | 'csv' | 'json'): Promise<void> {
    const result = this.result(); if (!result || this.exporting()) return;
    this.exportOpen.set(false); this.exporting.set(format);
    try {
      let content: BlobPart, mime: string;
      if (format === 'pdf') { const { caaGeneratorPdf } = await import('../core/caa-generator-pdf'); content = caaGeneratorPdf(result); mime = 'application/pdf'; }
      else if (format === 'csv') { content = caaGeneratorCsv(result); mime = 'text/csv;charset=utf-8'; }
      else if (format === 'zone') { content = '; Generated CAA configuration for ' + result.domain + '\n; Not published or queried. Review the complete RRset before deploying.\n' + result.zoneFile; mime = 'text/plain;charset=utf-8'; }
      else { content = JSON.stringify(result, null, 2); mime = 'application/json'; }
      const url = URL.createObjectURL(new Blob([content], { type: mime })), link = this.document.createElement('a'); link.href = url; link.download = result.domain + '-caa-records.' + (format === 'zone' ? 'zone' : format); link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      if (this.result() === result) this.copyMessage.set((format === 'zone' ? 'Zone-file' : format.toUpperCase()) + ' download started');
    } catch { this.copyMessage.set('The download could not be created. Please try again.'); }
    finally { this.exporting.set(null); }
  }
}
