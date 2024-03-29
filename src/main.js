// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#test',
  router,
  components: { App },
  template: '<App/>' // <App></App>と同じことをしている(上のcomponents:{App}を呼び出している)
})
