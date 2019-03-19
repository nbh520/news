<!-- 一条视屏的视屏组件 -->
<template>
  <div class="content">
    <div class="video">
      <!-- <video controls class="player">
        <source src="http://ali.cdn.kaiyanapp.com/1552625629132_bd2d49ad.mp4?auth_key=1552875713-0-0-ddbfdbd41a4e43ba345d56574cb744ef">  
      </video> -->
      <!-- <span class="video-title">吕</span> -->
      <Player class="player" :source="video.content" :title="video.title"></Player>
    </div>
    <div class="user">
      <div class="author">
        <img class="avatar" :src="video.avatar">
        <span class="nickname">{{video.author}} |</span>
        <span class="follow">关注</span>
      </div>
      <div class="option">
        <span class="icon-item">
          <i class="iconfont icon-pinglun1"></i>
          <span class="comment-num">{{video.commentCount}}</span>
        </span>
        <span class="icon-item">
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Player from '../VideoComponent/palyer'
export default {
  data() {
    return {
    };
  },
  props:{
    video: {
      content: String,
      coverImg: String,
      title: String,
      author: String,
      commentCount: Number,
      avatar: String,
    }
  },
  mounted(){
    if(this.video.author.length > 6){
      this.video.author = this.video.author.slice(0,5) + '...'
    }
  },
  components:{
    Player
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus" scpoed>
@import '../../common/stylus/mixins.styl';
.content{
  background-color #7e7e73
  margin-bottom 8px

  .video{
    width 100%
    height 210px


    .player{
      width 100%
      height 100%
    }
  }
  .user{
    width 100%
    height 60px
    background-color #fff
    display flex
    align-items center

    .author{
      width 68%
      float left

      img{
        width 40px
        height 40px 
        border-radius 50%
        vertical-align middle
        margin-left 20px
      }
      span{
        vertical-align -4px
        font-size 14px
      }
      .nickname{
        font-weight 700
      }
      .follow{
        color $red
      }
    }
    .option{
      width 32%
      float left
      display flex
      align-items center
      justify-content center

      .icon-item{
        flex 1
        text-align center

        .iconfont{
          font-size 23px  
        }
      }
    }
    
  }
}
</style>