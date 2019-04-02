<template>
  <div class="app-container">
    <!-- 顶部Header区域 -->
    <mt-header fixed title="校园商城"></mt-header>

    <!-- 中间路由router-view区域 -->
    <p>中间路由片段</p>

    <!-- 底部 Tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
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
}
</style>
