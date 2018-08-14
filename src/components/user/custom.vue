<template>
  <el-dialog width="600px" title="创建客户企业" @close="closedIt" :visible.sync="custom">
    <el-form :model="adminForm" :rules="customerRules" ref="adminForm">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="用户名" prop="account">
            <el-input v-model="adminForm.account" auto-complete="off"></el-input>
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
          <el-form-item label="手机号码" prop="phone">
            <el-input v-model="adminForm.phone" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱（选填）" prop="email">
            <el-input v-model="adminForm.email" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="resetAdmin('adminForm')">重 置</el-button>
      <el-button @click="submitAdmin('adminForm')" type="primary">确 认</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    type: {
      required: true
    }
  },
  data() {
    return {
      creatAdmin: true,
      adminForm: {},
      customerRules: {
        account: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 4, message: "用户名至少4位", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, message: "密码至少6位", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "手机号格式错误",
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    // ...mapGetters(['manfictor'])
    custom: {
      get: function() {
        return this.$store.state.custom;
      },
      set: function() {}
    },
    typeId: {
      get: function() {
        return this.type;
      },
      set: function() {}
    }
  },
  methods: {
    resetAdmin(formName) {
      this.$refs[formName].resetFields();
      this.adminForm = {};
      // this.$store.commit("triggerManfictor");
    },
    submitAdmin(formName) {
      console.log(this.typeId);
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("yes");
        } else {
          console.log("no");
          return false;
        }
      });
    },
    closedIt() {
      console.log("it closed");
      this.$store.commit("triggerCustom");
    }
  }
};
</script>
