import { useToastStore } from '@/stores/toast.store';
import { TShowToast } from '@/types/toasts';

export const showToast: TShowToast = (message, type = 'info', configs) => {
  const toastStore = useToastStore();
  toastStore.showToast(message, type, configs);
};
