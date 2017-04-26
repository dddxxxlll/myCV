<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="avatarSrc" width="118" height="118"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="name">{{introduction.name}}</span>
        </div>
        <div class="description">
          {{introduction.description}}
        </div>
      </div>
      <div class="avatar_detail" @click="showDetail">
        <span>不要戳<dot>哇！</dot></span>
      </div>
    </div>
    <div class="background">
      <img :src="avatarSrc" width="100%" height="100%" />
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{introduction.name}}</h1>
            <div class="title">
              <div class="line"></div>
              <div class="text">点击更换头像</div>
              <div class="line"></div>
            </div>
            <ul v-if="introduction.avatar" class="avatar">
              <li class="avatar-item" v-for="(item, index) in introduction.avatar">
                <img :src="introduction.avatar[index].src" width="118" height="118"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      introduction: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false,
        avatarSrc: 'http://ww2.sinaimg.cn/mw690/e7ae9384jw8eqnl5l86naj20dc0dcwf5.jpg'
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
        console.log(this.introduction.avatar[1]);
      },
      hideDetail() {
        this.detailShow = false;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .header
    position relative
    overflow hidden
    color #FFF
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
      font-size 0
      position relative
      .avatar
        display inline-block
        vertical-align top
      .content
        display inline-block
        margin-left 16px
        font-size 14px
        .title
          margin 18px 0 8px 0
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-bottom 10px
          margin-top 20px
          margin-left 6px
          line-height 12px
          font-size 12px

      .avatar_detail
        position absolute
        right 12px
        bottom 14px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        background rgba(0, 0, 0, 0.2)
        text-align center
        span
          font-size 10px
          vertical-align top
          dot
            display inline-block
            height 1em
            line-height 1
            text-align left
            vertical-align -.5em
            overflow hidden

    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)


  dot::before {
    display: block
    content: '啊！\A呀！\A啦！\A哇！'
    white-space: pre-wrap
    animation: dot 5s infinite step-start both
  }
  @keyframes dot {
    25% { transform: translateY(-3em); }
    50% { transform: translateY(-2em); }
    75% { transform: translateY(-1em); }
  }
</style>
