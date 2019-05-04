import Vue from 'vue'
import Vuex from 'vuex'

import index_module from './index/index'
import detail_module from './detail/index'
import video_module from './video/index'
import user_module from './user/index'
import search_module from './search/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index: index_module,
    detail: detail_module,
    video: video_module,
    user: user_module,
    search: search_module
  }
})
