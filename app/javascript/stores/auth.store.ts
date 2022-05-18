import AuthService from '@/services/auth.service';
import { IRegisterUser, IUserLogin } from '@/types/general';
import { acceptHMRUpdate, defineStore } from 'pinia';

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
          return Promise.reject(error);
        },
      );
    },
    async logout() {
      AuthService.logout().then(() => {
        window.location.href = '/';
        this.user = null;
      });
    },
    register(user: IRegisterUser) {
      return AuthService.register(user).then(
        (response) => {
          return Promise.resolve(response.data);
        },
        (error) => {
          return Promise.reject(error);
        },
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
