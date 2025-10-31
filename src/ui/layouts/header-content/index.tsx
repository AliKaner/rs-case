// src/ui/layouts/header-content/index.tsx

// Imports
"use client";
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import Logo from "@/ui/common/logo";
import { Button } from "@/ui/components/button";
import { useRouter } from "next/navigation";

// Props

// Header Content Layout Component
export const HeaderContent = () => {
  const { username, isAuthenticated, isLoading, logout } = useUser();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-between px-4 w-full">
      <div className="flex items-center gap-3">
        <Logo size={32} />
      </div>

      <div className="flex items-center gap-3">
        {mounted && !isLoading && isAuthenticated && (
          <Button variant="outline" size="sm" onClick={handleLogout}>
            Çıkış Yap
          </Button>
        )}
      </div>
    </div>
  );
};

// Export
export default HeaderContent;
