// Blacklist API functions

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, API_ROUTES } from "../index";
import { BlacklistRequest, BlacklistAddRequest, ApiResponse } from "../types";
import { TOAST_MESSAGES } from "@/constants";
import { useToast } from "@/contexts/ToastContext";

export const blacklistApi = {
  getir: async (data: BlacklistRequest): Promise<any> => {
    const response = await api.post<any>(API_ROUTES.kara.getir(), data);
    return response.data;
  },

  ekle: async (data: BlacklistAddRequest): Promise<any> => {
    const response = await api.post<any>(API_ROUTES.kara.ekle(), data);
    return response.data;
  },
};

// Query hooks
export const useBlacklistGetir = (data: BlacklistRequest) => {
  return useQuery({
    queryKey: ["blacklist", "getir", data],
    queryFn: async () => {
      const res = await blacklistApi.getir(data);
      return res as ApiResponse<unknown> | unknown;
    },
  });
};

export const useBlacklistEkle = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    mutationFn: async (data: BlacklistAddRequest) => {
      return await blacklistApi.ekle(data);
    },
    onSuccess: (response) => {
      // Invalidate blacklist queries to refetch after successful add/update
      queryClient.invalidateQueries({ queryKey: ["blacklist"] });

      // Check if the response indicates success
      if (response?.isSucceded) {
        showToast(TOAST_MESSAGES.SUCCESS.BLACKLIST_ADD, "success");
      } else {
        const errorMessage =
          response?.message || TOAST_MESSAGES.ERROR.BLACKLIST_ADD;
        showToast(errorMessage, "error");
      }
    },
    onError: (error: any) => {
      console.error("Error saving blacklist item:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        TOAST_MESSAGES.ERROR.BLACKLIST_ADD;
      showToast(errorMessage, "error");
    },
  });
};
