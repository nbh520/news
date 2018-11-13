<!--  -->
<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

div {
  font-size: 30px;
  color: red;
}
</style>