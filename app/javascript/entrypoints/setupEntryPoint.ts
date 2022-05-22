import { Component, createApp } from 'vue';
import { pinia } from '@/stores';
import { Router } from 'vue-router';
import { VueQueryPlugin } from 'vue-query';
import { setHTTPHeader } from '@/services/http.service';
import AuthService from '@/services/auth.service';

const token = AuthService.getToken();

if (token) {
  setHTTPHeader({ Authorization: token });
}

export const setupEntryPoint = (rootComponent: Component, router: Router) => {
  const app = createApp(rootComponent);

  app.use(router);
  app.use(pinia);
  app.use(VueQueryPlugin);

  app.mount('#app');
};
