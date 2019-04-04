<template>
  <div class="goodsList">
    <!-- <router-link
      class="goods_item"
      v-for="item in goodsList"
      :key="item.id"
      :to="'/home/goodsInfo/' + item.id"
      tag="div"
    >
      <img :src="item.img_url" alt>
      <h3>{{ item.title }}</h3>
      <div class="info">
        <div class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.maket_price}}</span>
        </div>
        <div class>
          <span>热卖中</span>
          <span>剩余{{ item.storage_quantity}}件</span>
        </div>
      </div>
    </router-link>-->

    <!-- 这里不适用 router-link 进行跳转,换成 vue-router 中的另一种方式-->
    <!-- 详情请参照 methods 中goDetails() -->

    <!-- 实现页面的跳转,有两种方式 -->
    <!-- 1.通过 a 标签实现页面跳转 -->
    <!-- 2.使用 window.location.href 的形式，叫做编程式导航  -->
    <!-- 采用编程式导航实现路由的跳转 -->
    <div class="goods_item" v-for="item in goodsList" :key="item.id" @click="goDetails(item.id)">
      <img :src="item.img_url" alt>
      <h3>{{ item.title }}</h3>
      <div class="info">
        <div class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.maket_price}}</span>
        </div>
        <div class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.storage_quantity}}件</span>
        </div>
      </div>
    </div>

    <mt-button type="primary" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, //分页的页数
      goodsList: [
        //商品信息数组
        {
          id: 0,
          img_url: "../../images/img/0.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 1,
          img_url: "../../images/img/1.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 2,
          img_url: "../../images/img/2.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 3,
          img_url: "../../images/img/3.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 4,
          img_url: "../../images/img/4.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 5,
          img_url: "../../images/img/5.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 6,
          img_url: "../../images/img/6.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 7,
          img_url: "../../images/img/7.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 8,
          img_url: "../../images/img/1.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 9,
          img_url: "../../images/img/3.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        },
        {
          id: 10,
          img_url: "../../images/img/2.jpg",
          title: "iphonexr 128G",
          sell_price: "8980",
          maket_price: "9299",
          storage_quantity: "80"
        }
      ] //存放商品列表的数组
    };
  },
  created() {
    // this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取所有商品列表
      Toast("没有数据接口！");
      var _this = this;
      _this.$http
        .get("/goodsList?pageIndex=" + this.pageIndex)
        .then(function(res) {
          //将获取到的列表数组存档到 data 上，由于这里的接口是虚假的，所以...你懂的
          // _this.goodsList = res.nums;
          _this.goodsList = _this.goodsList.concat(res.nums); //将新获得数据添加在就数据之后
        });
    },
    getMore() {
      //加载更多
      Toast("没有数据接口！");
      this.getGoodsList();
    },
    goDetails(id) {
      //点击商品查看详情页

      //使用js的形式进行路由导航
      //注意：一定要区分 this.$route 和 this.router 这两个对象
      //1.this.$route 是路由中的参数， params 和 query 都属于他
      //2.this.$router 是一个路由导航对象，用它可以方便的使用js代码，实现路由的跳转
      Toast("这是编程式导航2！");
      //1.最简单的
      // this.$router.push("/home/goodsInfo/" + id);
      //2.传递对象
      // this.$router.push({path:"/home/goodsInfo/" + id});
      //3.传递命名路由  ( 在路由上给路由指定 name 属性，即可通过 name 属性访问该路由)
      // this.$router.push({ name: "goodsList", params: {id:id} });
      //4.带查询参数
      this.$router.push({ path: "/home/goodsInfo", query: { id: id } });

      //注意：如果提供了 path ,params 会被忽略,
      //这里的params 不生效
      //this.$router.push({ path:'/home/goodsInfo',params:{id:id} })
    }
  }
};
</script>

<style scoped>
.goodsList {
  display: flex;
  /* 让其换行 */
  flex-wrap: wrap;
  background-color: #fff;
  padding: 5px;
  justify-content: space-between;
}
.goodsList .goods_item {
  width: 48%;
  margin: 3px;
  padding: 2px;
  border: 1px solid #cccccc;
  box-shadow: 0px 0px 3px #cccccc;
  /* 为让文字和图片成上下自动排列 ，因为文字多少不一样*/
  display: flex;
  flex-direction: column;
  /* 改变主轴的方向 */
  justify-content: space-between;
  min-height: 310px;
}
.goods_item img {
  width: 100%;
}
.goods_item h3 {
  font-size: 18px;
}
.goods_item .info {
  background-color: #eee;
}
.goods_item .info .price {
  line-height: 30px;
}
.goods_item .info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods_item .info .price .old {
  text-decoration: line-through;
  font-size: 12px;
}
.goods_item .info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  /* color: red; */
}
</style>
