<!-- 登录成功组件 -->
<template>
  <header>
    <div class="user">
      <div class="avator">
        <img :src="userInfo.avatar">
      </div>
      <div class="name">
        <span>{{ userInfo.nickName }}</span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'person',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('user', [
      'userInfo'
    ])
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
header {
  width 100%
  height 100%
  box-sizing border-box
  padding 0.5rem 0 0.5rem 0
  background linear-gradient(#333, #666, #333)
  .user, &.avator{
    width 100%
    height 100%
    text-align center
    .avator {
      img {
        width 80px
        height 80px
        border-radius 50%
        box-shadow 0 0 1rem #eee
      }
    }
    .name {
      box-sizing border-box
      margin-top  0.2rem
      font-size 0.462rem
      color #fff
    }
  }
}
</style>