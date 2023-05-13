// import { Helmet } from 'vue-helmet';
import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSocialSharing from 'vue-social-sharing';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Vue.component('PageHelmet', Helmet);
Vue.use(VueSocialSharing);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
