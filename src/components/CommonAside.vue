<template>
  <el-aside :width="isColl ? 60 + 'px' : 200 + 'px'">
    <el-menu background-color="#545c64" text-color="#fff" :collapse="isColl">
      <h3 v-show="!isColl">后台管理</h3>
      <h3 v-show="isColl">后台</h3>
      <el-menu-item
        @click="clickMenu(item)"
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
      >
        <el-icon><component :is="item.icon" class="icons"></component></el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu :index="item.label" :key="item.path" v-for="item in hasChildren()">
        <template #title>
          <el-icon><component :is="item.icon"></component></el-icon>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :key="subIndex"
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            @click="clickMenu(subItem)"
          >
            <!-- <el-icon><component :is="subItem.icon"></component></el-icon> -->
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import emitter from "@/utils/emitter.js";
let isColl = ref(false);
emitter.on("onColl", (ff) => {
  // console.log(ff);
  isColl.value = Boolean(ff);
  // console.log(isColl.value);
});

const list = [
  {
    path: "/",
    name: "zhuye",
    label: "首页",
    icon: "house",
  },
  {
    path: "/yonghuguanli",
    name: "yonghuguanli",
    label: "用户管理",
    icon: "user",
  },
  {
    path: "/wenzhang",
    name: "wenzhang",
    label: "文章管理",
    icon: "ChatLineSquare",
  },
  {
    path: "/shangping",
    name: "shangping",
    label: "商品",
    icon: "Handbag",
  },
  {
    path: "/dingdan",
    name: "dingdan",
    label: "订单",
    icon: "ShoppingCartFull",
  },
];
const noChildren = () => {
  return list.filter((item) => !item.children);
};
const hasChildren = () => {
  return list.filter((item) => item.children);
};
const router = useRouter();
const clickMenu = (item) => {
  router.push({
    name: item.name,
  });
};
</script>
-+
<style lang="less" scoped>
.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>
