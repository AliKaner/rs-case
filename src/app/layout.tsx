import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { HeaderLayout } from "@/ui/layouts/header";
import { HeaderContent } from "@/ui/layouts/header-content";
import { FooterLayout } from "@/ui/layouts/footer";
import { FooterContent } from "@/ui/layouts/footer-content";
import { Suspense } from "react";
import BodyLayout from "@/ui/layouts/body";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "RS Case",
    template: "%s | RS Case",
  },
  description: "RS Case uygulaması",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: "RS Case",
    title: "RS Case",
    description: "RS Case uygulaması",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "RS Case",
      },
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "RS Case",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Case",
    description: "RS Case uygulaması",
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderLayout>
              <HeaderContent />
            </HeaderLayout>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <BodyLayout>{children}</BodyLayout>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <FooterLayout>
              <FooterContent />
            </FooterLayout>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
