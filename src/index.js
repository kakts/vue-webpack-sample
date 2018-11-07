import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './components/app';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})


console.log('------', app)
new Vue({
  el: '#app',
  template: '<app></app>',
  components: {app},
  router: router
});