
<template>
  <header class="head">
    <div class="search">
      <!-- <router-link to="/search"> -->
      <div class="search-icon">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <input type="text">
      <!-- </router-link> -->
    </div>
    <!-- <div class="release">
      <span class="camera">
        <i class="iconfont icon-zhaoxiangji1"></i>
      </span>
      <span class="text">发布</span>
    </div>-->
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import '../../common/stylus/mixins.styl';

.head {
  width: 100%;
  height: 50px;
  background-color: $red;
  color: #000;

  >.search {
    width: 95%;
    height: 100%;
    float: left;
    font-size: 0;

    .search-icon {
      width: 10%;
      height: 30px;
      background-color: #fff;
      border-radius: 3px 0 0 3px;
      float: left;
      margin-top: 10px;
      line-height: 30px;
      vertical-align: baseline;
      margin-left: 15px;
      text-align: center;
    }

    input[type='text'] {
      width: 85%;
      width: calc(90% - 15px);
      height: 30px;
      border-radius: 0 3px 3px 0;
      font-size: 12px;
      margin-top: 10px;
      margin-left: -1px;
      outline: none;
      vertical-align: baseline;
    }
  }

  .release {
    width: 20%;
    height: 100%;
    float: left;

    span {
      display: block;
      font-size: 12px;
      text-align: center;
      width: 100%;
      color: #fff;

      >.icon-zhaoxiangji1 {
        font-size: 40px;
      }
    }

    .camera {
      height: 70%;
    }

    .text {
      font-size: 12px;
      height: 30%;
    }
  }
}
</style>