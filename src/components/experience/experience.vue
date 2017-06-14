<template lang="html">
  <div>
    <transition name="slide">
      <div v-show="this.switch === 1" :style="divHeight" class="introduction2" ref="section1" @touchstart.stop.prevent="T_start($event,1)" @touchend.stop.prevent="T_end($event)">
        <div class="span"><div class="title top"><span>项目名称</span></div><div class="empty"></div><shake :show="this.show" :content="experience.page[0].program"></shake></div>
        <div class="span"><shake :show="this.show2" :content="experience.page[0].tool"></shake><div class="empty"></div><div class="title bottom"><span>使用工具</span></div></div>
        <div class="span"><div class="title top"><span>持续时间</span></div><div class="empty"></div><shake :show="this.show3" :content="experience.page[0].time"></shake></div>
        <div class="left">
          <fadeIn :show="this.show4" :content="experience.page[0].description"></fadeIn>
        </div>
      </div>
    </transition>
    <transition name="slide">
      <div v-show="this.switch === 2" :style="divHeight" class="introduction2 none" ref="section2" @touchstart.stop.prevent="T_start($event,2)" @touchend.stop.prevent="T_end($event)">
        经历2
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import shake from '../shake/shake.vue';
  import fadeIn from '../fade_in/fade_in.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        experience: [],
        startX: '',
        startY: '',
        endX: '',
        endY: '',
        type: '',
        switch: 1,
        show: true,
        show2: true,
        show3: true,
        show4: true
      };
    },
    computed: {
      divHeight: function() {
        let h = (document.documentElement.clientHeight - 158) + 'px';
        return {'height': h};
      }
    },
    created() {
      this.$http.get('/api/experience').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.experience = response.experience;
        }
      });
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
        /* alert(document.html.clientHeight); */
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
            if (this.type === 1) {
              let dom = this.$refs.section2;
              this.$refs.section1.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.top = window.screen.availHeight + 'px';
              setTimeout(function() {
                dom.style.top = 158 + 'px';
              }, 500);
              this.switch = 2;
              this.show = false;
              this.show2 = false;
              this.show3 = false;
              this.show4 = false;
            } else {
              let dom = this.$refs.section1;
              this.$refs.section2.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.top = window.screen.availHeight + 'px';
              setTimeout(function() {
                dom.style.top = 158 + 'px';
              }, 500);
              this.switch = 1;
              let This = this;
              This.show = true;
              setTimeout(function () {
                This.show2 = true;
              }, 1500);
              setTimeout(function () {
                This.show3 = true;
              }, 2500);
              setTimeout(function () {
                This.show4 = true;
              }, 3500);
            }
            break;
          case 2:
            /* 向下 */
            if (this.type === 1) {
              let dom = this.$refs.section2;
              this.$refs.section1.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.top = -(window.screen.availHeight - 158) + 'px';
              setTimeout(function() {
                dom.style.top = 158 + 'px';
              }, 500);
              this.switch = 2;
              this.show = false;
              this.show2 = false;
              this.show3 = false;
              this.show4 = false;
            } else {
              let dom = this.$refs.section1;
              this.$refs.section2.style.opacity = 0;
              dom.style.opacity = 1;
              dom.style.top = -(window.screen.availHeight - 158) + 'px';
              setTimeout(function() {
                dom.style.top = 158 + 'px';
              }, 500);
              this.switch = 1;
              let This = this;
              This.show = true;
              setTimeout(function () {
                This.show2 = true;
              }, 1500);
              setTimeout(function () {
                This.show3 = true;
              }, 2500);
              setTimeout(function () {
                This.show4 = true;
              }, 3500);
            }
            break;
          /* case 3:
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
            break; */
          default:
        }
      }
    },
    components: {
      shake,
      fadeIn
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .introduction2
    position absolute
    width 100%
    top 158px
    left 0px
    z-index -1
    transition all .5s linear
    .left
      float left
      width 40%
    .span
      width 60px
      display inline-block
      height 100%
      float right
      position relative
      font-size 0
      .title
        box-sizing border-box
        border-top 5px solid #000
        border-left 1px solid #000
        height 30%
        width 100%
        display inline-block
        font-size 18px
        line-height 60px
        text-align center
        &.top
          position absolute
          top 0
          left 0
        &.bottom
          position absolute
          bottom 0
          left 0
        span
          writing-mode vertical-rl
          width 100%
          height 100%
      .empty
        height 30%
        width 100%
        display inline-block
  /* &.slide-enter-active, &.slide-leave-active
    transition all .5s linear
  &.slide-enter, &.slide-leave-active
    left 0
    top 158px */
</style>
