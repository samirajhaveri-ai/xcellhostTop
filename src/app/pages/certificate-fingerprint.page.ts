import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { CERTIFICATE_HASHES, CERTIFICATE_INPUT_LIMIT, CertificateFingerprintFormat, CertificateHash, CertificateReport, compareCertificateFingerprint, displayCertificateFingerprint, inspectCertificate } from '../core/certificate-fingerprint';
import { CERTIFICATE_SAMPLE } from '../core/certificate-fingerprint.sample';

@Component({
  selector: 'xh-certificate-fingerprint-page', standalone: true, imports: [RouterLink],
  templateUrl: './certificate-fingerprint.page.html', styleUrls: ['./dns-lookup.page.css', './certificate-fingerprint.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateFingerprintPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly algorithms = CERTIFICATE_HASHES;
  readonly mode = signal<'paste' | 'file'>('paste');
  readonly pem = signal('');
  readonly file = signal<File | null>(null);
  readonly preferred = signal<CertificateHash>('SHA-256');
  readonly format = signal<CertificateFingerprintFormat>('colon');
  readonly expected = signal('');
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly copied = signal('');
  readonly report = signal<CertificateReport | null>(null);
  readonly rows = computed(() => [...(this.report()?.fingerprints || [])].sort((a, b) => Number(b.algorithm === this.preferred()) - Number(a.algorithm === this.preferred())).map(row => ({ ...row, value: displayCertificateFingerprint(row, this.format()) })));
  readonly comparison = computed(() => { const row = this.report()?.fingerprints.find(row => row.algorithm === this.preferred()); return row ? compareCertificateFingerprint(this.expected(), row) : { state: 'empty', message: '' }; });
  readonly related = [
    { id: 'ssh-fingerprint', icon: 'key', title: 'SSH Key Fingerprint', text: 'Fingerprint an OpenSSH public key.' },
    { id: 'hash-generator', icon: 'tag', title: 'Hash Generator', text: 'Calculate checksums for text or files.' },
    { id: 'pem-formatter', icon: 'code', title: 'PEM Formatter', text: 'Check Base64 and format PEM blocks.' },
    { id: 'password-generator', icon: 'password', title: 'Password Generator', text: 'Generate random passwords locally.' },
  ];
  readonly questions = [
    { q: 'What does a certificate fingerprint identify?', a: 'It hashes the entire encoded X.509 certificate, including its public key, identity fields, dates, extensions and signature. It identifies those certificate bytes. It is different from a public-key-only or SPKI fingerprint.' },
    { q: 'Which fingerprint should I compare?', a: 'Use SHA-256 when both sides support it. Compare fingerprints made with the same algorithm over the same certificate. MD5 and SHA-1 are included for legacy displays and are not suitable for collision-resistant security decisions.' },
    { q: 'Are PEM and DER fingerprints different?', a: 'The tool decodes PEM Base64 to the certificate bytes before hashing. A PEM certificate and its matching DER file produce identical fingerprints. PEM line wrapping, surrounding whitespace and the file name do not affect the fingerprint.' },
    { q: 'Does a match mean the certificate is trusted?', a: 'A match means the supplied certificate matches the expected digest. You must obtain that expected value through a trusted channel. This tool does not verify signatures, build a trust chain, match a hostname or check revocation. Its date badge only compares the certificate dates with your device clock.' },
    { q: 'Can I paste an SSH public key or a private key?', a: 'This page accepts a single X.509 certificate. Use the linked SSH Key Fingerprint tool for OpenSSH public keys. A private key is never needed to calculate a certificate fingerprint and is rejected here.' },
    { q: 'Does the certificate leave my device?', a: 'The inspection and hashing code runs locally in your browser. It does not upload certificate data, put it in a URL or save it to browser storage. Copy puts the requested fingerprint on your clipboard.' },
    { q: 'Why are certificate chains or PFX files rejected?', a: 'A chain contains multiple certificates, each with a different fingerprint. Provide just the certificate you want to compare. Extract a public certificate from a PKCS#12/PFX or PKCS#7 container locally before using this tool; do not supply its private key.' },
  ];
  constructor() {
    inject(SeoService).set('Certificate Fingerprint - PEM & DER Calculator | XcellHost', 'Calculate SHA-256, SHA-512, SHA-1 and MD5 certificate fingerprints locally. Paste PEM or choose a DER certificate, inspect details and compare an expected fingerprint.', '/tools/certificate-fingerprint');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.pem.set(''); this.file.set(null); this.report.set(null); });
  }
  private invalidate(): void { this.revision++; this.report.set(null); this.busy.set(false); this.error.set(''); this.notice.set(''); this.fallback.set(''); this.copied.set(''); }
  setMode(mode: 'paste' | 'file'): void { if (this.mode() !== mode) { this.invalidate(); this.mode.set(mode); } }
  changePem(event: Event): void { this.invalidate(); this.pem.set((event.target as HTMLTextAreaElement).value); }
  sample(): void { this.invalidate(); this.mode.set('paste'); this.pem.set(CERTIFICATE_SAMPLE); this.notice.set('Public demo certificate loaded. It is not a trusted TLS identity.'); }
  selectFile(event: Event): void {
    this.invalidate(); const input = event.target as HTMLInputElement, file = input.files?.[0] || null;
    if (file && file.size > CERTIFICATE_INPUT_LIMIT) { this.file.set(null); input.value = ''; this.error.set('Use a single certificate file up to 256 KiB.'); return; }
    this.file.set(file);
  }
  setPreferred(algorithm: CertificateHash): void { this.preferred.set(algorithm); this.fallback.set(''); this.notice.set(''); }
  changeFormat(event: Event): void { this.format.set((event.target as HTMLSelectElement).value as CertificateFingerprintFormat); this.fallback.set(''); this.notice.set(''); this.copied.set(''); }
  changeExpected(event: Event): void { this.expected.set((event.target as HTMLInputElement).value); }
  async check(event?: Event): Promise<void> {
    event?.preventDefault(); this.invalidate(); const revision = this.revision; this.busy.set(true);
    try {
      let input: string | Uint8Array = this.pem();
      if (this.mode() === 'file') {
        const file = this.file(); if (!file) throw new Error('Choose a PEM or DER certificate file first.');
        if (file.size > CERTIFICATE_INPUT_LIMIT) throw new Error('Use a single certificate file up to 256 KiB.');
        input = new Uint8Array(await file.arrayBuffer());
      }
      if (revision !== this.revision) return;
      const result = inspectCertificate(input);
      if (revision !== this.revision) return;
      this.report.set(result); this.notice.set('Four certificate fingerprints calculated. Trust and signatures have not been verified.');
    } catch (error) { if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'Certificate inspection failed. Check the input and try again.'); }
    finally { if (revision === this.revision) this.busy.set(false); }
  }
  clear(): void { this.invalidate(); this.pem.set(''); this.file.set(null); this.expected.set(''); const input = this.document.querySelector<HTMLInputElement>('#cert-file'); if (input) input.value = ''; this.notice.set('Input and results cleared from this page.'); }
  async copy(value: string, label: string): Promise<void> {
    const revision = this.revision; this.fallback.set('');
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.notice.set(label + ' copied to your clipboard.'); this.copied.set(label); setTimeout(() => { if (this.copied() === label) this.copied.set(''); }, 2500); } }
    catch { if (revision === this.revision) { this.fallback.set(value); this.notice.set('Clipboard access is unavailable. Select and copy the fingerprint below.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#cert-copy-fallback')?.select(), 0); } }
  }
  copyAll(): void { void this.copy(this.rows().map(row => row.algorithm + ': ' + row.value).join('\n'), 'All fingerprints'); }
}
