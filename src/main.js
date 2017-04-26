// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import Router from './router';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import introduction from './components/introduction/introduction.vue';
import experience from './components/experience/experience.vue';
import skills from './components/skills/skills.vue';
import './common/stylus/index.styl';

// Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Router);

const routes = [
  {path: '/introduction', component: introduction},
  {path: '/experience', component: experience},
  {path: '/skills', component: skills}
];
const router = new Router({
  routes,
  linkActiveClass: 'active'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
router.push('/introduction');
