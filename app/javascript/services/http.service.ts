import axios from 'axios';
import type { HeadersDefaults } from 'axios';
import { API_URL } from '@/configs';
import AuthService from '@/services/auth.service';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      AuthService.clearCache();
      return error;
    }

    const errMessage: string = error?.response?.data || 'Unknown Error';
    return Promise.reject(errMessage);
  },
);

const setHTTPHeader = (header: HeadersDefaults['common']) => {
  http.defaults.headers.common = { ...http.defaults.headers.common, ...header };
};

export { http, setHTTPHeader };
