<!-- 轮播组件  -->
<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
    <swiper-slide v-for="(item, index) in indexColumn" :key="index">
      <pull-container :type="item.id" />
      <!-- <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3387801611,249624414&fm=58" alt="" srcset=""> -->
    </swiper-slide>
  </swiper>
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
      'indexColumn',
      'indexActive'
    ])
  },
  data() {
    return {
      swiperOption: {

      }
    };
  },
  watch: {
    indexActive() {
      this.slideTo()
    }
  },
  methods: {
    slideTo() {
      this.$refs.mySwiper.swiper.slideTo(this.indexActive - 1, 300, true)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.swiper-box{
  width 100%
  height 100%
  z-index 0
  background #fff
  padding-bottom 50px
}
</style>