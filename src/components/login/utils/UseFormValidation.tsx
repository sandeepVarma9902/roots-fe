import type { OTPState } from "../types/LoginTypes";
import type { SignupFormData, FormErrors } from "../types/signupTypes";

export const useFormValidation = (formData: SignupFormData, otpState: OTPState, isTermsAgreed: boolean) => {
    const validateForm = (): FormErrors => {
      const newErrors: FormErrors = {};
  
      // Full Name validation
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      } else if (formData.fullName.trim().length < 2 || formData.fullName.trim().length > 50) {
        newErrors.fullName = 'Invalid name';
      }
  
      // Email validation
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email';
      }
  
      // Phone validation
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[+]?[\d\s\-\(\)]{10,15}$/.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }

       // Address validation
       if (!formData.address?.trim()) {
        newErrors.address = 'Address is required';
      } else if (formData.address?.trim().length < 2 || formData.address?.trim().length > 50) {
        newErrors.fullName = 'Invalid address';
      }

       // City validation
       if (!formData.city?.trim()) {
        newErrors.city = 'City is required';
      } else if (formData.city?.trim().length < 2 || formData.city?.trim().length > 50) {
        newErrors.city = 'Invalid city';
      }

      // Stqte validation
      if (!formData.state?.trim()) {
        newErrors.state = 'State is required';
      } else if (formData.state?.trim().length < 2 || formData.state?.trim().length > 50) {
        newErrors.city = 'Invalid state';
      }

      // Zipcode validation
      if (!formData.zipcode?.trim()) {
        newErrors.zipcode = 'Zipcode is required';
      } else if (formData.zipcode?.trim().length < 2 || formData.zipcode?.trim().length > 50) {
        newErrors.city = 'Invalid zipcode';
      }
  
      // Password validation
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
        newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      }
  
      // Confirm Password validation
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords must match';
      }
  
      // Terms validation
      if (!isTermsAgreed) {
        newErrors.agreeTerms = 'You must agree to the terms and privacy policy';
      }
  
      // OTP verification validation
      if (!otpState.email.verified) {
        newErrors.emailVerification = 'Please verify your email address';
      }
      if (!otpState.phone.verified) {
        newErrors.phoneVerification = 'Please verify your phone number';
      }
  
      return newErrors;
    };
  
    return { validateForm };
  };