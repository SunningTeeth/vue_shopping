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
Vue.component(Header.name, Header)

//导入mint-UI样式
import "mint-ui/lib/style.css"

//导入mui样式
import "./lib/mui/css/mui.css"

//导入mui扩展字体图标样式
import "./lib/mui/css/icons-extra.css"

//导入mint-UI轮播图组件
// import { Swipe, SwipeItem, Button ,lazyload} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// //导入懒加载组件
// Vue.use(lazyload)

//按需求导入，发现lazyload有问题，换成全部导入
import mintui from "mint-ui"
Vue.use(mintui)

//导入图片缩略图插件
import vuePreview from "vue-preview"
Vue.use(vuePreview)

//导入时间插件
import moment from "moment"

//设置请求的根路径
Vue.http.options.root = "/"

//设置全局 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true


//定义全局的过滤器
Vue.filter("dataFormat", function (dataStr, patten = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(patten);

})

var vm = new Vue({
  el: "#app",
  render: function (createdElements) {
    return createdElements(app)
  },
  router: routerObj
})

