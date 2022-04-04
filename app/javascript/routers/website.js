import VueRouter from 'vue-router';
import routes from '@/routes/website';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  base: '/',
  routes,
});

export default router;
