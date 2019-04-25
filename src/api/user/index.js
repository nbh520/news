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