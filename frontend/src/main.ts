import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify'
import router from './router'
import 'golden-layout/dist/css/themes/goldenlayout-light-theme.css'
import 'golden-layout/dist/css/goldenlayout-base.css'
import vgl from 'vue-golden-layout'

Vue.config.productionTip = false;

Vue.use(vgl)

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');

