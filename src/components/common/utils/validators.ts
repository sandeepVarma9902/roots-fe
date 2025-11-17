export const validateFullName = (fullName: string): string | undefined => {
    const trimmed = fullName.trim();
    if (!trimmed) return 'Full name is required';
    if (trimmed.length < 2 || trimmed.length > 50) return 'Invalid name';
  };
  
  export const validateEmail = (email: string): string | undefined => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email';
  };
  
  export const validatePhone = (phone: string): string | undefined => {
    if (!phone) return 'Phone number is required';
    if (!/^[+]?[\d\s\-\(\)]{10,15}$/.test(phone)) return 'Invalid phone number';
  };
  
  export const validatePassword = (password: string): string | undefined => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
  };
  
  export const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ): string | undefined => {
    if (!confirmPassword) return 'Please confirm your password';
    if (password !== confirmPassword) return 'Passwords must match';
  };
  
  export const validateTermsAgreement = (agreed: boolean): string | undefined => {
    if (!agreed) return 'You must agree to the terms and privacy policy';
  };
  
  export const validateOTPVerification = (
    emailVerified: boolean,
    phoneVerified: boolean
  ): { emailVerification?: string; phoneVerification?: string } => {
    const errors: { emailVerification?: string; phoneVerification?: string } = {};
    if (!emailVerified) errors.emailVerification = 'Please verify your email address';
    if (!phoneVerified) errors.phoneVerification = 'Please verify your phone number';
    return errors;
  };
  