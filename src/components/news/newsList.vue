<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间:{{ item.add_time | dataFormat}}</span>
              <span>点击{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title:
            "1季度多家房企利润跌幅50%,去库存促销战打响,哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          add_time: "2019-4-3 17:12",
          zhaiyao: "房企一季度销售业绩已经陆续公布，研究中心统计",
          click: 1,
          img_url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg"
        },
        {
          id: 2,
          title: "1季度多家房企利润跌幅50%,去库存促销战打响",
          add_time: "2019-4-3 17:12",
          zhaiyao: "房企一季度销售业绩已经陆续公布，研究中心统计",
          click: 1,
          img_url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg"
        },
        {
          id: 3,
          title: "1季度多家房企利润跌幅50%,去库存促销战打响",
          add_time: "2019-4-3 17:12",
          zhaiyao: "房企一季度销售业绩已经陆续公布，研究中心统计",
          click: 1,
          img_url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg"
        },
        {
          id: 4,
          title: "1季度多家房企利润跌幅50%,去库存促销战打响",
          add_time: "2019-4-3 17:12",
          zhaiyao: "房企一季度销售业绩已经陆续公布，研究中心统计",
          click: 1,
          img_url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg"
        },
        {
          id: 5,
          title: "1季度多家房企利润跌幅50%,去库存促销战打响",
          add_time: "2019-4-3 17:12",
          zhaiyao: "房企一季度销售业绩已经陆续公布，研究中心统计",
          click: 1,
          img_url:
            "https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2923f3cd9e5298221a333fc3e7ca7b3b/77094b36acaf2eddcccc86e3831001e9390193ff.jpg"
        }
      ]
    };
  },
  created: function() {
    this.getNewsList();
  },
  methods: {
    //获取新闻列表
    getNewsList() {
      var _this = this;
      _this.$http.get("newsList.json").then(
        function(res) {
          // console.log(res.bodyText)
          // _this.newsList = res.bodyText;
          console.log(_this.newsList[0]);
        },
        function(err) {
          Toast("获取数据失败！");
        }
      );
    }
  }
};
</script>

<style lang="css" scoped>
.mui-table-view li h1 {
  font-size: 14px;
}
.mui-table-view li .mui-ellipsis {
  font-size: 12px;
  color: #22267a;
  display: flex;
  justify-content: space-between;
}
</style>


