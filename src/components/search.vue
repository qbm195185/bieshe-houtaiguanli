<template>
  <el-row :gutter="20">
    <el-col :span="7"
      ><div class="grid-content ep-bg-purple">
        <el-input v-model="input" placeholder="Please input" class="input-with-select">
          <template #prepend>
            <el-button :plain="true" :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="select" placeholder="Select" style="width: 115px">
              <el-option
                :label="item.label"
                :value="item.value"
                v-for="(item, index) in props.select"
              />
            </el-select>
          </template>
        </el-input></div
    ></el-col>
    <el-col :span="13">
      <el-button type="primary" :icon="Search" @click="clickSearch">搜索</el-button>
    </el-col>
    <el-col :span="1">
      <el-button type="primary" style="margin-left: 10px" @click="shuaxin"
        >刷新</el-button
      >
    </el-col>
  </el-row>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { Search } from "@element-plus/icons-vue";

const props = defineProps(["select"]);
const emit = defineEmits(["submit", "refresh"]);

// onMounted(() => {
//   console.log(props.select);
// })

let input = ref("");
let select = ref("");

const clickSearch = function () {
  input.value = input.value.trim();
  select.value = select.value.trim();
  if (!(input === "" && select === "")) {
    ElMessage({
      showClose: true,
      message: "Warning, input and select is not empty",
      type: "warning",
      center: true,
    });
    return;
  }
  emit("submit", input, select);
};

const shuaxin = function () {
  emit("refresh");
};
</script>

<style scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>
