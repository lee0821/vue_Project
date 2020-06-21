import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import Router from 'vue-router'
import { router } from './router.js'
Vue.use(Router)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
