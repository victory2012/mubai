<template>
  <div class="userMsg">
    <div class="editorBtn">
      <el-button size="small" type="primary" @click="doEditor" class="editorContent">编辑</el-button>
    </div>
    <div class="center">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">用户名</p>
              <p class="gridInput">{{userArr.userName}}</p>
              <!-- <el-input v-model="userArr.userName" disabled class="gridInput"></el-input> -->
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">账户身份</p>
              <p class="gridInput">{{userArr.userRole}}</p>
              <!-- <el-input v-model="userArr.userRole" disabled class="gridInput"></el-input> -->
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">企业身份</p>
              <p class="gridInput">{{userArr.enterpriseRole}}</p>
              <!-- <el-input v-model="userArr.enterpriseRole" disabled class="gridInput"></el-input> -->
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">企业名称</p>
              <p class="gridInput">{{userArr.enterpriseName}}</p>
              <!-- <el-input v-model="userArr.enterpriseName" disabled class="gridInput"></el-input> -->
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">手机号码</p>
              <p class="gridInput">{{userArr.phoneNumber}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <div class="sort-content">
              <p class="tips">邮箱</p>
              <p class="gridInput">{{userArr.email}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <transition name="el-fade-in-linear">
        <div v-show="userMsgBox" class="transition-box">
          <div class="box">
            <div class="box-head">
              <h3>个人信息编辑</h3>
              <i @click="closeMsgBox('ruleForm')" class="el-icon-close"></i>
            </div>
            <div class="formWarrp">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="210px" class="demo-ruleForm">

                <el-form-item label="手机号码" prop="phoneNum">
                  <el-input size="small" v-model="ruleForm.phoneNum" type="tel" style="width:200px;"></el-input>
                </el-form-item>
                <!-- <el-form-item label="用户名" prop="userName">
                  <el-input v-model="ruleForm.userName" style="width:200px;"></el-input>
                </el-form-item> -->
                <el-form-item label="邮箱" prop="email">
                  <el-input size="small" v-model="ruleForm.email" style="width:200px;"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" type="primary" @click="submitForm('ruleForm')">确认</el-button>
                  <el-button size="small" @click="resetForm('ruleForm')">取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
// import { getUserInfo, changeUserInfo } from "../../api/index.js";
// import { onTimeOut, onSuccess, onError } from "../../utils/callback"
export default {
  data() {
    return {
      userMsgBox: false,
      userArr: [],
      ruleForm: {},
      rules: {
        email: [{ required: false, message: "请输入用户名", trigger: "blur" }],
        phoneNum: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: "手机号格式错误" }
        ]
      }
    };
  },
  methods: {
    doEditor() {
      this.userMsgBox = true;
    },
    closeMsgBox(formName) {
      this.userMsgBox = false;
      this.ruleForm = {};
      this.$refs[formName].resetFields();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log('success');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.userMsg {
  padding: 20px 20px 30px;
  border-radius: 5px;
  background: #ffffff;
}
.transition-box {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 89;
}
.center {
  padding: 10px 0 30px;
}
.sort-content {
  width: 200px;
  margin: 0 auto;
}
.tips {
  color: #484848;
  font-size: 14px;
}
.editorBtn {
  text-align: right;
}
.gridInput {
  background-color: #f2f2f2;
  color: #484848;
  width: 200px;
  height: 32px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 32px;
  text-indent: 8px;
  cursor: not-allowed;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.box {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 600px;
  height: auto;
  padding-bottom: 5px;
  border-radius: 4px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  z-index: 98;
}
.box-head {
  overflow: hidden;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #cccccc;
}
.box-head h3 {
  float: left;
  margin-left: 11px;
  color: #606266;
  font-weight: 400;
  font-size: 16px;
}
.box-head i {
  float: right;
  display: block;
  font-size: 18px;
  margin-top: 11px;
  margin-right: 11px;
  cursor: pointer;
}
.formWarrp {
  padding-top: 30px;
}
.el-form-item--small.el-form-item {
  margin-bottom: 30px;
}
</style>
