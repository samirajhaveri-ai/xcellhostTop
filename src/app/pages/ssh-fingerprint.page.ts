import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SSH_FINGERPRINT_HASHES, SSH_PUBLIC_DEMO, SSH_PUBLIC_KEY_LIMIT, SshFingerprintHash, SshPublicKeyReport, compareSshFingerprint, inspectSshPublicKey } from '../core/ssh-fingerprint';

@Component({
  selector: 'xh-ssh-fingerprint-page', standalone: true, imports: [RouterLink],
  templateUrl: './ssh-fingerprint.page.html', styleUrls: ['./dns-lookup.page.css', './certificate-fingerprint.page.css', './ssh-fingerprint.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SshFingerprintPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly algorithms = SSH_FINGERPRINT_HASHES;
  readonly mode = signal<'paste' | 'file'>('paste');
  readonly input = signal('');
  readonly file = signal<File | null>(null);
  readonly preferred = signal<SshFingerprintHash>('SHA256');
  readonly expected = signal('');
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly copied = signal('');
  readonly report = signal<SshPublicKeyReport | null>(null);
  readonly rows = computed(() => [...(this.report()?.fingerprints || [])].sort((a, b) => Number(b.algorithm === this.preferred()) - Number(a.algorithm === this.preferred())));
  readonly comparison = computed(() => { const row = this.report()?.fingerprints.find(row => row.algorithm === this.preferred()); return row ? compareSshFingerprint(this.expected(), row) : { state: 'empty', message: '' }; });
  readonly related = [
    { id: 'ssh-key-generator', icon: 'key', title: 'SSH Key Generator', text: 'Create Ed25519, ECDSA or RSA pairs locally.' },
    { id: 'ssh-config', icon: 'terminal', title: 'SSH Config Builder', text: 'Prepare a host alias and identity-file settings.' },
    { id: 'hash-generator', icon: 'tag', title: 'Hash Generator', text: 'Calculate checksums for text or files.' },
    { id: 'certificate-fingerprint', icon: 'workspace_premium', title: 'Certificate Fingerprint', text: 'Fingerprint an X.509 certificate instead of an SSH key.' },
  ];
  readonly questions = [
    { q: 'What does an SSH fingerprint identify?', a: 'It is a digest of the public key’s SSH binary encoding. It lets you compare copies without reading the entire key. Host-key checks and Git account key lists use fingerprints for different purposes; make sure you are comparing the intended key and the same hash algorithm.' },
    { q: 'Which fingerprint format should I use?', a: 'SHA256 is the usual OpenSSH display and a practical default when both sides support it. SHA256 and SHA512 use Base64 without padding after the algorithm prefix. MD5 uses colon-separated hexadecimal and is provided for older displays. MD5 is not collision resistant; use a modern digest for security decisions.' },
    { q: 'Do you need a private key or send my public key to a server?', a: 'Only the public .pub key is needed. This tool’s parsing and hashing code runs in the browser without uploading key data, saving it to browser storage or adding it to a URL. Private-key and PuTTY private-file containers are rejected. Copy puts the selected output on your clipboard.' },
    { q: 'Which key files and formats are supported?', a: 'Paste one OpenSSH .pub or authorized_keys line, or choose its UTF-8 text file up to 64 KiB. RSA, Ed25519 and ECDSA NIST P-256/P-384/P-521 are supported. Recognized authorized_keys options may precede the type and are excluded from the digest. Their values and access restrictions are not validated. Multiple keys, known_hosts entries, SSH certificates, security-key variants, PEM wrappers and RFC 4716 files need conversion or extraction first.' },
    { q: 'Does a match prove that a server or account is trusted?', a: 'A match means the digest agrees with the value you supplied. The expected fingerprint must come through a source you already trust. This page does not contact a host, verify possession of a private key, check a signature or authorize access. Parsed structure and imported ECDSA points are format checks, rather than a complete cryptographic audit.' },
    { q: 'Do comments, authorized_keys options or filenames affect the result?', a: 'No. The hashes cover the SSH public-key blob, not surrounding text or the file name. Renaming the file or editing its comment keeps the fingerprint unchanged. A generic file-checksum tool hashes different bytes and usually gives a different result.' },
    { q: 'How can I compare this with ssh-keygen?', a: 'Save the public line as key.pub, then run ssh-keygen -lf key.pub -E sha256, ssh-keygen -lf key.pub -E sha512 or ssh-keygen -lf key.pub -E md5. Compare the complete fingerprint from the same algorithm. If a host key changes unexpectedly, verify the replacement with the server owner before changing your trust records.' },
  ];
  constructor() {
    inject(SeoService).set('SSH Key Fingerprint - SHA256, SHA512 & MD5 | XcellHost', 'Inspect an OpenSSH public key locally. Paste or choose a .pub file, calculate SHA256, SHA512 and MD5 fingerprints, read key metadata and compare an expected digest.', '/tools/ssh-fingerprint');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.input.set(''); this.file.set(null); this.report.set(null); });
  }
  private invalidate(): void { this.revision++; this.report.set(null); this.busy.set(false); this.error.set(''); this.notice.set(''); this.fallback.set(''); this.copied.set(''); }
  setMode(mode: 'paste' | 'file'): void { if (this.mode() !== mode) { this.invalidate(); this.mode.set(mode); } }
  edit(event: Event): void { this.invalidate(); this.input.set((event.target as HTMLTextAreaElement).value); }
  sample(): void { this.invalidate(); this.mode.set('paste'); this.input.set(SSH_PUBLIC_DEMO); this.notice.set('Public demonstration key loaded. It does not identify a trusted server.'); }
  selectFile(event: Event): void {
    this.invalidate(); const input = event.target as HTMLInputElement, file = input.files?.[0] || null;
    if (file && file.size > SSH_PUBLIC_KEY_LIMIT) { this.file.set(null); input.value = ''; this.error.set('Choose one public .pub file up to 64 KiB.'); return; }
    this.file.set(file);
  }
  setPreferred(algorithm: SshFingerprintHash): void { this.preferred.set(algorithm); this.fallback.set(''); this.copied.set(''); }
  changeExpected(event: Event): void { this.expected.set((event.target as HTMLInputElement).value); }
  async check(event?: Event): Promise<void> {
    event?.preventDefault(); this.invalidate(); const revision = this.revision; this.busy.set(true);
    try {
      let input: string | Uint8Array = this.input();
      if (this.mode() === 'file') {
        const file = this.file(); if (!file) throw new Error('Choose an OpenSSH public .pub file first.');
        if (file.size > SSH_PUBLIC_KEY_LIMIT) throw new Error('Choose one public .pub file up to 64 KiB.');
        input = new Uint8Array(await file.arrayBuffer());
      }
      if (revision !== this.revision) return;
      const report = await inspectSshPublicKey(input);
      if (revision !== this.revision) return;
      this.report.set(report); this.notice.set('Three fingerprints calculated from the parsed public-key blob. Identity and private-key possession were not verified.');
    } catch (error) { if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'Public-key inspection failed. Check the input and try again.'); }
    finally { if (revision === this.revision) this.busy.set(false); }
  }
  clear(): void { this.invalidate(); this.input.set(''); this.file.set(null); this.expected.set(''); const input = this.document.querySelector<HTMLInputElement>('#ssh-fp-file'); if (input) input.value = ''; this.notice.set('Input and results cleared from this page.'); }
  async copy(value: string, label: string): Promise<void> {
    const revision = this.revision; this.fallback.set('');
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.notice.set(label + ' copied to your clipboard.'); this.copied.set(label); setTimeout(() => { if (revision === this.revision && this.copied() === label) this.copied.set(''); }, 2500); } }
    catch { if (revision === this.revision) { this.fallback.set(value); this.notice.set('Clipboard access is unavailable. Select and copy the fingerprint below.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#ssh-fp-copy-fallback')?.select(), 0); } }
  }
  copyAll(): void { void this.copy(this.rows().map(row => row.value).join('\n'), 'All fingerprints'); }
}
