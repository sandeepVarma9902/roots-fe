import React, { useEffect, useState } from 'react';
import type { FormErrors, SignupFormData } from '../types/signupTypes';
import type { OTPState } from '../types/LoginTypes';
import { useOTPTimer } from '../utils/UseOtpTimer';
import { useFormValidation } from '../utils/UseFormValidation';
import { InputField } from '../../common/components/InputField';
import { OTPVerification } from '../../common/components/OtpVerification';
import { LoadingButton } from '../../common/components/ButtonLoader';
import { validateEmail, validatePhone } from '../../common/utils/validators';



// Mock role configs
const roleConfigs = {
  user: {
    gradient: 'from-blue-50 to-indigo-100',
    focusColor: 'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    buttonColor: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
  }
};

export default function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    email: '',
    phone: '',
    city:"",
    state:"",
    address:"",
    zipcode:"",
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { otpState, setOtpState } = useOTPTimer();
  const { validateForm } = useFormValidation(formData, otpState, isTermsAgreed);



  const handleInputChange = (name: keyof SignupFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }

    // Reset verification if email or phone is changed
    if (name === 'email' && otpState.email.verified) {
      setOtpState(prev => ({
        ...prev,
        email: {
          sent: false,
          verified: false,
          otp: '',
          countdown: 0
        }
      }));
    }

    if (name === 'phone' && otpState.phone.verified) {
      setOtpState(prev => ({
        ...prev,
        phone: {
          sent: false,
          verified: false,
          otp: '',
          countdown: 0
        }
      }));
    }
  };

  const sendOTP = async (type: 'email' | 'phone') => {
    const value = type === 'email' ? formData.email : formData.phone;
    
    if (!value) {
      setErrors(prev => ({
        ...prev,
        [type]: `${type === 'email' ? 'Email' : 'Phone number'} is required`
      }));
      return;
    }

    // Validate format
    if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({
        ...prev,
        email: 'Invalid email format'
      }));
      return;
    }

    if (type === 'phone' && !/^[+]?[\d\s\-\(\)]{10,15}$/.test(value)) {
      setErrors(prev => ({
        ...prev,
        phone: 'Invalid phone number format'
      }));
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setOtpState(prev => ({
        ...prev,
        [type]: {
          ...prev[type],
          sent: true,
          countdown: 60
        }
      }));

      setErrors(prev => ({
        ...prev,
        [type]: null
      }));

      alert(`OTP sent to your ${type === 'email' ? 'email address' : 'phone number'}`);
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        [type]: `Failed to send OTP to ${type}`
      }));
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (type: 'email' | 'phone') => {
    const otp = otpState[type].otp;
    
    if (!otp || otp.length !== 6) {
      setErrors(prev => ({
        ...prev,
        [`${type}OTP`]: 'Please enter a valid 6-digit OTP'
      }));
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (otp.length === 6) {
        setOtpState(prev => ({
          ...prev,
          [type]: {
            ...prev[type],
            verified: true
          }
        }));

        setErrors(prev => ({
          ...prev,
          [`${type}OTP`]: null,
          [`${type}Verification`]: null
        }));

        alert(`${type === 'email' ? 'Email' : 'Phone number'} verified successfully!`);
      } else {
        setErrors(prev => ({
          ...prev,
          [`${type}OTP`]: 'Invalid OTP. Please try again.'
        }));
      }
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        [`${type}OTP`]: 'Failed to verify OTP. Please try again.'
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleOTPChange = (type: 'email' | 'phone', value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 6);
    
    setOtpState(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        otp: numericValue
      }
    }));

    if (errors[`${type}OTP`]) {
      setErrors(prev => ({
        ...prev,
        [`${type}OTP`]: null
      }));
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (error) {
      console.error('Signup failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // const currentConfig = roleConfigs[userRole as keyof typeof roleConfigs];
  const currentConfig = {
    gradient: 'from-blue-50 to-cyan-100',
    iconBg: 'bg-blue-100',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    focusColor: 'focus:ring-blue-500 focus:border-blue-500'
  };


  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md text-center border border-white/20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-3xl font-bold text-green-700 mb-2">
            Registration Successful!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Welcome aboard! Your account has been created successfully.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to login page...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentConfig.gradient} transition-all duration-500`}>
    <div className="text-center pt-8 pb-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Join Our Platform
      </h1>
      <p className="text-gray-600 text-lg">
        Create your account and start your journey with us
      </p>
    </div>
    
    <div className="flex justify-center p-4 pt-20">
      <div className="w-full max-w-2xl">
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <InputField
                label="Full Name"
                type="text"
                value={formData.fullName}
                onChange={(value) => handleInputChange('fullName', value)}
                placeholder="Enter your full name"
                icon="👤"
                error={errors.fullName}
                focusColor={currentConfig.focusColor}
              />

              <div>
                <InputField
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="Enter your email"
                  icon="📧"
                  error={errors.email}
                  verified={otpState.email.verified}
                  focusColor={currentConfig.focusColor}
                />
                {!validateEmail(formData?.email) &&  <OTPVerification
                  type="email"
                  value={formData.email}
                  otpState={otpState.email}
                  onSendOTP={() => sendOTP('email')}
                  onVerifyOTP={() => verifyOTP('email')}
                  onOTPChange={(value) => handleOTPChange('email', value)}
                  loading={loading}
                  errors={errors}
                />}
              </div>
            </div>

            <div>
              <InputField
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                placeholder="Enter your phone number"
                icon="📞"
                error={errors.phone}
                verified={otpState.phone.verified}
                focusColor={currentConfig.focusColor}
              />
              {!validatePhone(formData?.phone) &&  <OTPVerification
                type="phone"
                value={formData.phone}
                otpState={otpState.phone}
                onSendOTP={() => sendOTP('phone')}
                onVerifyOTP={() => verifyOTP('phone')}
                onOTPChange={(value) => handleOTPChange('phone', value)}
                loading={loading}
                errors={errors}
              />}
            </div>
            <div>
            <InputField
                label="Address"
                type="textArea"
                value={formData.address ?? ""}
                onChange={(value) => handleInputChange('address', value)}
                placeholder="Enter your address"
                error={errors.address}
                focusColor={currentConfig.focusColor}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <InputField
                label="City"
                type="text"
                value={formData.city ?? ""}
                onChange={(value) => handleInputChange('city', value)}
                placeholder="Enter your city"
                error={errors.city}
                focusColor={currentConfig.focusColor}
              />

            <InputField
                label="state"
                type="text"
                value={formData.state ?? ""}
                onChange={(value) => handleInputChange('state', value)}
                placeholder="Enter your state"
                error={errors.state}
                focusColor={currentConfig.focusColor}
              />
            <InputField
                label="zip code"
                type="text"
                value={formData.zipcode ?? ""}
                onChange={(value) => handleInputChange('zipcode', value)}
                placeholder="Enter your zip code"
                error={errors.zipcode}
                focusColor={currentConfig.focusColor}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Password"
                type="password"
                value={formData.password}
                onChange={(value) => handleInputChange('password', value)}
                placeholder="Create a password"
                icon="🔒"
                error={errors.password}
                showToggle={true}
                onToggle={() => setShowPassword(!showPassword)}
                isToggled={showPassword}
                focusColor={currentConfig.focusColor}
              />

              <InputField
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={(value) => handleInputChange('confirmPassword', value)}
                placeholder="Confirm your password"
                icon="🔒"
                error={errors.confirmPassword}
                showToggle={true}
                onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
                isToggled={showConfirmPassword}
                focusColor={currentConfig.focusColor}
              />
            </div>

            <div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeTermsCheckbox"
                  checked={isTermsAgreed}
                  onChange={(e) => setIsTermsAgreed(e.target.checked)}
                  className={`mt-1 h-4 w-4 text-blue-600 ${currentConfig.focusColor} border-gray-300 rounded`}
                />
                <label htmlFor="agreeTermsCheckbox" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 text-sm mt-1 animate-bounce">
                  {errors.agreeTerms}
                </p>
              )}
            </div>

            <LoadingButton
              onClick={handleSubmit}
              loading={loading}
              className={`w-full h-12 ${currentConfig.buttonColor} text-white font-medium text-base rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl`}
              loadingText="Creating Account..."
            >
              Create Account
            </LoadingButton>

            <div className="mb-2 text-center w-full">Or</div>
            <div className="text-center">
              <button
                type="button"
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => alert('Google OAuth would be integrated here')}
              >
                Continue with Google
              </button>
            </div>

            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <a href="/" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center pb-8">
      <p className="text-gray-500 text-sm">
        By creating an account, you're joining thousands of users who trust our platform
      </p>
    </div>
  </div>
  );
}