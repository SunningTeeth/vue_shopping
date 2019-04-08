<template>
  <!-- 轮播图 -->
  <!-- 谁要调用轮播图组件，就需要传递一个 lunBoTuList ，也就是父组件向子组件传递值-->
  <div class="swipe_container">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunBoTuList" :key="item.id">
        <img :src="item.url" alt="图片" :title="item.id" :class="{full:isFull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>

  <!-- 
    分析：由于传入轮播图的图片大小不一样，图片高度都是设置为 100%，但是宽度
    有的需要100%，有的需要自适应，所以我们需要自定义一个属性 isFull ,让调度
    者来指定是否为 100% 宽度 

    通过 vue 提供的通过类名设置样式来实现
  -->
</template>

<script>
export default {
  props: ["lunBoTuList", "isFull"]
};
</script>

<style lang="scss" scoped>
/* 轮播图 */
.swipe_container {
  .mint-swipe {
    height: 200px;
    background-color: #fff;
  }
  .mint-swipe-item {
    text-align: center;
    img {
      height: 100%;
      // width: 100%;
    }
  }
  .full {
    width: 100%;
  }
}
</style>

