import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin,} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueHead from 'vue-head';
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueHead)
Vue.use(IconsPlugin);
new Vue({
  render: h => h(App),
}).$mount('#app')
