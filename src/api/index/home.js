import request from '@/utils/request'

// 获取多少条新闻数
export const reqGetNews = limit => {
  return request({
    url: 'article/getNewsList',
    params: { limit },
    method: 'get'
  })
}

// 获取所有新闻类型
export const reqAllCategory = () => {
  return request({
    url: 'category/getAllCategory',
    method: 'get'
  })
}