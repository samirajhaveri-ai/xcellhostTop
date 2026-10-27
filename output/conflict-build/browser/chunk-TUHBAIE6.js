import {
  Validators
} from "./chunk-EVL5GQOW.js";

// src/app/overlays/form.util.ts
var EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
var ZOHO_ORG_ID = "60028262636";
var EMAIL_VALIDATORS = [Validators.required, Validators.pattern(EMAIL_PATTERN)];
function indianPhone(control) {
  const value = String(control.value ?? "").trim();
  if (!value)
    return null;
  return value.replace(/\D/g, "").length >= 10 ? null : { phone: true };
}
var PHONE_VALIDATORS = [Validators.required, indianPhone];
var INVALID_EMAIL = "Please enter a valid email.";
var INVALID_PHONE = "Please enter a valid phone number.";
function firstError(controls, missing) {
  if (controls.some((c) => c.hasError("required")))
    return missing;
  if (controls.some((c) => c.hasError("pattern")))
    return INVALID_EMAIL;
  if (controls.some((c) => c.hasError("phone")))
    return INVALID_PHONE;
  return missing;
}

export {
  ZOHO_ORG_ID,
  EMAIL_VALIDATORS,
  PHONE_VALIDATORS,
  firstError
};
//# sourceMappingURL=chunk-TUHBAIE6.js.map
