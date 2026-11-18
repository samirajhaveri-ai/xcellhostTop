export const MAC_FORMATS = [
  { id: 'colon', name: 'Colon-separated', example: '02:1A:2B:3C:4D:5E', symbol: ':' },
  { id: 'hyphen', name: 'Hyphen-separated', example: '02-1A-2B-3C-4D-5E', symbol: '–' },
  { id: 'dot', name: 'Cisco dot notation', example: '021A.2B3C.4D5E', symbol: '.' },
  { id: 'none', name: 'No separator', example: '021A2B3C4D5E', symbol: 'None' },
] as const;
export const MAC_VENDORS = [
  { id: 'vmware', name: 'VMware-style', prefix: '00:50:56', bytes: [0x00,0x50,0x56] },
  { id: 'hyperv', name: 'Hyper-V-style', prefix: '00:15:5D', bytes: [0x00,0x15,0x5d] },
] as const;
export type MacFormat = typeof MAC_FORMATS[number]['id'];
export type MacVendor = 'auto' | typeof MAC_VENDORS[number]['id'];
export interface MacSettings { mode: 'random' | 'vendor'; vendor: MacVendor; quantity: number; }
export interface MacBatch { settings: MacSettings; addresses: string[]; generatedAt: string; }

export function validateMacSettings(settings: MacSettings): void {
  if (!['random','vendor'].includes(settings.mode)) throw new Error('Choose local random or vendor-style address generation.');
  if (settings.vendor !== 'auto' && !MAC_VENDORS.some(vendor => vendor.id === settings.vendor)) throw new Error('Choose a supported vendor-style prefix.');
  if (!Number.isInteger(settings.quantity) || settings.quantity < 1 || settings.quantity > 200) throw new Error('Choose a whole quantity from 1 to 200 addresses.');
}
export function formatMac(address: string, format: MacFormat, uppercase: boolean): string {
  if (!/^[a-f\d]{12}$/i.test(address)) throw new Error('A MAC address must contain exactly 12 hexadecimal digits.');
  if (!MAC_FORMATS.some(item => item.id === format) || typeof uppercase !== 'boolean') throw new Error('Choose a supported separator and letter case.');
  const normalized = uppercase ? address.toUpperCase() : address.toLowerCase();
  return format === 'none' ? normalized : format === 'dot' ? normalized.match(/.{4}/g)!.join('.') : normalized.match(/../g)!.join(format === 'colon' ? ':' : '-');
}
export function macDetails(address: string) {
  const normalized = formatMac(address,'none',false), first = Number.parseInt(normalized.slice(0,2),16);
  const vendor = MAC_VENDORS.find(item => item.prefix.replaceAll(':','').toLowerCase() === normalized.slice(0,6));
  return { firstOctet: first.toString(16).padStart(2,'0').toUpperCase(), binary: first.toString(2).padStart(8,'0'), unicast: (first & 1) === 0, local: (first & 2) !== 0, prefix: formatMac(normalized,'colon',true).slice(0,8), prefixLabel: vendor?.name || ((first & 2) !== 0 ? 'Locally administered prefix' : 'No sample prefix match') };
}
/** Produces distinct canonical values within a batch; does not inspect a network or reserve addresses. */
export function generateMacAddresses(settings: MacSettings, random?: (size: number) => Uint8Array): MacBatch {
  validateMacSettings(settings);
  const source = random || ((size: number) => {
    if (!globalThis.crypto?.getRandomValues) throw new Error('Secure browser randomness is unavailable. Use a current browser and try again.');
    return globalThis.crypto.getRandomValues(new Uint8Array(size));
  });
  const addresses: string[] = [], seen = new Set<string>();
  for (let attempts = 0; addresses.length < settings.quantity && attempts < settings.quantity * 16 + 32; attempts++) {
    const draw = source(6);
    if (!(draw instanceof Uint8Array) || draw.length !== 6) throw new Error('The random source returned an invalid byte sequence.');
    const bytes = draw.slice();
    if (settings.mode === 'random') bytes[0] = (bytes[0] & 0xfc) | 0x02;
    else {
      const vendor = settings.vendor === 'auto' ? MAC_VENDORS[bytes[0] & 1] : MAC_VENDORS.find(item => item.id === settings.vendor)!;
      bytes.set(vendor.bytes,0);
      // Keep VMware-style samples in the documented manual-address suffix range.
      if (vendor.id === 'vmware') bytes[3] &= 0x3f;
    }
    const address = Array.from(bytes,byte => byte.toString(16).padStart(2,'0')).join('');
    if (!seen.has(address)) { seen.add(address); addresses.push(address); }
  }
  if (addresses.length !== settings.quantity) throw new Error('Repeated random addresses prevented a complete batch. Try again with a working secure random source.');
  return { settings: { ...settings }, addresses, generatedAt: new Date().toISOString() };
}
