<!-- 底部评论框 -->
<template>
  <div class="tool">
    <div class="left">
      <div class="text" v-show="!focus" @click.stop="input_focus">
        <a class="iconfont icon-combinedshapecopy2"> 写评论... </a>
      </div>
      <textarea id="input" @blur="focus = false" v-focus="focus" @focus.stop="onFocus" v-model.trim="commentValue"></textarea>
    </div>
    <div class="right" v-show="!focus">
      <slot name="tool_btn"></slot>
    </div>
    <span v-show="focus" class="publish_btn" @click.stop="sendComment">发送</span>
    
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'replyTool',
  data() {
    return {
      focus: false,      // 评论聚焦
      commentValue: '',  // 评论内容
    };
  },
  computed: {
    ...mapGetters('user', [
      'userLogin'
    ])
  },
  methods: {
    ...mapActions('detail', [
      'post_comment_data'
    ]),
    input_focus() {
      this.focus = true
    },
    // 评论聚焦时
    onFocus() {
      this.focus = true
    },
    // 发送评论
    async sendComment() {
      if (!this.userLogin) {
        this.$msgBox({
          title: '提示',
          message: '您还未登录，是否登录？',
          showCancelButton: true,
          closeOnClickModal: false
        }).then( res => {
          this.$emit('loginShow')
        })
        return
      }
      if (!this.commentValue) {
        this.$toast({
            message: '内容不能为空',
            duration: 800
          }
        )
        return
      }
      // 普通评论
      let res = await this.post_comment_data(this.commentValue)
      if (res === 'success') {
        this.$toast({
            message: '发送成功',
            duration: 800
          }
        )
        this.commentValue = ''
      }
    }
  },
  directives: {
    focus: {
      update: function(el, value) {
        if (value) {
          el.focus()
        }
      }
    }
  }
}

</script>
<style lang="stylus" rel="stylesheet/scss" scoped>
.tool {
  position fixed
  left 0
  right 0
  bottom 0
  z-index 666
  display flex
  background-color #fdfdfd
  border-top 1px solid #ddd
  padding-right 16px
  font-size 0
  align-items center
  .left {
    flex 1
    position relative
    padding-left 16px
    font-size 0
    .text {
      position absolute
      left 32px 
      top 0
      z-index 111
      font-size 12px
      a {
        height 48px
        display table-cell
        vertical-align middle
        white-space nowrap
        font-size 12px
      }
    }
    #input {
      width: 100%;
      height: 36px;
      box-sizing border-box
      font-size: 14px;
      line-height: 24px;
      border-radius: 20px;
      border: 1px solid #ddd;
      background: #f4f5f6;
      -webkit-appearance: none;
      outline: none;
      resize: none;
      overflow-y: auto !important;
      margin: 6px 0;
      padding: 6px 15px;
      word-break:break-all;
      &::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
      }
      &.normal{
          height: 36px !important;
      }
    }
  }
  .right {
    flex 1
    font-size 0
    padding-left 15px
    a {
      display inline-block
      text-align center 
      width 33.3%
      height 48px
      font-size 20px
      text-decoration none 
      vertical-align top
      line-height 48px
      
    }
  }
  .publish_btn {
    display table-cell
    padding-left 15px
    font-size 16px
    font-weight bold
    color #aaa
    user-select none
    vertical-align middle
  }
}
</style>

