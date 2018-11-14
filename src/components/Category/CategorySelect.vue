<!-- 首页新闻类别选择 -->
<template>
  <div class="category">
    <ul class="top-category-menu" > 
      <li>关注</li>
      <li>推荐</li>
      <li>影视</li>
      <li>游戏</li>
      <li>社会</li>
      <li>音乐</li>
      <li>综艺</li>
      <li>美食</li>
      <li>宠物</li>
      <li>儿童</li>
      <li>生活</li>
      <li>体育</li>
      <li>懂车帝</li>
      <li>文化</li>
      <li>时尚</li>
      <li>科技</li>
      <li>搞笑</li>
    </ul>

 
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.category {
  width: 100%;
  height: 35px;
  background-color: #fff;
  margin-top: 50px;
  background-color: #f4f5f6;
  bottom-border-1px(#ccc);

  >.top-category-menu {
    overflow: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    height: 100%;

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