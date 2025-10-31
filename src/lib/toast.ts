import { TOAST_MESSAGES } from "@/constants";
import { ToastType } from "@/types/toast";

/**
 * Helper function to get appropriate toast message for API responses
 * @param type - The toast type (success or error)
 * @param messageKey - The key from TOAST_MESSAGES (e.g., 'LOGIN', 'BLACKLIST_ADD')
 * @param fallbackMessage - Custom message to use if messageKey is not found
 * @returns The toast message string
 */
export const getToastMessage = (
  type: "success" | "error",
  messageKey?:
    | keyof typeof TOAST_MESSAGES.SUCCESS
    | keyof typeof TOAST_MESSAGES.ERROR,
  fallbackMessage?: string
): string => {
  if (fallbackMessage) {
    return fallbackMessage;
  }

  if (messageKey) {
    if (type === "success") {
      return (
        TOAST_MESSAGES.SUCCESS[
          messageKey as keyof typeof TOAST_MESSAGES.SUCCESS
        ] || TOAST_MESSAGES.SUCCESS.GENERIC
      );
    } else {
      return (
        TOAST_MESSAGES.ERROR[messageKey as keyof typeof TOAST_MESSAGES.ERROR] ||
        TOAST_MESSAGES.ERROR.GENERIC
      );
    }
  }

  return type === "success"
    ? TOAST_MESSAGES.SUCCESS.GENERIC
    : TOAST_MESSAGES.ERROR.GENERIC;
};

/**
 * Helper function to determine toast type from API response
 * @param isSuccess - Whether the API call was successful
 * @param errorCode - Optional error code to determine specific error type
 * @returns The appropriate toast type
 */
export const getToastTypeFromResponse = (
  isSuccess: boolean,
  errorCode?: number
): ToastType => {
  if (isSuccess) {
    return "success";
  }

  if (errorCode === 401) {
    return "error";
  } else if (errorCode === 403) {
    return "error";
  } else if (errorCode === 404) {
    return "error";
  } else if (errorCode === 500) {
    return "error";
  }

  return "error";
};
