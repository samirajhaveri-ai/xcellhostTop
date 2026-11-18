import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { RANDOM_STRING_GROUPS, RANDOM_STRING_PRESETS, RandomStringBatch, RandomStringGroup, RandomStringSettings, generateRandomStrings, randomStringAnalysis } from '../core/random-string';

@Component({
  selector: 'xh-random-string-page', standalone: true, imports: [RouterLink],
  templateUrl: './random-string.page.html', styleUrls: ['./dns-lookup.page.css', './random-string.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomStringPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly groups = RANDOM_STRING_GROUPS;
  readonly presets = RANDOM_STRING_PRESETS;
  readonly selected = signal<RandomStringGroup[]>(['uppercase','lowercase','numbers']);
  readonly length = signal('16');
  readonly quantity = signal('1');
  readonly custom = signal('');
  readonly customOnly = signal(false);
  readonly excludeAmbiguous = signal(false);
  readonly activePreset = signal('');
  readonly batch = signal<RandomStringBatch | null>(null);
  readonly visible = signal(true);
  readonly notice = signal('');
  readonly error = signal('');
  readonly fallback = signal('');
  readonly copiedRow = signal<number | null>(null);
  readonly settings = computed<RandomStringSettings>(() => ({ length: /^\d+$/.test(this.length()) ? Number(this.length()) : NaN, quantity: /^\d+$/.test(this.quantity()) ? Number(this.quantity()) : NaN, groups: this.selected(), custom: this.custom(), customOnly: this.customOnly(), excludeAmbiguous: this.excludeAmbiguous() }));
  readonly analysis = computed(() => { try { return randomStringAnalysis(this.settings()); } catch { return null; } });
  readonly alphabetPreview = computed(() => this.analysis()?.alphabet.slice(0,80).map(c => c === ' ' ? '␠' : c).join('') || '');
  readonly related = [
    { id: 'password-generator', icon: 'password', title: 'Password Generator', text: 'Generate passwords with character-group requirements.' },
    { id: 'uuid-generator', icon: 'fingerprint', title: 'UUID Generator', text: 'Create v1, v4, v6 and v7 identifiers.' },
    { id: 'hash-generator', icon: 'tag', title: 'Hash Generator', text: 'Calculate text and file digests.' },
    { id: 'api-key-generator', icon: 'key', title: 'API Key Generator', text: 'Create prefixed random key material.' },
  ];
  readonly features = [
    { icon: 'shield_lock', title: 'Web Crypto randomness', text: 'Samples characters uniformly using the browser’s secure random source.' },
    { icon: 'text_fields', title: 'Your own character pool', text: 'Combine letters, digits, symbols and custom Unicode characters.' },
    { icon: 'layers', title: 'Generate in bulk', text: 'Create up to 100 strings, each from 1 to 512 characters long.' },
    { icon: 'tune', title: 'Ready-to-adjust presets', text: 'Start from password, PIN, token, hex or Base64-alphabet settings.' },
  ];
  readonly questions = [
    { q: 'Where are the random strings generated?', a: 'The generation code runs in your browser using crypto.getRandomValues. It does not send strings to a server, include them in the URL or save them in browser storage. Generation stops if the secure random source is unavailable. Copy and download write results to your device only when requested.' },
    { q: 'Does every result contain each selected character group?', a: 'No. Selected groups contribute characters to one combined pool, and each position is sampled independently from that pool. A short string may contain only some selected types. Use the dedicated Password Generator when you need at least one character from every selected group.' },
    { q: 'How are custom characters handled?', a: 'Custom characters are added to the selected groups unless “Custom characters only” is enabled. Duplicates are removed so repeating a character does not increase its probability. Ordinary spaces are allowed; tabs, line breaks, control characters and incomplete Unicode characters are rejected. Exclusions apply to the final combined pool.' },
    { q: 'What does the length mean for emoji or other Unicode text?', a: 'Length counts Unicode code points, not UTF-16 code units or complete visible glyphs. A single emoji code point counts as one; an emoji sequence or an accented character built from several code points can count as more. Custom sequences are sampled as separate code points, without Unicode normalization.' },
    { q: 'What does excluding ambiguous characters remove?', a: 'This option removes exactly 0, O, 1, l and I from the final pool, including custom characters. The alphabet preview and random-bit estimate update accordingly. If exclusions leave no characters, generation shows an error.' },
    { q: 'How is the random search space estimated?', a: 'For a pool of N distinct characters and length L, the estimate is L × log2(N) bits, assuming a working secure random source. A 32-character hex string has 128 bits; 22 characters from all 62 letters and digits have about 131 bits. A one-character pool has zero random bits. The estimate is not a crack-time forecast.' },
    { q: 'Can generated strings repeat?', a: 'Yes. Sampling is independent and allows repeats both within a string and across the batch. Short lengths or small character pools make duplicate results more likely. This tool does not promise unique identifiers; enforce uniqueness in your application when it matters.' },
    { q: 'What do the Token and Base64 presets generate?', a: 'Token uses a URL-safe 64-character pool. Base64 uses letters, digits, plus and slash. Both sample characters directly to the requested length; they are not padded or canonical encodings of an underlying byte array. Follow the destination protocol’s requirements if it expects encoded bytes. Hide masks results on this page; downloads still contain their complete text.' },
  ];
  constructor() {
    inject(SeoService).set('Random String Generator - Custom Characters & Bulk Output | XcellHost Tools', 'Generate random strings locally with Web Crypto. Choose presets, character groups, custom characters and exclusions, then copy or export up to 100 strings.', '/tools/random-string');
    inject(DestroyRef).onDestroy(() => { this.revision++; this.batch.set(null); this.fallback.set(''); });
  }
  private reset(): void { this.revision++; this.batch.set(null); this.notice.set(''); this.error.set(''); this.fallback.set(''); this.copiedRow.set(null); }
  private changed(): void { this.reset(); this.activePreset.set(''); }
  edit(field: 'length' | 'quantity' | 'custom', event: Event): void { this.changed(); this[field].set((event.target as HTMLInputElement).value); }
  toggleGroup(group: RandomStringGroup, event: Event): void { this.changed(); const checked = (event.target as HTMLInputElement).checked; this.selected.update(groups => checked ? [...new Set([...groups,group])] : groups.filter(item => item !== group)); }
  toggle(field: 'customOnly' | 'excludeAmbiguous', event: Event): void { this.changed(); this[field].set((event.target as HTMLInputElement).checked); }
  setLength(length: number): void { this.changed(); this.length.set(String(length)); }
  preset(id: string): void {
    const preset = this.presets.find(item => item.id === id); if (!preset) return;
    this.reset(); this.activePreset.set(id); this.length.set(String(preset.length)); this.selected.set([...preset.groups]); this.custom.set(preset.custom); this.customOnly.set(preset.customOnly); this.excludeAmbiguous.set(false);
  }
  generate(event?: Event): void {
    event?.preventDefault(); this.reset();
    try { const batch = generateRandomStrings(this.settings()); this.batch.set(batch); this.notice.set(batch.values.length + ' random string' + (batch.values.length === 1 ? '' : 's') + ' generated locally.'); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'Secure generation could not complete.'); }
  }
  clear(): void { this.reset(); }
  display(value: string): string { return this.visible() ? value : '•'.repeat(Math.min(Array.from(value).length,36)); }
  toggleVisible(): void { this.revision++; this.visible.update(value => !value); this.fallback.set(''); this.notice.set(this.visible() ? 'String text is visible.' : 'String text is hidden on this page.'); }
  async copy(index?: number): Promise<void> {
    const batch = this.batch(); if (!batch) return;
    const value = index === undefined ? batch.values.join('\n') : batch.values[index]; if (!value) return;
    const revision = this.revision;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.copiedRow.set(index ?? null); this.fallback.set(''); this.notice.set(index === undefined ? 'All strings copied to your clipboard.' : 'String ' + (index+1) + ' copied to your clipboard.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(value); this.notice.set('Clipboard unavailable. Select and copy the complete text below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#rs-copy-fallback')?.select(); },0); }
  }
  download(type: 'txt' | 'json'): void {
    const batch = this.batch(); if (!batch) return;
    const value = type === 'json' ? JSON.stringify(batch.values,null,2) : batch.values.join('\n')+'\n';
    const url = URL.createObjectURL(new Blob([value],{type: type === 'json' ? 'application/json' : 'text/plain;charset=utf-8'}));
    const link = this.document.createElement('a'); link.href = url; link.download = 'random-strings-' + batch.values.length + '.' + type; link.click(); setTimeout(() => URL.revokeObjectURL(url),1000);
    this.notice.set(type.toUpperCase()+' download started. The file contains the complete strings.');
  }
}
