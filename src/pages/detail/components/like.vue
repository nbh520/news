<!--  -->
<template>
  <span class="iconfont icon-zan1" :class="{active: like}" @click=" like = !like"> {{ voteCount }} </span>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { getLocal, setLocal } from '@/utils/cache'
export default {
  name: 'like',
  props: ['likeCount'],
  data() {
    return {
      like: false,
      voteCount: this.likeCount
    }
  },
  computed: {
    ...mapGetters('user',[
      'userLogin'
    ]),
    ...mapGetters('detail', [
      'listArticle'
    ])
  },
  watch: {
    // 点赞和取消点赞
    like(val) {
      let list = this.getLikeList()
      if (val) {      
        if (list) {
          if(list.find(item => item.id === this.listArticle.id)){
            return;
          }
          list.unshift(this.listArticle)
          this.set_userLikeList(list)
        } else {
          this.set_userLikeList([this.listArticle])
        }
        this.voteCount = this.likeCount + 1
      } else {
        list.splice(list.findIndex(item => item.id === this.listArticle.id), 1)
        this.set_userLikeList(list)
        this.voteCount = this.likeCount
      }
    }
  },
  methods: {
    ...mapMutations('user', [
      'set_userLikeList'
    ]),
    init() {
      let list = this.getLikeList()
      if (list) {
        list.find(item => item.id === this.listArticle.id) ? this.like = true : this.like = false
      }
    },
    getLikeList() {
      if (getLocal('likeList')) {
        return JSON.parse(getLocal('likeList'))
      } else {
        return false
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
</style>