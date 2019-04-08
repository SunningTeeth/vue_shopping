<template>
  <div class="photoInfo-contaier">
    <h3>{{photoDetailsList[0].title}}</h3>
    <div class="subtitle">
      <span>发表时间:{{photoDetailsList[0].add_timm | dataFormat}}</span>
      <span>点击:{{ photoDetailsList[0].click}}次</span>
    </div>

    <hr>

    <!-- 缩略图区域 -->
    <!-- 
      vue-preview标签 是vue-preview 里面封装好的
      close是右上角 X 的点击事件
    -->
    <div class="thums">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content">{{ photoDetailsList[0].content }}</div>

    <!-- 放置评论子组件 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data: function() {
    return {
      slide1: [
        //缩略图数组
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 400
        }
      ],
      photoDetailsList: [
        //数据数组
        {
          id: 0,
          title: "谁是谁的谁",
          add_timm: Date.now(),
          click: 66,
          content:
            "楚河日当午,王总一米五,在最艰难的日子里，他们一无所有，却一直在一起。但是就像电影里见清说的台词一样，“幸福不是故事，不辛才是”。在最初爱情荷尔蒙蒸发之后，显示露出张牙舞爪的本来面目。"
        }
      ]
    };
  },
  methods: {
    handleClose() {
      console.log("close event");
    }
  },
  components: {
    //子组件
    "comment-box": comment
  }
};
</script>

<style scoped>
.photoInfo-contaier {
  padding: 3px;
}
.photoInfo-contaier h3 {
  color: #26a2ff;
  font-size: 16px;
  margin: 15px 0px;
  text-align: center;
}
.photoInfo-contaier .subtitle {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.photoInfo-contaier .content {
  font-size: 14px;
  line-height: 30px;
}
</style>

