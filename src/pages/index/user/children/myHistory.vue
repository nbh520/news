<!-- 我的浏览历史 -->
<template>
  <transition name="fadeIn">
    <div class="myHistory">
      <my-top-header title="历史记录">
        <a slot="left" class="back iconfont icon-left" @click.stop="$router.go(-1)"></a>
        <a slot="right" class="menu iconfont icon-gengduo"></a>
      </my-top-header>
      <div class="content">
        <div class="container">
          <list-item :dataJson="historyArticle" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'myHistory',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('detail', [
      'historyArticle'
    ])
  },
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.myHistory {
  position absolute 
  top 0
  left 0
  right 0
  height 100%
  overflow hidden
  z-index 1000
  .content {
    position relative
    background-color #fff
  }
}
</style>