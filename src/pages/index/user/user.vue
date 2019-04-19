<!--  -->
<template>
  <div class="box">
    <div class="container">
      <div class="login-status">
        <button class="btn-login" @click="loginWindowTop = true">登录</button>
      </div>
      <div class="my-features">
        <span>
          <i class="iconfont icon-ai-mark"></i>
          我的收藏
        </span>
        <span>
          <i class="iconfont icon-pinglun"></i>
          我的评论
        </span>
        <span>
          <i class="iconfont icon-zan1"></i>
          我的点赞
        </span>
        <span>
          <i class="iconfont icon-lishijilu"></i>
          浏览历史
        </span>
      </div>
      <!-- <div class="other-list">
        <ul class="feature-list">
          <li>
            我的关注
            <span>
              <i class="iconfont icon-right"></i>
            </span>
          </li>
          <li>
            消息通知
            <span>
              <i class="iconfont icon-right"></i>
            </span>
          </li>
          <li>
            阅读公益
            <span>
              今日阅读10分钟
              <i class="iconfont icon-right"></i>
            </span>
          </li>
        </ul>
        <ul class="money-list">
          <li>
            我的钱包
            <span>
              手机充值
              <i class="iconfont icon-right"></i>
            </span>
          </li>
          <li>
            京东特供
            <span>
              新人领188元红包
              <i class="iconfont icon-right"></i>
            </span>
          </li>
        </ul>
        <ul class="setting-list">
          <li>
            用户反馈
            <span>
              <i class="iconfont icon-right"></i>
            </span>
          </li>
          <li>
            系统设置
            <span>
              <i class="iconfont icon-right"></i>
            </span>
          </li>
        </ul>
      </div> -->
      <div class="group">
        <mt-cell title="我的收藏"></mt-cell>
      </div>
    </div>
    <div class="cover" v-show="loginWindowTop"></div>
    <div class="login" ref="loginWindow" :style="{top: loginWindowTop? '0': '100%'}">
      <login @close="closeWindow"></login>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWindowTop: false
    };
  },
  methods: {
    closeWindow() {
      this.loginWindowTop = false;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl';
$marginTop = 7px;
$backColor = #eee;

.box {
  .container {
    width: 100%;
    height: 100%;
    background: $backColor;

    .login-status {
      width: 100%;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;

      .btn-login {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background: $red;
        border: 1px solid $red;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        outline: none;
      }
    }

    .my-features {
      margin-top: $marginTop;
      // height: 70px;
      background: #fff;
      display: flex;

      span {
        text-align: center;
        padding: 10px 0;
        font-size: 15px;
        flex: 1;

        i {
          font-size: 25px;
          margin-bottom: 10px;
          display: block;

          &.icon-ai-mark {
            color: #f3b46a;
          }

          &.icon-pinglun {
            color: #63a3ea;
          }

          &.icon-zan1 {
            color: #eb825d;
          }

          &.icon-lishijilu {
            color: #52a590;
          }
        }
      }
    }

    // .other-list {
    //   margin-top: $marginTop;
    //   background: $backColor;

    //   ul>li {
    //     padding-left: 17px;
    //     font-size: 16px;
    //     // height: 40px;
    //     line-height: 40px;
    //     background: #fff;
    //     border-bottom: 1px solid $backColor;
    //     box-sizing: border-box;

    //     span {
    //       float: right;
    //       font-size: 13px;
    //       color: #666;
    //       margin-right: 10px;
    //     }
    //   }

    //   .money-list, .setting-list {
    //     margin-top: $marginTop;
    //   }
    // }
  }

  .login {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 100%;
    bottom: 0;
    z-index: 101;
    transition: 0.5s;
  }

  .cover {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 101;
  }
}
</style>