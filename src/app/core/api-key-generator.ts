export const API_KEY_FORMATS = [
  { id: 'base62', name: 'Base62 (alphanumeric)', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', description: 'Letters and numbers only. Useful when punctuation is not accepted.' },
  { id: 'hex', name: 'Hexadecimal', alphabet: '0123456789abcdef', description: 'Lowercase hexadecimal characters, from 0–9 and a–f.' },
  { id: 'base64url', name: 'Base64url alphabet', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', description: 'URL-safe letters, numbers, hyphens and underscores. No padding.' },
] as const;
export type ApiKeyFormat = typeof API_KEY_FORMATS[number]['id'];
export interface ApiKeySettings { format: ApiKeyFormat; length: number; quantity: number; prefix: string; }
export interface ApiKeyBatch { settings: ApiKeySettings; keys: string[]; generatedAt: string; }
type RandomSource = (size: number) => Uint8Array;

export function apiKeyAnalysis(settings: ApiKeySettings) {
  const format = API_KEY_FORMATS.find(item => item.id === settings.format);
  if (!format) throw new Error('Choose Base62, hexadecimal or the Base64url alphabet.');
  if (!Number.isInteger(settings.length) || settings.length < 16 || settings.length > 256) throw new Error('Choose a whole random length from 16 to 256 characters.');
  if (!Number.isInteger(settings.quantity) || settings.quantity < 1 || settings.quantity > 100) throw new Error('Choose a whole quantity from 1 to 100.');
  if (typeof settings.prefix !== 'string' || !/^[A-Za-z0-9_-]{0,32}$/.test(settings.prefix)) throw new Error('Use up to 32 letters, numbers, underscores or hyphens for the prefix.');
  const bits = settings.length * Math.log2(format.alphabet.length);
  return { bits, alphabetSize: format.alphabet.length, totalLength: settings.length + settings.prefix.length, label: bits < 128 ? 'Below 128 bits' : bits < 256 ? '128+ random bits' : '256+ random bits', percent: Math.min(100, bits / 256 * 100) };
}

/** Samples characters uniformly; prefixes add no randomness. Nothing is persisted or transmitted. */
export function generateApiKeys(settings: ApiKeySettings, random?: RandomSource): ApiKeyBatch {
  apiKeyAnalysis(settings);
  const source: RandomSource = random || (size => {
    if (!globalThis.crypto?.getRandomValues) throw new Error('Secure browser randomness is unavailable. Use a current browser and try again.');
    return globalThis.crypto.getRandomValues(new Uint8Array(size));
  });
  const alphabet = API_KEY_FORMATS.find(item => item.id === settings.format)!.alphabet;
  const cutoff = 256 - 256 % alphabet.length;
  const keys: string[] = [], seen = new Set<string>();
  let bytes: Uint8Array = new Uint8Array(0), index = 0, draws = 0;
  const limit = settings.quantity * settings.length * 64 + 4096;
  const character = (): string => {
    while (draws++ < limit) {
      if (index === bytes.length) {
        bytes.fill(0);
        bytes = source(256);
        if (!(bytes instanceof Uint8Array) || bytes.length !== 256) throw new Error('The random source returned an invalid byte sequence.');
        index = 0;
      }
      const byte = bytes[index++];
      if (byte < cutoff) return alphabet[byte % alphabet.length];
    }
    throw new Error('Secure random generation could not complete. Please try again.');
  };
  try {
    for (let attempt = 0; keys.length < settings.quantity && attempt < settings.quantity * 8 + 16; attempt++) {
      let value = settings.prefix;
      for (let i = 0; i < settings.length; i++) value += character();
      if (!seen.has(value)) { seen.add(value); keys.push(value); }
    }
    if (keys.length !== settings.quantity) throw new Error('Repeated random values prevented a complete batch. Try again with a working secure random source.');
    return { settings: { ...settings }, keys, generatedAt: new Date().toISOString() };
  } finally { if (bytes instanceof Uint8Array) bytes.fill(0); }
}
