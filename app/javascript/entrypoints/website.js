import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '@/apps/website/MainLayout.Vue';
import router from '@/routers/website';

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
