<template lang="html">
  <div>
    <transition name="slide">
      <div v-show="this.switch === 1" :style="divHeight" class="introduction" ref="section1" @touchstart.stop.prevent="T_start($event,1)" @touchend.stop.prevent="T_end">
        <ul>
          <li><span>姓名：</span><fade :show="this.switch === 1" :content="introduction.page[0].content"></fade></li>
          <li><span>毕业院校：</span><fade :show="this.switch === 1" :content="introduction.page[1].content"></fade></li>
          <li><span>自我介绍：</span><fade :show="this.switch === 1" :content="introduction.page[2].content"></fade></li>
        </ul>
      </div>
    </transition>
    <transition name="slide">
      <div v-show="this.switch === 2" :style="divHeight" class="introduction" ref="section2" @touchstart.stop.prevent="T_start($event,2)" @touchend.stop.prevent="T_end">
        <ul>
          <li><span>证书：</span><fade :show="this.switch === 2" :content="introduction.page[3].content"></fade></li>
          <li><span>外语技能：</span><fade :show="this.switch === 2" :content="introduction.page[4].content"></fade></li>
          <li><span>在校经历：</span><fade :show="this.switch === 2" :content="introduction.page[5].content"></fade></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import fade from '../fade/fade.vue';

  export default {
    props: {
      introduction: {
        type: Object
      }
    },
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
    computed: {
      divHeight: function() {
        let h = (document.documentElement.clientHeight - 158) + 'px';
        return {'height': h};
      }
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
    },
    components: {
      fade
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .introduction
    position absolute
    width 100%
    top 158px
    left 0px
    background-image url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495108989503&di=5a2098137d19c56dc7da521c0fe56f2b&imgtype=0&src=http%3A%2F%2Fimg01.taopic.com%2F160605%2F240386-1606050T05641.jpg")
    z-index -1
    transition all .5s linear
    ul
      height 100%
      width 100%
      li
        height 25%
        width 100%
        span
          display inline-block
          width 35%
          height 30px
          margin-right 5%
          line-height 30px
          vertical-align top
          text-align right
          font-size 18px
          border-right 5px solid #000
          border-bottom 1px solid #000
          box-sizing border-box
      li:last-child
        height 50%
</style>
