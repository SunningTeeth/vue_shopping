<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="校园商城"></mt-header>

    <!-- 中间路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>



    <!-- 底部 Tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mymui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mymui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mymui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mymui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
// 向外暴露
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 55px;
}
/* 切换动画 */
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,.v-leave-active{
  transition: all 0.8s ease;
}

/* 为tabbar 改类名 */
.mui-bar-tab .mymui-tab-item.mui-active {
    color: #007aff;
}
.mui-bar-tab .mymui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mymui-tab-item .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mymui-tab-item .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
