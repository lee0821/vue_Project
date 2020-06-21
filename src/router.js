import VueRouter from 'vue-router'
export const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('./components/index.vue'),
      children: [
        { path: '/index/sub', component: () => import('./components/sub-one/index.vue'), meta: { name: 'shaqiang' }, params: {id: '1111'}},
        { path: '/index/subTwo', component: () => import('./components/sub-two/index.vue'), meta: { name: 'bin' }, params: {id: '222'}},
      ]
    },
    { path: '/second', component: () => import('./components/second.vue')},
  ]
})
