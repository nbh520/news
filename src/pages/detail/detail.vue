<!-- 新闻内容 -->
<template>
  <div class="detail">
    <my-top-header :title="title">
      <a slot="left" class="back iconfont icon-left" @click.stop="$router.go(-1)"></a>
      <a slot="right" class="menu iconfont icon-gengduo"></a>
    </my-top-header>
    <!-- 内容 -->
    <div class="content">
      <div class="container">
        <!-- 文章内容 -->
        <detail-content :data="currentArticle"></detail-content>
        <!-- 喜欢---收藏 -->
        <div class="article-group">
          <like :likeCount="listArticle.voteCount"></like>
          <collect></collect>
        </div>
        <!-- 分割线 -->
        <div class="bg-line"></div>
        <!-- 相关推荐 -->
        <recomment :data="currentArticle.recomment" />
        <!-- 评论 -->
        <template v-if="currentArticle.reply">
          <!-- 分割线 -->
          <div class="bg-line" id="comment"></div>
          <div class="comment-hot">
            <div class="comment-title">
              <div class="line">
                <div class="title">用户热评</div>
              </div>
            </div>
          </div>
        </template>
        
      </div>
    </div>

    <reply-tool>
      <template slot="tool_btn">
        <!-- <router-link :to="{ name: 'comment' }"> -->
           <a class="iconfont icon-comment comment_btn" @click="click_comment"></a>
        <!-- </router-link> -->
        <collect type="icon"></collect>
        <a class="iconfont icon-share share_btn"></a>
        
      </template>
    </reply-tool>
  </div>
</template>

<script>
import detailContent from './components/detailContent'
import recomment from './components/recomment'
import like from './components/like'
import collect from './components/collect'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { getLocal, setLocal } from '@/utils/cache'
export default {
  name: 'detail',
  components: {
    detailContent,
    like,
    collect,
    recomment
  },
  data() {
    return {
      title: '头条',       // 顶部标题
    };
  },
  computed: {
    ...mapGetters('detail', [
      'currentArticle',
      'listArticle'
    ])
  },
  methods: {
    ...mapActions('detail', [
      'get_Article_data'
    ]),
    ...mapMutations('detail', [
      'set_historyArticle'
    ]),
    ...mapActions('user', [
      'post_user_Local'
    ]),
    async init() {
      let { url, source } = this.$route.query
      let res = await this.get_Article_data({ url, source })
    },
    click_comment() {
      // 滚动到评论区
      document.getElementById('comment').scrollIntoView()
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    // 提交点赞和收藏记录
    const likeList = JSON.parse(getLocal('likeList'))
    const favoriteList = JSON.parse(getLocal('favoriteList'))
    this.post_user_Local({ likeList, favoriteList })
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.detail {
  width 100%
  height 100%  
  background-color #f8f8f8
  .content {
    padding-bottom 48px
    .container {
      .article-group {
        text-align center
        padding 0.4rem 0
      }  
      .comment-hot {
        padding 0.533rem 0 0
        background-color #f9f9f9
        .comment-title {
          margin-bottom 0.4rem
          position relative  
          .line {
            position relative  
            width 2.8rem
            margin 0 auto
            text-align center
            &:before {
              content ''
              border-top 2px solid #aaa
              display block
              position absolute
              width 0.4rem
              top 50%
              left 0  
            }
            &:after {
              content ''
              border-top 2px solid #aaa
              display block
              position absolute 
              width 0.4rem
              top 50%
              right 0  
            }
          }
          .title {
            font-size 14px
            font-weight bold  
          }
        }
      }
      .bg-line {
        height 0.13333rem
        background-color #eee  
      }
  } 
  }
  
}
</style>
<style>
.comment_btn {
  font-size: 20px;
}
</style>