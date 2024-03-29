import vueRouter from "vue-router"

//导入对应路由组件
import home from "./components/tabbar/home.vue"

import member from "./components/tabbar/member.vue"

import shopcar from "./components/tabbar/shopcar.vue"

import search from "./components/tabbar/search.vue"

import newsList from "./components/news/newsList.vue"

import newsInfo from "./components/news/newsInfo.vue"

import photoList from "./components/photo/photoList.vue"

import photoinfo from './components/photo/photoInfo.vue'

import goodsList from './components/goods/goodsList.vue'

import goodsInfo from "./components/goods/goodsInfo.vue"

import desc from "./components/goods/desc.vue"

import comment from "./components/goods/comment.vue"


var routerObj = new vueRouter({
  //匹配路由规则
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: home },
    { path: "/member", component: member },
    { path: "/shopcar", component: shopcar },
    { path: "/search", component: search },
    { path: "/home/newsList", component: newsList },
    { path: "/home/newsInfo/:id", component: newsInfo },
    { path: "/home/photoList", component: photoList },
    { path: "/home/photoinfo/:id", component: photoinfo },
    { path: "/home/goodsList", component: goodsList },
    { path: "/home/goodsInfo/:id", component: goodsInfo, name: 'goodsList' },//name表示当前路由的名字，以后通过name属性值就可以访问这个路由
    { path: "/home/desc/:id", component: desc, name: 'desc' },//name表示当前路由的名字，以后通过name属性值就可以访问这个路由
    { path: "/home/comment/:id", component: comment, name: 'comment' },//name表示当前路由的名字，以后通过name属性值就可以访问这个路由

  ],
  linkActiveClass: "mui-active"//覆盖默认的路由高亮的类
})


// 向外暴露一个路由对象
export default routerObj