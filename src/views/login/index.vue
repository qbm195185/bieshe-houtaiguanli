<template>
  <div class="login-container">
    <el-form ref="formRef" :model="form" class="login-form" :rules="rules">
      <div class="title-container">
        <h3>管理登录</h3>
      </div>
      <el-form-item class="input-item" prop="id">
        <el-input v-model="form.id" placeholder="userId" clearable></el-input>
      </el-form-item>
      <el-form-item class="input-item" prop="password">
        <el-input
          v-model="form.password"
          placeholder="password"
          type="password"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="handleLogin">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import useStore from "@/store";
const { app } = useStore();

const form = ref({
  id: "",
  password: "",
});
const rules = ref({
  id: [
    { required: true, message: "Please input Activity Id", trigger: "blur" },
    { min: 4, max: 11, message: "Length should be 4 to 11", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input Activity password", trigger: "blur" },
    { min: 6, max: 11, message: "Length should be 6 to 11", trigger: "blur" },
  ],
});

const formRef = ref(null);
const handleLogin = async () => {
  if (!formRef) return;
  await formRef.value.validate(async (valid, fields) => {
    if (valid) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        let user = {
          user: {
            id: form.value.id,
            password: form.value.password,
          },
        };
        app.login(user);
        loading.close()
      }, 2000);
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  .login-form {
    background-color: #fff;
    width: 358px;
    height: 450px;
    border-radius: 15px;
    padding: 0 50px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title-container {
      font-size: 38px;
      font-weight: bold;
      text-align: center;
      line-height: 150px;
    }
    .input-item {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      border: 0;
      padding: 10px;
      font-size: 15px;
      outline: none;
    }
    .input-item:placeholder {
      text-transform: uppercase;
    }
  }
}
</style>
