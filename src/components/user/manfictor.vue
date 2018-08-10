<template>
  <el-dialog width="600px" title="创建生产企业管理员" :visible.sync="manfictor">
    <el-form :model="adminForm" :rules="customerRules" ref="adminForm">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="adminForm.userName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="登陆密码" prop="password">
            <el-input v-model="adminForm.password" type="password" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="手机号码" prop="phoneNumber">
            <el-input v-model="adminForm.phoneNumber" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱（选填）" prop="email">
            <el-input v-model="adminForm.email" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="企业名称" prop="enterpriseName">
            <el-input v-model="adminForm.enterpriseName" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="企业性质" prop="nature">
            <el-select v-model="adminForm.nature" placeholder="企业性质" style="width:240px;">
              <el-option v-for="item in natureOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetAdmin('adminForm')">取 消</el-button>
      <el-button @click="submitAdmin('adminForm')" type="primary">确 认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      creatAdmin: true,
      adminForm: {},
      manfictor: false,
      natureOptions: [
        {
          label: "国内",
          value: "0"
        },
        {
          label: "国际",
          value: "1"
        }
      ],
      customerRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 4, message: "用户名至少4位", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, message: "密码至少6位", trigger: "change" }
        ],
        phoneNumber: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "手机号格式错误",
            trigger: "change"
          }
        ],
        enterpriseName: [
          { required: true, message: "请输入企业名称", trigger: "change" }
        ],
        nature: [
          { required: true, message: "请选择企业性质", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    resetAdmin(formName) {
      this.adminForm = {};
      this.manfictor = false;
      this.$refs[formName].resetFields();
    },
    submitAdmin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("yes");
        } else {
          console.log("no");
          return false;
        }
      });
    }
  }
};
</script>
