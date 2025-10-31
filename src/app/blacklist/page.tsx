"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2 } from "lucide-react";
import { useBlacklistGetir } from "@/api/blacklist";
import { BlacklistRequestInitialValues } from "@/api/types";
import { formatDateYMDToDMY } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/components/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/components/select";
import { ROUTES } from "@/constants";
import { Button } from "@/ui/components/button";
import { useToast } from "@/contexts/ToastContext";
import { TOAST_MESSAGES } from "@/constants";

type AnyRecord = Record<string, unknown>;

export default function BlacklistPage() {
  const router = useRouter();
  const {
    data,
    isLoading: isDataLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useBlacklistGetir(BlacklistRequestInitialValues);

  const { showToast } = useToast();
  const hasShownErrorToastRef = useRef(false);

  useEffect(() => {
    // Show toast only for Bad Request (400). For other errors, suppress toast.
    if (isError && !hasShownErrorToastRef.current) {
      const status = (error as any)?.response?.status;
      if (status === 400) {
        const message =
          (error as any)?.response?.data?.message ||
          (error as any)?.message ||
          TOAST_MESSAGES.ERROR.GENERIC;
        showToast(message, "error");
        hasShownErrorToastRef.current = true;
      }
    }
    if (!isError) {
      hasShownErrorToastRef.current = false;
    }
  }, [isError, error, showToast]);

  const rows: AnyRecord[] = useMemo(() => {
    if (!data) return [];
    // Prefer values[], then value, else raw
    const maybe = (data as any)?.values ?? (data as any)?.value ?? data;
    if (Array.isArray(maybe)) return maybe as AnyRecord[];
    if (typeof maybe === "object") return [maybe as AnyRecord];
    return [];
  }, [data]);

  const headers = useMemo(() => (rows[0] ? Object.keys(rows[0]) : []), [rows]);

  // Pagination
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [rows, currentPage, pageSize]);

  if (isDataLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[1200px] w-full mx-auto">
      <div className="blacklist-header-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 w-full max-w-[1200px]">
        <h1 className="text-xl font-semibold">Blacklist</h1>
        <div className="flex flex-wrap items-center gap-2">
          {rows.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base">Page size:</span>
              <Select
                value={String(pageSize)}
                onValueChange={(value) => {
                  const next = Number(value);
                  setPageSize(next);
                  setPage(1);
                }}
              >
                <SelectTrigger className="w-[80px] h-8 py-1 px-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[5, 10, 20, 50, 100].map((s) => (
                    <SelectItem key={s} value={String(s)}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <button
            className="rounded bg-black px-3 py-1 text-white disabled:opacity-50 cursor-pointer text-sm sm:text-base whitespace-nowrap"
            onClick={() => router.push(ROUTES.BLACK_LIST_ADD)}
          >
            + Add New
          </button>
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="text-sm text-muted-foreground h-[520px] flex items-center justify-center flex-col gap-2 border rounded-md p-4">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm text-muted-foreground">No data</span>
        </div>
      ) : (
        <div className="blacklist-table-container w-full max-w-[100%] overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {headers.map((h) => (
                  <TableHead key={h} className="whitespace-nowrap">
                    {h}
                  </TableHead>
                ))}
                <TableHead className="whitespace-nowrap">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pagedRows.map((row, idx) => (
                <TableRow key={idx}>
                  {headers.map((h) => (
                    <TableCell key={h} className="whitespace-nowrap">
                      {formatCell(row[h])}
                    </TableCell>
                  ))}
                  <TableCell className="whitespace-nowrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => {
                        const id = row.Id || row.id || row.ID;
                        if (id) {
                          router.push(`${ROUTES.BLACK_LIST_ADD}?id=${id}`);
                        }
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {rows.length > 0 && (
        <div className="flex max-w-[1200px] w-full items-center justify-center gap-2 sm:gap-4">
          <button
            className="rounded border px-3 py-1 disabled:opacity-50 text-sm sm:text-base"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-sm sm:text-base">
            {currentPage} / {totalPages}
          </span>
          <button
            className="rounded border px-3 py-1 disabled:opacity-50 text-sm sm:text-base"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function formatCell(value: unknown): string {
  if (value == null) return "";
  if (typeof value === "object") return JSON.stringify(value);

  // Check if the value is a date string in ISO format
  const str = String(value);
  if (
    typeof str === "string" &&
    str.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
  ) {
    return formatDateYMDToDMY(str);
  }

  return str;
}
