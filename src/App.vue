<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <Foot v-show="$route.meta.showFoot"/> -->
    <router-view></router-view>
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
