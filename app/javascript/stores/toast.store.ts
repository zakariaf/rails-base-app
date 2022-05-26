import { acceptHMRUpdate, defineStore } from 'pinia';
import { IToastState } from '@/types/toasts';

const initialState: IToastState = {
  message: '',
  show: false,
  type: 'success',
  configs: {
    position: 'top-center',
    duration: 5000,
  },
};

let interval: number | null = null;

const clearToastInterval = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

export const useToastStore = defineStore('toast.store', {
  state: (): IToastState => ({ ...initialState }),
  getters: {
    isShow: (state: IToastState) => !!state.show,
  },
  actions: {
    showToast(
      message: IToastState['message'],
      type: IToastState['type'] = 'info',
      configs?: Partial<IToastState['configs']>,
    ) {
      clearToastInterval();

      this.message = message;
      this.show = true;
      this.type = type;
      this.configs = { ...this.configs, ...configs };

      interval = setTimeout(() => {
        this.show = false;
      }, this.configs.duration);
    },
    hideToast() {
      clearToastInterval();

      this.message = '';
      this.show = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot));
}
