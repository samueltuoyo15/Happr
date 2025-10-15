import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const axiosFacade = axios.create({
  baseURL: baseURL,
  timeout: 10000
});

// Add token automatically
/*
http.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
*/

// Handle responses + errors
axiosFacade.interceptors.response.use(
  response => response.data,
  error => {
    console.error("Error from Axios:", error);
    return Promise.reject(error);
  }
);

export default axiosFacade;
