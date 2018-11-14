<!-- 一张图片的新闻 -->
<template>
  <section>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>{{news.title}}</h3>
          <div class="item_info">
            <span>{{news.source}}</span>
            <span>评论{{news.ratings}}</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="news-content">
      <a href="" class="article_link">
        <div class="item_detail_desc">
          <h3>大陆通过新媒体对台发动所谓“三战”？国台办回应</h3>
          <div class="item_info">
            <span>海外网</span>
            <span>评论6</span>
          </div>
        </div>
        <div class="list_img_holder">
          <img src="./image/example.jpg" alt="">
        </div>
      </a>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    news: Object
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
      }
    }
  }
}
</style>