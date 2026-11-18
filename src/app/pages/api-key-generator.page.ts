import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { API_KEY_FORMATS, ApiKeyBatch, ApiKeyFormat, ApiKeySettings, apiKeyAnalysis, generateApiKeys } from '../core/api-key-generator';

@Component({
  selector: 'xh-api-key-generator-page', standalone: true, imports: [RouterLink],
  templateUrl: './api-key-generator.page.html', styleUrls: ['./dns-lookup.page.css', './api-key-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiKeyGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly formats = API_KEY_FORMATS;
  readonly format = signal<ApiKeyFormat>('base62');
  readonly length = signal('32');
  readonly quantity = signal('5');
  readonly prefix = signal('');
  readonly batch = signal<ApiKeyBatch | null>(null);
  readonly visible = signal(true);
  readonly notice = signal('');
  readonly error = signal('');
  readonly fallback = signal('');
  readonly copiedRow = signal<number | null>(null);
  readonly activeFormat = computed(() => this.formats.find(item => item.id === this.format())!);
  readonly settings = computed<ApiKeySettings>(() => ({ format: this.format(), length: /^\d+$/.test(this.length()) ? Number(this.length()) : NaN, quantity: /^\d+$/.test(this.quantity()) ? Number(this.quantity()) : NaN, prefix: this.prefix() }));
  readonly analysis = computed(() => { try { return apiKeyAnalysis(this.settings()); } catch { return null; } });
  readonly related = [
    { id: 'uuid-generator', icon: 'fingerprint', title: 'UUID Generator', text: 'Create v1, v4, v6 and v7 identifiers.' },
    { id: 'random-string', icon: 'shuffle', title: 'Random String Generator', text: 'Generate strings for application tasks.' },
    { id: 'password-generator', icon: 'password', title: 'Password Generator', text: 'Create passwords with character rules.' },
    { id: 'jwt-decoder', icon: 'data_object', title: 'JWT Decoder', text: 'Inspect a token’s header and payload.' },
  ];
  readonly features = [
    { icon: 'shield_lock', title: 'Browser-generated randomness', text: 'Uses Web Crypto with unbiased sampling for each random character.' },
    { icon: 'text_fields', title: 'Three character formats', text: 'Choose hexadecimal, alphanumeric or the URL-safe Base64 alphabet.' },
    { icon: 'label', title: 'Optional prefixes', text: 'Add a readable label without shortening the random part.' },
    { icon: 'bar_chart', title: 'Live entropy estimate', text: 'See random bits per key as you change the format and length.' },
  ];
  readonly questions = [
    { q: 'How long should I make the random part?', a: 'Use your application’s requirements first. For at least 128 bits of random character entropy, use 32 hexadecimal characters, 22 Base62 characters or 22 Base64url-alphabet characters. Longer random parts provide a larger search space; the meter shows the estimate for your current settings.' },
    { q: 'Where are these keys generated?', a: 'The generation code uses crypto.getRandomValues in your browser. It does not send keys to a server, put them in the page URL, or save them in browser storage. If the secure random source is unavailable, generation stops with an error. Copy and download write keys to your device only when requested.' },
    { q: 'What does the entropy meter measure?', a: 'It calculates random length × log2(alphabet size), assuming a working cryptographic random source and uniform character sampling. Prefixes contribute zero random bits. This describes the generated random string, not the security of the complete API, storage system or account.' },
    { q: 'What is a prefix for?', a: 'A label such as sk_test_ or app_ helps identify the intended environment or key type. It is public information and does not increase entropy. The length field controls the random part only, so adding a prefix increases the total number of characters.' },
    { q: 'Is Base64url output an encoding of a byte array?', a: 'Here, Base64url means uniform sampling from its 64-character alphabet: letters, digits, hyphen and underscore. The requested length is an exact character count. It is not a padded or canonical Base64 encoding of an underlying byte array. If a protocol requires decoded key bytes, follow that protocol’s encoding and length rules.' },
    { q: 'Will a generated key immediately work with a third-party API?', a: 'This tool creates random key material. It does not create an account, register credentials or grant permissions with any provider. Your own API must register and validate a key, or the service provider must issue credentials through its supported process.' },
    { q: 'How should I store and manage keys?', a: 'Keep client secrets in a suitable secrets manager and use HTTPS when transmitting them. For opaque bearer keys that your own API only needs to verify, a server-side cryptographic hash can avoid storing the original key. Restrict permissions, support revocation and rotate exposed keys. Signing keys that must be used for cryptographic operations need appropriate protected storage instead.' },
    { q: 'What happens when I hide or clear the results?', a: 'Hide masks key text on this page; it does not encrypt the keys. Clear discards the current batch from the tool and settings changes also clear older results. Neither action erases keys you already copied or downloaded. TXT and JSON downloads contain the complete keys.' },
  ];

  constructor() {
    inject(SeoService).set('API Key Generator - Base62, Hex & Base64url | XcellHost Tools', 'Generate random API key material locally with Web Crypto. Choose a format, prefix, random length and quantity, then copy or download your keys.', '/tools/api-key-generator');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.batch.set(null); this.fallback.set(''); });
  }
  private reset(): void { this.revision++; this.batch.set(null); this.notice.set(''); this.error.set(''); this.fallback.set(''); this.copiedRow.set(null); }
  changeFormat(format: ApiKeyFormat): void { this.reset(); this.format.set(format); }
  edit(field: 'length' | 'quantity' | 'prefix', event: Event): void { this.reset(); this[field].set((event.target as HTMLInputElement).value); }
  step(field: 'length' | 'quantity', delta: number): void { const max = field === 'length' ? 256 : 100, min = field === 'length' ? 16 : 1; const current = Number(this[field]()); this.reset(); this[field].set(String(Math.min(max, Math.max(min, (Number.isFinite(current) ? Math.trunc(current) : min) + delta)))); }
  preset(length: number): void { this.reset(); this.length.set(String(length)); }
  generate(event?: Event): void {
    event?.preventDefault(); this.reset();
    try { const batch = generateApiKeys(this.settings()); this.batch.set(batch); this.notice.set(batch.keys.length + ' key' + (batch.keys.length === 1 ? '' : 's') + ' generated locally.'); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'Secure key generation could not complete.'); }
  }
  clear(): void { this.reset(); }
  toggleVisible(): void { this.revision++; this.visible.update(value => !value); this.fallback.set(''); this.notice.set(this.visible() ? 'Key text is visible.' : 'Key text is hidden on this page.'); }
  display(value: string): string { return this.visible() ? value : '•'.repeat(Math.min(value.length, 36)); }
  async copy(index?: number): Promise<void> {
    const batch = this.batch(); if (!batch) return;
    const value = index === undefined ? batch.keys.join('\n') : batch.keys[index]; if (!value) return;
    const revision = this.revision;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.copiedRow.set(index ?? null); this.fallback.set(''); this.notice.set(index === undefined ? 'All keys copied to your clipboard.' : 'Key ' + (index + 1) + ' copied to your clipboard.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(value); this.notice.set('Clipboard unavailable. Select and copy the key text below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#api-key-copy-fallback')?.select(); }, 0); }
  }
  download(type: 'txt' | 'json'): void {
    const batch = this.batch(); if (!batch) return;
    const value = type === 'json' ? JSON.stringify(batch.keys, null, 2) : batch.keys.join('\n') + '\n';
    const url = URL.createObjectURL(new Blob([value], { type: type === 'json' ? 'application/json' : 'text/plain;charset=utf-8' }));
    const link = this.document.createElement('a'); link.href = url; link.download = 'api-keys-' + batch.settings.format + '-' + batch.keys.length + '.' + type; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000); this.notice.set(type.toUpperCase() + ' download started. The file contains the full keys.');
  }
}
