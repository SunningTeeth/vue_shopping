<template>
  <div class="goodsInfo_container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <!-- 轮播图 -->
        <!-- 注意：调用轮播图组件需要传递一个 lunBoTuList  -->
        <swipe :lunBoTuList="lunBoTuList" :isFull="true"></swipe>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ shoppingInfoList.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            市场价&nbsp;:&nbsp;
            <del>￥{{shoppingInfoList.maket_price}}</del>
            销售价&nbsp;:
            <b class="sell_price">￥{{shoppingInfoList.sell_price}}</b>
          </p>
          <p>
            购买数量&nbsp;
            <!-- numbox 组件 -->
            <numbox @func="getBuyNum" :max="shoppingInfoList.storage"></numbox>
          </p>
          <mt-button type="primary" class="btn">立即购买</mt-button>
          <mt-button type="danger" class="btn" @click="addCar()">加入购物车</mt-button>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div v-show="ballFlag" class="ball" ref="balls"></div>
          </transition>
        </div>
      </div>
    </div>

    <!-- 商品参数信息区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{ shoppingInfoList.shopnum}}</p>
          <p>库存情况:{{ shoppingInfoList.storage}}</p>
          <p>上架时间:{{ shoppingInfoList.add_time | dataFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
//导入轮播图组件
import swipe from "../subcomponents/swipe.vue";

//导入 numbox 组件
import numbox from "../subcomponents/goodsInfo_numbox.vue";

export default {
  data: function() {
    return {
      id: this.$route.params.id,
      count: 1, //购买商品的数量,默认认为用户会买一个
      ballFlag: false, //标识 加入购物车小球时候的动画
      lunBoTuList: [
        //轮播数组
        { id: 0, url: "../../images/img/1.jpg" },
        { id: 1, url: "../../images/img/2.jpg" },
        { id: 2, url: "../../images/img/3.jpg" },
        { id: 3, url: "../../images/img/4.jpg" },
        { id: 4, url: "../../images/img/5.jpg" },
        { id: 5, url: "../../images/img/6.jpg" },
        { id: 6, url: "../../images/img/7.jpg" },
        { id: 7, url: "../../images/img/0.jpg" },
        { id: 8, url: "../../images/img/1.jpg" },
        { id: 9, url: "../../images/img/2.jpg" },
        { id: 10, url: "../../images/img/3.jpg" }
      ],
      shoppingInfoList: [] //商品购买数组
    };
  },
  created() {
    this.getShoppingInfo();
  },
  methods: {
    getBuyNum(data) {
      //获取子组件传递的购买数量
      this.count = data;
    },
    getShoppingInfo() {
      //获取购买商品信息
      this.$http.get("../../data/goods/goodsinfo.json").then(
        res => {
          this.shoppingInfoList = res.body[0];
        },
        err => {
          //error
        }
      );
    },
    goDesc(id) {
      //图文介绍页面
      this.$router.push({ path: "/home/desc/" + this.id });
    },
    goComment(id) {
      // 商品评论
      this.$router.push({ path: "/home/comment/" + this.id });
    },
    addCar() {
      //加入购物车方法
      this.ballFlag = !this.ballFlag;

      //拼接出一个购物车对象，传到 store 状态
      var goodsInfo = {
        id: this.id,
        count: this.count,
        price: this.shoppingInfoList.sell_price,
        selected: true
      };
      // console.log(goodsInfo);
      //加入到购物车
      this.$store.commit("addToCar", goodsInfo);
    },
    beforeEnter(el) {
      //钩子函数的第一个参数el，就表示要执行动画的元素

      //beforeEnter  表示动画入场之前，此时，动画尚未开始，可以在
      //beforeEnter中，设置元素开始动画之前得起始样式
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      //这句话，没有实际作用，但是如果不写，出不来动画效果
      //可以认为 el.offsetWidth 会强制刷新动画
      // el.offsetWidth;
      el.offsetHeight;
      /**
       * 由于我们把小球的终止位置写成固定值了，所以当有滑动条或者不同分辨率下的时候，小球最后终止的位置
       * 就不正确,解决方案：
       * 1.获取小球的坐标位置
       * 2.获取购物车徽章的坐标位置
       * 3.用徽章的位置减去小球的位置即可得到最终动画小球停止的位置
       *
       * getBoundingClientRect() 这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。
       * 分别表示元素各边与页面上边和左边的距离。
       */

      //获取小球的位置
      const ballPosition = el.getBoundingClientRect();

      //获取徽章的位置，由于徽章实在app.vue 组件中，所以在该组件中无法获取，暂时采用 dom 操作
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      var xDist = badgePosition.left - ballPosition.left;
      var yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px,${yDist}px)`; //模板字符串
      el.style.transition = " all 1s cubic-bezier(.4,-0.3,1,.68)";
      //这里的done起始就代表afterEnter，
      //也就是说：done是afterEnter函数得引用
      done(); //如果不调用，小球动画完成后消失需要等待
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swipe,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsInfo_container {
  background-color: #ccc;
  .mui-card {
    overflow: visible;
  }
  .mui-card-content-inner {
    .sell_price{
      color: red;
    }
    button {
      margin: 0px 10px;
    }
    .ball {
      display: inline-block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: orangered;
      position: absolute;
      top: 56px;
      left: 131px;
      z-index: 99;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0px;
    }
  }
}
</style>

