<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <!-- vue里面的类名使用样式 -->
          <a
            :class="['mui-control-item', item.id === 0 ? 'mui-active' :'']"
            v-for="item in photoCategoryList"
            :key="item.id"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photoList">
      <router-link
        v-for="(item,index) in list"
        :key="index"
        :to="'/home/photoinfo/'+item.id"
        tag="li"
      >
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info_title">{{item.title}}</h1>
          <div class="info_body">{{ item.info}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
//导入mui.js
import mui from "../../lib/mui/js/mui.js";

export default {
  data: function() {
    return {
      photoCategoryList: [
        //顶部滑动条类别
        { id: 0, title: "全部" },
        { id: 1, title: "家具生活" },
        { id: 2, title: "摄影设计" },
        { id: 3, title: "明星美女" },
        { id: 4, title: "小品搞笑" }
      ],
      list: [
        //图片你列表数组
        {
          id: 0,
          img_url: "../../images/8.jpg",
          title: "我是猪小屁",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 1,
          img_url: "../../images/7.jpg",
          title: "我是霸擎天",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 2,
          img_url: "../../images/6.jpg",
          title: "我是哈语里",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 3,
          img_url: "../../images/5.jpg",
          title: "路遥芝麻粒",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 4,
          img_url: "../../images/4.jpg",
          title: "日久就忍心",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 5,
          img_url: "../../images/3.jpg",
          title: "楚河驲党务",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 6,
          img_url: "../../images/2.jpg",
          title: "汗滴禾雄安",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 7,
          img_url: "../../images/1.jpg",
          title: "谁是打笨蛋",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 8,
          img_url: "../../images/8.jpg",
          title: "你是木小兰",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 9,
          img_url: "../../images/7.jpg",
          title: "我是安慕希",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 10,
          img_url: "../../images/6.jpg",
          title: "他是美杜莎",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 11,
          img_url: "../../images/5.jpg",
          title: "谁是小医仙",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          img_url: "../../images/4.jpg",
          title: "我是猪小屁",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 12,
          img_url: "../../images/3.jpg",
          title: "我是猪小屁",
          info: "猪小屁是谁？谁是猪小屁？"
        },
        {
          id: 13,
          img_url: "../../images/2.jpg",
          title: "我是猪小屁",
          info: "猪小屁是谁？谁是猪小屁？"
        }
      ]
    };
  },
  mounted() {
    //当组件中的 DOM 结构被渲染好并放到页面中后，会执行这个钩子函数

    //初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {}
};
</script>

<style scoped>
.photoList {
  text-align: center;
  list-style: none;
  padding: 0px;
  margin: 0px;
  text-align: left;
  color: white;
}
.photoList li {
  position: relative;
  background: #cccccc;
  margin: 0px 10px 4px;
  box-shadow: 0px 0px 10px #999;
  border-radius: 5px;
  max-height: 300px;
}
.photoList li img {
  vertical-align: middle;
  width: 100%;
  border-radius: 5px;
}
.photoList .info {
  position: absolute;
  bottom: 0px;
  width: 100%;
  text-indent: 10px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  max-height: 84px;
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
}
.photoList .info .info_title {
  font-size: 14px;
}
.photoList .info .info_body {
  font-size: 12px;
}
/* 懒加载的样式 */
.photoList li img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
