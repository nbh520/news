<!-- 我的评论 -->
<template>
  <transition name="fadeIn">
    <div class="myComment">
      <my-top-header title="我的评论">
        <a slot="left" class="back iconfont icon-left"  @click.stop="goBack" ></a>
        <a slot="right" class="menu iconfont icon-laji"></a>
      </my-top-header>
      <div class="content">
        <div class="container">
          <div class="activity">
            <ul class="list">
              <li v-for="(item, index) in CommentData" :key="index">
                <div class="top clearfix">
                  <div class="portrai">
                    <img :src="item.comment.avatar" alt="">
                  </div>
                  <div class="info">
                    <p class="name">{{ item.comment.nickname }}</p>
                    <p class="time">{{ item.comment.create_time }}</p>
                  </div>
                </div>
                <div class="mid">
                  <div class="comment_text">{{ item.comment.content }}</div>
                  <router-link :to="url(item.article)">
                    <div class="article">
                      <div class="news_img">
                          <img :src="item.article.coverImg[0]">
                      </div>
                      <div class="news_title">
                        <h3>{{ item.article.title }}</h3>
                      </div>
                    </div>
                  </router-link>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'myComment',
  data() {
    return {
      CommentData: [],       // 评论数据
    };
  },
  methods: {
    ...mapActions('user', [
      'get_comment_data'
    ]),
    goBack() {
      this.$router.go(-1)
    },
    url(article) {
      return `/detail?url=${article.content}&source=${article.source_address}`
    }
  },
  async mounted() {
    let res = await this.get_comment_data()
    res.reverse()
    this.CommentData.push(...res)
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.myComment {
  position absolute 
  top 0
  left 0
  right 0
  height 100%
  overflow hidden
  z-index 1000
  .content {
    position relative
    background-color #fff
    .activity {
      position relative
      .list {
        background #eee
        li {
          margin 5px 0
          padding 16px 15px
          background-color #fff
          .top {
            position relative
            margin-bottom 6px
            display flex
            align-items center
            .portrai {
              position absolute
              top 0
              left 0
              width 36px
              height 36px
              overflow hidden
              border-radius 100%
              img {
                width 100%
              }
            }
            .info {
              flex 1
              padding-left 46px
              padding-right 5px
              font-size 14px
              color #000
              line-height 16px
              .name {
                text-overflow ellipsis
                white-space nowrap
                margin-bottom 6px
              }
              .time {
                font-size 12px
                color #999
              }
            }
          }
          .mid {
                .comment_text {
                  font-size 16px
                }
                .article {
                  margin-top 6px
                  font-size 0
                  background #f4f5f6
                  .news_img,.news_title {
                    display inline-block
                    vertical-align middle
                    overflow hidden
                  }
                  .news_img {
                    width 25%
                    height 1.96875rem
                    position relative
                    img {
                      width 100%
                      min-height 1.96875rem
                    }
                  }
                  .news_title {
                    width 75%
                    h3 {
                      font-size 16px
                      margin 0 12px
                      white-space normal
                      line-height 21px
                      color #222
                      font-weight 400
                      display -webkit-box
                      -webkit-line-clamp: 3;
                      text-overflow: ellipsis;
                      -webkit-box-orient: vertical;
                      overflow: hidden;
                    }
                  }
                }
              }
          }
      }
    }
  }
}
</style>