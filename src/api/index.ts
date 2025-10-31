//Api Axios Instance

import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SERVICE_ROOT ||
    process.env.NEXT_PUBLIC_FRONT_SERVICE_ROOT,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token from cookie to every request
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth-token");
    if (token) {
      config.headers = config.headers || {};
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const API_ROUTES = {
  auth: {
    login: (root = process.env.NEXT_PUBLIC_SERVICE_ROOT!) =>
      `${root}/security/createToken`,
  },
  procedure: {
    stpRmforKlasik2: (root = process.env.NEXT_PUBLIC_FRONT_SERVICE_ROOT!) =>
      `${root}/Procedure/StpRmforKlasik_2`,
  },
  kara: {
    getir: (root = process.env.NEXT_PUBLIC_FRONT_SERVICE_ROOT!) =>
      `${root}/Kara/Getir_Kod`,
    ekle: (root = process.env.NEXT_PUBLIC_FRONT_SERVICE_ROOT!) =>
      `${root}/Kara/Ekle`,
  },
};
