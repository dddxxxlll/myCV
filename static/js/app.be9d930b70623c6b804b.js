webpackJsonp([0],[,function(t,s){t.exports={introduction:{name:"董昕亮",description:"苟...全性命于乱世？",avatar_title:"https://ooo.0o0.ooo/2017/06/21/594a2e20f138c.jpg",minNumber:4,avatar:[{src:"https://ooo.0o0.ooo/2017/06/21/594a2e20f138c.jpg"},{src:"https://ooo.0o0.ooo/2017/06/21/594a2e20f1e0e.jpg"},{src:"https://ooo.0o0.ooo/2017/06/21/594a2e20ce567.jpeg"},{src:"http://ww2.sinaimg.cn/mw690/e7ae9384jw8eqnl5l86naj20dc0dcwf5.jpg"}],about:[{type:"Tel",isSrc:!1,content:"13917090094"},{type:"E-mail",isSrc:!1,content:"1071042788@qq.com"},{type:"Github",isSrc:!0,content:"https://github.com/dddxxxlll"},{type:"Blog",isSrc:!0,content:"https://dddxxxlll.github.io"}],page:[{type:"name",content:"董昕亮"},{type:"school",content:"湘潭大学、华东师范大学第一附属中学"},{type:"introduce",content:"毕业于2016年，乐观上进，吃苦耐劳，有素描功底。热爱编程，视其为未来十年所要为之奋斗的事业"},{type:"certificate",content:"六级证书、驾照。。。"},{type:"foreign_language",content:"英语六级（459）"},{type:"school_experience",content:"在校期间曾任职院外联部部长。策划、参与活动——院羽毛球联赛、三院联合迎新晚会、校四人制足球等活动。拉取活动资金万余。"}]},experience:{page:[{program:"云瞻、云凌、虹口云平台等",tool:"jquery、echart、bootstrap等",time:"2017.6至今",description:"私有云的前端实现，处理后台从VMware中拿出的数据，并将其可视化展示。本人主要负责项目各个模块的js编写。"},{program:"这个简历",tool:"vue全家桶、webpack等",time:"1个月",description:"整个项目独立完成，功能包括，路由懒加载、webpack构建与配置、mock后台数据、打包部署在github上等"}]},skills:[{name:"JavaScript",skills:[{name:"Vue",description:"基本能熟练使用"},{name:"原生JS",description:"水平良好"},{name:"JQuery",description:"最近用的比较少了"},{name:"AngularJS",description:"看过，不太熟"},{name:"EChart",description:"基本api都了解了"}]},{name:"CSS",skills:[{name:"CSS3",description:"还行吧"},{name:"Bootstrap",description:"要用的时候会翻官网。。"},{name:"Stylus",description:"这个简历就是用stylus写的"}]},{name:"HTML",skills:[{name:"HTML5",description:"基本没问题"},{name:"JSP",description:"工作用"}]},{name:"后端语言",skills:[{name:"JAVA",description:"看过，不太熟"},{name:"PHP",description:"现在差不多都忘了"},{name:"Ruby",description:"并不会。。。凑个数"},{name:"NODE",description:"比较熟悉，可以实现小功能"}]},{name:"版本控制器",skills:[{name:"Git",description:"经常使用"},{name:"SVN",description:"工作用"}]},{name:"奇怪的东西",skills:[{name:"守望先锋",description:"白金菜鸡"},{name:"英雄联盟",description:"曾经的钻石。。。"},{name:"MySQL",description:"不太熟悉"},{name:"Linux",description:"用VMware建个服务器是可以的"},{name:"帅气度",description:"还行吧"},{name:"DOTA",description:"四年没玩了。。。"},{name:"曼联球迷？",description:"应该说是穆里尼奥的球迷"},{name:"CSGO",description:"白银菜鸡。。。"}]}]}},,,function(t,s,e){e(28);var i=e(0)(e(15),e(45),null,null);t.exports=i.exports},,,function(t,s){},function(t,s,e){e(30);var i=e(0)(e(14),e(47),null,null);t.exports=i.exports},function(t,s,e){e(27);var i=e(0)(e(16),e(44),null,null);t.exports=i.exports},function(t,s,e){e(31);var i=e(0)(e(20),e(48),null,null);t.exports=i.exports},function(t,s,e){e(33);var i=e(0)(e(23),e(50),null,null);t.exports=i.exports},,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),n=e(8),o=e.n(n),a=e(12),r=e(6),c=e(10),l=e.n(c),u=e(9),h=e.n(u),d=e(11),p=e.n(d),v=e(7);e.n(v);i.a.use(r.a),i.a.use(a.a);var f=[{path:"/introduction",component:l.a},{path:"/experience",component:h.a},{path:"/skills",component:p.a}],m=new a.a({routes:f,linkActiveClass:"active"});new i.a({el:"#app",router:m,template:"<App/>",components:{App:o.a}}).$mount("#app"),m.push("/introduction")},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(40),n=e.n(i),o=e(1),a=e.n(o);s.default={data:function(){return{introduction:{}}},created:function(){this.introduction=a.a.introduction},components:{"v-header":n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2);s.default={props:{skill:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.skill.count?this.skill.count++:i.a.set(this.skill,"count",1),this.$emit("add",t.target))},decreaseCart:function(){this.skill.count&&this.skill.count--}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(41),n=e.n(i),o=e(39),a=e.n(o),r=e(1),c=e.n(r);s.default={data:function(){return{experience:[],startX:"",startY:"",endX:"",endY:"",type:"",switch:1,show:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1}},computed:{divHeight:function(){return{height:document.documentElement.clientHeight-158+"px"}}},created:function(){this.experience=c.a.experience;var t=this;t.show=!0,setTimeout(function(){t.show2=!0},1500),setTimeout(function(){t.show3=!0},2500),setTimeout(function(){t.show4=!0},3500)},methods:{GetSlideDirection:function(t,s,e,i){var n=s-i,o=e-t,a=0;if(Math.abs(o)<50&&Math.abs(n)<50)return a;var r=180*Math.atan2(n,o)/Math.PI;return r>=-45&&r<45?a=4:r>=45&&r<135?a=1:r>=-135&&r<-45?a=2:(r>=135&&r<=180||r>=-180&&r<-135)&&(a=3),a},T_start:function(t,s){this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY,this.type=s},T_end:function(t){switch(this.endX=t.changedTouches[0].pageX,this.endY=t.changedTouches[0].pageY,this.GetSlideDirection(this.startX,this.startY,this.endX,this.endY)){case 0:break;case 1:if(1===this.type){var s=this.$refs.section2;this.$refs.section1.style.opacity=0,s.style.opacity=1,s.style.top=window.screen.availHeight+"px",setTimeout(function(){s.style.top="158px"},500),this.switch=2,this.show=!1,this.show2=!1,this.show3=!1,this.show4=!1;var e=this;e.show5=!0,setTimeout(function(){e.show6=!0},1500),setTimeout(function(){e.show7=!0},2500),setTimeout(function(){e.show8=!0},3500)}else{var i=this.$refs.section1;this.$refs.section2.style.opacity=0,i.style.opacity=1,i.style.top=window.screen.availHeight+"px",setTimeout(function(){i.style.top="158px"},500),this.switch=1,this.show5=!1,this.show6=!1,this.show7=!1,this.show8=!1;var n=this;n.show=!0,setTimeout(function(){n.show2=!0},1500),setTimeout(function(){n.show3=!0},2500),setTimeout(function(){n.show4=!0},3500)}break;case 2:if(1===this.type){var o=this.$refs.section2;this.$refs.section1.style.opacity=0,o.style.opacity=1,o.style.top=-(window.screen.availHeight-158)+"px",setTimeout(function(){o.style.top="158px"},500),this.switch=2,this.show=!1,this.show2=!1,this.show3=!1,this.show4=!1;var a=this;a.show5=!0,setTimeout(function(){a.show6=!0},1500),setTimeout(function(){a.show7=!0},2500),setTimeout(function(){a.show8=!0},3500)}else{var r=this.$refs.section1;this.$refs.section2.style.opacity=0,r.style.opacity=1,r.style.top=-(window.screen.availHeight-158)+"px",setTimeout(function(){r.style.top="158px"},500),this.switch=1,this.show5=!1,this.show6=!1,this.show7=!1,this.show8=!1;var c=this;c.show=!0,setTimeout(function(){c.show2=!0},1500),setTimeout(function(){c.show3=!0},2500),setTimeout(function(){c.show4=!0},3500)}}}},components:{shake:n.a,fadeIn:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{content:{type:String},show:{type:Boolean}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{content:{type:String},show:{type:Boolean}},methods:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{introduction:{type:Object}},data:function(){return{detailShow:!1,avatarSrc:"https://ooo.0o0.ooo/2017/06/21/594a2e20f138c.jpg"}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1},changeAvatar:function(t){this.avatarSrc=this.introduction.avatar[t].src}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(38),n=e.n(i);s.default={props:{introduction:{type:Object}},data:function(){return{startX:"",startY:"",endX:"",endY:"",type:"",switch:1}},computed:{divHeight:function(){return{height:document.documentElement.clientHeight-158+"px"}}},methods:{GetSlideDirection:function(t,s,e,i){var n=s-i,o=e-t,a=0;if(Math.abs(o)<50&&Math.abs(n)<50)return a;var r=180*Math.atan2(n,o)/Math.PI;return r>=-45&&r<45?a=4:r>=45&&r<135?a=1:r>=-135&&r<-45?a=2:(r>=135&&r<=180||r>=-180&&r<-135)&&(a=3),a},T_start:function(t,s){this.startX=t.touches[0].pageX,this.startY=t.touches[0].pageY,this.type=s},T_end:function(t){switch(this.endX=t.changedTouches[0].pageX,this.endY=t.changedTouches[0].pageY,this.GetSlideDirection(this.startX,this.startY,this.endX,this.endY)){case 0:case 1:case 2:break;case 3:if(1===this.type){var s=this.$refs.section2;this.$refs.section1.style.opacity=0,s.style.opacity=1,s.style.left=document.body.clientWidth+"px",setTimeout(function(){s.style.left=0},500),this.switch=2}else{var e=this.$refs.section1;this.$refs.section2.style.opacity=0,e.style.opacity=1,e.style.left=document.body.clientWidth+"px",setTimeout(function(){e.style.left=0},500),this.switch=1}break;case 4:if(1===this.type){var i=this.$refs.section2;this.$refs.section1.style.opacity=0,i.style.opacity=1,i.style.left=-document.body.clientWidth+"px",setTimeout(function(){i.style.left=0},500),this.switch=2}else{var n=this.$refs.section1;this.$refs.section2.style.opacity=0,n.style.opacity=1,n.style.left=-document.body.clientWidth+"px",setTimeout(function(){n.style.left=0},500),this.switch=1}}}},components:{fade:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{content:{type:String},show:{type:Boolean}},methods:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),n=e.n(i),o=e(4),a=e.n(o);s.default={props:{selectSkills:{type:Array,default:function(){return[]}},minNumber:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalNumber:function(){var t=0;return this.selectSkills.forEach(function(s){t+=s.count}),t},totalCount:function(){var t=0;return this.selectSkills.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalNumber)return"至少选"+this.minNumber+"个";if(this.totalNumber<this.minNumber){return"还差"+(this.minNumber-this.totalNumber)+"个"}return"你可以点了"},payClass:function(){return this.totalNumber<this.minNumber?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.a(t.$refs.listContent,{click:!0})}),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectSkills.forEach(function(t){t.count=0})},pay:function(){this.totalNumber<this.minNumber||window.alert("选择了"+this.totalNumber+"个技能")},hideList:function(){this.fold=!0},addSkill:function(t){this.drop(t)},beforeDrop:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),n=i.left-32,o=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+o+"px,0)",t.style.transform="translate3d(0,"+o+"px,0)";var a=t.getElementsByClassName("inner-hook")[0];a.style.webkitTransform="translate3d("+n+"px,0,0)",a.style.transform="translate3d("+n+"px,0,0)"}}},dropping:function(t,s){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",s)})},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")}},components:{cartcontrol:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(3),n=e.n(i),o=e(42),a=e.n(o),r=e(4),c=e.n(r),l=e(1),u=e.n(l);s.default={props:{introduction:{type:Object}},data:function(){return{skills:[],listHeight:[],scrollY:0,selectedSkill:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1]-1;if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectSkills:function(){var t=[];return this.skills.forEach(function(s){s.skills.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.skills=u.a.skills,this.$nextTick(function(){t._initScroll(),t._calculateHeight()})},methods:{_initScroll:function(){var t=this;this.menuScroll=new n.a(this.$refs.menuWrapper,{click:!0}),this.skillsScroll=new n.a(this.$refs.skillsWrapper,{click:!0,probeType:3}),this.skillsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.skillsWrapper.getElementsByClassName("skill-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t,s){if(s._constructed){var e=this.$refs.skillsWrapper.getElementsByClassName("skill-list-hook"),i=e[t];this.skillsScroll.scrollToElement(i,300)}},selectSkill:function(t,s){s._constructed&&(this.selectedSkill=t)},addSkill:function(t){this._drop(t)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})}},components:{shopcart:a.a,cartcontrol:c.a}}},,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,function(t,s,e){e(26);var i=e(0)(e(17),e(43),null,null);t.exports=i.exports},function(t,s,e){e(35);var i=e(0)(e(18),e(52),null,null);t.exports=i.exports},function(t,s,e){e(32);var i=e(0)(e(19),e(49),null,null);t.exports=i.exports},function(t,s,e){e(34);var i=e(0)(e(21),e(51),null,null);t.exports=i.exports},function(t,s,e){e(29);var i=e(0)(e(22),e(46),null,null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade_in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fade_content"},[e("div",{staticClass:"inner"},[t._v(t._s(t.content))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:1===this.switch,expression:"this.switch === 1"}],ref:"section1",staticClass:"introduction2",style:t.divHeight,on:{touchstart:function(s){s.stopPropagation(),s.preventDefault(),t.T_start(s,1)},touchend:function(s){s.stopPropagation(),s.preventDefault(),t.T_end(s)}}},[e("div",{staticClass:"span"},[e("div",{staticClass:"title top"},[e("span",[t._v("项目名称")])]),e("div",{staticClass:"empty"}),e("shake",{attrs:{show:this.show,content:t.experience.page[0].program}})],1),t._v(" "),e("div",{staticClass:"span"},[e("shake",{attrs:{show:this.show2,content:t.experience.page[0].tool}}),e("div",{staticClass:"empty"}),e("div",{staticClass:"title bottom"},[e("span",[t._v("使用工具")])])],1),t._v(" "),e("div",{staticClass:"span"},[e("div",{staticClass:"title top"},[e("span",[t._v("持续时间")])]),e("div",{staticClass:"empty"}),e("shake",{attrs:{show:this.show3,content:t.experience.page[0].time}})],1),t._v(" "),e("div",{staticClass:"left"},[e("fadeIn",{attrs:{show:this.show4,content:t.experience.page[0].description}})],1)])]),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:2===this.switch,expression:"this.switch === 2"}],ref:"section2",staticClass:"introduction2 none",style:t.divHeight,on:{touchstart:function(s){s.stopPropagation(),s.preventDefault(),t.T_start(s,2)},touchend:function(s){s.stopPropagation(),s.preventDefault(),t.T_end(s)}}},[e("div",{staticClass:"span",staticStyle:{float:"left"}},[e("div",{staticClass:"title top"},[e("span",[t._v("项目名称")])]),e("div",{staticClass:"empty"}),e("shake",{attrs:{show:this.show5,content:t.experience.page[1].program}})],1),t._v(" "),e("div",{staticClass:"span",staticStyle:{float:"left"}},[e("shake",{attrs:{show:this.show6,content:t.experience.page[1].tool}}),e("div",{staticClass:"empty"}),e("div",{staticClass:"title bottom"},[e("span",[t._v("使用工具")])])],1),t._v(" "),e("div",{staticClass:"span",staticStyle:{float:"left"}},[e("div",{staticClass:"title top"},[e("span",[t._v("持续时间")])]),e("div",{staticClass:"empty"}),e("shake",{attrs:{show:this.show7,content:t.experience.page[1].time}})],1),t._v(" "),e("div",{staticClass:"right"},[e("fadeIn",{attrs:{show:this.show8,content:t.experience.page[1].description}})],1)])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.skill.count>0,expression:"skill.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.skill.count>0,expression:"skill.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.skill.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalCount>0}},[t._v(t._s(t.totalNumber)+"个")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s){return e("div",[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)})),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectSkills,function(s){return e("li",{staticClass:"skill"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"count"},[e("span",[t._v("￥"+t._s(s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{skill:s},on:{add:t.addSkill}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{introduction:t.introduction}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/introduction"}},[t._v("介绍")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/experience"}},[t._v("经历")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/skills"}},[t._v("技能")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{introduction:t.introduction}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:1===this.switch,expression:"this.switch === 1"}],ref:"section1",staticClass:"introduction",style:t.divHeight,on:{touchstart:function(s){s.stopPropagation(),s.preventDefault(),t.T_start(s,1)},touchend:function(s){s.stopPropagation(),s.preventDefault(),t.T_end(s)}}},[e("ul",[e("li",[e("span",[t._v("姓名：")]),e("fade",{attrs:{show:1===this.switch,content:t.introduction.page[0].content}})],1),t._v(" "),e("li",[e("span",[t._v("毕业院校：")]),e("fade",{attrs:{show:1===this.switch,content:t.introduction.page[1].content}})],1),t._v(" "),e("li",[e("span",[t._v("自我介绍：")]),e("fade",{attrs:{show:1===this.switch,content:t.introduction.page[2].content}})],1)])])]),t._v(" "),e("transition",{attrs:{name:"slide"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:2===this.switch,expression:"this.switch === 2"}],ref:"section2",staticClass:"introduction",style:t.divHeight,on:{touchstart:function(s){s.stopPropagation(),s.preventDefault(),t.T_start(s,2)},touchend:function(s){s.stopPropagation(),s.preventDefault(),t.T_end(s)}}},[e("ul",[e("li",[e("span",[t._v("证书：")]),e("fade",{attrs:{show:2===this.switch,content:t.introduction.page[3].content}})],1),t._v(" "),e("li",[e("span",[t._v("外语技能：")]),e("fade",{attrs:{show:2===this.switch,content:t.introduction.page[4].content}})],1),t._v(" "),e("li",[e("span",[t._v("在校经历：")]),e("fade",{attrs:{show:2===this.switch,content:t.introduction.page[5].content}})],1)])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatarSrc,width:"118",height:"118"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"name"},[t._v(t._s(t.introduction.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.introduction.description)+"\n      ")])]),t._v(" "),e("div",{staticClass:"avatar_detail",on:{click:t.showDetail}},[e("span",[t._v("不要戳哇"),e("dot",[t._v("！")])],1)])]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.avatarSrc,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.introduction.name))]),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("点击更换头像")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.introduction.avatar?e("ul",{staticClass:"avatar"},t._l(t.introduction.avatar,function(s,i){return e("li",{staticClass:"avatar-item"},[e("img",{attrs:{src:t.introduction.avatar[i].src,width:"118",height:"118"},on:{click:function(s){t.changeAvatar(i)}}})])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("关于我")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.introduction.about?e("ul",{staticClass:"about"},t._l(t.introduction.about,function(s,i){return e("li",{staticClass:"about-item"},[e("span",{staticClass:"type"},[t._v(t._s(t.introduction.about[i].type)+":")]),t.introduction.about[i].isSrc?t._e():e("p",{staticClass:"content"},[t._v(t._s(t.introduction.about[i].content))]),t.introduction.about[i].isSrc?e("a",{staticClass:"content",attrs:{href:t.introduction.about[i].content}},[t._v(t._s(t.introduction.about[i].content))]):t._e()])})):t._e()])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"skills"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.skills,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[t._v("\n          "+t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"skillsWrapper",staticClass:"skills-wrapper"},[e("ul",t._l(t.skills,function(s){return e("li",{staticClass:"skill-list skill-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.skills,function(s){return e("li",{staticClass:"skill-item border-1px",on:{click:function(e){t.selectSkill(s,e)}}},[e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{skill:s},on:{add:t.addSkill}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-skills":t.selectSkills,"min-number":t.introduction.minNumber}})],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade_in"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"shaking",staticClass:"shake_content"},[e("span",[t._v(t._s(t.content))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fadein"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"shaking",staticClass:"fade_in_content"},[e("h3",[t._v("项目描述：")]),t._v(" "),e("div",[t._v(t._s(t.content))])])])},staticRenderFns:[]}},,function(t,s){}],[13]);
//# sourceMappingURL=app.be9d930b70623c6b804b.js.map