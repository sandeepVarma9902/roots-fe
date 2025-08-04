import React, { useState } from 'react';
import type { LoginFormErrors, userType, UserTypeConfig } from '../types/LoginTypes';
import { useNavigate } from 'react-router-dom';
import { pageConfigs } from '../utils/helpers';
import { GoogleLogin } from '@react-oauth/google';

export default function MultiRoleLoginPages() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<userType>('user');
  const [loading, setLoading] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});



  const validateForm = () => {
    const newErrors: LoginFormErrors = {};

    if (!formData.email) {
      newErrors.email = 'Please enter your email!';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email!';
    }

    if (!formData.password) {
      newErrors.password = 'Please enter your password!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear the specific error when user starts typing
    if (errors[name as keyof LoginFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setLoginAttempt(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setLoginAttempt({
        success: true,
        userType: currentPage,
        email: formData.email
      });
    }, 1500);
  };

  const switchPage = (pageType: userType) => {
    setCurrentPage(pageType);
    setFormData({ email: '', password: '' });
    setErrors({});
    setLoginAttempt(null);
  };

  const config = pageConfigs[currentPage];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradient} transition-all duration-500`}>
      {/* Navigation */}
      <nav className="absolute top-4 left-4 right-4 z-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 backdrop-blur-sm rounded-full shadow-lg">

          </div>

          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              Help
            </button>
            <button
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-screen p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/20">
            {/* Header */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 ${config.iconBg} rounded-full mb-4 transform transition-all duration-300 hover:scale-110`}>
                <span className="text-4xl">{config.icon}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {config.title}
              </h2>
              <p className="text-gray-600 text-base">
                {config.subtitle}
              </p>
            </div>

            {/* Success Alert */}
            {loginAttempt?.success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg transform transition-all duration-300 animate-pulse">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✅</span>
                  <div>
                    <h4 className="text-green-800 font-medium">Login Successful!</h4>
                    <p className="text-green-700 text-sm">
                      Redirecting to {config.title}...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Login Form */}
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium text-sm">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    📧
                  </span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg ${config.focusColor} outline-none transition-all duration-200 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm animate-bounce">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium text-sm">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
                    🔒
                  </span>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Enter your password"
                    className={`w-full pl-12 pr-4 py-3 border rounded-lg ${config.focusColor} outline-none transition-all duration-200 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm animate-bounce">
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                disabled={loading}
                className={`w-full h-12 ${config.buttonColor} disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing In...</span>
                  </div>
                ) : (
                  `Sign In to ${config.title.split(' ')[0]}`
                )}
              </button>
              <div className='mb-2 text-center w-full'>Or</div>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}