<template>
  <!-- 
  设置购买上限  :data-numbox-max="max" ,如果直接获取 max是undefined，因为
  max在父组件内是通过 请求异步获取的，在请求数据的通同时页在渲染组件，由于我们
  不知道什么时候能拿到max的值。
  我们可以使用 watch 属性监听一下,来见挺父组件传递过来的max值，
  不管 watch 会被出发几次，但是最后一次，肯定是一个 合法的max数值
  -->
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" value="num" @change="countChanged" ref="count">
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
      //每当文本框的值改变，立即把最新数值传递给父组件
      //相父组件传递购买数量
      this.$emit("func", parseInt(this.$refs.count.value));
      console.log(this.$refs.count.value);
    }
  },
  props: ["max"], //max 是父组件传递商品最大库存数
  watch: {
    //限定购买上线为库存的所有量
    max: function(newVal, oldVal) {
      // setOption(options)	更新选项,可取值: min(Int),step(Int),max(Int)
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);

      console.log(newVal + "====");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
