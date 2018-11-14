<!--  -->
<template>
  <div class="main">
    <section class="header">
      <Header></Header>
      <CategorySelect></CategorySelect>
    </section>
    <section class="content">
      <OneImgMessage :news="news"></OneImgMessage>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import CategorySelect from "@/components/Category/CategorySelect.vue";
import Search from "../Search/Search.vue";
import OneImgMessage from "@/components/Message/OneImgMessage.vue";

export default {
  data() {
    return {
      news: {
        title: "大陆通过新媒体对台发动所谓“三战”？国台办回应",
        title_image: "./image/example.jpg",
        source: "海外网",
        ratings: "131"
      }
    };
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
  }
}
</style>