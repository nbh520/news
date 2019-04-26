<!-- 底部评论框 -->
<template>
  <div class="tool">
    <div class="left">
      <div class="text" v-show="!focus">
        <a class="iconfont icon-combinedshapecopy2"> 写评论... </a>
      </div>
      <textarea id="input">
        
      </textarea>
    </div>
    <div class="right">
      <slot name="tool_btn"></slot>
    </div>
    <span v-show="focus" class="publish_btn">发送</span>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      focus: false
    };
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
}
</style>

