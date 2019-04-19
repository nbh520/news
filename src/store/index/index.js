import { reqAllCategory, reqGetNews } from '@/api/index/home'
import fetch from '../../utils/request'
export default {
  namespaced: true,
  state: {
    indexColumn: [{
      name: '推荐',
      id: 1
    }],
    indexActive: 1, // 选中的栏目id
  },
  getters: {
    indexColumn: state => {
      return state.indexColumn
    },
    indexActive: state => {
      return state.indexActive
    }
  },
  mutations: {
    set_indexColumn(state, arr) {
      state.indexColumn = arr
    },
    set_indexActive(state, id) {
      state.indexActive = id
    }
  },
  actions: {
    // 获取栏目数据
    async get_indexColumn_data({ commit, state, dispatch }){
      let result = await reqAllCategory()
      result = result.data.filter(item => item.name !== '暂无')
      let res = [...state.indexColumn, ...result]
      commit('set_indexColumn', res)
      return res
    },

    // 获取文章列表数据
    async get_listItem_data({}, {limit, categoryName}) {
      let result = await reqGetNews(limit, categoryName)
      return result.data
    }
  }
}