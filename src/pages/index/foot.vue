<!--  -->
<template>
  <footer class="foot">
    <div class="foot-item" v-for="(item, index) in footData" :key="index" @click.stop="toPath(item)" :class="{on: selected == item.route }">
      <span class="item-icon">
        <i :class="'iconfont icon-'+item.icon"></i>
      </span>
      <span>{{ item.name }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data() {
    return {
      footData: [
        { name: '首页', icon: 'shouye', route: 'home' },
        { name: '视频', icon: 'bofang', route: 'video' },
        { name: '收藏', icon: 'xiaoxi', route: 'collect' },
        { name: '个人', icon: 'daohanglan-05', route: 'user' },
      ],
      selected: 'home'
    };
  },
  watch: {
    $route(val) {
      this.routeInit()
    }
  },
  created() {
    this.routeInit()
  },
  methods: {
    toPath(path) {
      this.$router.push({name: path.route});
      this.selected = path.route
    },
    // 页面刷新后需要更新选择的状态
    routeInit() {
      const name = this.$route.name
      if (name === 'home' || name === 'video' || name === 'collect' || name === 'user') {
        this.selected = name
      }
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" socped>
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