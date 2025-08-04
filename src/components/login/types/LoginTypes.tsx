export interface LoginFormErrors {
    email?: string;
    password?: string;
  }

 export type userType = 'user' | 'admin' | 'customer' | 'vendor';

export interface UserTypeConfig {
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  iconBg: string;
  buttonColor: string;
  focusColor: string;
}

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

export interface OTPState {
  email: {
    sent: boolean;
    verified: boolean;
    otp: string;
    countdown: number;
  };
  phone: {
    sent: boolean;
    verified: boolean;
    otp: string;
    countdown: number;
  };
}

export interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: string;
  error: string | null;
  showToggle?: boolean;
  onToggle?: () => void;
  isToggled?: boolean;
  verified?: boolean;
  focusColor: string;
}
