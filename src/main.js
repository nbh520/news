// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'


// 第三方库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 自定义组件
import listItem from '@/components/listItem' // 文章列表

// 注册全局组件
Vue.component('list-item', listItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
