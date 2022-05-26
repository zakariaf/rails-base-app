import axios, { AxiosRequestHeaders } from 'axios';
import { API_URL } from '@/configs';
import AuthService from '@/services/auth.service';

const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      AuthService.clearCache();
      return response;
    }

    return response;
  },
  (error) => {
    const errMessage: string = error?.response?.data || 'Unknown Error';

    return Promise.reject(errMessage);
  },
);

const setHTTPHeader = (header: AxiosRequestHeaders) => {
  http.defaults.headers.common = { ...http.defaults.headers.common, ...header };
};

export { http, setHTTPHeader };
