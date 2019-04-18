<!--  -->
<template>
  <transition name="sildeIn">
    <div id="index">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <router-view></router-view>
      </transition>
      <foot></foot>
    </div>
  </transition>
</template>

<script>
import foot from './foot'
export default {
  name: 'index',
  components: {
    foot
  },
  data() {
    return {};
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
#index {
  width 100%
  height 100%  
}
</style>