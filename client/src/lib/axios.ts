import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const axiosFacade = axios.create({
  baseURL,
  timeout: 10000
});

// Response interceptor to unwrap `data`
axiosFacade.interceptors.response.use(
  <T>(response: { data: T }): T => response.data,
  error => Promise.reject(error)
);

// Define a new interface for your unwrapped facade
interface Facade {
  <T = any>(config: AxiosRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

export default axiosFacade as Facade;
