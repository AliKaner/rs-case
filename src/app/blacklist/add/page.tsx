"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useBlacklistGetir, useBlacklistEkle } from "@/api/blacklist";
import {
  BlacklistAddRequest,
  BlacklistRequestInitialValues,
} from "@/api/types";
import BlacklistForm from "@/ui/forms/blacklist-form";
import { BlacklistInitialValues } from "@/ui/forms/blacklist-form/initial-values";
import { ROUTES } from "@/constants";
import { Loader2 } from "lucide-react";

export default function BlacklistAddPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const isEditMode = !!id;

  // Fetch existing data if editing
  const { data: allData, isLoading } = useBlacklistGetir(
    BlacklistRequestInitialValues
  );

  const mutation = useBlacklistEkle();

  // Extract the array from the response and find the item with matching ID
  const existingData =
    isEditMode && allData && id
      ? (() => {
          const items =
            (allData as any)?.values ?? (allData as any)?.value ?? [];
          return Array.isArray(items)
            ? items.find(
                (item: any) => item.Id === Number(id) || item.id === Number(id)
              )
            : null;
        })()
      : null;

  // Determine initial values
  const getInitialValues = () => {
    if (isEditMode && existingData) {
      return {
        Id: existingData.Id ?? existingData.id ?? Number(id),
        Adi: existingData.Adi ?? "",
        Soy: existingData.Soy ?? "",
        Aciklama: existingData.Aciklama ?? "",
      };
    }
    return BlacklistInitialValues;
  };

  const handleSubmit = async (values: Omit<BlacklistAddRequest, "db_Id">) => {
    const requestData: BlacklistAddRequest = {
      db_Id: 9,
      ...values,
    };

    mutation.mutate(requestData, {
      onSuccess: () => {
        router.push(ROUTES.BLACK_LIST);
      },
    });
  };

  if (isEditMode && isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 max-w-[1200px] w-full mx-auto">
      <BlacklistForm
        initialValues={getInitialValues()}
        isEditMode={isEditMode}
        isSubmitting={mutation.isPending}
        showId={isEditMode}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
