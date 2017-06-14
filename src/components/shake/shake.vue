<template lang="html">
<transition name="fade_in">
  <div class="shake_content" v-show="show" ref="shaking">
    <span>{{content}}</span>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">

  export default {
    props: {
      content: {
        type: String
      },
      show: {
        type: Boolean
      }
    },
    methods: {
      /* shaking() {
        let shaking = this.$refs.shaking;
        shaking.style.animation = 'pulse 4s cubic-bezier(0.30, 2.40, 0.85, 2.50)';
        shaking.style.animationFillMode = 'forwards';
      } */
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @-webkit-keyframes pulse {
    0% {
      transform: translate3d(0, 0, 0)
    }

    35% {
      transform: translate3d(0, 40px, 0)
    }

    70% {
      transform: translate3d(0, 0px, 0)
    }

    85% {
      transform: translate3d(0, 20px, 0)
    }

    100% {
      transform: translate3d(0, 0px, 0)
    }
  }

  .shake_content
    font-size 18px
    height 70%
    width 100%
    display inline-block
    border-top 5px solid #ccc
    border-left 1px solid #ccc
    box-sizing border-box
    transform translate3d(0, 0px, 0)
    animation-fill-mode forwards
    line-height 60px
    span
      writing-mode vertical-rl
      width 100%
      height 100%
      text-align center
    &.fade_in-enter-active
      animation pulse 3s cubic-bezier(0.30, 2.40, 0.85, 2.50)
    /* &.fade_in-leave-active
      animation pulse 5s infinite */
</style>
