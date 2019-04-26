<!-- 点赞 -->
<template>
  <transition name="fadeIn">
    <div class="myThumb">
      <my-top-header title="我的点赞">
        <a slot="left" class="back iconfont icon-left" @click.stop="goBack" ></a>
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
  name: 'myLike',
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
.myThumb {
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