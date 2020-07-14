// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "@/store/index"
import "lib-flexible"
import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
Vue.prototype.Toast=Toast
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
