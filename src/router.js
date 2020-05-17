import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import home from "./components/home.vue";
import follow from "./components/follow.vue";
import column from "./components/column.vue";
import detail from "./components/detail.vue";
import login from "./components/login.vue";
import reg from "./components/reg.vue";
import user from "./components/user.vue";
import error from "./components/error.vue"
let routes=[
  {path:'/home',component:home},
  {path:'/follow',component:follow},
  {path:'/column',component:column},
  {path:'/detail/:aid',component:detail},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/',redirect:'/home'},
  {path:'*',component:error}
]
export default new Router({
	routes
})