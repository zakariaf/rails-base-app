import { Component, createApp } from 'vue';
import { pinia } from '@/stores';
import { Router } from 'vue-router';

export const setupEntryPoint = (rootComponent: Component, router: Router) => {
  const app = createApp(rootComponent);

  app.use(router);
  app.use(pinia);

  app.mount('#app');
};
