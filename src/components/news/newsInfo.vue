<template>
  <div class="newsInfoContainer">
    <!-- 大标题 -->
    <h3 class="title">新闻标题</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:2019-4-3 20:50</span>
      <span>点击:0次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content"></div>

    <!-- 评论区域 -->
    <!-- 父组件向子组件传递值 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>
//导入评论子组件
import comment from "../subcomponents/comment.vue"


export default {
  data: function() {
    return {
      //获取通过url传递过来的id
      id: this.$route.params.id,
      newsInfoList:[
        { id:1,add_time:"2019-4-3 21:02",click:"1",content:"时间会带来惊喜！",title:"小林日记"},
        { id:2,add_time:"2019-4-3 21:02",click:"2",content:"时间会带来惊喜！",title:"小林日记"},
        { id:3,add_time:"2019-4-3 21:02",click:"3",content:"时间会带来惊喜！",title:"小林日记"},
        { id:4,add_time:"2019-4-3 21:02",click:"4",content:"时间会带来惊喜！",title:"小林日记"},
        { id:5,add_time:"2019-4-3 21:02",click:"5",content:"时间会带来惊喜！",title:"小林日记"},
        { id:6,add_time:"2019-4-3 21:02",click:"6",content:"时间会带来惊喜！",title:"小林日记"},
      ],
    };
  },
  methods:{},
  components:{
    //评论子组件节点
    'comment-box':comment
  }
};
</script>

<style scoped>
.newsInfoContainer{
  padding: 0px 2px;
}
.title{
  color: red;
  font-size: 16px;
  margin: 15px 0px;
  text-align: center;
}
.subtitle{
  display: flex;
  justify-content: space-between;
  color: #2266af
}

</style>

