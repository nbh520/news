import request from '@/utils/request'

// 获取多少条新闻数
export const reqGetNews = (limit, category) => {
  return request({
    url: 'article/getNewsList',
    params: { limit, category },
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