import axios, { type AxiosError } from "axios";
import { Cookies } from "react-cookie";
import { useSearchParams } from "react-router-dom";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10_000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
  config => {
    const accessToken = cookies.get("access_token");
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async (error: AxiosError<AxiosError>) => {
    const [searchParams] = useSearchParams();
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 401 || !cookies.get("access_token")) {
        cookies.remove("access_token");
        cookies.remove("refresh_token");
        window.location.href = `/signin?id=${searchParams.get("id")}`;
      }
    }
    throw error;
  }
);
