import { countryCodes } from "../data/countryCodes";

const COUNTRY_PHONE_MAX_LENGTHS = {
  AE: 9,
  AU: 9,
  BD: 10,
  CA: 10,
  GB: 10,
  IN: 10,
  NZ: 9,
  PK: 10,
  US: 10,
};

const normalizeDialCode = (dialCode) => dialCode.replace(/\D/g, "");

export const getPhoneMaxLength = (countryIso) =>
  COUNTRY_PHONE_MAX_LENGTHS[countryIso] ?? 10;

export const sanitizePhoneInput = (value, countryIso) => {
  const dialCode = countryCodes.find((country) => country.isoCode === countryIso)?.dialCode;
  const countryDialDigits = dialCode ? normalizeDialCode(dialCode) : "";
  const digitsOnly = value.replace(/\D/g, "");
  const nationalNumber = countryDialDigits && digitsOnly.startsWith(countryDialDigits)
    ? digitsOnly.slice(countryDialDigits.length)
    : digitsOnly;

  return nationalNumber.slice(0, getPhoneMaxLength(countryIso));
};
