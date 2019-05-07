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
        <div class="noData" v-if="userFavoriteList.length">
          <p>无内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'collect',
  data() {
    return {};
  },
  computed: {
    ...mapGetters('user', ['userFavoriteList', 'userLogin'])
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>

</style>