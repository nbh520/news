<!-- 内容区 -->
<template>
  <div class="container">
    <!-- 下拉加载 -->
    <mt-loadmore :top-method="loadTop"
      @top-status-change="handleTopChange" ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'pull'">↓下拉刷新</span>
        <span v-show="topStatus === 'drop'">↑释放更新</span>
        <span v-show="topStatus === 'loading'">加载中...</span>
      </div>
      <list-item :dataJson="data" />
    </mt-loadmore>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'pullContainer',
  data() {
    return {
      topStatus: '', // 下拉状态
      data: {
        a: 12,
        b: 'asdf'
      }
    };
  },
  created() {
    this.init()
  },
  methods: {
    ...mapActions('index', [
      'get_listItem_data'
    ]),
    init() {
      this.get_listItem_data()
    },
    // 改变下拉状态
    handleTopChange(status) {
     this.topStatus = status
    },
    loadTop() {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 2000);
    },
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.contaner {
  height 100%
  .mint-loadmore-top {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
}
</style>