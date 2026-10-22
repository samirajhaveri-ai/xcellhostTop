import { PhoneCountry } from '../data/phone-countries';

/** Keep explicit international numbers; otherwise join the chosen dial code
 * with the national number, excluding its domestic trunk prefix. */
export function internationalPhone(raw: string, country: PhoneCountry): string {
  let number = raw.trim().replace(/[\s().-]/g, '').replace(/^00/, '+');
  if (number.startsWith('+')) return number;
  // Retain support for Indian numbers pasted with 91 but without a leading +.
  if (country.iso2 === 'in' && /^91\d{10}$/.test(number)) return '+' + number;
  if (country.nationalPrefix && number.startsWith(country.nationalPrefix)) {
    number = number.slice(country.nationalPrefix.length);
  }
  return country.dialCode + number;
}
