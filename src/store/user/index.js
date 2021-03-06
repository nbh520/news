import { postLogin, postUserOption, getCommentData, deleteCommentData } from '@/api/user'
import { getLocal, setLocal, removeLocal} from './../../utils/cache'
export default {
  namespaced: true,
  state: {
    userInfo: {},         // 用户信息
    userLogin: false,     // 用户是否登录
    userLikeList: [],     // 用户点赞的列表
    userFavoriteList: [], // 用户收藏列表
  },
  getters: {
    userInfo: state => state.userInfo,
    userLogin: state => state.userLogin,
    userLikeList: state => state.userLikeList,
    userFavoriteList: state => state.userFavoriteList
  },
  mutations: {
    set_userInfo(state, val) {
      state.userInfo = val
    },
    set_userLogin(state, val) {
      state.userLogin = val
    },
    set_userLikeList(state, val) {
      state.userLikeList = val
      setLocal('likeList', val)
    },
    set_userFavoriteList(state, val) {
      state.userFavoriteList = val
      setLocal('favoriteList', val)
    }
  },
  actions: {
    // 用户登录
    async login({ commit, state }, { username, password }) {
      let res = await postLogin(username, password)
      let userInfo = {
        avatar: res.avatar,
        nickName: res.nickname,
        userId: res.userId
      }
      commit('set_userInfo', userInfo)
      commit('set_userLogin', true)
      commit('set_userLikeList', res.likeList)
      commit('set_userFavoriteList', res.favoriteList)
      setLocal('isLogin', userInfo)
      return true
    },

    // 退出登录
    loginOut({ commit }) {
      commit('set_userLogin', false)
      removeLocal('isLogin')
    },

    // 用户点赞
    user_click_thumb({ commit }, pages) {
      if (getLocal('likeList')) {
        let list = JSON.parse(getLocal('likeList'))
        console.log(list)
        list.unshift(pages)
        commit('set_userLikeList', list)
      } else {
        commit('set_userLikeList', [pages])
      }
    },

    // 提交用户本地记录
    async post_user_Local({ commit, state }, { likeList, favoriteList }) {
      let id = state.userInfo.userId
      let res = await postUserOption(id, likeList, favoriteList)
      return res
    },

    // 获取用户评论
    async get_comment_data({ state }) {
      let res = await getCommentData(state.userInfo.userId)
      return res
    },
    // 删除用户的评论
    async delete_comment_data({ state }, ids) {
      const idArr = Array.from(ids)
      let res = await deleteCommentData(idArr)
      return res
    }
  }
}