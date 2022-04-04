import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes/website';

const router = createRouter({
  history: createWebHistory(),
  base: '/',
  routes,
});

export default router;
