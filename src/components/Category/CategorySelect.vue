<!-- 首页新闻类别选择 -->
<template>
  <div class="category">
    <ul class="top-category-menu">
      <li>关注</li>
      <li class="selected">推荐</li>
      <li v-for="(category, index) in categorys" :key="index" @click="getNewsCategoryData(category.name)">{{ category.name }}</li>
    </ul>
  </div>
</template>

<script>
import { reqAllCategory } from '@/api/server'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      categorys: []
    };
  },
  computed: {
    ...mapState('index', [
      'indexColumn'
    ])
  },
  async created() {
    const result = await reqAllCategory()
    if(result.status === 1){
      this.categorys = result.data.filter(item => item.name !== '暂无')
    }
    console.log(this.indexColumn)
  },
  methods: {
    getNewsCategoryData(name){
      this.$emit('getNewsCategoryData', name)
    }
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl';

.category {
  width: 100%;
  height: 35px;
  background-color: #fff;
  background-color: #f4f5f6;
  border-bottom: 1px solid #ccc;
  bottom-border-1px(#ccc);

  >.top-category-menu {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    height: 100%;
    .selected{
      font-weight 700  
    }
    li {
      width: 50px;
      height: 100%;
      display: inline-block;
      text-align: center;
      line-height: 35px;
    }
  }

  ::-webkit-scrollbar {
    height: 0;
  }
}
</style>