<!--  -->
<template>
  <div class="video">
    <my-top-header title="视频"></my-top-header>
    <div class="content">
      <div class="container">
        <list-item :dataJson="contentJson" v-if='contentJson.length > 0'></list-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'videoHtml',
  data() {
    return {
      contentJson: []
    };
  },
  methods: {
    ...mapActions('video', [
      'get_videoList'
    ]),
    async init() {
      this.contentJson = await this.get_videoList(10)
    }
  },
  mounted () {
    this.init()
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>

</style>