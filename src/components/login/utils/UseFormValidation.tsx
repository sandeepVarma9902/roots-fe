import type { OTPState } from "../types/LoginTypes";
import type { SignupFormData, FormErrors } from "../types/signupTypes";
import { Validators } from "./signupformValidators";

export const useFormValidation = (
  formData: SignupFormData,
  otpState: OTPState,
  isTermsAgreed: boolean
) => {
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Full Name
    newErrors.fullName =
      Validators.required(formData.fullName, "Full name") ||
      Validators.length(formData.fullName, "name", 2, 50);

    // Email
    newErrors.email =
      Validators.required(formData.email, "Email") ||
      Validators.email(formData.email);

    // Phone
    newErrors.phone =
      Validators.required(formData.phone, "Phone number") ||
      Validators.phone(formData.phone);

    // Address
    newErrors.address =
      Validators.required(formData.address ?? "", "Address") ||
      Validators.length(formData.address ?? "", "address", 2, 50);


    // City
    newErrors.city =
      Validators.required(formData.city ?? "", "City") ||
      Validators.length(formData.city ?? "", "city", 2, 50);

    // State
    newErrors.state =
      Validators.required(formData.state ?? "", "State") ||
      Validators.length(formData.state ?? "", "state", 2, 50);

    // Zipcode
    newErrors.zipcode =
      Validators.required(formData.zipcode ?? "", "Zipcode") ||
      Validators.length(formData.zipcode ?? "", "zipcode", 2, 50);

    // Password
    newErrors.password =
      Validators.required(formData.password, "Password") ||
      Validators.password(formData.password);

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }

    // Terms Agreement
    if (!isTermsAgreed) {
      newErrors.agreeTerms =
        "You must agree to the terms and privacy policy";
    }

    // OTP Checks
    if (!otpState.email.verified) {
      newErrors.emailVerification = "Please verify your email address";
    }
    if (!otpState.phone.verified) {
      newErrors.phoneVerification = "Please verify your phone number";
    }

    return newErrors;
  };

  return { validateForm };
};
