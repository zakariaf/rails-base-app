import axios from 'axios';
import authHeader from './authHeader.service';
import { apis } from './apis';
import { IUserLogin, IRegisterUser } from '@/types/general';

class AuthService {
  async login(user: IUserLogin) {
    return axios
      .post(apis.auth.login, {
        user,
      })
      .then(this.handleResponse)
      .then((response) => {
        if (response.headers.authorization) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('token', response.headers.authorization);
        }

        return response.data;
      });
  }

  async logout() {
    return axios.delete(apis.auth.logout, { headers: authHeader() }).then(() => this.clearCache());
  }

  async register(user: IRegisterUser) {
    return axios.post(apis.auth.signup, {
      user,
    });
  }

  clearCache() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  async handleResponse(response: any) {
    if (response.status === 401) {
      this.clearCache();
      location.reload();

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }

  getUser() {
    const user = localStorage.getItem('user');

    if (user) {
      try {
        return JSON.parse(user);
      } catch {
        return null;
      }
    }

    return null;
  }
}

const instance = new AuthService();

export default instance;
