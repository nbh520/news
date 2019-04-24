import request from '@/utils/request'

export const getNewsContent = (url, source) => {
  return request({
    url: 'article/getNewsContent',
    method: 'get',
    params: {
      url,
      source
    }
  })
}