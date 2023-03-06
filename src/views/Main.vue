<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <CommonAside></CommonAside>
      <el-container class="r-container">
        <CommonHeader></CommonHeader>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";
</script>

<style lang="less" scoped>
.r-container {
  flex-wrap: wrap;
}
.common-layout {
  height: 100vh;
  & > .el-container {
    height: 100vh;
    align-items: flex-start;
    & > .el-aside {
      height: 100vh;
      background: #545c64;
    }
  }
}
</style>
