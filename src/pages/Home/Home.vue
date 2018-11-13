<!--  -->
<template>
  <div>
    <section class="header">
      <Header></Header>
    </section>
    <section class="category-selection">
      <CategorySelect></CategorySelect>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import CategorySelect from "@/components/Category/CategorySelect.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    CategorySelect
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.header {
  position: fixed;
  top: 0;
  left: 0;
}

.category-selection {
  position: fixed;
  top: 50px;
  left: 0;
}
</style>