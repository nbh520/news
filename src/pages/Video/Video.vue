<!--  -->
<template>
  <div class="page-loadmore">
    <section class="header">
      <Header></Header>
      <!-- <CategorySelect></CategorySelect> -->
    </section>
    <div class="down-refresh" :class="downRef ? 'down-refresh-after': 'down-refresh-before'">更新{{this.mountVideoCount}}条视频</div>
    <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }"></div>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore   :top-method="loadTop" @translate-change="translateChange"  @top-status-change="handleTopChange" ref="loadmore">
        <OneVideoMessage v-for="(item, index) in videoList" :key="index" :video='item'></OneVideoMessage>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
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
import { reqRecommendVideo } from "@/api/server.js"
export default {
  data() {
    return {
      videoList: [],
      topStatus: "",
      wrapperHeight: 0,
      translate: 0,
      moveTranslate: 0,
      mountVideoCount: 0, //更新视频条数
      downRef: false, //下拉刷新
    };
  },
  methods: {
    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
      console.log(status);
    },
    translateChange(translate) {
      const translateNum = +translate;
      this.translate = translateNum.toFixed(2);
      this.moveTranslate = (1 + translateNum / 70).toFixed(2);
    },
    loadTop() {
      reqRecommendVideo().then(res => {
        if(res.status === 1){
          this.videoList = res.data.concat(this.videoList)
          this.mountVideoCount = res.data.length
          this.$refs.loadmore.onTopLoaded();
          this.downRef = true
          setTimeout( () => {
            this.downRef = false
          }, 1000)
        }
      })

    }
  },
  created() {
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    console.log(this.$refs.wrapper);
    //获取随机视频
    reqRecommendVideo().then(res => {
      if(res.status === 1){
        this.videoList = res.data
      }
    })
  },
  components:{
    Header,
    CategorySelect,
    OneVideoMessage
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
.down-refresh{
  width 100%
  height 30px
  background-color $lightBlue
  color $blue
  display flex
  justify-content center
  align-items center
}
.down-refresh-before{
  margin-top -30px;  
}
.down-refresh-after{
  margin-top 0  
}

.mint-loadmore-top{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  line-height: 40px;
  margin-top: -40px;
}
</style>