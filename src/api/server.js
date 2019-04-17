// import fetch from './fetch.js'
import ajax from './ajax'

// let BASEURL = 'http://localhost:4001'
// let BASEURL = 'http://nibohan.xin:4001'
let BASEURL = '/api'

/**
 * 获取当前首页实时新闻
 */
export const reqNowNews = () => ajax(`${BASEURL}/article/getNews`)

/**
 *  获取多少条新闻数
 */
export const reqGetNews = (limit) => ajax(`${BASEURL}/article/getNewsList`,{limit})

/**
 *  TODO: 获取新闻的内容
 * @param {新闻id值} id 
 */
export const reqNewsContent = (url, source) => ajax(`${BASEURL}/article/getNewsContent`, {url, source})

/**
 * 获取推荐视频
 */
export const reqRecommendVideo = (limit = 10) => ajax(`${BASEURL}/video/getRecommendVideo`, {limit})


/**
 * 搜索新闻
 * @param {关键字} keyword 
 */
export const reqSearchNews = (keyword) => ajax(`${BASEURL}/article/queryNews`, {keyword})

// 获取所有新闻类型
export const reqAllCategory = () => ajax(`${BASEURL}/category/getAllCategory`)

// 根据新闻类型获取新闻
export const reqNewsByCategory = (name, limit = 10) => ajax(`${BASEURL}/article/queryNewsByCategory` ,{name, limit}, 'POST')