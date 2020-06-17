import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import deps from './card-deps.json'
import 'tcon'

Vue.config.productionTip = false
const local = process.env.NODE_ENV === 'development'
if (local) {
  window.xm.sourceCheck({
    // 使用的卡片组件名称，从管理后台上可以查到
    componentNames: deps
  })
}
// 每次 page show 去做检查更新
window.xm.on('onPageShow', () => {
  xm.sourceCheck({
    // 使用的卡片组件名称，从管理后台上可以查到
    componentNames: deps
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
