<!--  -->
<template>
  <span class="iconfont icon-zan1" :class="{active: like}" @click="clickThumb"> {{ voteCount }} </span>
</template>

<script>
export default {
  name: 'like',
  props: ['likeCount'],
  data() {
    return {
      like: false,
      voteCount: this.likeCount
    }
  },
  methods: {
    clickThumb() {
      if (this.like) {
        this.voteCount = this.likeCount
        this.like = false
      } else {
        this.voteCount = this.likeCount + 1
        this.like = true
      }
    }
  }
  
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
span {
  display inline-block
  width 80px
  padding 10px 0
  text-align center
  border 1px solid #666
  border-radius 20px
  line-height 1
  font-size 12px
  color #333
  &.active {
    border 1px solid #d81e06
    color #d81e06  
  }
}
</style>