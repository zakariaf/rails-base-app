import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes/panel';

const router = createRouter({
  history: createWebHistory(),
  base: '/panel',
  routes,
});

export default router;
