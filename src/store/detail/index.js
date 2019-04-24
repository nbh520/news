import { getNewsContent } from '@/api/detail/detail'
import { getLocal, setLocal, removeLocal} from './../../utils/cache'
export default {
  namespaced: true,
  state: {
    listArticle: {},        // 当前文章的数据
    currentArticle: {},     // 当前文章的具体内容
    historyArticle: [],     // 历史文章数据
  },
  getters: {
    listArticle: state => state.listArticle,
    currentArticle: state => state.currentArticle,
    historyArticle: state => state.historyArticle
  },
  mutations: {
    set_listArticle(state, val) {
      state.listArticle = val
    },
    set_currentArticle(state, val) {
      state.currentArticle = val
    },
    set_historyArticle(state, val) {
      state.historyArticle = val
      setLocal('history_Article', val)
    }
  },
  actions: {
    // 获取文章数据
    async get_Article_data({commit, state, rootState}, {url, source}) {
      let res = await getNewsContent(url, source)
      if (res.status === 1) {
        commit('set_currentArticle', res.data)
        return res.data
      } else {
        return
      }
    },

    // 获取历史浏览
    get_historyArticle({ commit }) {
      let historyData = JSON.parse(getLocal('history_Article'))
      if (historyData && historyData.length > 0) {
        commit('set_historyArticle', historyData)
      }
    }
  }
}