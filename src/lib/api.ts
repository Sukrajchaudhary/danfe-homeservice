import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://api.payitforwardjpn.com/api/v1/user";

/**
 * Custom Axios Instance that returns response.data directly
 */
export interface TypedAxiosInstance extends Omit<AxiosInstance, "get" | "post" | "put" | "delete" | "patch"> {
      get<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
      post<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
      put<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
      delete<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
      patch<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}

const apiInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
            "Content-Type": "application/json",
      },
      timeout: 30000,
});

apiInstance.interceptors.request.use(
      (config) => {
            if (typeof window !== "undefined") {
                  const token = localStorage.getItem("userToken");
                  if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                  }
            }
            return config;
      },
      (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
      (response) => {
            // We return response.data directly because of the interceptor
            return response.data;
      },
      (error) => {
            if (error.response?.status === 401) {
                  if (typeof window !== "undefined") {
                        localStorage.removeItem("userToken");
                        localStorage.removeItem("userId");
                        window.location.href = "/auth/login";
                  }
            }

            // Extract error message from various possible locations in the response
            const errorData = error.response?.data;
            const message =
                  errorData?.error?.message || // For {success: false, error: {message: "..."}}
                  errorData?.message ||         // For {message: "..."}
                  error.message ||              // For network errors
                  "Something went wrong";

            const customError = new Error(message);
            // Attach original response to the error object for downstream usage
            (customError as any).response = error.response;

            return Promise.reject(customError);
      }
);

const api = apiInstance as unknown as TypedAxiosInstance;

export default api;

export function setAuthToken(token: string) {
      localStorage.setItem("userToken", token);
}

export function removeAuthToken() {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
}

export function getAuthToken(): string | null {
      if (typeof window !== "undefined") {
            return localStorage.getItem("userToken");
      }
      return null;
}

