import { createApp } from 'vue';
import App from '@/apps/panel/MainLayout.vue';
import router from '@/routers/panel';
import '@/assets/css/panel.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
