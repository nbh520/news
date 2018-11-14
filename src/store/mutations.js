import {
  RECEIVE_NOW_NEWS
} from './mutation-types'

export default {
  [RECEIVE_NOW_NEWS](state, {
    now_news
  }) {
    state.now_news = now_news
  }
}
