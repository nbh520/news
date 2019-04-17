<!-- 新闻&视频列表 -->
<template>
  <ul class="listItem">
    <template v-for="data in items">
      <!-- 一张小图 -->
      <li>
        <div class="news_title">
          <h3> {{data }}</h3>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    dataJson: {
      type: Object,
      default: [1,2,3,4,5]
    }
  },
  data() {
    return {
      items: [1,2,3,5,6,7]
    };
  },
  mounted() {
    console.log(this.dataJson)
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>

</style>