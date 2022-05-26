import { setupEntryPoint } from './setupEntryPoint';
import App from '@/layouts/website/MainLayout.vue';
import router from '@/routers/website';
import '@/assets/css/style.scss';

setupEntryPoint(App, router);
