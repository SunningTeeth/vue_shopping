//入口文件
console.log("ok")

//导入vue
import Vue from "vue"

//导入vue-resource
import vueResource from "vue-resource"

//安装vue-resource
Vue.use(vueResource)

//导入路由
import vueRouter from "vue-router"

//安装路由
Vue.use(vueRouter)

//导入router.js模块
import routerObj from "./router"

import app from "./app.vue"

//按需求导入Mint-UI 中的组件
import { Header } from "mint-ui"
Vue.component(Header.name,Header)

//导入mint-UI样式
import "mint-ui/lib/style.css"

//导入mui样式
import "./lib/mui/css/mui.css"

//导入mui扩展字体图标样式
import "./lib/mui/css/icons-extra.css"

//导入mint-UI轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


var vm = new Vue({
  el:"#app",
  render:function(createdElements){
    return createdElements(app)
  },
  router:routerObj
})

