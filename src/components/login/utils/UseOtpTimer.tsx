import { useEffect, useState } from "react";
import type { OTPState } from "../types/LoginTypes";

export const useOTPTimer = () => {
    const [otpState, setOtpState] = useState<OTPState>({
      email: {
        sent: false,
        verified: false,
        otp: '',
        countdown: 0
      },
      phone: {
        sent: false,
        verified: false,
        otp: '',
        countdown: 0
      }
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setOtpState(prev => ({
          ...prev,
          email: {
            ...prev.email,
            countdown: prev.email.countdown > 0 ? prev.email.countdown - 1 : 0
          },
          phone: {
            ...prev.phone,
            countdown: prev.phone.countdown > 0 ? prev.phone.countdown - 1 : 0
          }
        }));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return { otpState, setOtpState };
  };
  