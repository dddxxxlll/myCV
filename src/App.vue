<template>
  <div id="app">
    <v-header :introduction="introduction"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/introduction">介绍</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/experience">经历</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/skills">技能</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :introduction="introduction"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from '../src/components/header/header.vue';
  import data from './common/json/data.json';

  // const ERR_OK = 0;

  export default {
    data() {
      return {
        introduction: {}
      };
    },
    created() {
      /* this.$http.get('/api/introduction').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.introduction = response.introduction;
        }
      }); */
      this.introduction = data.introduction;
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display flex
    width 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77,85,93)
        &.active
          color: rgb(240,20,20)
</style>
