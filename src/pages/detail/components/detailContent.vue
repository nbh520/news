<!--  -->
<template>
  <article id="article" v-if="data">
    <div class="article-info">
      <h1 class="title">{{ data.title }}</h1>
      <span class="author">{{ data.author }}</span>
      <span class="newstime">{{ data.time }}</span>
    </div>
    <!-- 视频 -->
    <template v-if="data.video">
    </template>
    <!-- 新闻-->
    <template v-else>
      <section class="article-content">
        <div class="content-html" v-html="data.content"></div>
      </section>
    </template>
  </article>
</template>

<script>
export default {
  name: 'detailContent',
  props: ['data'],
  data() {
    return {};
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" >
#article {
  width 100%
  position relative  
  .article-info {
    font-size 12px
    overflow hidden
    background-color #fff
    padding 0 0.427rem 0.4rem
    border-bottom 1px solid #eee
    .title {
      color #000
      font-size 20px
      font-weight bold
      padding 0.4rem 0  
    }
    .author {
      margin-left 5px  
    }
  }
  .content-html {
    font-size: 0.5rem;
    line-height: 1.5em;
    padding: 0 0.4rem 0 0.4rem;
    word-break: break-all;
    color: #404040;

    .page {
      width 100%  
    }

    .video {
      position: relative;
      max-width: 1080px;
      margin: 0.4rem 0;
      padding-bottom: 0.5rem;

      video {
        width: 100%;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
      }
      .bot_word {
        font-size: 0.37rem;
        float: right;
        color: #4c9aea;  
      }
    }
    .photo {
      margin: 0.4rem 0;
      text-align: center;  
      img {
        display: block;
        max-width: 100%;
        margin: auto;
      }
    }

    p {
      margin: 0.6rem 0;
      text-align: justify;
      text-indent: 2em; 
    }
  }
}
</style>