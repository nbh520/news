<template>
  <div id="app">
    <router-view/>
    <Foot v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import Foot from "@/components/Foot/Foot.vue";
export default {
  components: {
    Foot
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
