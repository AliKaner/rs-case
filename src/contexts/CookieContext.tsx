'use client';

import React, { createContext, useContext } from 'react';
import Cookies from 'js-cookie';

interface CookieContextType {
  getCookie: (name: string) => string | undefined;
  setCookie: (name: string, value: string, options?: Cookies.CookieAttributes) => void;
  removeCookie: (name: string) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getCookie = (name: string) => {
    return Cookies.get(name);
  };

  const setCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(name, value, options);
  };

  const removeCookie = (name: string) => {
    Cookies.remove(name);
  };

  const value = {
    getCookie,
    setCookie,
    removeCookie,
  };

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};