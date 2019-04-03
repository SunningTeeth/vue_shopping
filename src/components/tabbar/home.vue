<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunBoTuList" :key="item.id">
        <img :src="item.url" alt="图片" :title="item.id">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格到六宫格的改造 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9 dd">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻咨询</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
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
      <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-gear"></span>
          <div class="mui-media-body">Setting</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-info"></span>
          <div class="mui-media-body">about</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-more"></span>
          <div class="mui-media-body">more</div>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
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
  }
};
</script>

<style scoped>
/* 轮播图 */
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  background: cyan;
}
.mint-swipe-item img {
  height: 100%;
  width: 100%;
}

/* 九宫格 */

.mui-grid-view.mui-grid-9{
  background-color: #fff;
}
</style>


