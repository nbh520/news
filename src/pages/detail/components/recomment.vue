<!-- 推荐 -->
<template>
  <div class="recommend">
    <div class="comment_title">
      <div class="line">
        <div class="title">相关推荐</div>
      </div>
    </div>
    <list-item :dataJson="jsonData" />
  </div>
</template>

<script>
export default {
  name: 'recomment',
  props: ['data'],
  data() {
    return {
      jsonData: this.data
    };
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.recommend {
  width 100%
  position relative
  padding-top 0.533rem
  .comment_title {
    margin-bottom 15px
    position relative
    .line {
      position relative
      width 2.8rem
      margin 0 auto
      text-align center
      &:before {
        content ''
        border-top 2px solid #aaa
        display block
        position absolute
        width 0.4rem
        top 50%
        left 0
      }
      &:after {
        content: ''
        border-top 2px solid #aaa
        display block
        position absolute
        width 0.4rem
        top 50%
        right 0
      }
    }
    .title {
      font-size 14px
      font-weight bold
    }
  }
}
</style>