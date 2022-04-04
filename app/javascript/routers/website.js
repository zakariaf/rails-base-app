import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '@/routes/website';

const router = createRouter({
  history: createWebHashHistory(),
  base: '/',
  routes,
});

export default router;
