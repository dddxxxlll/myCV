<template lang="html">
  <transition name="fadein">
    <div class="fade_in_content" v-show="show" ref="shaking">
      <h3>项目描述：</h3>
      <div>{{content}}</div>
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
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fade_in_content
    width 100%
    h3
      font-weight bold
      margin 10px 0
      font-size 18px
    div
      word-wrap break-word
      line-height 20px
    &.fadein-enter-active, &.fadein-leave-active
      transition all 2s ease-in
      opacity 1
    &.fadein-enter, &.fadein-leave-active
      opacity 0
</style>
