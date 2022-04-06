import { createApp } from 'vue';
import App from '@/apps/website/MainLayout.vue';
import router from '@/routers/website';
import '@/assets/css/style.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
