<script setup>
import CommonAside from "@/components/CommonAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
import CommonTab from "@/components/CommonTab.vue"
import router from "../router";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- 自定义左侧的组件 -->
      <CommonAside />
      <el-container>
        <el-header class="el-header">
          <CommonHeader />
        </el-header>
        <CommonTab />
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.common-layout {
  height: 100vh; // 使用视口高度
  width: 100%;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #333;
  height: 60px; // 明确设置 header 高度
}

.right-main {
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>