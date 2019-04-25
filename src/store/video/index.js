import { getVideoList } from '@/api/video'
export default {
  namespaced: true,
  state: {
    
  },
  getters: {
    
  },
  mutations: {
    
  },
  actions: {
    // 获取视频列表数据
    async get_videoList({ rootState }, { limit = 10 }) {
      let res = await getVideoList(limit)
      return res
    }
  }
}