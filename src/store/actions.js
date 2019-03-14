import {
  reqNowNews
} from '../api/server'
import {
  RECEIVE_NOW_NEWS
} from './mutation-types'


export default {

  //获取实时新闻
  async getNowNews({commit}) {
    const result = await reqNowNews();
    if (result.code === 0) {
      const now_news = result.data;
      commit(RECEIVE_NOW_NEWS, { now_news })
    }
  }




}
