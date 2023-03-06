<template>
  <el-dialog
    :model-value="dialogFormVisible"
    title="Shipping address"
    @close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
const emits = defineEmits("changeDialog");

const handleClose = () => {
  emits("changeDialog", false);
};
</script>

<style lang="less" scoped></style>
