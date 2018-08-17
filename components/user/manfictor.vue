<template>
  <el-dialog width="600px" title="创建生产企业管理员" @close="closedIt" :visible.sync="manfictor">
    <el-form :model="adminForm" :rules="customerRules" ref="adminForm">
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="用户名" prop="account">
            <el-input size="small" v-model="adminForm.account" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="登陆密码" prop="password">
            <el-input size="small" v-model="adminForm.password" type="password" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="手机号码" prop="phone">
            <el-input size="small" v-model="adminForm.phone" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱（选填）" prop="email">
            <el-input size="small" v-model="adminForm.email" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-form-item label="企业名称" prop="companyName">
            <el-input size="small" v-model="adminForm.companyName" auto-complete="off"></el-input>
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
      // manfictor: true,
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
        account: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 4, message: "用户名至少4位", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 3, message: "密码至少3位", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "change" },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "手机号格式错误",
            trigger: "change"
          }
        ],
        companyName: [
          { required: true, message: "请输入企业名称", trigger: "change" }
        ],
        nature: [
          { required: true, message: "请选择企业性质", trigger: "change" }
        ]
      }
    };
  },
  computed: {
    // ...mapGetters(['manfictor'])
    manfictor: {
      get: function() {
        return this.$store.state.manfictor;
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
    },
    submitAdmin(formName) {
      console.log(this.typeId);
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.typeId === "1") {
            let params = {
              account: this.adminForm.account,
              password: this.adminForm.password,
              phone: this.adminForm.phone,
              email: this.adminForm.email,
              companyName: this.adminForm.companyName,
              isCreator: 1
            };
            this.$axios.post("/company/manufacturer", params).then(res => {
              console.log(res);
              if (res.data && res.data.code === 0) {
                this.$message({
                  type: "success",
                  message: "创建成功"
                });
                this.$emit("hasCreated", { value: true });
                this.$store.state.manfictor = false;
                // this.resetAdmin('adminForm');
              }
            });
          }
          if (this.typeId === "2") {
            let options = {
              account: this.adminForm.account,
              password: this.adminForm.password,
              phone: this.adminForm.phone,
              email: this.adminForm.email,
              companyName: this.adminForm.companyName,
              isCreator: 0
            };
            this.$axios.post("/company/purchaser", options).then(res => {
              console.log(res);
              if (res.data && res.data.code === 0) {
                this.$message({
                  type: "success",
                  message: "创建成功"
                });
                this.$emit("hasCreated", { value: true });
                this.$store.state.manfictor = false;
                // this.resetAdmin('adminForm');
              }
            });
          }
        } else {
          console.log("no");
          return false;
        }
      });
    },
    closedIt() {
      console.log("it closed");
      this.$store.state.manfictor = false;
      this.resetAdmin('adminForm');
    }
  }
};
</script>
