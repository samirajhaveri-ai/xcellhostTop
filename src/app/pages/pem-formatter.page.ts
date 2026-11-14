import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { PEM_INPUT_LIMIT, PemFormatOptions, PemFormatResult, formatPem } from '../core/pem-formatter';
import { CERTIFICATE_SAMPLE } from '../core/certificate-fingerprint.sample';

@Component({
  selector: 'xh-pem-formatter-page', standalone: true, imports: [RouterLink],
  templateUrl: './pem-formatter.page.html', styleUrls: ['./dns-lookup.page.css', './pem-formatter.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PemFormatterPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly mode = signal<'paste' | 'file'>('paste');
  readonly input = signal('');
  readonly file = signal<File | null>(null);
  readonly width = signal<0 | 64 | 76>(64);
  readonly lineEnding = signal<'LF' | 'CRLF'>('LF');
  readonly finalNewline = signal(true);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly notice = signal('');
  readonly copied = signal(false);
  readonly showOutput = signal(true);
  readonly manualCopy = signal(false);
  readonly result = signal<PemFormatResult | null>(null);
  readonly hasPrivate = computed(() => this.result()?.blocks.some(block => block.privateMaterial) || false);
  readonly options = computed<PemFormatOptions>(() => ({ width: this.width(), lineEnding: this.lineEnding(), finalNewline: this.finalNewline() }));
  readonly related = [
    { id: 'certificate-fingerprint', icon: 'fingerprint', title: 'Certificate Fingerprint', text: 'Inspect a public PEM/DER certificate.' },
    { id: 'hash-generator', icon: 'tag', title: 'Hash Generator', text: 'Calculate digests for text or files.' },
    { id: 'ssh-fingerprint', icon: 'key', title: 'SSH Key Fingerprint', text: 'Fingerprint an OpenSSH public key.' },
    { id: 'base64', icon: 'code', title: 'Base64 Encoder / Decoder', text: 'Convert Unicode text and Base64.' },
  ];
  readonly questions = [
    { q: 'What does this PEM formatter change?', a: 'It normalizes the text boundaries, Base64 line wrapping, line endings and final newline. Matching BEGIN and END labels, block order, decoded bytes and supported legacy encryption headers are preserved. Missing Base64 padding is restored only when the unpadded data has an unambiguous canonical decoding.' },
    { q: 'Does formatting convert PEM into PuTTY PPK?', a: 'No. PEM and PPK are different containers. Rewrapping Base64 or changing the file extension does not convert a key. Use a key conversion tool such as PuTTYgen for PPK conversion. This page formats PEM text and downloads a .pem file.' },
    { q: 'Do I need to enter a passphrase?', a: 'No passphrase is needed to rewrap an encrypted PEM block because the ciphertext is not decrypted. ENCRYPTED PRIVATE KEY blocks and supported paired Proc-Type / DEK-Info headers are retained. The tool does not add, remove or verify encryption.' },
    { q: 'Does a successful result prove that my certificate or key is valid?', a: 'It confirms the PEM envelope and Base64 can be read. It does not parse or validate the underlying ASN.1 object, OpenSSH key, signature, trust chain or key pair. Use a certificate or key inspection tool for those checks.' },
    { q: 'Can I format a certificate bundle?', a: 'Yes. Up to 20 PEM blocks are supported within the 1 MiB input limit. Their order is preserved and a blank line separates them. Text outside the blocks, unsupported metadata headers or malformed later blocks cause the whole operation to fail instead of silently dropping content.' },
    { q: 'Which line width should I choose?', a: 'Use 64 characters for ordinary PEM output. Legacy encrypted blocks with Proc-Type and DEK-Info headers require 64-character wrapping for compatibility. A 76-character or single-line body is available for other blocks when a system specifically requires it; those options are not the RFC 7468 generator format. Choose LF or CRLF line endings. Download preserves the selected endings exactly.' },
    { q: 'Where are my input and output processed?', a: 'The formatting code runs in your browser without uploading the content, putting it in a URL or saving it in browser storage. Private-key output is hidden initially. Copy puts the complete output on your clipboard, and Download saves it to your device when clicked. Clear removes the current page content but does not erase a clipboard copy or downloaded file.' },
  ];
  constructor() {
    inject(SeoService).set('PEM Formatter - Format Certificates & Keys | XcellHost', 'Format PEM certificates, public keys and private-key blocks locally. Check Base64, preserve encryption headers, set line endings, then copy or download PEM.', '/tools/pem-formatter');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.input.set(''); this.file.set(null); this.result.set(null); });
  }
  private invalidate(): void { this.revision++; this.result.set(null); this.busy.set(false); this.error.set(''); this.notice.set(''); this.copied.set(false); this.manualCopy.set(false); }
  setMode(mode: 'paste' | 'file'): void { if (this.mode() !== mode) { this.invalidate(); this.mode.set(mode); } }
  changeInput(event: Event): void { this.invalidate(); this.input.set((event.target as HTMLTextAreaElement).value); }
  sample(): void { this.invalidate(); this.mode.set('paste'); this.input.set(CERTIFICATE_SAMPLE.replace(/\n/g, '')); this.notice.set('Public demo certificate loaded with an unwrapped Base64 body.'); }
  chooseFile(event: Event): void {
    this.invalidate(); const input = event.target as HTMLInputElement, file = input.files?.[0] || null;
    if (file && file.size > PEM_INPUT_LIMIT) { this.file.set(null); input.value = ''; this.error.set('Choose a PEM text file up to 1 MiB.'); return; }
    this.file.set(file);
  }
  changeWidth(event: Event): void { this.invalidate(); this.width.set(Number((event.target as HTMLSelectElement).value) as 0 | 64 | 76); }
  changeEnding(event: Event): void { this.invalidate(); this.lineEnding.set((event.target as HTMLSelectElement).value as 'LF' | 'CRLF'); }
  changeFinalNewline(event: Event): void { this.invalidate(); this.finalNewline.set((event.target as HTMLInputElement).checked); }
  async format(event?: Event): Promise<void> {
    event?.preventDefault(); this.invalidate(); const revision = this.revision; this.busy.set(true);
    try {
      let text = this.input();
      if (this.mode() === 'file') {
        const file = this.file(); if (!file) throw new Error('Choose a PEM text file first.');
        if (file.size > PEM_INPUT_LIMIT) throw new Error('Choose a PEM text file up to 1 MiB.');
        const bytes = await file.arrayBuffer();
        try { text = new TextDecoder('utf-8', { fatal: true }).decode(bytes); }
        catch { throw new Error('Choose a UTF-8 PEM text file. Binary DER and PPK files need a separate conversion tool.'); }
      }
      if (revision !== this.revision) return;
      const formatted = formatPem(text, this.options());
      this.result.set(formatted); this.showOutput.set(!formatted.blocks.some(block => block.privateMaterial));
      this.notice.set(formatted.blocks.length + ' PEM block' + (formatted.blocks.length === 1 ? '' : 's') + ' formatted. Encoded object validity was not checked.');
    } catch (error) { if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'PEM formatting failed. Check the input and try again.'); }
    finally { if (revision === this.revision) this.busy.set(false); }
  }
  toggleOutput(): void { this.showOutput.update(value => !value); this.manualCopy.set(false); }
  clear(): void { this.invalidate(); this.input.set(''); this.file.set(null); const input = this.document.querySelector<HTMLInputElement>('#pem-file'); if (input) input.value = ''; this.notice.set('Input and output cleared from this page.'); }
  async copy(): Promise<void> {
    const result = this.result(); if (!result) return; const revision = this.revision;
    try { await navigator.clipboard.writeText(result.output); if (revision === this.revision) { this.copied.set(true); this.notice.set('Formatted PEM copied to your clipboard.'); setTimeout(() => this.copied.set(false), 2500); } }
    catch { if (revision === this.revision) { this.showOutput.set(true); this.manualCopy.set(true); this.notice.set('Clipboard access is unavailable. Select and copy the output below.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#pem-output')?.select(), 0); } }
  }
  download(): void {
    const result = this.result(); if (!result) return;
    try { const url = URL.createObjectURL(new Blob([result.output], { type: 'application/x-pem-file' })); const link = this.document.createElement('a'); link.href = url; link.download = 'formatted.pem'; this.document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set('PEM download started. The file includes all formatted blocks.'); }
    catch { this.notice.set('Download is unavailable. Use Copy or select the formatted output manually.'); }
  }
}
