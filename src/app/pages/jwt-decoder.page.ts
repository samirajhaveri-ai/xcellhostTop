import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { JWT_INPUT_LIMIT, JwtReport, decodeJwt, jwtReportJson, jwtSample, jwtTimeCards } from '../core/jwt-decoder';

type JwtCopy = 'token' | 'header' | 'payload' | 'signature' | 'hex' | 'report';
@Component({
  selector: 'xh-jwt-decoder-page', standalone: true, imports: [RouterLink],
  templateUrl: './jwt-decoder.page.html', styleUrls: ['./dns-lookup.page.css', './jwt-decoder.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JwtDecoderPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly input = signal('');
  readonly report = signal<JwtReport | null>(null);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly sample = signal(false);
  readonly now = signal<number | null>(null);
  readonly signatureView = signal<'encoded' | 'hex'>('encoded');
  readonly page = signal(0);
  readonly pageSize = 10;
  readonly inputLimit = JWT_INPUT_LIMIT;
  readonly timeCards = computed(() => { const report = this.report(), now = this.now(); return report && now !== null ? jwtTimeCards(report, now) : []; });
  readonly pages = computed(() => Math.max(1, Math.ceil((this.report()?.claims.length || 0) / this.pageSize)));
  readonly claims = computed(() => this.report()?.claims.slice(this.page() * this.pageSize, (this.page() + 1) * this.pageSize) || []);
  readonly range = computed(() => ({ first: this.claims().length ? this.page() * this.pageSize + 1 : 0, last: Math.min((this.page() + 1) * this.pageSize, this.report()?.claims.length || 0) }));
  readonly related = [
    { id: 'base64', icon: 'code', title: 'Base64 Encoder / Decoder', text: 'Decode text and bytes with Base64url support.' },
    { id: 'json-formatter', icon: 'data_object', title: 'JSON Formatter', text: 'Inspect and format structured claim data.' },
    { id: 'epoch-converter', icon: 'schedule', title: 'Epoch Converter', text: 'Review timestamp units and time zones.' },
    { id: 'url-encode', icon: 'link', title: 'URL Encoder / Decoder', text: 'Handle percent-encoded text and URL values.' },
  ];
  readonly features = [
    { icon: 'data_object', title: 'Header and payload', text: 'Read formatted JSON while keeping number spellings, key order and escape sequences intact.' },
    { icon: 'event_busy', title: 'Time-claim checks', text: 'View exp, nbf and iat as UTC dates with live comparisons against the device clock.' },
    { icon: 'manage_search', title: 'Claim inspector', text: 'Browse standard and custom claims, their data types and brief explanations.' },
    { icon: 'view_column', title: 'Three-part breakdown', text: 'See encoded segment sizes and inspect the signature as Base64url or hexadecimal bytes.' },
  ];
  readonly questions = [
    { q: 'Does decoding establish whether a JWT is valid?', a: 'No. This page reads encoded data without verifying a signature or MAC. The issuer, audience, key, algorithm policy, revocation status and application rules are not checked. A readable token, or an expiration date in the future, is not evidence that an application should accept it.' },
    { q: 'Why can the header and payload be read?', a: 'In the three-part compact format supported here, the header and payload use Base64url encoding. Encoding makes bytes convenient to transport; it does not hide them. A signature or MAC protects integrity when properly verified. A five-part encrypted JWE needs decryption and is outside this decoder’s scope.' },
    { q: 'How are exp, nbf and iat interpreted?', a: 'These claims use NumericDate values in Unix seconds; fractions are allowed. exp is the expiration boundary, nbf is a start boundary, and iat is the claimed issue time. The page compares them with your device clock every second, with no clock-skew allowance. Numeric strings and out-of-range dates are flagged instead of converted silently.' },
    { q: 'What do HS256, RS256 and alg none mean?', a: 'HS256 names an HMAC using SHA-256 and a shared secret. RS256 names an RSA signature using SHA-256. The alg parameter is supplied by the token and needs an independent allowlist during real verification. An unsecured token declares alg none and has an empty signature; it is labelled explicitly here.' },
    { q: 'What happens to duplicate names or very large numbers?', a: 'The JSON views and downloaded report retain the original tokens. Claim rows retain duplicate top-level members. Summaries and time cards use the last matching name, and a warning identifies repeated names. Custom numeric values are displayed as their original text, without a JavaScript-number round trip.' },
    { q: 'Which token formats are supported?', a: 'Paste one three-part compact JWT up to 128 KiB, with an encoded header up to 16 KiB. An optional Bearer prefix and surrounding whitespace are removed. Encoded parts must be canonical, unpadded Base64url. Header and payload must contain UTF-8 JSON objects. Encrypted JWE, detached payloads and b64:false payloads are not decoded.' },
    { q: 'Does the tool fetch issuer URLs, keys or certificates?', a: 'No. Decoding runs locally. URL-shaped values such as iss, jku and x5u are shown as text and are not followed. This tool does not send the token to a decoding service, put it into the page URL or save it in browser storage.' },
    { q: 'Can I copy and export the complete result?', a: 'Copy the header, payload, signature, an individual claim or the complete decoded report. The JSON download includes a comparison timestamp and an explicit unverified signature field. Long previews are shortened, while copy and download retain complete data. The sample uses a placeholder signature for demonstration.' },
  ];
  constructor() {
    inject(SeoService).set('JWT Decoder - Inspect Headers, Claims & Expiry | XcellHost', 'Decode JWT headers and payloads locally. Inspect registered and custom claims, expiration and signature bytes, then copy or export an unverified JSON report.', '/tools/jwt-decoder');
    let timer: ReturnType<typeof setInterval> | undefined;
    afterNextRender(() => { this.now.set(Date.now()); timer = setInterval(() => this.now.set(Date.now()), 1000); });
    inject(DestroyRef).onDestroy(() => { if (timer) clearInterval(timer); this.revision++; this.fallback.set(''); });
  }
  private invalidate(): void { this.revision++; this.report.set(null); this.error.set(''); this.notice.set(''); this.fallback.set(''); this.page.set(0); this.sample.set(false); }
  edit(event: Event): void { this.invalidate(); this.input.set((event.target as HTMLTextAreaElement).value); }
  decode(event?: Event, sample = false): void {
    event?.preventDefault(); this.invalidate(); this.now.set(Date.now());
    try {
      const report = decodeJwt(this.input());
      if (sample) report.notes.push('This demonstration token has a placeholder signature. It is not a signed credential.');
      this.report.set(report); this.sample.set(sample); this.signatureView.set('encoded'); this.notice.set('Token decoded. The signature has not been verified.');
    } catch (error) { this.error.set(error instanceof Error ? error.message : 'Unable to decode this token.'); }
  }
  loadSample(): void { this.input.set(jwtSample()); this.decode(undefined, true); }
  clear(): void { this.invalidate(); this.input.set(''); }
  short(value: string, limit = 500): string { return value.length > limit ? value.slice(0, limit) + '…' : value; }
  preview(value: string): string { return value.slice(0, 30000); }
  navigate(page: number): void { this.page.set(Math.min(this.pages() - 1, Math.max(0, page))); }
  setSignatureView(view: 'encoded' | 'hex'): void { this.revision++; this.fallback.set(''); this.notice.set(''); this.signatureView.set(view); }
  private value(kind: JwtCopy | number): string | undefined {
    const report = this.report(); if (!report) return undefined;
    if (typeof kind === 'number') return report.claims[kind]?.raw;
    return kind === 'token' ? report.token : kind === 'header' ? report.headerJson : kind === 'payload' ? report.payloadJson : kind === 'signature' ? report.signature.encoded : kind === 'hex' ? report.signature.hex : jwtReportJson(report, this.now() ?? Date.now());
  }
  async copy(kind: JwtCopy | number): Promise<void> {
    const value = this.value(kind); if (value === undefined) return; const revision = this.revision;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.fallback.set(''); this.notice.set(typeof kind === 'number' ? 'Complete claim value copied as JSON.' : 'Complete ' + (kind === 'report' ? 'decoded report' : kind) + ' copied.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(value); this.notice.set('Clipboard unavailable. Select and copy the text below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#jwt-copy-fallback')?.select(); }, 0); }
  }
  download(): void {
    const value = this.value('report'); if (value === undefined) return;
    const url = URL.createObjectURL(new Blob([value], { type: 'application/json;charset=utf-8' })); const link = this.document.createElement('a'); link.href = url; link.download = 'jwt-decoded-unverified.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set('Decoded JSON report download started. Signature verification was not performed.');
  }
}
