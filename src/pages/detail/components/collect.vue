<!--  -->
<template>
  <span class="iconfont" :class="{'icon-sc': collect,active: collect,'icon-shoucang1': !collect}" @click="collect = !collect">
    收藏
  </span>
 
</template>

<script>
export default {
  name: 'collect',
  data() {
    return {
      collect: false
    };
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