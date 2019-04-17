<!--  -->
<template>
  <nav>
    <div class="nav_ul">
      <a href="javascript:;"
       v-for="(item, index) in indexColumn" :key="index"
       :class="{active: indexActive == item.id}"
       @click.stop="navClick(item.id)">
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'categoryNav',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('index', [
      'indexColumn',
      'indexActive'
    ])
  },
  methods: {
    ...mapMutations('index', ['set_indexActive']),
    navClick(id) {
      this.set_indexActive(id)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
$nav_height = 0.96rem
nav {
  position relative
  background-color #f4f5f6
  border-bottom 1px solid #ddd
  .nav_ul {
    overflow: hidden;
    overflow-x: hidden;
    --webkit-overflow-scrolling touch
    white-space nowrap
    font-size 0
    a {
      display table-cell
      vertical-align middle
      font-size 17px
      padding 0 0.267rem
      margin-left 0.133rem
      height $nav_height
      color #505050
      white-space nowrap
      text-decoration none
      &.active {
          color: #333;
          border-bottom: 2px solid #333;
          font-weight: bold;
      }
    }
  }
}
</style>