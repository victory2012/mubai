<template>
  <div class="">
    <div class="sort-content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新密码" prop="password">
          <el-input size="small" v-model="ruleForm.password" type="password" style="width:220px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="submitForm('ruleForm')">修改密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { changePassword } from "../../api/index.js";
// import { onTimeOut, onError, onSuccess } from "../../utils/callback";

export default {
  name: "Password",
  data() {
    return {
      ruleForm: {},
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 3 到 10 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let userObj = {
            password: this.ruleForm.password
          };
          this.$axios.put("user/info", userObj).then(res => {
            console.log(res);
            if (res.data && res.data.code === 0) {
              this.$message({
                type: "success",
                message: "修改成功"
              });
              this.ruleForm = {};
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.sort-content {
  font-size: 14px;
  margin: 0 auto;
  color: #484848;
  background: #ffffff;
  padding: 50px 0 20px 30px;
  border-radius: 5px;
  .tips {
    padding: 0 0 5px;
  }
  .gridInput {
    padding-bottom: 20px;
  }
  .el-form-item--small.el-form-item {
    margin-bottom: 40px;
  }
}
</style>
