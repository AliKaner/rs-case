// Forcast API Functions

import { api, API_ROUTES } from "../index";
import {
  StpRmforKlasik2Request,
  StpRmforKlasik2RequestInitialValues,
  StpRmforKlasik2Response,
  ApiResponse,
} from "../types";

export const forecastApi = {
  stpRmforKlasik2: async (
    data: StpRmforKlasik2Request | undefined = undefined
  ): Promise<ApiResponse<StpRmforKlasik2Response>> => {
    const payload = data ?? StpRmforKlasik2RequestInitialValues;
    const response = await api.post<ApiResponse<StpRmforKlasik2Response>>(
      API_ROUTES.procedure.stpRmforKlasik2(),
      payload
    );
    return response.data;
  },
};
