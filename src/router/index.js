// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import about from '@/components/about'
import info from '@/components/info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/info',
      component: info
    }
  ]
})
