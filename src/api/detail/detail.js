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

// 提交评论
export const postCommentData = ( commentData ) => {
  return request({
    url: 'comment/postComment',
    method: 'post',
    data: {
      commentData
    }
  })
}