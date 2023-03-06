<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" @click="emitColl">
        <el-icon :size="20"><Menu /></el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
          <span class="no-redirect" v-if="index === breadcrumbList.length - 1">{{
            item.name
          }}</span>
          <span class="redirect" v-else @click="handleRedirect(item.path)">{{
            item.name
          }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getImage()" alt="" srcset="" class="user" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
            <el-dropdown-item @click="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import emitter from "@/utils/emitter.js";
import useStore from "@/store";
const { app } = useStore();
const route = useRoute();
const router = useRouter();
const handleRedirect = (path) => {
  router.push('/'+path)
};

const breadcrumbList = ref([]);
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched;
  // console.log(breadcrumbList.value);
};
watch(
  route,
  () => {
    initBreadcrumbList();
  },
  { deep: true, immediate: true }
);

let coll = false;
const emitColl = () => {
  coll = !coll;
  emitter.emit("onColl", coll);
};

const getImage = () => {
  return new URL("@/assets/images/user.png", import.meta.url).href;
};

const loginout = () => {
  app.loginout();
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-left: 20px;
  }
  h3 {
    color: #fff;
  }
  .breadcrumb {
    margin-left: 20px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
    .redirect {
      color: #666;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: #304156;
      }
    }
  }
}
</style>
