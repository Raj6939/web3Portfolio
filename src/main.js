import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin,} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSocialSharing from 'vue-social-sharing'
import VueMeta from 'vue-meta';
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSocialSharing);
Vue.use(VueMeta);
new Vue({
  render: h => h(App),
}).$mount('#app')
