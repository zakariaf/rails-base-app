import { createApp } from 'vue';
import App from '@/layouts/panel/MainLayout.vue';
import router from '@/routers/panel';
import store from '@/store';
import '@/assets/css/panel.scss';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
