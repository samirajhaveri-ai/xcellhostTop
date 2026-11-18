export const RANDOM_STRING_GROUPS = [
  { id: 'uppercase', label: 'Uppercase letters', characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', sample: 'A–Z', icon: 'uppercase' },
  { id: 'lowercase', label: 'Lowercase letters', characters: 'abcdefghijklmnopqrstuvwxyz', sample: 'a–z', icon: 'lowercase' },
  { id: 'numbers', label: 'Numbers', characters: '0123456789', sample: '0–9', icon: 'pin' },
  { id: 'symbols', label: 'Symbols', characters: '!@#$%^&*()_+-=[]{}|;:,.<>?/~`\\\'"', sample: '! @ # $ % &', icon: 'asterisk' },
] as const;
export type RandomStringGroup = typeof RANDOM_STRING_GROUPS[number]['id'];
export interface RandomStringSettings { length: number; quantity: number; groups: RandomStringGroup[]; custom: string; customOnly: boolean; excludeAmbiguous: boolean; }
export interface RandomStringBatch { settings: RandomStringSettings; values: string[]; generatedAt: string; }
export const RANDOM_STRING_AMBIGUOUS = '0O1lI';
export const RANDOM_STRING_PRESETS = [
  { id: 'password', title: 'Password', icon: 'password', length: 20, groups: ['uppercase','lowercase','numbers','symbols'], custom: '', customOnly: false },
  { id: 'pin', title: 'PIN Code', icon: 'pin', length: 6, groups: ['numbers'], custom: '', customOnly: false },
  { id: 'token', title: 'Token', icon: 'key', length: 32, groups: [], custom: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', customOnly: true },
  { id: 'hex', title: 'Hex String', icon: 'tag', length: 32, groups: [], custom: '0123456789abcdef', customOnly: true },
  { id: 'base64', title: 'Base64', icon: 'data_object', length: 32, groups: [], custom: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', customOnly: true },
] as const;

export function randomStringAnalysis(settings: RandomStringSettings) {
  if (!Number.isInteger(settings.length) || settings.length < 1 || settings.length > 512) throw new Error('Choose a whole length from 1 to 512 characters.');
  if (!Number.isInteger(settings.quantity) || settings.quantity < 1 || settings.quantity > 100) throw new Error('Choose a whole quantity from 1 to 100.');
  if (!Array.isArray(settings.groups) || settings.groups.some(group => !RANDOM_STRING_GROUPS.some(item => item.id === group))) throw new Error('Choose supported character groups.');
  if (typeof settings.customOnly !== 'boolean' || typeof settings.excludeAmbiguous !== 'boolean' || typeof settings.custom !== 'string') throw new Error('Use valid custom-character and exclusion options.');
  if (Array.from(settings.custom).length > 256) throw new Error('Enter up to 256 custom characters.');
  if (/[\p{Cc}\p{Cs}]/u.test(settings.custom)) throw new Error('Custom characters cannot include tabs, line breaks, control characters or incomplete Unicode characters.');
  const base = settings.customOnly ? '' : RANDOM_STRING_GROUPS.filter(item => settings.groups.includes(item.id)).map(item => item.characters).join('');
  const alphabet = [...new Set(Array.from(base + settings.custom))].filter(character => !settings.excludeAmbiguous || !RANDOM_STRING_AMBIGUOUS.includes(character));
  if (!alphabet.length) throw new Error(settings.customOnly ? 'Enter at least one custom character that remains after exclusions.' : 'Choose a character group or enter custom characters that remain after exclusions.');
  const bits = settings.length * Math.log2(alphabet.length);
  return { alphabet, alphabetSize: alphabet.length, bits, percent: Math.min(100, bits / 128 * 100) };
}

/** Uniform sampling over deduplicated Unicode code points, with replacement. */
export function generateRandomStrings(settings: RandomStringSettings, random?: (size: number) => Uint8Array): RandomStringBatch {
  const { alphabet } = randomStringAnalysis(settings), cutoff = 65536 - 65536 % alphabet.length;
  const source = random || ((size: number) => {
    if (!globalThis.crypto?.getRandomValues) throw new Error('Secure browser randomness is unavailable. Use a current browser and try again.');
    return globalThis.crypto.getRandomValues(new Uint8Array(size));
  });
  let bytes: Uint8Array = new Uint8Array(0), index = 0, draws = 0;
  const limit = settings.length * settings.quantity * 32 + 4096;
  const next = (): string => {
    while (draws++ < limit) {
      if (index === bytes.length) {
        bytes.fill(0); bytes = source(512);
        if (!(bytes instanceof Uint8Array) || bytes.length !== 512) throw new Error('The random source returned an invalid byte sequence.');
        index = 0;
      }
      const value = (bytes[index++] << 8) | bytes[index++];
      if (value < cutoff) return alphabet[value % alphabet.length];
    }
    throw new Error('Secure random generation could not complete. Please try again.');
  };
  try {
    const values: string[] = [];
    for (let n = 0; n < settings.quantity; n++) { let value = ''; for (let i = 0; i < settings.length; i++) value += next(); values.push(value); }
    return { settings: { ...settings, groups: [...settings.groups] }, values, generatedAt: new Date().toISOString() };
  } finally { if (bytes instanceof Uint8Array) bytes.fill(0); }
}
