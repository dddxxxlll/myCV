<template lang="html">
  <div class="skills">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in skills" class="menu-item" :class="{'current':currentIndex === index}" @click="selectMenu(index,$event)">
          <span class="text border-1px">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="skills-wrapper" ref="skillsWrapper">
      <ul>
        <li v-for="item in skills" class="skill-list skill-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectSkill(skill,$event)" v-for="skill in item.skills" class="skill-item border-1px">
              <div class="content">
                <h2 class="name">{{skill.name}}</h2>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  const ERR_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        skills: [],
        listHeight: [],
        scrollY: 0,
        selectedSkill: {}
      };
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1] - 1;
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectSkills() {
        let skills = [];
        this.skills.forEach((skill) => {
          skill.skills.forEach((skill) => {
            if (skill.count) {
              skills.push(skill);
            }
          });
        });
        return skills;
      }
    },
    created() {
      this.$http.get('/api/skills').then((response) => {
        response = response.body;
        console.log(response);
        if (response.errno === ERR_OK) {
          this.skills = response.skills;
          console.log(this.skills);
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.skillsScroll = new BScroll(this.$refs.skillsWrapper, {
          click: true,
          probeType: 3 // 滚动时返回滚动位置
        });
        this.skillsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let skillList = this.$refs.skillsWrapper.getElementsByClassName('skill-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < skillList.length; i++) {
          let item = skillList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      selectMenu(index, event) {
        if (!event._constructed) {
          return;
        }
        let skillList = this.$refs.skillsWrapper.getElementsByClassName('skill-list-hook');
        let el = skillList[index];
        this.skillsScroll.scrollToElement(el, 300);
      },
      selectSkill(skill, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedSkill = skill;
        // this.$refs.skill.show();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"


  .skills
    display flex
    position absolute
    top 158px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        &.current
          position relative
          margin-top -1px
          z-index 10
          background #fff
          font-weight 700
          .text
            border-none()
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size 12px
    .skills-wrapper
      flex 1
      .title
        padding-left 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147, 153, 159)
        background #f3f5f7
      .skill-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom 0
        .content
          flex 1
          .name
            font-size 14px
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            color rgb(7, 17, 27)
</style>
