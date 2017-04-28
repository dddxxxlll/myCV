<template lang="html">
  <div>
    <transition name="slide">
      <div v-show="this.switch === 1" class="introduction" ref="section1" @touchstart="T_start($event,1)" @touchend="T_end">
        介绍
      </div>
    </transition>
    <transition name="slide">
      <div v-show="this.switch === 2" class="introduction" ref="section2" @touchstart="T_start($event,2)" @touchend="T_end">
        介绍2
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        startX: '',
        startY: '',
        endX: '',
        endY: '',
        type: '',
        switch: 1
      };
    },
    methods: {
      GetSlideDirection(startX, startY, endX, endY) {
        var dy = startY - endY;
        var dx = endX - startX;
        var result = 0;
        // 如果滑动距离太短
        if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
          return result;
        }
        var angle = Math.atan2(dy, dx) * 180 / Math.PI;
        if (angle >= -45 && angle < 45) {
          result = 4;
        } else if (angle >= 45 && angle < 135) {
          result = 1;
        } else if (angle >= -135 && angle < -45) {
          result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
          result = 3;
        }
        return result;
      },
      T_start(ev, type) {
        this.startX = ev.touches[0].pageX;
        this.startY = ev.touches[0].pageY;
        this.type = type;
      },
      T_end(ev) {
        this.endX = ev.changedTouches[0].pageX;
        this.endY = ev.changedTouches[0].pageY;
        let direction = this.GetSlideDirection(this.startX, this.startY, this.endX, this.endY);
        switch (direction) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            /* 向下 */
            break;
          case 3:
            if (this.type === 1) {
              let dom = this.$refs.section2;
              this.$refs.section1.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.left = document.body.clientWidth + 'px';
              setTimeout(function() {
                dom.style.left = 0;
              }, 500);
              this.switch = 2;
            } else {
              let dom = this.$refs.section1;
              this.$refs.section2.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.left = document.body.clientWidth + 'px';
              setTimeout(function() {
                dom.style.left = 0;
              }, 500);
              this.switch = 1;
            }
            break;
          case 4:
            if (this.type === 1) {
              let dom = this.$refs.section2;
              this.$refs.section1.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.left = -document.body.clientWidth + 'px';
              setTimeout(function() {
                dom.style.left = 0;
              }, 500);
              this.switch = 2;
            } else {
              let dom = this.$refs.section1;
              this.$refs.section2.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.left = -document.body.clientWidth + 'px';
              setTimeout(function() {
                dom.style.left = 0;
              }, 500);
              this.switch = 1;
            }
            break;
          default:
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .introduction
    position absolute
    width 100%
    background #000
    top 158px
    height 100%
    left 0px
    z-index -1
    transition all .5s linear
    /* &.slide-enter-active, &.slide-leave-active
      transition all .5s linear
    &.slide-enter, &.slide-leave-active
      left 0
      top 158px */
</style>
