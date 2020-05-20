import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Farmers from '../components/Farmers.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
