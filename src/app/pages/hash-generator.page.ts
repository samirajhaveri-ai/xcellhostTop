import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { HASH_ALGORITHMS, HASH_FILE_LIMIT, HashAlgorithm, HashDigest, HashFormat, encodeHashText, formatHash, hashBlob } from '../core/hash-generator';

@Component({
  selector: 'xh-hash-generator-page', standalone: true, imports: [RouterLink],
  templateUrl: './hash-generator.page.html', styleUrls: ['./dns-lookup.page.css', './hash-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private controller?: AbortController;
  private revision = 0;
  readonly algorithms = HASH_ALGORITHMS;
  readonly mode = signal<'text' | 'file'>('text');
  readonly text = signal('');
  readonly file = signal<File | null>(null);
  readonly selected = signal<HashAlgorithm[]>(['MD5', 'SHA-256', 'SHA-512']);
  readonly format = signal<HashFormat>('hex');
  readonly busy = signal(false);
  readonly progress = signal(0);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly results = signal<HashDigest[]>([]);
  readonly source = signal<{ name: string; bytes: number } | null>(null);
  readonly byteCount = computed(() => new TextEncoder().encode(this.text()).length);
  readonly rows = computed(() => this.results().map(result => ({ ...result, value: formatHash(result.bytes, this.format()), info: HASH_ALGORITHMS.find(item => item.id === result.algorithm)! })));
  readonly hasLegacy = computed(() => this.selected().some(id => id === 'MD5' || id === 'SHA-1' || id === 'CRC32'));
  readonly related = [
    { id: 'password-generator', icon: 'password', title: 'Password Generator', text: 'Generate a fresh random password locally.' },
    { id: 'base64', icon: 'code', title: 'Base64 Encoder / Decoder', text: 'Convert text to and from Base64.' },
    { id: 'certificate-fingerprint', icon: 'fingerprint', title: 'Certificate Fingerprint', text: 'Calculate a PEM certificate fingerprint.' },
    { id: 'uuid-generator', icon: 'tag', title: 'UUID Generator', text: 'Create identifiers for applications.' },
  ];
  readonly questions = [
    { q: 'Does this tool upload my text or file?', a: 'The hashing code runs in your browser. It reads a selected file in small slices and does not upload the input, place it in a URL or save it to browser storage. Copy puts only the requested digest on your clipboard.' },
    { q: 'Why does a space or line break change the result?', a: 'A digest depends on the exact bytes. Text is encoded as UTF-8 without trimming, Unicode normalization or an added newline. File mode hashes the original file bytes, including a byte-order mark or different line endings. The file name is not part of the hash.' },
    { q: 'Which algorithms should I use?', a: 'Use the algorithm specified by the system you are checking. SHA-256 is commonly used for download integrity. MD5 and SHA-1 are retained for older checksums and should not be used for collision-resistant security. CRC32 detects accidental errors; it is not a cryptographic hash.' },
    { q: 'Is SHA3-256 the same as Keccak-256?', a: 'No. This tool uses standardized SHA3-256, which has different padding from Keccak-256. They produce different outputs. BLAKE2b here is the unkeyed 512-bit variant; changing its output size or adding a key produces a different result.' },
    { q: 'Can a hash prove who published a file?', a: 'A matching digest confirms that your bytes match a supplied digest. Trust depends on where that expected digest came from. Use a trusted publisher or a verified digital signature; a hash alone does not authenticate the source.' },
    { q: 'Can I use these hashes to store passwords?', a: 'These are fast, unsalted digests, not a password-storage scheme. Password storage needs a suitable password-hashing function such as Argon2id with a unique salt and an appropriate work factor. Hashing is also not reversible encryption.' },
  ];
  constructor() {
    inject(SeoService).set('Hash Generator - Text & File Checksums | XcellHost', 'Calculate MD5, SHA-1, SHA-256, SHA-384, SHA-512, SHA3-256, BLAKE2b and CRC32 locally. Hash text or files with Hex and Base64 output.', '/tools/hash-generator');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.controller?.abort(); this.text.set(''); this.file.set(null); this.results.set([]); });
  }
  size(bytes: number): string { return bytes < 1024 ? bytes + ' bytes' : bytes < 1048576 ? (bytes / 1024).toFixed(1) + ' KiB' : (bytes / 1048576).toFixed(2) + ' MiB'; }
  private invalidate(): void {
    this.revision++; this.controller?.abort(); this.busy.set(false); this.results.set([]); this.source.set(null); this.error.set(''); this.notice.set(''); this.fallback.set(''); this.progress.set(0);
  }
  setMode(mode: 'text' | 'file'): void { if (mode !== this.mode()) { this.invalidate(); this.mode.set(mode); } }
  changeText(event: Event): void { this.invalidate(); this.text.set((event.target as HTMLTextAreaElement).value); }
  sample(): void { this.invalidate(); this.mode.set('text'); this.text.set('Hello, world!'); }
  selectFile(event: Event): void {
    this.invalidate(); const input = event.target as HTMLInputElement, file = input.files?.[0] ?? null;
    if (file && file.size > HASH_FILE_LIMIT) { this.file.set(null); input.value = ''; this.error.set('This tool supports files up to 100 MiB. Choose a smaller file.'); return; }
    this.file.set(file);
  }
  removeFile(): void { this.invalidate(); this.file.set(null); const input = this.document.querySelector<HTMLInputElement>('#hash-file'); if (input) input.value = ''; }
  toggleAlgorithm(id: HashAlgorithm, event: Event): void {
    this.invalidate(); const checked = (event.target as HTMLInputElement).checked;
    this.selected.update(list => checked ? [...new Set([...list, id])] : list.filter(item => item !== id));
  }
  selectAlgorithms(all: boolean): void { this.invalidate(); this.selected.set(all ? HASH_ALGORITHMS.map(item => item.id) : ['SHA-256', 'SHA-512']); }
  changeFormat(event: Event): void { this.format.set((event.target as HTMLSelectElement).value as HashFormat); this.notice.set(''); this.fallback.set(''); }
  async generate(event?: Event): Promise<void> {
    event?.preventDefault(); this.invalidate(); const revision = this.revision;
    const controller = new AbortController(); this.controller = controller;
    let bytes: Uint8Array | undefined;
    try {
      if (!this.selected().length) throw new Error('Select at least one hash algorithm.');
      let blob: Blob, name: string;
      if (this.mode() === 'file') {
        const file = this.file(); if (!file) throw new Error('Choose a file before generating hashes.');
        blob = file; name = file.name;
      } else { bytes = encodeHashText(this.text()); blob = new Blob([new Uint8Array(bytes)]); name = 'Text input (UTF-8)'; }
      this.busy.set(true);
      const output = await hashBlob(blob, [...this.selected()], { signal: controller.signal, onProgress: percent => { if (revision === this.revision) this.progress.set(percent); } });
      if (revision !== this.revision) return;
      this.results.set(output); this.source.set({ name, bytes: blob.size }); this.notice.set(output.length + ' hashes generated.');
    } catch (error) {
      if (revision === this.revision) this.error.set(error instanceof Error ? error.message : 'Hash generation failed. Please try again.');
    } finally { bytes?.fill(0); if (revision === this.revision) this.busy.set(false); }
  }
  cancel(): void { this.invalidate(); this.notice.set('Hashing cancelled. No partial results were kept.'); }
  clear(): void { this.invalidate(); this.text.set(''); this.file.set(null); const input = this.document.querySelector<HTMLInputElement>('#hash-file'); if (input) input.value = ''; this.notice.set('Input and results cleared from this page.'); }
  async copy(value: string, label = 'Hash'): Promise<void> {
    const revision = this.revision; this.fallback.set('');
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) this.notice.set(label + ' copied to your clipboard.'); }
    catch { if (revision === this.revision) { this.fallback.set(value); this.notice.set('Clipboard access is unavailable. Select and copy the value below.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#hash-copy-fallback')?.select(), 0); } }
  }
  copyAll(): void { void this.copy(this.rows().map(row => row.algorithm + ': ' + row.value).join('\n'), 'All hashes'); }
}
