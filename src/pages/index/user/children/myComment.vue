<!-- 我的评论 -->
<template>
  <transition name="fadeIn">
    <div class="myComment">
      <my-top-header title="我的评论">
        <a slot="left" class="back iconfont icon-left"  @click.stop="goBack" ></a>
        <a slot="right" v-if="!editStatus" class="menu iconfont icon-laji" @click.stop="editStatus = !editStatus"></a>
        <a slot="right" v-if="editStatus" class="menu" @click.stop="editStatus = !editStatus">取消</a>
      </my-top-header>
      <div class="content">
        <div class="container">
          <div class="activity">
            <ul class="list">
              <li v-for="(item, index) in CommentData" :key="index">
                <div class="seleted" v-show="editStatus">
                  <input type="checkbox" @change="select_list(item.comment.id)" ref="checkStatus">
                </div>
                <div class="top clearfix" :class="{ 'edit': editStatus }">
                  <div class="portrai">
                    <img :src="item.comment.avatar" alt="">
                  </div>
                  <div class="info">
                    <p class="name">{{ item.comment.nickname }}</p>
                    <p class="time">{{ item.comment.create_time }}</p>
                  </div>
                </div>
                <div class="mid" :class="{ 'edit': editStatus }">
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
        <div class="bottom_tool" v-show="editStatus">
          <div class="empty" @click.stop="delete_all">一键清空</div>
          <div class="delete" @click.stop="delete_list">删除 {{ this.deleteSize > 0 ? `(${this.deleteSize})` : '' }}</div>
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
      CommentData: [],             // 评论数据
      editStatus: false,           // 编辑状态
      selectedComment: new Set(),  // 选中的评论
      deleteSize: 0,               // 删除个数
      selectStatus: false,         // 选中状态
    };
  },
  methods: {
    ...mapActions('user', [
      'get_comment_data',
      'delete_comment_data'
    ]),
    goBack() {
      this.$router.go(-1)
      this.editStatus = false
    },
    url(article) {
      return `/detail?url=${article.content}&source=${article.source_address}`
    },
    // 选中评论时
    select_list(comment_id) {
      // 判断选中的数组是否有该评论的id， 如果有则删除，如果没有则添加
      if (this.selectedComment.has(comment_id))
        this.selectedComment.delete(comment_id)
      else 
        this.selectedComment.add(comment_id)
      this.deleteSize = this.selectedComment.size
    },
    // 一键清空
    async delete_all() {
      this.$msgBox({
        title: '提示',
        message: '确认要清空吗？清空后将永久无法找回，请谨慎操作？',
        showCancelButton: true,
        closeOnClickModal: false
      }).then( res => {
        if (res === 'cancel') return
        this.CommentData.forEach(item => {
          this.selectedComment.add(item.comment.id)
        })
        this.delete_comment()
        console.log(res)
      })
    },
    // 删除
    async delete_list() {
      this.$msgBox({
        title: '提示',
        message: '确认删除' + this.selectedComment.size + '条收藏吗？',
        showCancelButton: true,
        closeOnClickModal: false
      }).then( res=> {
        if (res === 'cancel') return
        this.delete_comment()
      }).catch( res => {})
    },
    // 删除评论
    async delete_comment() {
      let res = await this.delete_comment_data(this.selectedComment)
      if (res === 'success') {
        this.selectedComment.forEach(commentId => {
          this.CommentData = this.CommentData.filter(item => item.comment.id !== commentId)
        })
        this.$toast('删除成功')
        this.selectedComment = new Set()
        this.editStatus = false
        this.$refs['checkStatus'].forEach(item => {
          item.checked = false
        })
      }
    }
  },
  async mounted() {
    let res = await this.get_comment_data()
    res.reverse()
    this.CommentData.push(...res)
  },
  destroyed() {
    this.editStatus = false
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
    background #eee
    .activity {
      position relative
      .list {
        background #eee
        padding-bottom 98px
        li {
          margin 5px 0
          padding 16px 15px
          background-color #fff
          position relative
          .seleted {
            position absolute
            top 10px
            left 15px
          }
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
          .edit {
            margin-left 30px
            transition .5s
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
    .bottom_tool {
      position fixed
      width 100%
      bottom 0
      left 0
      display flex
      background-color #fff
      height 50px
      border-top 1px solid #ccc
      div {
        flex 1
        display flex
        justify-content center
        align-items center
        font-size 15px
      }
      .empty {
        border-right 1px solid #eee
      }
    }
  }
}
</style>