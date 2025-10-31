export const TOAST_DURATION = 11000;
export const COOKIE_EXPIRATION = 7;

export const ROUTES = {
  LOGIN: "/auth/login",
  BLACK_LIST: "/blacklist",
  BLACK_LIST_ADD: "/blacklist/add",
  FORECAST: "/forecast",
};

// Layout dimensions
export const HEADER_MAX_WIDTH = 1200; // px
export const HEADER_HEIGHT = 64; // px

export const FOOTER_MAX_WIDTH = 1200; // px
export const FOOTER_HEIGHT = 56; // px

// Toast messages
export const TOAST_MESSAGES = {
  SUCCESS: {
    LOGIN: "Login successful!",
    BLACKLIST_ADD: "Item added to blacklist successfully!",
    BLACKLIST_UPDATE: "Item updated in blacklist successfully!",
    BLACKLIST_DELETE: "Item deleted from blacklist successfully!",
    FORECAST_LOAD: "Forecast data loaded successfully!",
    GENERIC: "Operation completed successfully!",
  },
  ERROR: {
    LOGIN: "Login failed! Please check your information.",
    BLACKLIST_ADD: "Failed to add item to blacklist!",
    BLACKLIST_UPDATE: "Failed to update item in blacklist!",
    BLACKLIST_DELETE: "Failed to delete item from blacklist!",
    FORECAST_LOAD: "Failed to load forecast data!",
    NETWORK_ERROR: "Network error! Please try again.",
    GENERIC: "An error occurred! Please try again.",
    UNAUTHORIZED: "You are not authorized to perform this action!",
    FORBIDDEN: "You are not allowed to perform this action!",
    NOT_FOUND: "The requested record was not found!",
    SERVER_ERROR: "Server error! Please try again later.",
  },
};
