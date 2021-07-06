import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify'
import router from './router'
import VueRouter from 'vue-router';
import Metro from 'metro4'
// import 'metro4/build/css/metro-all.min.css'
// import 'metro4/build/css/schemes/sky-net.min.css'


Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
  mounted: function() {
    Metro.init();
  }
}).$mount('#app');

