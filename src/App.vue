<template>
  <div id="app">
    <router-view/>
    <Foot v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import Foot from "@/components/Foot/Foot.vue";
import { mapState } from "vuex";
export default {
  components: {
    Foot
  },
  mounted() {
    this.$store.dispatch("getNowNews");

    setTimeout(() => {
      console.log(this.now_news());
    }, 1000);
  },
  methods: {
    ...mapState(["now_news"])
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
