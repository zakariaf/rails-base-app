const API_URL = 'http://localhost:3000';

export const apis = {
  auth: {
    login: API_URL + '/users/login',
    logout: API_URL + '/users/logout',
    signup: API_URL + '/users/signup',
  },
};
