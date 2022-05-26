import { setupEntryPoint } from './setupEntryPoint';
import App from '@/layouts/panel/MainLayout.vue';
import router from '@/routers/panel';
import '@/assets/css/panel.scss';

setupEntryPoint(App, router);
