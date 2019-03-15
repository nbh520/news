<!--  -->
<template>
  <div class="main">
    <section class="header">
      <Header></Header>
      <CategorySelect></CategorySelect>
    </section>
    <section v-if="allNews" class="content">
      <div class="page-loadmore-wrapper" ref="wrapper">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
          <ul class="page-loadmore-list">
            <OneImgMessage :news="item" v-for="(item, index) in allNews" :key="index" class="page-loadmore-listitem"
            ></OneImgMessage>
          </ul>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake" :size="12"></mt-spinner>
            </span>
          </div>
        </mt-loadmore>
      </div>
    </section>
  </div>
  
</template>

<script>
import Header from "@/components/Header/Header.vue";
import CategorySelect from "@/components/Category/CategorySelect.vue";
import Search from "../Search/Search.vue";
import OneImgMessage from "@/components/Message/OneImgMessage.vue";
import { mapState } from "vuex";
import {reqNowNews} from '@/api/server.js'

export default {
  data() {
    return {
      allNews: [], //实时新闻
      wrapperHeight: 0, //新闻内容高度
      translate: 0,
      moveTranslate: 0,
      topStatus: ""
    };
  },
  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop() {
      setTimeout(() => {
        console.log('结束刷新')
        this.$refs.loadmore.onTopLoaded();
      }, 5500);
    }
  },
  async mounted() {
    //更新首页新闻
    reqNowNews().then(res => {
      this.allNews = res.data
      console.log(res.data)
    })
    
    
  },
  computed: {
  },
  components: {
    Header,
    CategorySelect,
    Search,
    OneImgMessage
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.main {
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
  }

  .content {
    margin: 85px 0 50px 0;
    height: auto;

    .mint-loadmore-top {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      line-height: 40px;
      margin-top: -40px;
    }
  }
}
</style>