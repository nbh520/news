import request from '@/utils/request'

// 获取视频列表
export const getVideoList = (limit = 10) => {
  return request({
    url: 'video/getRecommendVideo',
    method: 'get',
    params: {
      limit
    }
  })
}