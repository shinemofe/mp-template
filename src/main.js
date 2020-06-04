import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import deps from './deps.json'

Vue.config.productionTip = false
xm.sourceCheck && xm.sourceCheck({
  // 卡片管理后台登录后，token 从 chrome -> application -> cookie 中查取
  token: '',
  ids: deps.ids,
  isLocal: process.env.NODE_ENV === 'development'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
