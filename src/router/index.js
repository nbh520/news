import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index/home',
      component: App,
      children: [
        {
          name: 'index',
          path: '/index',
          redirect: '/index/home',
          component: () => import('@/pages/index/index'),
          children: [
            {
              name: 'home',
              path: 'home',
              component: () => import('@/pages/index/home/home')
            },
            {
              name: 'video',
              path: 'video',
              component: () => import('@/pages/index/video/video')
            },
            {
              name: 'collect',
              path: 'collect',
              component: () => import('@/pages/index/collect/collect')
            },
            {
              name: 'user',
              path: 'user',
              component: () => import('@/pages/index/user/user')
            }
          ]
        }
      ]
    },
    // {
    //   path: '/home',
    //   component: Home,
    //   meta: {
    //     showFoot: true,
    //     keepAlive: true
    //   }
    // },
    // {
    //   path: '/video',
    //   component: Video,
    //   meta: {
    //     showFoot: true,
    //     keepAlive: true
    //   }
    // },
    // {
    //   path: '/find',
    //   component: Find,
    //   meta: {
    //     showFoot: true
    //   }
    // },
    // {
    //   path: '/mine',
    //   component: Mine,
    //   meta: {
    //     showFoot: true
    //   }
    // },
    // {
    //   path: '/search',
    //   component: Search
    // },
    // {
    //   path: '/new_content',
    //   component: NewContent
    // }
  ]
})
