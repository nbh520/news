<!-- 轮播组件  -->
<template>
  <div class="swiper-box">
    <pull-container />
  </div>
</template>

<script>
import pullContainer from './pullContainer'
export default {
  name: 'swiperContainer',
  components: {
    pullContainer
  },
  data() {
    return {};
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.swiper-box{
  width 100%
  height 100%
  z-index 0
  background #fff
}
</style>