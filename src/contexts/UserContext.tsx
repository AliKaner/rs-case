"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { COOKIE_EXPIRATION, TOAST_MESSAGES } from "@/constants";
import { LoginRequest, LoginResponse } from "@/api/types";
import { authAPI } from "@/api/auth";
import { useToast } from "./ToastContext";

interface UserContextType {
  username: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isLoginLoading: boolean;
  loginError: string | undefined;
  login: (data: LoginRequest) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const { showToast } = useToast();

  useEffect(() => {
    const token = Cookies.get("auth-token");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const loginMutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authAPI.login,
    onSuccess: (data, variables) => {
      Cookies.set("auth-token", data, { expires: COOKIE_EXPIRATION });
      setUsername(variables.userName);
      setIsAuthenticated(true);
      showToast(TOAST_MESSAGES.SUCCESS.LOGIN, "success");
      // Redirect to forecast page after successful login
      if (typeof window !== "undefined") {
        window.location.href = "/forecast";
      }
    },
    onError: (error) => {
      showToast(error?.message || TOAST_MESSAGES.ERROR.LOGIN, "error");
    },
  });

  const login = (data: LoginRequest) => loginMutation.mutate(data);

  const logout = () => {
    Cookies.remove("auth-token");
    setUsername(null);
    setIsAuthenticated(false);
  };

  const value = {
    username,
    isLoading,
    isAuthenticated,
    isLoginLoading: loginMutation.isPending,
    loginError: loginMutation.error?.message,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
