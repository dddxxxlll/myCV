<template lang="html">
    <transition name="fade_in">
      <div class="fade_content" v-show="show">
        <div class="inner">{{content}}</div>
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
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fade_content
    opacity 1
    display inline-block
    width 60%
    height 100%
    box-sizing border-box
    padding 0 10px
    font-family "宋体"
    .inner
      transform translate3D(0, 0, 0)
      transition all 0.5s ease-in 1.5s
      font-size 18px
      line-height 30px
    &.fade_in-enter-active, &.fade_in-leave-active
      transition all 0.5s ease-in 1.5s
      opacity 1
    &.fade_in-enter, &.fade_in-leave-active
      opacity 0
      .inner
        transform translate3D(100px, 0, 0)
</style>
