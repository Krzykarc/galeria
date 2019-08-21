import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Back from './components/Back.vue'
import Exit from './components/Exit.vue'

Vue.component('back',Back);
Vue.component('exit',Exit);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
