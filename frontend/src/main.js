import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import App from './App';
import router from './router';
import './theme.scss';
import store from './store'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App),
});
