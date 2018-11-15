<!--  -->
<template>
  <footer class="foot">
		<div class="foot-item" @click="goto('/home')" :class="{on : isSelect('/home')}">
			<span class="item-icon">
				<i class="iconfont icon-shouye"></i>
			</span>
			<span>
				<router-link to="/home" @click.native="flushCount()">首页</router-link>
			</span>
		</div>
		<div class="foot-item" @click="goto('/video')" :class="{on : isSelect('/video')}">
			<span class="item-icon">
				<i class="iconfont icon-bofang"></i>
			</span>
			<span>视频</span>
		</div>
		<div class="foot-item" @click="goto('/find')" :class="{on : isSelect('/find')}">
			<span class="item-icon">
				<i class="iconfont icon-xiaoxi"></i>
			</span>
			<span>头条</span>
		</div>
		<div class="foot-item" @click="goto('/mine')" :class="{on : isSelect('/mine')}">
			<span class="item-icon">
				<i class="iconfont icon-daohanglan-05"></i>
			</span>
			<span>我的</span>
		</div>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    isSelect(path) {
      return this.$route.path === path;
    },
    flushCount() {
      this.$router.go(0);
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

		&.on {
			color: $red;
		}

		span {
			font-size: 14px;
			display: block;
			height: 50%;
			line-height: 25px;
		}

		.iconfont {
			font-size: 20px;
		}
	}
}
</style>