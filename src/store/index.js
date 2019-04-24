import Vue from 'vue'
import Vuex from 'vuex'

import index_module from './index/index'
import detail_module from './detail/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index: index_module,
    detail: detail_module
  }
})
