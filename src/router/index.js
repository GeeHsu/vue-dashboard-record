import Vue from 'vue'
import Router from 'vue-router'
// 之後都不會用到，可以直接移除
// import HelloWorld from '@/components/HelloWorld'
// 把 Dashboard給載進來
import Dashboard from '@/components/Dashboard'
// 把Login給載進來
import Login from '@/components/pages/Login'
// 把 Product給載進來
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({
  routes: [
    // 重新導向
    {
      path: '*',
      redirect: 'login',
    },
    // 之後都不會用到，可以直接移除
    // // 首頁的路徑
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true }
    // },
    // 新增一個登入的路徑
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // Dashboard的路徑
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],
    },
  ]
})
