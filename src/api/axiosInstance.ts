import axios from 'axios';
import { useLogin } from '../stores/Auth/useLogin';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('[axios] request headers:', config.headers, '| URL:', config.url);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem('accessToken');
      useLogin.getState().setIsLoginDialogOpen(true);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
