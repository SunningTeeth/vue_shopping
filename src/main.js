//入口文件
console.log("ok")

import Vue from "vue"

import app from "./app.vue"

//按需求导入Mint-UI 中的组件
import { Header } from "mint-ui"
Vue.component(Header.name,Header)

//导入mint-UI样式
import "mint-ui/lib/style.css"

//导入mui样式
import "./lib/mui/css/mui.css"

var vm = new Vue({
  el:"#app",
  render:function(createdElements){
    return createdElements(app)
  }
})