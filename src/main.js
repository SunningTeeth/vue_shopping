//入口文件

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

//导入 vuex 
import Vuex from 'vuex'
Vue.use(Vuex)

//每次刚一进页面，就去 localStorage 里去读取 car 数组对象
var car = JSON.parse(localStorage.getItem('car') || '[]')


// 创建实例
var store = new Vuex.Store({
  state: {
    //this.$store.state.***
    //将购物车商品的数据，用一个数组存储起来,在car数组中，存储一些
    // 商品的对象，类似于：
    // {id:'商品id',count:'购买数量',price:'单价',selected:false(标识是否被选中)}
    // car: []
    car: car
  },
  mutations: {
    //this.$store.commit('方法名称','传递唯一的参数')
    addToCar(state, goodsInfo) {
      //点击购物车，把商品信息，保存到 store 中的 car 上

      //分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，只需要更新数量
      // 2. 如果没有，则直接把商品数据push 到 car 中即可


      //假设：一开始在购物车中没有找到对应商品
      var flag = false;

      state.car.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count)
          //找到对应商品，设置为true
          flag = true;
          return true;
        }
      })

      if (!flag) {
        //没有找到对应商品，直接添加到 car
        state.car.push(goodsInfo)
      }

      //当更新 car 之后,把 car 存储到本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    updateGoodsInfo(state, goodsInfo) {
      //更新商品的信息
      state.car.some(item => {

        //每当更新商品的id与购物车里面的id 相等,就把最新的商品数量传递过去
        if (item.id == goodsInfo.id) {
          item.count = parseInt(goodsInfo.count);
          return true;
        }
      })

      //当更新 car 之后,把 car 信息更新到本地存储
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    delGoodsInfo(state, goodsInfo) {
      //根据id,删除购物车对应商品
      state.car.some((item, index) => {
        console.log(index + "--")
        if (item.id == goodsInfo.id) {

          state.car.splice(index, 1)
          return true;
        }
      })
      //当更新 car 之后,把 car 信息更新到本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, goodsInfo) {
      // 根据 id ，修改购物车里面 选择状态
      state.car.some(item => {
        if (item.id == goodsInfo.id) {
          item.selected = goodsInfo.selected;
          return true;
        }
      })
      //当更新 car 之后,把 car 信息更新到本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    //this.$store.getters.****
    getAllCarCount(state) {//获取购物车所有商品的数量

      var allCount = 0;
      state.car.forEach(item => {
        allCount += item.count;
      })
      return allCount;
    },
    getGoodsCount(state) {
      //获取商品数量
      var obj = {};

      state.car.forEach(item => {
        obj[item.id] = item.count;
      })

      return obj;
    },
    getGoodsSelected(state) {
      //获取选中的状态
      var obj = {};
      state.car.forEach(item => {
        obj[item.id] = item.selected;
      })
      return obj;
    },
    getGoodsCountAndAmount(state) {
      //监听购物出选中的数量、总价
      var obj = {
        count: 0,
        amount: 0
      }

      state.car.forEach(item => {
        if (item.selected) {
          obj.count += item.count;
          obj.amount += item.price * item.count;
        }
      })

      return obj;
    }
  }
})



//设置请求的根路径
// Vue.http.options.root = "/"

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
  router: routerObj,
  store: store//挂载 store 状态管理对象
})

