import axios, { type AxiosError } from "axios";
import { Console } from "console";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (error: any) => {
    console.log(123123);
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.data.detail === "Missing Authorization Header" || !cookies.get("access_token")) {
        console.log(error.response);
        cookies.remove("access_token");
        cookies.remove("refresh_token");
        window.location.href = `/signin?id=${new URLSearchParams(window.location.search).get("id")}`;
      }
    }
    throw error;
  }
);
