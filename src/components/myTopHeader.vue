<!-- 顶层头部组件 -->
<template>
  <header>
    <div class="top-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="mid">
        {{ title }}
        <slot name="mid"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'myTopHeader',
  props: {
    title: String
  },
  data() {
    return {};
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
$header_height = 1.335rem
$red = #c34943;
header {
  position fixed
  display block
  width 100%
  overflow hidden
  background-color $red
  color #fff
  font-size 16px
  top 0
  left 0
  z-index 666
  .top-bar {
    position relative
    height $header_height
    display flex
    align-items center
    .left, .right {
      width $header_height
      height $header_height  
      display flex
      align-items center
      justify-content center
      a {
        color #fff
        font-size 20px
      }
      
    }
    .mid {
      flex 1
      font-weight 700
      text-align center
    }
  }
}
</style>