<!--  -->
<template>
  <div class="myThumb">
    <my-top-header title="我的收藏">
      <!-- <a slot="left" class="back iconfont icon-left" @click.stop="goBack" ></a> -->
      <a slot="right" class="menu iconfont icon-laji"></a>
    </my-top-header>
    <div class="content">
      <div class="container">
        <list-item :dataJson="userFavoriteList" />
        <div class="noData" v-if="!userFavoriteList.length">
          <p>无内容,干净去添加吧</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { getLocal, setLocal } from '@/utils/cache'
export default {
  name: 'collect',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('user', ['userFavoriteList', 'userLogin']),
    
  },
  methods: {
    ...mapMutations('user', [
      'set_userFavoriteList'
    ])
  },
  created() {
    if (getLocal('favoriteList')) {
      let res = JSON.parse(getLocal('favoriteList'))
      console.log(res)
      this.set_userFavoriteList(res)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.myThumb {
  .content {
    .noData {
      p {
        overflow hidden
        text-align center
        padding 10px 0
        font-size 18px
      }
    }
  }
}
</style>