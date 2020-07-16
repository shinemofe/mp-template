import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import deps from './card-deps.json'
import 'tcon'

Vue.config.productionTip = false
const sourceCheck = () => {
  window.xm.sourceCheck({
    // 使用的卡片组件名称，从管理后台上可以查到
    componentNames: deps
  })
}
window.xm.on('onAppResume', sourceCheck)
window.xm.on('onLoad', sourceCheck)
if (process.env.NODE_ENV === 'development') {
  sourceCheck()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
