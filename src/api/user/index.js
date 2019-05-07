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
export const queryUserOption = (id, filed) => {
  return request({
    url: 'user/queryUserOption',
    method: 'post',
    data: {
      id,
      filed
    }
  })
}

// 提交用户的点赞、收藏
export const postUserOption = (id, likeList, favoriteList) => {
  return request({
    url: 'user/postUserOption',
    method: 'post',
    data: {
      id,
      likeList,
      favoriteList
    }
  })
}

// 获取评论
export const getCommentData = (id) => {
  return request({
    url: 'comment/getUserComment',
    method: 'post',
    data: {
      id
    }
  })
}

