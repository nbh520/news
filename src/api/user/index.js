import request from '@/utils/request'

export const postLogin = (username, password) => {
  return request({
    url: 'user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取用户的点赞（like）、收藏（favorite）、评论（comment）
export const postUserOption = (id, filed) => {
  return request({
    url: 'user/queryUserOption',
    method: 'post',
    data: {
      id,
      filed
    }
  })
}