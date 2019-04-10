<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input
      class="mui-numbox-input"
      type="number"
      :value="this.goodsCount"
      @change="countChanged"
      ref="count"
    >
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>

<script>
//导入mui
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {};
  },
  mounted() {
    // mui在mui.init()中会自动初始化基本控件,但是 动态添加的Numbox组件需要手动初始化
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      //商品数量值改变了
      // console.log(this.$refs.count.value)

      //每当商品数量改变了，立即把最新的数据传递到 store 中，覆盖原来的值
      this.$store.commit('updateGoodsInfo',{id:this.goodsID,count:this.$refs.count.value})
    }
  },
  props: ["goodsCount",'goodsID']
};
</script>

<style lang="scss" scoped>
</style>
