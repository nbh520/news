// import fetch from './fetch.js'
import ajax from './ajax'

let BASEURL = 'http://localhost:4001'
/**
 * 获取当前实时新闻
 */
export const reqNowNews = () => ajax(`${BASEURL}/article/getNews`)
