<!--  -->
<template>
  <footer class="foot">
    <div class="foot-item" @click="goto('/home')" :class="{on : isSelect('/home'),blur:isRelease}">
      <span class="item-icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>
        <router-link to="/home" @click.native="flushCount()">首页</router-link>
      </span>
    </div>
    <div
      class="foot-item"
      @click="goto('/video')"
      :class="{on : isSelect('/video'),blur:isRelease}"
    >
      <span class="item-icon">
        <i class="iconfont icon-bofang"></i>
      </span>
      <span>视频</span>
    </div>
    <div class="foot-item" v-if="!isRelease" @click="isRelease = true" :class="{blur:isRelease}">
      <span class="item-icon">
        <i class="iconfont icon-add"></i>
      </span>
      <span>发布</span>
    </div>
    <div class="foot-item" v-if="isRelease" @click="isRelease = false">
      <span class="item-icon span-close">
        <i class="iconfont icon-add icon-close"></i>
      </span>
    </div>
    <div class="foot-item" @click="goto('/find')" :class="{on : isSelect('/find'),blur:isRelease}">
      <span class="item-icon">
        <i class="iconfont icon-xiaoxi"></i>
      </span>
      <span>头条</span>
    </div>
    <div class="foot-item" @click="goto('/mine')" :class="{on : isSelect('/mine'),blur:isRelease}">
      <span class="item-icon">
        <i class="iconfont icon-daohanglan-05"></i>
      </span>
      <span>我的</span>
    </div>

    <div class="release" v-show="isRelease">
      <span>
        <i class="iconfont icon-tuwenguanli"></i>
        发图文
      </span>
      <span>
        <i class="iconfont icon-zhaoxiangji1"></i>
        拍视频
      </span>
      <span>
        <i class="iconfont icon-shipin-tianchong"></i>
        发视频
      </span>
      <span>
        <i class="iconfont icon-tiwen"></i>
        去提问
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isRelease: false //是否发帖
    };
  },
  mounted() {
    
  },
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    isSelect(path) {
      return this.$route.path === path;
    },
    flushCount() {
      this.$router.go(0);
    },
    test() {
      console.log(test);
    }
  },
  watch: {
    // BUG: 第一遍点击发布没有问题， 第二遍以后需要点击两次
    isRelease() {
      let _this = this;
      document.onclick = function() {
        if (_this.isRelease) {
          _this.isRelease = false;
        }
        document.onclick = null;
      };
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.foot {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  z-index: 100;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #ddd;

  .foot-item {
    text-align: center;
    flex: 1;

    &.blur {
      filter: blur(5px);
    }

    &.on {
      color: $red;
    }

    span {
      font-size: 14px;
      display: block;
      height: 50%;
      line-height: 25px;
      transition: .5s;

      &.span-close {
        transform: rotate(45deg);
      }
    }

    .iconfont {
      font-size: 20px;

      &.icon-close {
        border: 1px solid #ccc;
        border-radius: 50%;
        box-shadow: 0 0 2px #000;
      }
    }
  }

  >.release {
    position: absolute;
    width: 88%;
    background: #fff;
    top: -80px;
    left: 6%;
    border-radius: 15px;
    display: flex;
    box-shadow: 0 0 120px #f7f7f7;

    span {
      flex: 1;
      text-align: center;
      line-height: 24px;
      font-size: 13px;
      padding: 10px 0;

      i {
        display: block;
        font-size: 24px;

        &.icon-tuwenguanli {
          font-size: 20px;
          color: #7298e8;
        }

        &.icon-zhaoxiangji1 {
          font-size: 30px;
          color: #ed746f;
        }

        &.icon-shipin-tianchong {
          color: #6edfa8;
        }

        &.icon-tiwen {
          font-size: 26px;
          color: #f6ca45;
        }
      }
    }
  }

 
}
</style>