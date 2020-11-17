import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Buefy from 'buefy';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import PortalVue from 'portal-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
  placement: 'top',
});

Vue.use(Buefy);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(PortalVue);
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
