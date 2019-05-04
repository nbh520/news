import request from '@/utils/request'

export const getSearchData = (keyword, page) => {
  return request({
    url: 'search/search',
    method: 'get',
    params: {
      keyword,
      page
    }
  })
}