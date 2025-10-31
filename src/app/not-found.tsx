"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/ui/components/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-500 max-w-md">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL'yi
          kontrol edin veya ana sayfaya dönün.
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Geri Dön
        </Button>
        <Button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Home className="h-4 w-4" />
          Ana Sayfaya Dön
        </Button>
      </div>
    </div>
  );
}
