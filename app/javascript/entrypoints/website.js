import { createApp } from 'vue';
import App from '@/apps/website/MainLayout.vue';
import router from '@/routers/website';

const app = createApp(App);

app.use(router);

app.mount('#app');
