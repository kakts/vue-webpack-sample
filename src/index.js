import Vue from 'vue'

import app from './components/app';
import top from './components/top';
// import content from './components/content'
// import footer from './components/footer'
console.log('------', app)
new Vue({
  el: '#app',
  template: '<app></app>',
  components: {app, top}
})

// new Vue({
//   name: 'sidebar',
//   components: {
//     app,
//     sidebar,
//   },
//   template: '<sidebar></sidebar>'
// })

// new Vue({
//   el: '#content',
//   components: {
//     app,
//     top,
//   },
//   template: '<content></content>'
// })

// new Vue({
//   el: '#footer',
//   components: {
//     app,
//     top,
//   },
//   template: '<footer></footer>'
// })