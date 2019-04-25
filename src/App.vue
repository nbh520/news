<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getLocal } from '@/utils/cache'
export default {
 name: 'App',
 computed: {
   // 获取用户是否登录
   ...mapGetters('user', [
     'userLogin'
   ])
 },
 methods: {
   ...mapMutations('user', [
     'set_userLogin',
     'set_userInfo'
   ]),
   init() {
     this.login_check()
   },
   // 登录校验
   login_check() {
     if (!this.userLogin) {
       console.log(getLocal('isLogin'))
       if (getLocal('isLogin')) {
         this.set_userLogin(true)
         this.set_userInfo(JSON.parse(getLocal('isLogin')))
       }
     }
   }
 },
 created() {
   this.init()
 }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
