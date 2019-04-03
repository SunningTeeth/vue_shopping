<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入评论内容(最长120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in commentsList" :key="index">
        <div
          class="cmt-title"
        >第{{ index }}楼&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dataFormat }}</div>
        <div class="cmt-body">{{ item.content === "undefined" ? "此用户很懒,嘛都没写":item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore()">加载评论</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      commentsList: [
        {
          user_name: "匿名用户",
          add_time: "2019-4-3 21:54",
          content: "说点啥呢？"
        },
        {
          user_name: "钻石用户",
          add_time: "2019-4-3 21:54",
          content: "undefined"
        },
        {
          user_name: "匿名用户",
          add_time: "2019-4-3 21:54",
          content: "我就是我"
        },
        {
          user_name: "钻石用户",
          add_time: "2019-4-3 21:54",
          content: "undefined"
        },
        {
          user_name: "皇族用户",
          add_time: "2019-4-3 21:54",
          content: "戳禾日当午,王总一米五"
        },
        {
          user_name: "匿名用户",
          add_time: "2019-4-3 21:54",
          content: "undefined"
        },
        {
          user_name: "皇族用户",
          add_time: "2019-4-3 21:54",
          content: "hahahah"
        },
        {
          user_name: "钻石用户",
          add_time: "2019-4-3 21:54",
          content: "我就是我"
        },
        {
          user_name: "匿名用户",
          add_time: "2019-4-3 21:54",
          content: "hahahah"
        },
        {
          user_name: "皇族用户",
          add_time: "2019-4-3 21:54",
          content: "hahahah"
        },
        {
          user_name: "钻石用户",
          add_time: "2019-4-3 21:54",
          content: "说点啥呢？"
        },
        {
          user_name: "普通用户",
          add_time: "2019-4-3 21:54",
          content: "undefined"
        },
        {
          user_name: "匿名用户",
          add_time: "2019-4-3 21:54",
          content: "说点啥呢？"
        }
      ]
    };
  },
  created: function() {
    this.getComments();
  },
  methods: {
    getComments: function() {
      //加载评论的方法

      this.$http
        .get("/comment/" + this.id + "?pageIndex=" + this.pageIndex)
        .then(
          function(res) {
            //为了防止加载更多的时候,新数据会把老数据替换掉
            //这里只是做出方案，具体接口是伪造的，所以这是需要改造
            // this.commentsList = this.commentsList.concat(res.comments);

            Toast({
              message: "successed!",
              position: "bottom",
              duration: 3000
            });
          },
          function() {
            Toast("获取数据失败！");
          }
        );
    },
    getMore() {
      //加载更多
      this.pageIndex++;
      this.getComments();
    }
  },
  props: ["id"] //接受父组件传递的id
};
</script>

<style scoped>
.comment-container h3 {
  font-size: 16px;
}
.comment-container textarea {
  margin: 0px;
  font-size: 14px;
  height: 85px;
}
.cmt-list .cmt-item {
  font-size: 14px;
}
.cmt-list {
  margin: 5px 0px;
}
.cmt-list .cmt-item .cmt-title {
  line-height: 30px;
  background: #ccc;
}
.cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 5px;
}
</style>


