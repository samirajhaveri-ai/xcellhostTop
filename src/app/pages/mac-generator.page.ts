import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { MAC_FORMATS, MAC_VENDORS, MacBatch, MacFormat, MacSettings, MacVendor, formatMac, generateMacAddresses, macDetails } from '../core/mac-generator';

@Component({
  selector: 'xh-mac-generator-page', standalone: true, imports: [RouterLink],
  templateUrl: './mac-generator.page.html', styleUrls: ['./dns-lookup.page.css','./mac-generator.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MacGeneratorPage {
  private readonly document = inject(DOCUMENT);
  private revision = 0;
  readonly formats = MAC_FORMATS;
  readonly vendors = MAC_VENDORS;
  readonly mode = signal<'random'|'vendor'>('random');
  readonly vendor = signal<MacVendor>('auto');
  readonly quantity = signal('5');
  readonly format = signal<MacFormat>('colon');
  readonly uppercase = signal(true);
  readonly batch = signal<MacBatch|null>(null);
  readonly error = signal('');
  readonly notice = signal('');
  readonly fallback = signal('');
  readonly copiedRow = signal<number|null>(null);
  readonly settings = computed<MacSettings>(() => ({ mode: this.mode(), vendor: this.vendor(), quantity: /^\d+$/.test(this.quantity()) ? Number(this.quantity()) : NaN }));
  readonly example = computed(() => formatMac('021a2b3c4d5e',this.format(),this.uppercase()));
  readonly values = computed(() => this.batch()?.addresses.map(address => formatMac(address,this.format(),this.uppercase())) || []);
  readonly details = computed(() => { const first = this.batch()?.addresses[0]; return first ? macDetails(first) : null; });
  readonly related = [
    { id: 'uuid-generator', icon: 'fingerprint', title: 'UUID Generator', text: 'Create standard identifiers in four versions.' },
    { id: 'api-key-generator', icon: 'key', title: 'API Key Generator', text: 'Generate random key material with a prefix.' },
    { id: 'random-string', icon: 'shuffle', title: 'Random String Generator', text: 'Choose character pools, lengths and presets.' },
    { id: 'subnet-calculator', icon: 'lan', title: 'Subnet Calculator', text: 'Inspect IP network ranges and subnet details.' },
  ];
  readonly features = [
    { icon: 'settings_ethernet', title: 'Local unicast by default', text: 'Random mode sets the local bit and clears the multicast bit.' },
    { icon: 'dns', title: 'Vendor-style samples', text: 'Use VMware-style or Hyper-V-style prefixes for lab data.' },
    { icon: 'text_fields', title: 'Four display formats', text: 'Switch separators and case without changing the generated addresses.' },
    { icon: 'layers', title: 'Batches up to 200', text: 'Create a list with duplicate checking within the current batch.' },
  ];
  readonly questions = [
    { q: 'Can these addresses conflict with an existing device?', a: 'Yes. Random mode uses the locally administered address space, which distinguishes it from universally assigned addresses, but another software-assigned interface can still use the same value. This tool removes duplicates within its current batch only. It does not scan your network, reserve addresses or coordinate separate browsers and batches.' },
    { q: 'What does locally administered unicast mean?', a: 'In the first octet, the lowest bit is the group bit: zero means unicast. The next bit is the local bit: one indicates local administration. Random mode fixes those two bits to 0 and 1 respectively, leaving 46 random bits in the 48-bit address.' },
    { q: 'How does vendor-style mode work?', a: 'It combines a supported sample prefix with random trailing bytes. Mixed mode chooses either VMware-style 00:50:56 or Hyper-V-style 00:15:5D. VMware-style samples limit the fourth byte to 00–3F, following the documented manual-address range. These are sample patterns, not newly registered vendor allocations or proof of a device’s manufacturer.' },
    { q: 'Which separator should I use?', a: 'Choose the notation your destination expects: six byte pairs with colons or hyphens, three groups of four hex digits with dots, or all 12 digits together. Uppercase and lowercase represent the same bytes. Changing these display options preserves the current addresses and affects copy and downloads.' },
    { q: 'Does generating an address change my network adapter?', a: 'No. This page creates text values only. It does not read a hardware address, modify your adapter or configure a virtual machine. Your operating system or hypervisor has its own supported configuration process and may restrict permitted MAC ranges.' },
    { q: 'Are vendor-style samples suitable for production provisioning?', a: 'A sample prefix alone does not make an address valid for every platform or available on a network. Use your platform’s managed address pools or approved static allocation process. Check uniqueness and the destination’s restrictions before assigning any generated value.' },
    { q: 'Where is the randomness generated?', a: 'The generation code uses crypto.getRandomValues in your browser and stops if that source is unavailable. It does not send addresses to a server or store generated batches in browser storage. Copy and download write to your device when requested.' },
    { q: 'What is included in downloads?', a: 'TXT has one formatted address per line. JSON is an array of formatted address strings. Both use the separator and letter case currently shown. Clear discards this page’s batch; it does not remove files or clipboard contents you already saved.' },
  ];
  constructor() { inject(SeoService).set('MAC Address Generator - Random & Vendor-style | XcellHost Tools','Generate local unicast or vendor-style MAC addresses in your browser. Choose case and separators, create up to 200 addresses, then copy or export TXT and JSON.','/tools/mac-generator'); }
  private presentationChanged(): void { this.revision++; this.notice.set(''); this.fallback.set(''); this.copiedRow.set(null); }
  private reset(): void { this.presentationChanged(); this.batch.set(null); this.error.set(''); }
  changeMode(mode: 'random'|'vendor'): void { this.reset(); this.mode.set(mode); }
  changeVendor(event: Event): void { const value = (event.target as HTMLSelectElement).value as MacVendor; if (value !== 'auto' && !this.vendors.some(item => item.id === value)) return; this.reset(); this.vendor.set(value); }
  editQuantity(event: Event): void { this.reset(); this.quantity.set((event.target as HTMLInputElement).value); }
  step(delta: number): void { const current = Number(this.quantity()); this.reset(); this.quantity.set(String(Math.min(200,Math.max(1,(Number.isFinite(current) ? Math.trunc(current) : 1)+delta)))); }
  presetQuantity(quantity: number): void { this.reset(); this.quantity.set(String(quantity)); }
  changeFormat(format: MacFormat): void { this.presentationChanged(); this.format.set(format); }
  toggleCase(event: Event): void { this.presentationChanged(); this.uppercase.set((event.target as HTMLInputElement).checked); }
  generate(event?: Event): void {
    event?.preventDefault(); this.reset();
    try { const batch = generateMacAddresses(this.settings()); this.batch.set(batch); this.notice.set(batch.addresses.length+' MAC address'+(batch.addresses.length === 1 ? '' : 'es')+' generated locally.'); }
    catch (error) { this.error.set(error instanceof Error ? error.message : 'MAC address generation could not complete.'); }
  }
  clear(): void { this.reset(); }
  async copy(index?: number): Promise<void> {
    const values = this.values(), value = index === undefined ? values.join('\n') : values[index]; if (!value) return;
    const revision = this.revision;
    try { await navigator.clipboard.writeText(value); if (revision === this.revision) { this.copiedRow.set(index ?? null); this.fallback.set(''); this.notice.set(index === undefined ? 'All addresses copied to your clipboard.' : 'Address '+(index+1)+' copied to your clipboard.'); } }
    catch { if (revision !== this.revision) return; this.fallback.set(value); this.notice.set('Clipboard unavailable. Select and copy the address text below.'); setTimeout(() => { if (revision === this.revision) this.document.querySelector<HTMLTextAreaElement>('#mac-copy-fallback')?.select(); },0); }
  }
  download(type: 'txt'|'json'): void {
    const batch = this.batch(); if (!batch) return;
    const value = type === 'json' ? JSON.stringify(this.values(),null,2) : this.values().join('\n')+'\n';
    const url = URL.createObjectURL(new Blob([value],{type: type === 'json' ? 'application/json' : 'text/plain;charset=utf-8'}));
    const link = this.document.createElement('a'); link.href = url; link.download = 'mac-addresses-'+batch.addresses.length+'.'+type; link.click(); setTimeout(() => URL.revokeObjectURL(url),1000); this.notice.set(type.toUpperCase()+' download started.');
  }
}
