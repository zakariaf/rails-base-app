import AuthService from '@/services/auth.service';
import { IRegisterUser, IUserLogin } from '@/typings/general';
import { defineStore } from 'pinia';

interface IState {
  user: Record<string, any> | null;
}

const initialState: IState = { user: AuthService.getUser() };

export const useAuthStore = defineStore('auth.store', {
  state: (): IState => ({ ...initialState }),
  getters: {
    isAuthenticated: (state: IState) => !!state.user,
  },
  actions: {
    async login({ email, password }: IUserLogin) {
      return AuthService.login({
        email,
        password,
      }).then(
        (user) => {
          this.user = AuthService.getUser();
          return Promise.resolve(user);
        },
        (error) => {
          // commit('loginFailure');
          return Promise.reject(error);
        },
      );
    },
    logout() {
      AuthService.logout();
      // commit('logout');
    },
    register(user: IRegisterUser) {
      return AuthService.register(user).then(
        (response) => {
          // commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          // commit('registerFailure');
          return Promise.reject(error);
        },
      );
    },
  },
});
