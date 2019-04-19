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
      <list-item :dataJson="contentData" />
    </mt-loadmore>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'pullContainer',
  props: ['type'],
  data() {
    return {
      topStatus: '', // 下拉状态
      contentData: [], // 列表数据
      classPage: 1,       // 当前栏目的翻页页数
    };
  },
  created() {
    this.init()
  },
  computed: {
    ...mapGetters('index', [
      'indexActive',
      'indexColumn'
    ])
  },
  watch: {
    indexActive() {
      this.init()
      
    }
  },
  methods: {
    ...mapActions('index', [
      'get_listItem_data'
    ]),
    async init() {
      if (this.type === this.indexActive && this.contentData.length === 0 ){
        this.loadTop()
      }
      
    },
    // 改变下拉时的状态
    handleTopChange(status) {
     this.topStatus = status
    },
    loadTop() {
      // 获取当前栏目名
      let categoryName = this.indexColumn.filter(item => item.id === this.indexActive)[0].name
      this.get_listItem_data({limit:10, categoryName}).then(res => {
        this.contentData.unshift(...res)
      })
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 2000);
    },
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.container {
  height 100%
  .mint-loadmore-top {
    height: 50px;
    line-height: 50px;
    font-size: 14px;
  }
}
</style>