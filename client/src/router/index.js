import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Farmers from '../components/Farmers.vue';
import Login from '../components/Login.vue';
// eslint-disable-line
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/farmers',
    name: 'Farmers',
    component: Farmers,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
