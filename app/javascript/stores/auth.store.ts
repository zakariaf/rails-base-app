import type { AxiosResponse } from 'axios';
import { acceptHMRUpdate, defineStore } from 'pinia';
import AuthService from '@/services/auth.service';
import { IRegisterUser, IUserLogin } from '@/types/general';

interface IState {
  user: Record<string, unknown> | null;
}

const initialState: IState = { user: AuthService.getUser() };

export const useAuthStore = defineStore('auth.store', {
  state: (): IState => ({ ...initialState }),
  getters: {
    isAuthenticated: (state: IState) => !!state.user,
  },
  actions: {
    login(user: IUserLogin) {
      return AuthService.login(user).then(
        (response: AxiosResponse) => {
          this.user = response.data;
          return Promise.resolve(response);
        },
        (error) => {
          return Promise.reject(error);
        },
      );
    },
    logout() {
      AuthService.logout().then(() => {
        this.user = null;
      });
    },
    register(user: IRegisterUser) {
      return AuthService.register(user);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
