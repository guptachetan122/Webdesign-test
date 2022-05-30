import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";

import { loadString, saveString } from "../utils/storage";
import { storageKeys } from "../constants";
import store  from "../app/store";
import { logout, setCredentials } from "../components/auth/authSlice";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// console.log(BASE_URL)

const server = axios.create({
  baseURL: `${BASE_URL}`,
});

// Add a request interceptor
server.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const accessToken = await loadString(storageKeys.USER_ACCESS_TOKEN);
    if (accessToken) {
      config.headers!.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
server.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalConfig = error.config;
    if (error.response) {
      if (error.response?.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const currentRefreshToken = await loadString(
            storageKeys.USER_REFRESH_TOKEN
          );
          const rs = await server.post("/v1/auth/refresh-token", {
            refreshToken: currentRefreshToken,
          });
          const { accessToken } = rs.data;
          if (accessToken) {
            await saveString(storageKeys.USER_ACCESS_TOKEN, accessToken);
            store.dispatch(setCredentials({ accessToken }));
            return server(originalConfig);
          }
        } catch (_error) {
          return Promise.reject(_error);
        }
      }

      if (error.response?.status === 403) {
        // Logout user
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await server({ url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export default server;
