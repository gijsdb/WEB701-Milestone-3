import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');