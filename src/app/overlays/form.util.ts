import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

/**
 * Bits every lead-capture overlay repeats: the validators the original site
 * used, the Zoho organisation id its payloads carried, and the mapping from a
 * failed control to the exact error sentence the original printed.
 */

/** The email shape the original accepted, character for character. */
export const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

/** Every original payload carried the same Zoho Books organisation id. */
export const ZOHO_ORG_ID = '60028262636';

/** `required` + the original email regex, in the order the original tested them. */
export const EMAIL_VALIDATORS = [Validators.required, Validators.pattern(EMAIL_PATTERN)];

/**
 * Indian number: at least ten digits once punctuation and the country code
 * prefix characters are stripped — the rule `script_18` applied to the callback
 * form, here applied to every phone field.
 */
export function indianPhone(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').trim();
  if (!value) return null; // emptiness is `required`'s job to report
  return value.replace(/\D/g, '').length >= 10 ? null : { phone: true };
}

/** `required` + ten-digit check, for the phone control of every overlay form. */
export const PHONE_VALIDATORS = [Validators.required, indianPhone];

export const INVALID_EMAIL = 'Please enter a valid email.';
export const INVALID_PHONE = 'Please enter a valid phone number.';

/**
 * The sentence to show in `.ck-err`. Missing fields win over a malformed email,
 * which wins over a malformed phone — the order the original `if` chains used.
 */
export function firstError(controls: readonly AbstractControl[], missing: string): string {
  if (controls.some((c) => c.hasError('required'))) return missing;
  if (controls.some((c) => c.hasError('pattern'))) return INVALID_EMAIL;
  if (controls.some((c) => c.hasError('phone'))) return INVALID_PHONE;
  return missing;
}
