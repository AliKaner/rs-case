// Auth API

import { api, API_ROUTES } from "../index";
import { LoginRequest, LoginResponse } from "../types";

export const authAPI = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      API_ROUTES.auth.login(),
      data
    );
    return response.data;
  },
};
