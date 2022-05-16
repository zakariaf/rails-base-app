const Index = () => import('@/pages/panel/IndexPage.vue');

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Index,
    },
  },
];

export default routes;
