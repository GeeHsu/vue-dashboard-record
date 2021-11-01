import Vue from 'vue'
import Router from 'vue-router'
// 之後都不會用到，可以直接移除
// import HelloWorld from '@/components/HelloWorld'
// 把Dashboard給載進來
import Dashboard from '@/components/Dashboard'
// 把Login給載進來
import Login from '@/components/pages/Login'
// 把Product給載進來
import Products from '@/components/pages/Products'
// 把Order給載進來
import Orders from '@/components/pages/Orders'
// 把Coupon給載進來
import Coupons from '@/components/pages/Coupons'
// 把CustomerOrder給載進來
import CustomerOrder from '@/components/pages/CustomerOrders' 
// 把CustomerCheckout給載進來
import CustomerCheckout from '@/components/pages/CustomerCheckout' 



Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // 重新導向
    {
      path: '*',
      // redirect: 'login',
      redirect: 'shop/customer_order',
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
      component: Login,
    },
    // Dashboard的路徑
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      // 設定 meta 是否需要驗證
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        // Orders的路徑
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        // Coupons的路徑
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
      ],
    },
    // 客戶購物的路徑(使用與Dashboard相同的模板)
    {
      // path: '/',
      // name: 'Dashboard',
      path: '/shop',
      name: 'DashboardCustomerOrder',
      component: Dashboard,
      // 設定 meta 是否需要驗證
      meta: { requiresAuth: true },
      children: [
        // CustomerOrder的路徑
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        // CustomerCheckout的路徑 
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
      ],
    },
  ]
})
