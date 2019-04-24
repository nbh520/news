// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/css/reset.styl'


// 第三方库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Mint, {MessageBox, Toast, Indicator} from 'mint-ui'
import 'mint-ui/lib/style.css'


// 自定义组件
import listItem from '@/components/listItem'       // 文章列表
import login from '@/components/login'             // 登录
import myTopHeader from '@/components/myTopHeader' // 顶层头部组件

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$msgBox = MessageBox
Vue.prototype.$toast = Toast
Vue.prototype.$indicator = Indicator




// 注册全局组件
Vue.component('list-item', listItem)
Vue.component('login', login)
Vue.component('my-top-header', myTopHeader)

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
