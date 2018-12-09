<!-- 下拉刷新 -->
<template>
  <div class="my-scroll">
    <div class="scroll-top">
      <div v-if="aspect === 2">
        <p v-if="state === 6">下拉刷新</p>
        <p v-if="state === 1">刷新中</p>
        <p v-if="state === 2">松开刷新</p>
        <p v-if="state === 3">刷新完成</p>
      </div>
    </div>
    <div class="scroll-list">
      <slot name="scrollList"></slot>
      <div class="scroll-bottom">
        <div v-if="state === 4">加载中</div>
        <div v-if="state === 5">加载完成</div>
        <div v-if="state === 7">没有更多</div>
      </div>
    </div>
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
</style>