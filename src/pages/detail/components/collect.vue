<!--  -->
<template>
  <span class="iconfont" v-if="type === 'btn'" :class="iconObject" @click="selected = !selected">
    收藏
  </span>
  <a class="iconfont" v-else-if="type === 'icon'" :class="iconObject" @click="selected = !selected"></a>
  
</template>

<script>
export default {
  name: 'collect',
  props: {
    type: {
      type: String,
      default: 'btn'
    }
  },
  data() {
    return {
      selected: false,
    };
  },
  computed: {
    iconObject() {
      return {
        active: this.selected,
        'icon-sc': this.selected,
        'icon-shoucang1': !this.selected
      }
    }
  },
  methods: {
    test() {
      this.selected = !this.selected
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
a {
  font-size 20px
  &.active {
    color #d81e06  
  }
}
</style>