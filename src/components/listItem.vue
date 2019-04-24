<!-- 新闻&视频列表 -->
<template>
  <ul class="listItem">
    <template v-for="data in dataJson">
      <!-- 一张小图 -->
      <li @click.stop="setArticleList(data)">
        <router-link :to="url(data.content, data.source_address)"  class="oneSmall">
          <div class="news_title">
            <h3> {{ data.title }}</h3>
            <div class='news_info'>
              <span class='news_plnum'>{{ data.commentCount }}评论</span>
            </div>
          </div>
          <div class='news_img'>
            <img :src="data.coverImg">
          </div> 
        </router-link>
      </li>
    </template>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'listItem',
  props: ['dataJson'],
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations('detail', [
      'set_listArticle'
    ]),
    url(url, source) {
      return `/detail?url=${url}&source=${source}`
    },
    setArticleList(data) {
      console.log(data)
      this.set_listArticle(data)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
small_height=1.96875rem 
larger_height=4.6875rem 
.listItem {
  margin 0 0.4rem
  border-bottom: 1px solid hsla(0, 0%, 87%, .6);
  a {
    display: block;
    width: 100%;
    padding: 0.427rem 0;
    outline: none;
    color: #131313;
    -webkit-tap-highlight-color: rgba(0, 0, 0, .1);
    text-decoration: none;
  }
  a:visited h3 {
    color: #999;
  }
  img {
      background: #ddd;
  }
  h3 {
    white-space: normal;
    font-size: 17px;
    line-height: 21px;
    color: #222;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .oneSmall {
    font-size: 0;
    & > div{
        display: inline-block;
        vertical-align: middle;
    }
    .news_title {
      width: 67%;
      overflow: hidden;
      h3 {
        margin-right: 0.32rem;
      }
      .news_info {
        position: relative;
        left: -12.5%;
        width: 125%;
        white-space: normal;
        color: #999;
        margin-top: 6px;
        overflow: hidden;
        font-size: x-small;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        span {
            display: inline-block;
            vertical-align: middle;
        }
      }
    }
    .news_img {
      width: 33%;
      height: small_height;
      overflow: hidden;
      img {
          width: 100%;
          min-height: small_height;
      }
    }
  }
}
</style>