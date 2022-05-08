import axios from 'axios';
import authHeader from './auth-header';
import { apis } from './apis';

class AuthService {
  login(user) {
    console.log('apis', apis);
    return axios
      .post(apis.auth.login, {
        user: {
          email: user.email,
          password: user.password,
        },
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

  logout() {
    return axios.delete(apis.auth.logout, { headers: authHeader() }).then(this.clearCache());
  }

  register(user) {
    return axios.post(apis.auth.signup, {
      user: {
        email: user.email,
        password: user.password,
      },
    });
  }

  clearCache() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  handleResponse(response) {
    if (response.status === 401) {
      this.clearCache();
      location.reload(true);

      const error = response.data && response.data.message;
      return Promise.reject(error);
    }

    return Promise.resolve(response);
  }
}

export default new AuthService();
