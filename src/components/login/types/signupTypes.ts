import type { OTPState } from "./LoginTypes";

export interface FormData {
    fullName: string;
    email: string;
    phone: string;
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