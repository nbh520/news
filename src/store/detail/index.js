import { getNewsContent, postCommentData } from '@/api/detail/detail'
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
      let res
      if (!res) {
        res = await getNewsContent(url, source)
        let historyData = [state.listArticle, ...state.historyArticle]
        // 查看本地历史缓存记录是否有记录
        if (!state.historyArticle.includes(state.listArticle)) {
          commit('set_historyArticle', historyData)
        }
      }
      if (res) {
        commit('set_currentArticle', res)
      }
      return res   
    },

    // 获取历史浏览
    get_historyArticle({ commit }) {
      let historyData = JSON.parse(getLocal('history_Article'))
      if (historyData && historyData.length > 0) {
        commit('set_historyArticle', historyData)
      }
    },

    // 提交评论的数据
    async post_comment_data({ state, rootState }, content) {
      let commentData = {
        article_id: state.currentArticle.info.id,
        user_id: rootState.user.userInfo.userId,
        avatar: rootState.user.userInfo.avatar,
        nickname: rootState.user.userInfo.nickName,
        to_uid: null,
        content, 
        sourceId: state.currentArticle.info.source_id
      }
      let res = await postCommentData(commentData)
      return res
    },

    // 提交回复的数据
    async post_reply_data({ state, rootState }, { uid, content }){}
    
  }
}