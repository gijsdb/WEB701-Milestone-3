import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

import Home from '../components/Home.vue';
import Farmers from '../components/Farmers.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Market from '../components/Market/Market.vue';
import Account from '../components/Account/Account.vue';

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
  {
    path: '/market',
    name: 'Market',
    component: Market,
    async beforeEnter(to, from, next) {
      const hasPermission = store.state.isUserLoggedIn;
      try {
        if (hasPermission) {
          next();
        }
      } catch (error) {
        console.log(error);
        next({
          name: 'Home',
        });
      }
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    async beforeEnter(to, from, next) {
      const hasPermission = store.state.isUserLoggedIn;
      try {
        if (hasPermission) {
          next();
        }
      } catch (error) {
        console.log(error);
        next({
          name: 'Home',
        });
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
