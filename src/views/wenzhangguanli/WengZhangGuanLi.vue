<template>
  <div>
    <el-card class="cardd">
      <search @submit="submit" :select="select" @refresh="refresh"></search>
      
    </el-card>
  </div>
</template>

<script setup>
import search from "@/components/search.vue";

const select = [
  {
    label: "label1",
    value: 1,
  },
  {
    label: "label2",
    value: 2,
  },
  {
    label: "label3",
    value: 3,
  },
];

const submit = function (input, select) {
  console.log("wengzhang", input, select);
};
const refresh = function () {
  console.log("shauxin");
};
</script>

<style lang="less" scoped></style>
