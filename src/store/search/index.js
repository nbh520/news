import { getSearchData } from '@/api/search'
export default {
  namespaced: true,
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {
    // 获取搜索数据
    async get_search_data({ commit, state }, { keyword, page }){
      let res = await getSearchData(keyword, page)
      return res
    }
  }
}