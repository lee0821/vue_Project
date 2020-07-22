import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import store from './store'
import { router } from './router.js'

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
