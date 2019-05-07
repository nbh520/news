<!-- 评论列表 -->
<template>
  <section class="comment_item">
    <div class="topFooter">
      <div class="top">
        <div class="portrait">
          <img :src="dataJson.avatar" :alt="dataJson.nickname">
        </div>
        <div class="name">{{ dataJson.nickname }}</div>
      </div>
      <div class="mid">
        <div class="content_text">
          {{ dataJson.content }}
          <span class="altUser"></span>
        </div>
      </div>
      <div class="footer">
        <span class="reply">回复 · </span>
        <span class="zna">{{ dataJson.vote }}赞 ·</span>
        <span class="time">{{ dataJson.createTime }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'commentItem',
  props: {
    dataJson: null
  },
  data() {
    return {};
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.comment_item {
  position relative
  margin 0 16px
  .topFooter {
    padding 15px 0
    border-bottom 1px solid #eee
    .top {
      .portrait {
        display inline-block
        vertical-align middle
        width 30px
        height 30px
        overflow hidden
        border-radius 100%
        img {
          width 100%
        }
      }
      .name {
        display inline-block
        vertical-align middle
        color #007aff
        overflow hidden
        text-align left
        text-overflow ellipsis
        white-space nowrap
        font-size 14px
        padding-left 5px
      }
    }
    .mid {
      margin-top 6px
      font-size 16px
      .content_text {
        position relative
        word-wrap break-word
        line-height normal
      }
    }
    .footer {
      margin-top 6px
      font-size 12px
      color #888
      span {
        padding 4px 0
      }
      .delete {
        float right
        padding 0 5px
      }
    }
  }
}
</style>