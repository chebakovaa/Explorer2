import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify'
import router from './router'
import vgl from 'vue-golden-layout'
import 'golden-layout/src/css/goldenlayout-light-theme.css'

Vue.config.productionTip = false;

Vue.use(vgl)

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');

