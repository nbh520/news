<!--  -->
<template>
  <div class="main">
    <section class="header">
      <Header></Header>
      <CategorySelect></CategorySelect>
    </section>
    <section v-if="allNews" class="content">
      <OneImgMessage :news="item" v-if="item.imgsrc&&item.docid" v-for="(item, index) in allNews" :key="index"></OneImgMessage>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import CategorySelect from "@/components/Category/CategorySelect.vue";
import Search from "../Search/Search.vue";
import OneImgMessage from "@/components/Message/OneImgMessage.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      allNews: [] //实时新闻
    };
  },
  mounted() {
    return new Promise((resolve, reject) => {
      this.$store.dispatch("getNowNews").then(resolve => {
        this.allNews = this.now_news;
      });
    });
  },
  computed: {
    ...mapState(["now_news"])
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
    position: fixed;
    top: 0;
    left: 0;
  }

  .content {
    margin: 85px 0 50px 0;
  }
}
</style>