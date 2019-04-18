<!-- 轮播组件  -->
<template>
  <swpier :options="swiperOption" class="swiper-box">
    <swiper-slide v-for="(item, index) in indexColumn" :key="index">
      <pull-container />
    </swiper-slide>
  </swpier>
</template>

<script>
import pullContainer from './pullContainer'
import { mapGetters } from 'vuex'
export default {
  name: 'swiperContainer',
  components: {
    pullContainer
  },
  computed: {
    ...mapGetters('index', [
      'indexColumn'
    ])
  },
  data() {
    return {
      swiperOption: {

      }
    };
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