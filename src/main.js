import Vue from 'vue';
import App from "./App.vue";
import router from "./router";
import './plugins/axios';
import './assets/css/base.css';
import './assets/js/font.js';
import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
