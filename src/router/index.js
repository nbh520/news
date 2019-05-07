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
              component: () => import('@/pages/index/home/home'),
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
              component: () => import('@/pages/index/user/user'),
              children: [
                {
                  name: 'myHistory',
                  path: 'myHistory',
                  component: () => import('@/pages/index/user/children/myHistory')
                },
                {
                  name: 'myLike',
                  path: 'myLike',
                  component: () => import('@/pages/index/user/children/myThumb')
                },
                {
                  name: 'myAttention',
                  path: 'myAttention',
                  component: () => import('@/pages/index/user/children/myAttention')
                },
                {
                  name: 'myComment',
                  path: 'myComment',
                  component: () => import('@/pages/index/user/children/myComment')
                }
              ]
            }
          ]
        },
        {
          name: 'detail',
          path: '/detail',
          component: () => import('@/pages/detail/detail')
        },
        {
          name: 'search',
          path: '/search',
          component: () => import('@/pages/search/search')
        }
      ]
    }
  ]
})
