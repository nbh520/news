<!-- 我的评论 -->
<template>
  <transition name="fadeIn">
    <div class="myComment">
      <my-top-header title="我的评论">
        <a slot="left" class="back iconfont icon-left"  @click.stop="goBack" ></a>
        <a slot="right" class="menu iconfont icon-laji"></a>
      </my-top-header>
      <div class="content">
        <div class="container">
          <!-- <list-item :dataJson="historyArticle" /> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'myComment',
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.myComment {
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