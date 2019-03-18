import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Video from '@/pages/Video/Video.vue';
import Find from '@/pages/Find/Find.vue'
import Mine from '@/pages/Mine/Mine.vue'
import Search from '@/pages/Search/Search.vue'

import NewContent from '@/pages/NewContent/New_content'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFoot: true,
        keepAlive: true
      }
    },
    {
      path: '/video',
      component: Video,
      meta: {
        showFoot: true,
        keepAlive: true
      }
    },
    {
      path: '/find',
      component: Find,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta: {
        showFoot: true
      }
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/new_content',
      component: NewContent
    }
  ]
})
