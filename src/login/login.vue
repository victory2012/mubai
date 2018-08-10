<template>
  <div class="login">
    <div class="img">
      <img src="../assets/img/login-bg.svg" alt="">
    </div>
    <div class="item">
      <div class="form">
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane label="账户密码登录" name="accPwd">
            <el-form label-position="top" :rules="LoginRules" label-width="80px" :model="LoginForm">
              <el-form-item label="账号" prop="account">
                <el-input v-model="LoginForm.account"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="LoginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <button class="accpwsBtn">登录</button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="验证码登录" name="SMScode">
            <el-form label-position="top" :rules="phoneRules" label-width="80px" :model="smsForm">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="smsForm.phone"></el-input>
              </el-form-item>
              <el-form-item label="短信验证码" class="smsCode" prop="smsCode">
                <el-input v-model="smsForm.smsCode"></el-input>
                <el-button class="getSms" type="primary" plain>获取验证码</el-button>
              </el-form-item>
              <el-form-item>
                <button class="accpwsBtn">登录</button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "accPwd",
      smsForm: {
        phone: "",
        smsCode: ""
      },
      phoneRules: {
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        smsCode: [
          { required: true, message: "请输入短信验证码", trigger: "blur" }
        ]
      },
      LoginForm: {
        account: "",
        password: ""
      },
      LoginRules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.login {
  padding-top: 110px;
  padding-right: 100px;
  // display: flex;
  // font-size: 0;
  overflow: hidden;
  min-width: 1190px;
  overflow: hidden;

  .img {
    float: left;
    // flex: 1;
    width: 65%;
    height: 750px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      min-width: 600px;
    }
  }
  .item {
    float: left;
    // flex: 0 0 400px;
    width: 35%;
    min-width: 375px;
    height: 750px;
    background: rgba(113, 191, 219, 0.2);
    border-radius: 10px;
    .form {
      font-size: 14px;
      min-width: 300px;
      max-width: 390px;
      width: 80%;
      margin: 120px auto;
      .smsCode {
        .el-input {
          width: 65%;
        }
        .getSms {
          float: right;
        }
      }
    }
  }
  .el-tab-pane {
    padding-top: 60px;
  }
  .accpwsBtn {
    font-size: 14px;
    width: 156px;
    height: 45px;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    touch-action: manipulation;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.15;
    padding: 0 15px;
    color: #ffffff;
    background: #71bfdb;
  }
}
</style>
