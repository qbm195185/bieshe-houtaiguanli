<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="@/assets/images/user.png" alt="">
          <div class="userInfo">
            <p class="name">名称：qwe</p>
            <p class="role">类型：管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次的登录时间：<span>2022-7-11</span></p>
          <p>上次的登录地点：<span>北京</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="20" style="margin-top:20px"></el-col>
  </el-row>
</template>

<script setup></script>

<style lang="less" scoped>
.home{
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 40px;
    }
    .userInfo{
      .name{
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    .loginInfo{
      p{
        line-height: 30px;
        font-size: 14px;
        color: #999;
        span{
          color: #666;
          margin-left: 50px;
        }
      }
    }
  }
}
</style>
