import type { OTPVerificationProps } from "../../login/types/signupTypes";

export const OTPVerification: React.FC<OTPVerificationProps> = ({
    type,
    value,
    otpState,
    onSendOTP,
    onVerifyOTP,
    onOTPChange,
    loading,
    errors
  }) => {
    if (!value || otpState.verified) return null;
  
    return (
      <div className="mt-3 space-y-2">
        {!otpState.sent ? (
          <button
            type="button"
            onClick={onSendOTP}
            disabled={loading}
            className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md disabled:opacity-50"
          >
            Send OTP to {type === 'email' ? 'Email' : 'Phone'}
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={otpState.otp}
              onChange={(e) => onOTPChange(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={onVerifyOTP}
              disabled={loading || otpState.otp.length !== 6}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm disabled:opacity-50"
            >
              Verify
            </button>
            {otpState.countdown > 0 ? (
              <span className="text-sm text-gray-500 py-2">
                Resend in {otpState.countdown}s
              </span>
            ) : (
              <button
                type="button"
                onClick={onSendOTP}
                disabled={loading}
                className="text-sm text-blue-500 hover:text-blue-600 py-2 disabled:opacity-50"
              >
                Resend
              </button>
            )}
          </div>
        )}
        {errors[`${type}OTP`] && (
          <p className="text-red-500 text-sm animate-bounce">
            {errors[`${type}OTP`]}
          </p>
        )}
        {errors[`${type}Verification`] && (
          <p className="text-red-500 text-sm animate-bounce">
            {errors[`${type}Verification`]}
          </p>
        )}
      </div>
    );
  };