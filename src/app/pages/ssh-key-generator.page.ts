import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { SSH_KEY_TYPES, SshAlgorithm, SshGeneratedKeys, generateSshKeys, sshFilename, validateSshSettings } from '../core/ssh-key-generator';

@Component({
  selector: 'xh-ssh-key-generator-page', standalone: true, imports: [RouterLink],
  templateUrl: './ssh-key-generator.page.html', styleUrls: ['./dns-lookup.page.css', './ssh-key-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SshKeyGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly types = SSH_KEY_TYPES;
  readonly algorithm = signal<SshAlgorithm>('ed25519');
  readonly bits = signal(256);
  readonly comment = signal('');
  readonly passphrase = signal('');
  readonly confirmation = signal('');
  readonly showPassphrase = signal(false);
  readonly filename = signal('id_ed25519');
  readonly format = signal<'openssh' | 'pem' | 'ppk'>('openssh');
  readonly result = signal<SshGeneratedKeys | null>(null);
  readonly visible = signal(false);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly manualCopy = signal<'public' | 'private' | 'fingerprint' | null>(null);
  readonly sizes = computed(() => this.algorithm() === 'rsa' ? [2048,3072,4096] : this.algorithm() === 'ecdsa' ? [256,384,521] : [256]);
  readonly privateText = computed(() => { const pair = this.result(); if (!pair) return ''; return this.format() === 'ppk' ? pair.ppk : this.format() === 'pem' ? pair.pem : pair.openssh || ''; });
  readonly privateLabel = computed(() => this.format() === 'ppk' ? 'PuTTY PPK v3' : this.format() === 'pem' ? 'PKCS#8 PEM' : 'OpenSSH');
  readonly passGuide = computed(() => { const length = [...this.passphrase()].length; return { length, percent: Math.min(100, length * 5), label: !length ? 'No passphrase set' : length < 12 ? 'Short passphrase' : length < 20 ? 'Longer passphrase' : 'Long passphrase' }; });
  readonly filenameError = computed(() => { try { sshFilename(this.filename()); return ''; } catch (error) { return (error as Error).message; } });
  readonly related = [
    { id: 'ssh-fingerprint', title: 'SSH Key Fingerprint', icon: 'fingerprint', text: 'Compare the fingerprint of an SSH public key.' },
    { id: 'ssh-config', title: 'SSH Config Builder', icon: 'terminal', text: 'Prepare a host alias and identity-file configuration.' },
    { id: 'pem-formatter', title: 'PEM Formatter', icon: 'data_object', text: 'Normalize the text envelope of a PEM file.' },
    { id: 'password-generator', title: 'Password Generator', icon: 'password', text: 'Generate random passwords on this device.' },
  ];
  readonly questions = [
    { q: 'Which key type should I choose?', a: 'Ed25519 is a compact option for current SSH clients. Choose ECDSA when a destination requires a supported NIST curve, or RSA when you need compatibility with existing systems. Check the destination’s accepted algorithms and policy before installing the key. RSA 2048, 3072 and 4096 bits and ECDSA P-256, P-384 and P-521 are supported.' },
    { q: 'Where are keys generated and stored?', a: 'Web Crypto generates the pair in this browser. This tool’s generation code does not upload keys, send the passphrase or write them to browser storage. Results remain in page memory until cleared or you leave. Clear cannot erase downloaded files, the clipboard or all copies held by a browser. Use a trusted device and browser.' },
    { q: 'What does the passphrase protect?', a: 'A non-empty passphrase encrypts the downloaded PKCS#8 PEM and PPK v3 private files. The PEM export uses PBKDF2-HMAC-SHA256 with 600,000 iterations and AES-256-CBC. The PPK export uses Argon2id (32 MiB, 3 passes, parallelism 1), AES-256-CBC and HMAC-SHA256. Keep the passphrase separately: this tool has no recovery service. The meter is a length guide, not a crack-time or entropy estimate.' },
    { q: 'How do OpenSSH, PEM and PPK downloads differ?', a: 'The public download is an OpenSSH authorized_keys line. Without a passphrase, you can export an OpenSSH private file, PKCS#8 PEM or PPK v3. With a passphrase, encrypted PKCS#8 PEM and encrypted PPK v3 are available; an unencrypted OpenSSH export is not offered for that result. Some SSH clients need native OpenSSH private format: use a compatible current client or convert the encrypted PPK with local PuTTYgen and retain passphrase protection. PEM is not the same container as OpenSSH private format.' },
    { q: 'How do I install the public key?', a: 'Download the .pub file and add its single line to the target account’s ~/.ssh/authorized_keys, or the SSH keys area of your Git hosting account. Keep the private file on your client. On Unix-like systems restrict ~/.ssh to your user and set the private file to mode 600. Only replace permissions or files you own, and keep a working login while testing the new key.' },
    { q: 'What is the SHA-256 fingerprint?', a: 'It is the SHA-256 digest of the SSH public-key binary blob, displayed as SHA256: followed by Base64 without padding. Compare it with ssh-keygen -lf your-public-key.pub. The comment and the private-file encryption do not change the fingerprint. It identifies this key, rather than proving a server’s identity or granting access.' },
    { q: 'How do I use this with GitHub, GitLab, PuTTY or WinSCP?', a: 'Copy the public key into your Git account’s SSH key settings. For PuTTY, Pageant or WinSCP, download PPK v3 and choose it as the client identity; use a version that supports this format and algorithm. A generated key does not create an account or authorize a login by itself.' },
    { q: 'What happens when I edit settings or generate again?', a: 'Changing the algorithm, key size, comment or passphrase discards the previous result from the page. Generate creates a fresh pair. Filename and output-format changes keep the existing pair. Clear removes the form’s passphrase and current output; it does not revoke installed public keys or clear your device clipboard. Save the pair you need before leaving.' },
  ];
  constructor() {
    inject(SeoService).set('SSH Key Generator - Ed25519, ECDSA & RSA | XcellHost', 'Generate SSH key pairs locally. Choose Ed25519, ECDSA or RSA, protect exports with a passphrase, compare SHA-256 fingerprints and download public, PEM or PPK files.', '/tools/ssh-key-generator');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.result.set(null); this.passphrase.set(''); this.confirmation.set(''); });
  }
  private invalidate(): void { this.revision++; this.result.set(null); this.visible.set(false); this.error.set(''); this.notice.set(''); this.manualCopy.set(null); }
  choose(type: SshAlgorithm): void { if (this.busy()) return; this.invalidate(); this.algorithm.set(type); this.bits.set(type === 'rsa' ? 4096 : 256); this.filename.set('id_' + type); }
  edit(field: 'comment' | 'passphrase' | 'confirmation', event: Event): void { this.invalidate(); this[field].set((event.target as HTMLInputElement).value); }
  changeBits(event: Event): void { this.invalidate(); this.bits.set(Number((event.target as HTMLSelectElement).value)); }
  changeFilename(event: Event): void { this.filename.set((event.target as HTMLInputElement).value); this.notice.set(''); }
  changeFormat(event: Event): void { this.format.set((event.target as HTMLSelectElement).value as 'openssh' | 'pem' | 'ppk'); this.visible.set(false); this.manualCopy.set(null); }
  async generate(event?: Event): Promise<void> {
    event?.preventDefault(); if (this.busy()) return;
    this.invalidate(); const revision = this.revision;
    try {
      const settings = validateSshSettings({ algorithm: this.algorithm(), bits: this.bits(), comment: this.comment(), passphrase: this.passphrase() });
      if (settings.passphrase !== this.confirmation()) throw new Error('The passphrase and confirmation must match exactly.');
      this.busy.set(true);
      const pair = await generateSshKeys(settings);
      if (revision !== this.revision) return;
      this.result.set(pair); this.format.set(pair.encrypted ? 'pem' : 'openssh'); this.visible.set(false);
      this.notice.set('Key pair ready. Private output is hidden. ' + (pair.encrypted ? 'Private downloads are passphrase protected.' : 'No passphrase was set; private downloads are unencrypted.'));
    } catch (error) { if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'Key generation failed. Try again in a current browser.'); }
    finally { this.busy.set(false); }
  }
  togglePrivate(): void { this.visible.update(value => !value); this.manualCopy.set(null); }
  togglePassphrase(): void { this.showPassphrase.update(value => !value); }
  clear(): void { this.invalidate(); this.comment.set(''); this.passphrase.set(''); this.confirmation.set(''); this.showPassphrase.set(false); this.notice.set(this.busy() ? 'Form cleared. The pending result will be discarded.' : 'Form and current output cleared from this page.'); }
  async copy(kind: 'public' | 'private' | 'fingerprint'): Promise<void> {
    const pair = this.result(); if (!pair) return; const revision = this.revision;
    const value = kind === 'public' ? pair.publicKey : kind === 'private' ? this.privateText() : pair.fingerprint;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.notice.set((kind === 'fingerprint' ? 'Fingerprint' : kind === 'public' ? 'Public key' : 'Private key') + ' copied to your clipboard.'); this.manualCopy.set(null); } }
    catch { if (revision === this.revision) { this.manualCopy.set(kind); if (kind === 'private') this.visible.set(true); this.notice.set('Clipboard access is unavailable. Select the displayed text to copy it.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#ssh-' + kind + '-output')?.select(), 0); } }
  }
  download(kind: 'public' | 'private'): void {
    const pair = this.result(); if (!pair) return;
    try {
      const name = sshFilename(this.filename()), extension = kind === 'public' ? '.pub' : this.format() === 'ppk' ? '.ppk' : this.format() === 'pem' ? '.pem' : '';
      const value = kind === 'public' ? pair.publicKey : this.privateText(); if (!value) throw new Error('Select an available private-key format.');
      const url = URL.createObjectURL(new Blob([value], { type: 'application/octet-stream' })), link = this.document.createElement('a');
      link.href = url; link.download = name + extension; this.document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
      this.notice.set((kind === 'public' ? 'Public' : pair.encrypted ? 'Encrypted private' : 'Unencrypted private') + ' key download started.');
    } catch (error) { this.notice.set(error instanceof Error ? error.message : 'Download unavailable. Use Copy instead.'); }
  }
}
