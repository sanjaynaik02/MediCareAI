import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor to log request details
apiClient.interceptors.request.use(
  (config) => {
    console.log("Request:", config.method?.toUpperCase(), config.url);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor to log response details
apiClient.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status);

    return response;
  },
  (error) => {
    console.error("API Error:", error);

    return Promise.reject(error);
  }
);