<template>
  <div>
    <!-- 轮播图区域 -->
    <!-- 注意：调用轮播图组件需要传递一个 lunBoTuList  -->
    <swipe :lunBoTuList="lunBoTuList" :isFull="true"></swipe>

    <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 dd">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodsList">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//导入轮播图组件
import swipe from "../subcomponents/swipe.vue";

export default {
  data: function() {
    return {
      lunBoTuList: [
        { id: 1, url: "../../images/1.jpg" },
        { id: 2, url: "../../images/2.jpg" },
        { id: 3, url: "../../images/3.jpg" },
        { id: 4, url: "../../images/4.jpg" }
      ]
    };
  },
  created: function() {
    this.getLunBoTu();
  },
  methods: {
    //获取轮播图数据
    //因为没有接口，所以这里代码无效，自己模拟了一个
    getLunBoTu: function() {
      this.$http.get("/dd").then(
        function(result) {
          console.log("ok");
        },
        function(error) {
          console.log("error");
        }
      );
    }
  },
  components: {
    swipe
  }
};
</script>

<style scoped>
/* 九宫格 */

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
</style>


