<!--  -->
<template>
  <section class="news_content_main">
    <header class="head">
      <h1 class="title">{{newsContent.title}}</h1>
      <div class="info">
        <span class="time">{{newsContent.time}}</span>
        <span class="source">{{newsContent.author}}</span>
      </div>
    </header>
    <article class="content" v-html="newsContent.content">
      {{newsContent.content}}
    </article>
  </section>
</template>

<script>
import {reqNewsContent} from '@/api/server.js'
export default {
  data() {
    return {
      newsContent: []
    };
  },
  mounted(){
    let url = this.$route.query.url
    let source = this.$route.query.source
    reqNewsContent(url, source).then(res => {
      if(res.status === 1){
        res.data.content = res.data.content.replace(/data-src/g, 'src')
        this.newsContent = res.data
      }
    })
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .news_content_main{
    overflow: hidden;
    .head{
      font-weight: normal;
      padding: 27px 15px 0 15px;
      .title{
        font-size: 23px;
        font-weight: bold;
        padding: 0 0 10px 0;
        color: #404040;
      }
      .info{
        font-size: 14px;
        font-weight: normal;
        margin: 0 0 6px 0;
        color: #888888;  
      }
    }
    .content{
      font-size: 18px;
      line-height: 27px;
      padding: 0 15px 0 15px;
      word-break: break-all;
      color: #404040;
      .page{
          padding: 10px;
        }
      p:nth-child(1){
        margin-top: 15px;
      } 
      p {
        margin: 30px 0;
        text-align: justify;
        text-indent: 36px;
      }
      .photo {
        text-align: center;
        span{
          font-size: 15px;
          color: #404040;
        }
        img{
          display: block;
          max-width: 100%;
          margin: auto
        }
      } 
      .video {
        position: relative;
        max-width: 1080px;
        margin: 15px 0;
        padding-bottom: 20px;

        video{
          width: 100%;
          background-repeat: no-repeat;
          -webkit-background-size: cover;
          background-size: cover;
        }  
      }

      
    }
    
  }
    

  
</style>