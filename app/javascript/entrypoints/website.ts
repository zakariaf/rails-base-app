import { createApp } from 'vue';
import App from '@/layouts/website/MainLayout.vue';
import router from '@/routers/website';
import '@/assets/css/style.scss';
import { pinia } from '@/stores';

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
