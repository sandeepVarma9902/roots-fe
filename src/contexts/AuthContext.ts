import React, { createContext } from 'react';
import type { AuthContextType } from '../types/auth';

const defaultContextValue: AuthContextType = {
  user: null,
  login: () => {
    throw new Error('login function must be used within AuthProvider');
  },
  logout: () => {
    throw new Error('logout function must be used within AuthProvider');
  },
  loading: true
};

export const AuthContext = createContext<AuthContextType>(defaultContextValue);