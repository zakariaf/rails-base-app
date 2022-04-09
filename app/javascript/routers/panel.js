import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes/panel';

const router = createRouter({
  history: createWebHistory('/panel/'),
  routes,
});

export default router;
