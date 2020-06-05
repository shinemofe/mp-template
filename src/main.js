import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
xm.sourceCheck && xm.sourceCheck({
  // 使用的卡片 id，从管理后台上可以查到
  ids: []
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
