import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { PASSWORD_CHARACTER_TYPES, PasswordCharacterType, PasswordSettings, generatePassword, passwordSearchSpace } from '../core/password-generator';

@Component({
  selector: 'xh-password-generator-page', standalone: true, imports: [RouterLink],
  templateUrl: './password-generator.page.html', styleUrls: ['./dns-lookup.page.css', './password-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordGeneratorPage {
  private readonly document = inject(DOCUMENT);
  readonly characterTypes = PASSWORD_CHARACTER_TYPES;
  readonly length = signal('24');
  readonly selected = signal<PasswordCharacterType[]>(['lowercase', 'uppercase', 'numbers', 'symbols']);
  readonly excludeSimilar = signal(false);
  readonly password = signal('');
  readonly visible = signal(true);
  readonly error = signal('');
  readonly notice = signal('');
  readonly copying = signal(false);
  readonly settings = computed<PasswordSettings>(() => ({ length: /^\d+$/.test(this.length()) ? Number(this.length()) : NaN, types: this.selected(), excludeSimilar: this.excludeSimilar() }));
  readonly analysis = computed(() => { try { return passwordSearchSpace(this.settings()); } catch { return null; } });
  readonly display = computed(() => this.visible() ? this.password() : '\u2022'.repeat(this.password().length));
  readonly related = [
    { id: 'random-string', icon: 'shuffle', title: 'Random String Generator', text: 'Create random letters and numbers for non-password tasks.' },
    { id: 'hash-generator', icon: 'tag', title: 'Hash Generator', text: 'Calculate SHA-256, SHA-384 or SHA-512 digests.' },
    { id: 'api-key-generator', icon: 'key', title: 'API Key Generator', text: 'Generate random key material in a supported format.' },
    { id: 'uuid-generator', icon: 'fingerprint', title: 'UUID Generator', text: 'Create identifiers for applications and workflows.' },
  ];
  readonly questions = [
    { q: 'Where is the password generated?', a: 'This tool uses Web Crypto in your browser. Its generation code does not send passwords to a server or save them in browser storage. Copy places a password on your device clipboard only when you click it.' },
    { q: 'Can I use only some character types?', a: 'Yes. Choose any non-empty selection of lowercase letters, uppercase letters, numbers and symbols. Every generated password contains at least one character from each selected group. These options help match a destination site\'s accepted characters.' },
    { q: 'What does the strength meter measure?', a: 'It estimates the size of the random search space for these exact generation settings, including the requirement to use every selected group. It is not a crack-time forecast or a test for leaked passwords. Reuse, phishing and the destination service\'s protections also affect account security.' },
    { q: 'Should I reuse a generated password?', a: 'Use a different password for each account and keep it in a trusted password manager. A long random password can still be exposed by reuse or phishing. Enable multi-factor authentication or use a passkey where the service supports it.' },
    { q: 'What happens when I change a setting or clear the result?', a: 'Changing a setting creates a fresh password when the options are valid. Clear removes the current result from this page; it does not erase anything already copied to your clipboard or saved elsewhere. Leaving this page discards the tool\'s current result.' },
  ];
  constructor() {
    inject(SeoService).set('Password Generator - Secure Random Passwords | XcellHost', 'Generate random passwords locally with Web Crypto. Customize length, character types and look-alike exclusions, then copy the result.', '/tools/password-generator');
    afterNextRender(() => this.generate());
    inject(DestroyRef).onDestroy(() => this.password.set(''));
  }
  generate(event?: Event): void {
    event?.preventDefault(); this.password.set(''); this.error.set(''); this.notice.set('');
    try { this.password.set(generatePassword(this.settings())); this.notice.set('New password ready: ' + this.settings().length + ' characters.'); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'Secure password generation failed. Please try again.'); }
  }
  changeLength(event: Event): void { this.length.set((event.target as HTMLInputElement).value); this.generate(); }
  preset(length: number): void { this.length.set(String(length)); this.generate(); }
  toggleType(type: PasswordCharacterType, event: Event): void { const checked = (event.target as HTMLInputElement).checked; this.selected.update(types => checked ? [...new Set([...types, type])] : types.filter(value => value !== type)); this.generate(); }
  toggleSimilar(event: Event): void { this.excludeSimilar.set((event.target as HTMLInputElement).checked); this.generate(); }
  toggleVisible(): void { this.visible.update(value => !value); }
  selectPassword(event: Event): void { if (this.visible()) (event.target as HTMLTextAreaElement).select(); }
  clear(): void { this.password.set(''); this.notice.set('Password cleared from this page.'); this.error.set(''); }
  async copy(): Promise<void> {
    const value = this.password(); if (!value || this.copying()) return;
    this.copying.set(true);
    try { await navigator.clipboard.writeText(value); if (this.password() === value) this.notice.set('Password copied to your clipboard.'); }
    catch { if (this.password() === value) { this.visible.set(true); this.notice.set('Clipboard access is unavailable. Select the password and copy it manually.'); setTimeout(() => this.document.querySelector<HTMLTextAreaElement>('#pw-result')?.select(), 0); } }
    finally { this.copying.set(false); }
  }
}
