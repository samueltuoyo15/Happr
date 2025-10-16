import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const axiosFacade = axios.create({
  baseURL,
  timeout: 10000
});

// Optional token interceptor
// axiosFacade.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
//   return config;
// });

// Typed response interceptor
axiosFacade.interceptors.response.use(
  <T>(response: { data: T }): T => response.data,
  error => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

export default axiosFacade;
