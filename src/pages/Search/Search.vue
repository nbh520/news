<!--  -->
<template>
  <div id="search">
    <div class="search_top">
      <my-top-header>
        <a slot="left" class="back-black iconfont icon-left" @click.stop="$router.go(-1)"></a>
        <form class="form" slot='mid' @click.prevent="get_search">
          <i class="form_icon iconfont icon-sousuo"></i>
          <input class='form_input' type="search" placeholder="搜索" v-model.trim='keyword'>
        </form>
        <a slot="right" class="search_btn" @click.stop="get_search"> 搜索</a>
      </my-top-header>
    </div>
    <div class="content">
      <list-item :dataJson="searchData" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',         // 搜索内容
      searchData: [],      // 搜索数据
    };
  },
  methods: {
    ...mapActions('search', [
      'get_search_data'
    ]),
    async get_search() {
      if (this.keyword) {
        let res = await this.get_search_data({ 'keyword': this.keyword, 'page': 1 })
        console.log(res.article)
        this.searchData = res.article
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#search {
  position relative
  width 100%
  height 100%
  // overflow hidden
  background-color #fff
  a {
    text-decoration none
  }
  .search_top {
    position fixed
    top 0
    left 0
    right 0
    z-index 999
    header {
      // background-color #fff
      // padding-right 0.27rem
      // border-bottom 1px solid #eee
      // background #f4f5f6
      form {
        position relative
        display flex
        align-items center
        color #aaa
        font-size 14px
        background-color #fff
        border 1px solid #ddd
        border-radius 50px
        padding 0.13rem 0.267rem
        margin 0 0.267rem
        .form_input {
          width 100%
          color #666
          padding-left 0.13rem
          margin 0
          outline none
          -webkit-appearance: none;
          &::-webkit-input-placeholder{color:#c8c8c9;font-size: 12px}
          &::-moz-placeholder{color:#c8c8c9;font-size: 12px}
          &:-ms-placeholder{color:#c8c8c9;font-size: 12px}
        }
      }
      .search_btn {
        // color #aaa!important
        font-size 14px!important
        &.on {
          color #00939c
          font-weight bold
        }
      }
    }

    
  }
}
</style>