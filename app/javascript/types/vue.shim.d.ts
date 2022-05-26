import { TShowToast } from './toasts';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $showToast: TShowToast;
  }
}

export {};
