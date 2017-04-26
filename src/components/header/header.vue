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
        <span>不要戳哇<dot>！</dot></span>
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
                <img :src="introduction.avatar[index].src" width="118" height="118" @click="changeAvatar(index)"/>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">关于我</div>
              <div class="line"></div>
            </div>
            <ul v-if="introduction.about" class="about">
              <li class="about-item" v-for="(item, index) in introduction.about">
                <span class="type">{{introduction.about[index].type}}:</span><p class="content" v-if="!introduction.about[index].isSrc">{{introduction.about[index].content}}</p><a :href="introduction.about[index].content" class="content" v-if="introduction.about[index].isSrc">{{introduction.about[index].content}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
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
      },
      hideDetail() {
        this.detailShow = false;
      },
      changeAvatar(index) {
        this.avatarSrc = this.introduction.avatar[index].src;
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
            line-height 1em
            text-align left
            font-size 10px
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

    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
      backdrop-filter blur(10px)
      &.fade-enter-active,&.fade-leave-active
        transition all 0.5s
      &.fade-enter,&.fade-leave-active
        opacity 0
        background rgba(7, 17, 27, 0)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
        .name
          line-height 16px
          text-align center
          font-size 16px
          font-weight 700
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
          .line
            flex 1
            position relative
            top -6px
            border-bottom 1px solid rgba(255, 255, 255, 0.2)
          .text
            padding 0 12px
            font-weight 700
            font-size 14px
        .avatar
          display flex
          align-content center
          justify-content space-around
          flex-wrap wrap
          margin 0 auto
          width 80%
          .avatar-item
            width 118px
            height 130px
            img
              flex 1
        .about
          width 80%
          margin 0 auto
          .about-item
            width 95%
            margin 0 auto
            height 30px
            line-height 30px
            .content
              display inline-block
              text-align left
            .type
              display inline-block
              width 53px
            a
              color #fff
              text-decoration underline
      .detail-close
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        clear both
        font-size 32px

  dot::before {
    display: block
    content: '?\A#\A@\A!'
    vertical-align top
    white-space: pre-wrap
    animation: dot 5s infinite step-start both
  }
  @keyframes dot {
    25% { transform: translateY(-3em); }
    50% { transform: translateY(-2em); }
    75% { transform: translateY(-1em); }
  }
</style>
