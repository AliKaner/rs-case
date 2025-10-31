"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = "", size = 32 }: LogoProps) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/android-chrome-192x192.png"
        alt="Logo"
        width={size}
        height={size}
        priority
      />
    </Link>
  );
};

export default Logo;
