import { postLogin } from '@/api/user'
import { getLocal, setLocal, removeLocal} from './../../utils/cache'
export default {
  namespaced: true,
  state: {
    userInfo: {},         //用户信息
    userLogin: false,     // 用户是否登录
  },
  getters: {
    userInfo: state => state.userInfo,
    userLogin: state => state.userLogin
  },
  mutations: {
    set_userInfo(state, val) {
      state.userInfo = val
    },
    set_userLogin(state, val) {
      state.userLogin = val
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
      setLocal('isLogin', userInfo)
      return true
    },

    // 退出登录
    loginOut({ commit }) {
      commit('set_userLogin', false)
      removeLocal('isLogin')
    }
  }
}