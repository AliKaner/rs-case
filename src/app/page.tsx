"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/ui/components/button";
import { List, TrendingUp, Github } from "lucide-react";
import { ROUTES } from "@/constants";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-4">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to RS Case
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to RS Case application. You can select your location and
          continue your operations.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-2xl h-24">
        <Button
          onClick={() => router.push(ROUTES.BLACK_LIST)}
          size="lg"
          className="flex items-center justify-center gap-2 flex-1 h-16 text-base cursor-pointer"
        >
          <List className="h-5 w-5" />
          Blacklist
        </Button>
        <Button
          onClick={() => router.push(ROUTES.FORECAST)}
          size="lg"
          className="flex items-center justify-center gap-2 flex-1 h-16 text-base cursor-pointer"
        >
          <TrendingUp className="h-5 w-5" />
          Forecast
        </Button>
      </div>

      <div className="mt-4">
        <Button
          onClick={() =>
            window.open("https://github.com/AliKaner/rs-case", "_blank")
          }
          variant="outline"
          size="lg"
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <Github className="h-5 w-5" />
          GitHub Repository
        </Button>
      </div>
    </div>
  );
}
