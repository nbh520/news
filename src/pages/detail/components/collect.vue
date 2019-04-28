<!--  -->
<template>
  <span class="iconfont" v-if="type === 'btn'" :class="iconObject" @click="collect = !collect">
    收藏
  </span>
  <a class="iconfont" v-else-if="type === 'icon'" :class="iconObject" @click="collect = !collect"></a>
  
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { getLocal, setLocal } from '@/utils/cache'
import { Toast } from 'mint-ui';
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
      collect: false,
    };
  },
  computed: {
    ...mapGetters('detail', [
      'listArticle'
    ]),
    ...mapGetters('user', [
      'userFavoriteList'
    ]),
    iconObject() {
      return {
        active: this.collect,
        'icon-sc': this.collect,
        'icon-shoucang1': !this.collect
      }
    }
  },
  watch: {
    collect(val) {
      let list = this.getFavoriteList()
      if (val) {      
        if (list) {
          if(list.find(item => item.id === this.listArticle.id)){
            return;
          }
          list.unshift(this.listArticle)
          this.set_userFavoriteList(list)
          Toast({
            message: '收藏成功',
            iconClass: 'icon icon-success',
            duration: 800
          })
        } else {
          this.set_userFavoriteList([this.listArticle])
        }
      } else {
        list.splice(list.findIndex(item => item.id === this.listArticle.id), 1)
        this.set_userFavoriteList(list)
        Toast({
          message: '取消收藏',
          iconClass: 'icon icon-success',
          duration: 800
        })
      }
    },
    userFavoriteList() {
      this.init()
    }
  },
  methods: {
    ...mapMutations('user', [
      'set_userFavoriteList'
    ]),
    getFavoriteList() {
      if (getLocal('favoriteList')) {
        return JSON.parse(getLocal('favoriteList'))
      } else {
        return false
      }
    },
    init() {
    let list = this.getFavoriteList()
      if (list) {
        list.find(item => item.id === this.listArticle.id) ? this.collect = true : this.collect = false
      }
    }
  },
  created() {
    this.init()
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