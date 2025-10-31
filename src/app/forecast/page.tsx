// src/app/forecast/page.tsx

// Imports
"use client";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { forecastApi } from "@/api/forecast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/components/table";
import { DisplaySwitch, type DisplayType } from "@/ui/common/display-switch";
import { formatDateYMDToDMY } from "@/lib/utils";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle, Loader2 } from "lucide-react";
import { StpRmforKlasik2ResponseItem } from "@/api/types";

const ForecastPage = () => {
  // States
  const [displayType, setDisplayType] = useState<DisplayType>("table");
  const [selectedMetric, setSelectedMetric] = useState<"Oda" | "Pax" | "Free">(
    "Oda"
  );
  //Hooks
  const {
    data,
    isLoading: isForecastLoading,
    error,
  } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => forecastApi.stpRmforKlasik2(),
  });
  // Effects
  // Others
  const rows = useMemo(() => data?.value ?? [], [data]);

  const chartData = useMemo(() => {
    return (rows as StpRmforKlasik2ResponseItem[]).map((r) => ({
      date: formatDateYMDToDMY(r.Tarih),
      Oda: r.Oda ?? 0,
      Pax: r.Pax ?? 0,
      Free: r.Free ?? 0,
    }));
  }, [rows as StpRmforKlasik2ResponseItem[]]);

  const Chart = () => {
    if (chartData.length === 0) {
      return (
        <div className="text-sm text-muted-foreground h-[520px] flex items-center justify-center flex-col gap-2 border rounded-md p-4">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm text-muted-foreground">Veri yok</span>
        </div>
      );
    }
    return (
      <div className="w-full" style={{ height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 8, right: 16, bottom: 8, left: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} height={36} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar
              dataKey={selectedMetric}
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  // Render
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 space-y-4">
      {!isForecastLoading && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-xl font-semibold">Forecast</h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {displayType === "chart" && (
              <div className="inline-flex flex-row items-center rounded-md border bg-background p-1 gap-1 w-full">
                {(["Oda", "Pax", "Free"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`inline-flex items-center justify-center gap-2 rounded-sm px-3 py-1.5 text-sm transition-colors flex-1 cursor-pointer ${
                      selectedMetric === m
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => setSelectedMetric(m)}
                  >
                    {m === "Oda" ? "Room" : m}
                  </button>
                ))}
              </div>
            )}
            <DisplaySwitch value={displayType} onChange={setDisplayType} />
          </div>
        </div>
      )}

      {isForecastLoading ? (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (rows as StpRmforKlasik2ResponseItem[]).length === 0 ? (
        <div className="text-sm text-muted-foreground h-[520px] flex items-center justify-center  flex-col gap-2 border rounded-md p-4">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm text-muted-foreground">Veri yok</span>
        </div>
      ) : displayType === "chart" ? (
        <div className="rounded-md border bg-background h-[520px] flex items-center justify-center pr-4">
          <Chart />
        </div>
      ) : (
        <div className="rounded-md border bg-background overflow-auto p-12 h-[520px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tarih</TableHead>
                <TableHead>Oda</TableHead>
                <TableHead>Pax</TableHead>
                <TableHead>Free</TableHead>
                <TableHead>Mevcut</TableHead>
                <TableHead>Forecast</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(rows as StpRmforKlasik2ResponseItem[]).map((r, idx) => (
                <TableRow key={`${r.Tarih}-${idx}`}>
                  <TableCell>{formatDateYMDToDMY(r.Tarih)}</TableCell>
                  <TableCell>{r.Oda}</TableCell>
                  <TableCell>{r.Pax}</TableCell>
                  <TableCell>{r.Free}</TableCell>
                  <TableCell>{r.Mevcut}</TableCell>
                  <TableCell>{r.Forecast}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ForecastPage;
