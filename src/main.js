import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tcon'

Vue.config.productionTip = false

// 每次 page show 去做检查更新
window.xm.on('onPageShow', () => {
  xm.sourceCheck({
    // 使用的卡片组件名称，从管理后台上可以查到
    componentNames: []
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
