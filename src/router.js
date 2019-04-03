import vueRouter from "vue-router"

//导入对应路由组件
import home from "./components/tabbar/home.vue"

import member from "./components/tabbar/member.vue"

import shopcar from "./components/tabbar/shopcar.vue"

import search from "./components/tabbar/search.vue"

var routerObj = new vueRouter({
  //匹配路由规则
  routes: [
    { path:"/",redirect:"/home" },
    { path: "/home", component: home },
    { path: "/member", component: member },
    { path: "/shopcar", component: shopcar },
    { path: "/search", component: search }
  ],
  linkActiveClass: "mui-active"//覆盖默认的路由高亮的类
})


// 向外暴露一个路由对象
export default routerObj