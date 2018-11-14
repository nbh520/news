<template>
  <div id="app">
    <router-view/>
    <Foot v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import Foot from "@/components/Foot/Foot.vue";
import { reqNowNews } from "./api/server";
export default {
  components: {
    Foot
  },
  async mounted() {
    setTimeout(async () => {
      const result = await reqNowNews();
      // console.log(result)
    }, 1000);
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
