// src/providers/index.tsx

// Imports
"use client";

import { UserProvider } from "@/contexts/UserContext";
import { QueryProvider } from "./QueryProvider";
import { CookieProvider } from "@/contexts/CookieContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ToastContainer } from "@/ui/components/toast-container";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CookieProvider>
      <QueryProvider>
        <ToastProvider>
          <UserProvider>{children}</UserProvider>
          <ToastContainer />
        </ToastProvider>
      </QueryProvider>
    </CookieProvider>
  );
};
