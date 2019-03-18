<!--  -->
<template>
  <div class="page-loadmore">
    <section class="header">
      <Header></Header>
      <CategorySelect></CategorySelect>
    </section>
    <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }"></div>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore   :top-method="loadTop" @translate-change="translateChange"  @top-status-change="handleTopChange" ref="loadmore">
        <OneVideoMessage></OneVideoMessage>
        <!-- <OneVideoMessage></OneVideoMessage>
        <OneVideoMessage></OneVideoMessage> -->
        <ul class="page-loadmore-list">
          <li v-for="(item,index) in list" :key="index" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>加载中
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import CategorySelect from "@/components/Category/CategorySelect.vue";
import OneVideoMessage from "@/components/Message/OneVideoMessage.vue";
export default {
  data() {
    return {
      list: [],
      topStatus: "",
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0
    };
  },
  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
      console.log(status);
    },
    translateChange(translate) {
      console.log(translate);
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop() {
      setTimeout(() => {
        let firstValue = this.list[0];
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 5500);
    }
  },
  created() {
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
    console.log(this.$refs.wrapper);
  },
  components:{
    Header,
    CategorySelect,
    OneVideoMessage
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

.mint-loadmore-top{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 60px;
  margin-top: -60px;
}
</style>