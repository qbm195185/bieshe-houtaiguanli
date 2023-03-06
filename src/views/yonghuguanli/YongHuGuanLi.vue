<template>
  <el-card class="cardd">
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          v-model="querySearch.search"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select
              v-model="querySearch.select"
              placeholder="Select"
              style="width: 115px"
            >
              <el-option label="id" value="id" />
              <el-option label="姓名" value="name" />
              <el-option label="学校" value="school" />
            </el-select>
          </template>
        </el-input>
      </el-col>
      <el-col :span="13">
        <el-button type="primary" :icon="Search" @click="clickSearch">搜索</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" style="margin-left: 10px" @click="initGetUsersList()"
          >刷新</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData.alluser" style="width: 100%">
        <el-table-column fixed prop="id" label="id" width="130" />
        <el-table-column
          v-for="(item, index) in options"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :key="index"
        >
          <template v-slot="{ row }" v-if="item.prop === 'createdAt'">
            {{ filterTime(row.createdAt) }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >修改</el-button
            >
            <!-- <el-button link type="primary" size="small">拉黑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="queryForm.limit"
        :small="false"
        :disabled="false"
        :background="true"
        layout="prev, pager, next, jumper"
        :total="tableData.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </el-card>
  <Dialog v-model="dialogFormVisible" @changeDialog="change" />
</template>

<script setup>
import { Search } from "@element-plus/icons-vue";
import { getAllUser, getOneUser } from "@/api/user";
import { options } from "./options";
import Dialog from "./components/dialog.vue";

let dialogFormVisible = ref(false);

const change = (val) => {
  dialogFormVisible.value = val;
};
const handleClick = () => {
  dialogFormVisible.value = true;
};

const filterTime = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDay()}`;
};

const queryForm = ref({
  limit: 17,
  skip: 0,
});
let currentPage = ref(1);
watch(queryForm, (newq, oldq) => {
  currentPage.value = queryForm.skip / queryForm.limit + 1;
});

const tableData = ref([]);
const initGetUsersList = async () => {
  const res = await getAllUser(queryForm.value);
  tableData.value = res;
};
initGetUsersList();

let querySearch = ref({
  select: "",
  search: "",
});
const clickSearch = async () => {
  if (querySearch.value.select === "id") {
    querySearch.value.search = new Number(querySearch.value.search);
  }
  let search = {
    search: {
      select: querySearch.value.select ? querySearch.value.select : "",
      search: querySearch.value.search ? querySearch.value.search : "",
    },
  };
  const res = await getOneUser(search, queryForm.value);
  if (!res) {
    return;
  }
  console.log(res);
  tableData.value = res;
  // console.log(tableData.value);
};

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
  queryForm.value.skip = (val - 1) * queryForm.value.limit;
  initGetUsersList();
};
const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};
</script>

<style lang="less" scoped>
.header {
  margin-bottom: 16px;
  box-sizing: border-box;
}
</style>
