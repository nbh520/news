<!--  -->
<template>
  <div class="main">
    <section class="header">
      <Header></Header>
      <CategorySelect></CategorySelect>
    </section>
    <section class="content">
      <OneImgMessage :news="item" v-if="item.imgsrc" v-for="(item, index) in now_news" :key="index"></OneImgMessage>
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
      new: []
    };
  },
  mounted() {
    return new Promise((res, rej) => {
      this.$store.dispatch("getNowNews").then(res => {
        this.new = this.now_news;
        console.log(this.now_news);
      });
    });
    setTimeout(() => {}, 2000);
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
    margin-top: 85px;
    margin-bottom: 50px;
  }
}
</style>