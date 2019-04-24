<!-- 新闻内容 -->
<template>
  <div class="detail">
    <my-top-header :title="title">
      <a slot="left" class="back iconfont icon-left" @click.stop="$router.go(-1)"></a>
      <a slot="right" class="menu iconfont icon-gengduo"></a>
    </my-top-header>
    <div class="content">
      <div class="container">
        <!-- 文章内容 -->
        <detail-content :data="currentArticle"></detail-content>
        <!-- 喜欢---收藏 -->
        <div class="article-group">
          <like :likeCount="listArticle.voteCount"></like>
          <collect></collect>
        </div>
        <!-- 评论 -->
        <template v-if="currentArticle.reply">
          <!-- 分割线 -->
          <div class="bg-line"></div>
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
  </div>
</template>

<script>
import detailContent from './components/detailContent'
import like from './components/like'
import collect from './components/collect'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'detail',
  components: {
    detailContent,
    like,
    collect
  },
  data() {
    return {
      title: '头条',       // 顶部标题
    };
  },
  mounted() {
    this.init()
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
    async init() {
      let { url, source } = this.$route.query
      let res = await this.get_Article_data({ url, source })
      this.set_historyArticle(this.listArticle)
      console.log(res)
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.detail {
  width 100%
  height 100%  
  background-color #f8f8f8
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
</style>