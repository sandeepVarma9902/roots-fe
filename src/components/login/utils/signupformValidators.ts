// utils/validation/validators.ts

import { EMAIL_REGEX, PHONE_REGEX, PASSWORD_REGEX } from "../../common/utils/regex";
import { isEmpty, isLengthInvalid } from "../../common/utils/validators";


export const Validators = {
  required(value: string, field: string) {
    return isEmpty(value) ? `${field} is required` : "";
  },

  length(value: string, field: string, min: number, max: number) {
    return isLengthInvalid(value, min, max) ? `Invalid ${field}` : "";
  },

  email(value: string) {
    return EMAIL_REGEX.test(value) ? "" : "Invalid email";
  },

  phone(value: string) {
    return PHONE_REGEX.test(value) ? "" : "Invalid phone number";
  },

  password(value: string) {
    if (value.length < 8) return "Password must be at least 8 characters";
    if (!PASSWORD_REGEX.test(value))
      return "Password must contain uppercase, lowercase, and number";
    return "";
  }
};
