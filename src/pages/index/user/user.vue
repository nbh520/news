<!--  -->
<template>
  <div class="box">
    <div class="container">
      <div v-if="!userLogin" class="login-status">
        <button class="btn-login" @click="loginWindowTop = true">登录</button>
      </div>
      <person v-else />
      <div class="my-features">
        <span>
          <router-link :to="{ name: 'myFavorite'}">
            <i class="iconfont icon-ai-mark"></i>
            我的收藏
          </router-link>
        </span>
        <span>
          <router-link :to="{ name: 'myComment' }">
            <i class="iconfont icon-pinglun"></i>
            我的评论
          </router-link>
        </span>
        <span>
          <router-link :to="{ name: 'myLike' }">
            <i class="iconfont icon-zan1"></i>
            我的点赞
          </router-link>
        </span>
          <span>
            <router-link :to="{name: 'myHistory'}">
              <i class="iconfont icon-lishijilu"></i>
              浏览历史
            </router-link>
          </span>
      </div>
      <div class="group">
        <mt-cell title="我的收藏">
          <i class="iconfont icon-right"></i>
        </mt-cell>
        <mt-cell title="消息通知">
          <i class="iconfont icon-right"></i>  
        </mt-cell>        
      </div>
      <div class="group">
        <mt-cell title="扫码分享">
          <i class="iconfont icon-right"></i>
        </mt-cell>
        <mt-cell title="意见反馈">
          <i class="iconfont icon-right"></i>
        </mt-cell>
        <mt-cell title="系统设置">
          <i class="iconfont icon-right"></i>
        </mt-cell>
        
      </div>
      <div class="group"  @click="c_Login_out">
        <mt-cell title="退出登录">
          <i class="iconfont icon-right"></i>
        </mt-cell>
      </div>
    </div>
    <div class="cover" v-show="loginWindowTop"></div>
    <div class="login" ref="loginWindow" :style="{top: loginWindowTop? '0': '100%'}">
      <login @close="closeWindow"></login>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import person from './components/person'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'user',
  components: {
    person
  },
  data() {
    return {
      loginWindowTop: false,
    };
  },
  computed: {
    ...mapGetters('user', [
      'userLogin',
    ])
  },
  methods: {
    ...mapActions('user', [
      'login',
      'loginOut'
    ]),
    closeWindow() {
      this.loginWindowTop = false;
    },
    c_Login_out() {
      console.log('adsf')
      this.loginOut()
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

    .group {
      margin 0.2rem 0 0 0 

      .mint-cell{
        color: #333;
        min-height: 1.2rem;
        font-size: 0.426rem;
        padding-left: 0.20rem;
        padding-right: 0.25rem;
        border-bottom: 1px solid #dbdbdc;
      }
    }
    
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