// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 第三方的套件
import axios from 'axios'
import VueAxios from 'vue-axios'
// import component
import Loading from 'vue-loading-overlay'
// import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
// import VeeValidate
import VeeValidate from 'vee-validate'
// import 中文語系
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
// 自己撰寫
import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// 寫在這無法顯示中文
// VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.use(VeeValidate, {
  events: 'input|blur',
})
// 寫在這才能顯示中文
VeeValidate.Validator.localize('zh_TW', zhTWValidate)

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

// 前端跨域設定
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 導航守衛
router.beforeEach((to, from, next) => {
  // console.log('to', to, 'from', from, 'next', next);
  // ...
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
})