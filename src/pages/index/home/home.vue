<!--  -->
<template>
  <div id="home">
    <!-- 头部搜索组件 -->
    <home-header />
    <!-- 分类导航 -->
    <category-nav />
    <!-- 内容区域 -->
    <swiper-container />
  </div>
</template>

<script>
import homeHeader from './components/homeHeader'
import categoryNav from './components/categoryNav'
import swiperContainer from './components/swiperContainer'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  components: {
    homeHeader,
    categoryNav,
    swiperContainer
  },
  methods: {
    ...mapActions('index', [
      'get_indexColumn_data'
    ])
  },
  created() {
    this.get_indexColumn_data()
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#home{
  width 100%
  height 100%
}
</style>