import type { OTPState } from "./LoginTypes";

export interface SignupFormData {
    fullName: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    password: string;
    confirmPassword: string;
  }
  
export interface FormErrors {
  [key: string]: string | null;
}


export interface OTPVerificationProps {
  type: 'email' | 'phone';
  value: string;
  otpState: OTPState[keyof OTPState];
  onSendOTP: () => void;
  onVerifyOTP: () => void;
  onOTPChange: (value: string) => void;
  loading: boolean;
  errors: FormErrors;
}