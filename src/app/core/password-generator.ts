export const PASSWORD_CHARACTER_TYPES = [
  { id: 'lowercase', label: 'Lowercase', example: 'abcdefghijklmnopqrstuvwxyz', characters: 'abcdefghijklmnopqrstuvwxyz', icon: 'lowercase' },
  { id: 'uppercase', label: 'Uppercase', example: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', icon: 'uppercase' },
  { id: 'numbers', label: 'Numbers', example: '0123456789', characters: '0123456789', icon: 'pin' },
  { id: 'symbols', label: 'Symbols', example: '!@#$%^&*()-_=+[]{}', characters: '!@#$%^&*()-_=+[]{};:,.?/~', icon: 'asterisk' },
] as const;
export type PasswordCharacterType = typeof PASSWORD_CHARACTER_TYPES[number]['id'];
export interface PasswordSettings { length: number; types: PasswordCharacterType[]; excludeSimilar: boolean; }
export const PASSWORD_SIMILAR = '0Oo1IlL';

export function passwordAlphabet(settings: PasswordSettings): string[] {
  if (!Number.isInteger(settings.length) || settings.length < 4 || settings.length > 128) throw new Error('Choose a whole password length from 4 to 128 characters.');
  if (!Array.isArray(settings.types) || !settings.types.length) throw new Error('Select at least one character type.');
  if (typeof settings.excludeSimilar !== 'boolean' || settings.types.some(type => !PASSWORD_CHARACTER_TYPES.some(item => item.id === type))) throw new Error('Choose supported character types and exclusion settings.');
  const selected = new Set(settings.types);
  return PASSWORD_CHARACTER_TYPES.filter(type => selected.has(type.id)).map(type => settings.excludeSimilar ? [...type.characters].filter(character => !PASSWORD_SIMILAR.includes(character)).join('') : type.characters);
}

/** Uniform samples over the selected alphabet, conditioned on covering every selected group. */
export function generatePassword(settings: PasswordSettings): string {
  const groups = passwordAlphabet(settings), alphabet = groups.join('');
  const source = globalThis.crypto;
  if (!source?.getRandomValues) throw new Error('Secure browser randomness is unavailable. Use a current browser and try again.');
  const cutoff = 256 - 256 % alphabet.length, bytes = new Uint8Array(128);
  let index = bytes.length, draws = 0;
  const nextCharacter = (): string => {
    while (draws++ < 262144) {
      if (index === bytes.length) { source.getRandomValues(bytes); index = 0; }
      const value = bytes[index++];
      if (value < cutoff) return alphabet[value % alphabet.length];
    }
    throw new Error('Secure generation could not complete. Please try again.');
  };
  try {
    for (let attempt = 0; attempt < 1024; attempt++) {
      let value = ''; for (let i = 0; i < settings.length; i++) value += nextCharacter();
      if (groups.every(group => [...value].some(character => group.includes(character)))) return value;
    }
    throw new Error('Secure generation could not meet the selected character rules. Please try again.');
  } finally { bytes.fill(0); }
}

/** Log2 of the number of permitted generated strings, using inclusion-exclusion. */
export function passwordSearchSpace(settings: PasswordSettings) {
  const groups = passwordAlphabet(settings), alphabetSize = groups.reduce((sum, group) => sum + group.length, 0);
  let count = 0;
  for (let mask = 0; mask < 1 << groups.length; mask++) {
    let removed = 0, parity = 0;
    groups.forEach((group, index) => { if (mask & 1 << index) { removed += group.length; parity++; } });
    count += (parity % 2 ? -1 : 1) * Math.pow(alphabetSize - removed, settings.length);
  }
  const bits = Math.log2(count);
  const level = bits < 40 ? 'limited' : bits < 60 ? 'moderate' : bits < 80 ? 'strong' : 'very-strong';
  const label = bits < 40 ? 'Limited random search space' : bits < 60 ? 'Moderate random search space' : bits < 80 ? 'Strong random search space' : 'Very strong random search space';
  return { bits, level, label, alphabetSize, groupCount: groups.length, percent: Math.min(100, Math.max(4, bits / 128 * 100)) };
}
