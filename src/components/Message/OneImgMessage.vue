<!-- 一张图片的新闻 -->
<template>
  <section>
    <div class="news-content">
      <router-link :to="{path: '/new_content', query:{url : news.content, source : news.source_address,timestamp: new Date().getTime()}}" class="article_link">
        <div class="item_detail_desc">
          <h3>{{news.title}}</h3>
          <div class="item_info">
            <span>{{news.author}}</span>
            <span>{{news.commentCount}} 评论</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img :src="news.coverImg" alt>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import { Loadmore } from "mint-ui";
export default {
  data() {
    return {
      
    };
  },
  props: {
    news: Object
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.news-content {
  margin: 0 15px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);

  .article_link {
    min-height: 42px;
    display: block;
    padding: 16px 0;
    font-size: 0;
    color: #222;

    >div {
      display: inline-block;
      font-size: 12px;
      vertical-align: middle;
    }

    .item_detail_desc {
      width: 67%;

      h3 {
        font-size: 17px;
        line-height: 21px;
      }

      .item_info {
        margin-top: 6px;
        color: #999;

        span {
          margin-right: 5px;
        }
      }
    }

    .list_img_holder {
      width: 33%;

      img {
        width: 100%;
        height: 70px;
      }
    }
  }
}
</style>