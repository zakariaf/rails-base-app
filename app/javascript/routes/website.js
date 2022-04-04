const Index = () => import('@/views/website/IndexPage.vue');
const About = () => import('@/views/website/AboutPage.vue');
const Login = () => import('@/views/website/LoginPage.vue');
const Signup = () => import('@/views/website/SignupPage.vue');

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Index,
    },
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: About,
    },
  },
  {
    path: '/login',
    name: 'login_page',
    components: {
      default: Login,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    components: {
      default: Signup,
    },
  },
];

export default routes;
