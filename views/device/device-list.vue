<template>
  <div class="device">
    <div class="topTab">
      <div class="icons">
        <div class="items" @click="regDialog">
          <img src="../../../static/img/device_reg.png" alt="">
          <p>设备注册</p>
        </div>
        <div class="items">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-success="flieSuccess" :on-progress="onGoing" :on-error="flieError" :show-file-list="false" :multiple="false" :auto-upload="true">
            <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
            <div slot="trigger">
              <img src="../../../static/img/device_import.png" alt="">
              <p>批量导入</p>
            </div>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
          <!-- <img src="../../../static/img/device_import.png" alt="">
          <p>批量导入</p> -->
        </div>
        <div class="items">
          <router-link to="/device/defriend">
            <img src="../../../static/img/device_recover.png" alt="">
            <p>恢复拉黑设备</p>
          </router-link>
        </div>
      </div>
      <div class="select">
        <div class="item">
          <el-input size="small" style="width:100%" v-model="content" placeholder="设备编号"></el-input>
        </div>
        <div class="item">
          <el-select size="small" style="width:100%" v-model="regState" placeholder="设备状态">
            <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          <el-select size="small" style="width:100%" v-model="bindState" placeholder="绑定状态">
            <el-option v-for="item in bindOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          <el-button @click="getDeviceList" size="small" type="primary">确定</el-button>
          <el-button @click="clearAll" size="small" plain>清空</el-button>
        </div>
      </div>
    </div>
    <div class="tableContent">
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <!-- <el-table-column type="index" width="50" align="center" label="序号"></el-table-column> -->
        <el-table-column prop="code" align="center" label="设备编号">
        </el-table-column>
        <el-table-column prop="companyName" align="center" label="企业名称">
        </el-table-column>
        <el-table-column prop="regstate" align="center" label="设备注册状态">
        </el-table-column>
        <el-table-column prop="bindState" align="center" label="电池绑定状态">
        </el-table-column>
        <el-table-column align="center" label="监测设备">
          <template slot-scope="scope">
            <el-button @click.native.prevent="MonitorDevice(scope.row)" :disabled="scope.row.online" type="text" size="small">
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="160px">
          <template slot-scope="scope">
            <el-button @click.native.prevent="addBlack(scope.row)" type="text" :disabled="scope.row.blackStatus" size="small">
              拉黑
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.row)" :disabled="scope.row.bindStatus" type="text" size="small">
              删除
            </el-button>
            <el-button @click.native.prevent="uplevel(scope.row)" type="text" size="small">
              设备升级
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="['10','20','30','50']" :page-size="pageSize" layout="sizes, prev, pager, next" :total="total">
      </el-pagination>
    </div>
    <el-dialog title="设备注册" width="600px" :visible.sync="regDevice">
      <el-form :model="regform" :rules="regRules" ref="regform">
        <el-form-item prop="name" label="设备编号" :label-width="'216px'">
          <el-input style="width:200px;" size="small" v-model="regform.name" placeholder="设备编号" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="deviceType" label="设备类别" :label-width=" '216px' ">
          <el-select style="width:200px;" size="small" v-model="regform.deviceType " placeholder="请选择设备类别">
            <el-option v-for="item in categoryArr" :key="item.name" :label="item.label" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="company" label="相关企业" :label-width=" '216px' ">
          <el-select style="width:200px;" size="small" v-model="regform.company " placeholder="请选择企业">
            <el-option v-for="item in companyArr" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="resetRegform('regform')">取 消</el-button>
        <el-button size="small" type="primary " @click="submitRegForm('regform')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryArr: [],
      regDevice: false,
      total: 0, // 总数量
      currentPage: 1, // 当前页
      pageSize: 10,
      content: "",
      regform: {},
      loading: false,
      regState: "",
      bindState: "",
      regRules: {
        name: [{ required: true, message: "请输入设备编号", trigger: "blur" }],
        deviceType: [
          { required: true, message: "请选择设备类别", trigger: "change" }
        ],
        company: [{ required: true, message: "请选择企业", trigger: "change" }]
      },
      companyArr: [],
      tableData: [],
      stateOptions: [
        {
          value: "1",
          label: "已注册"
        },
        {
          value: "0",
          label: "未注册"
        }
      ],
      bindOptions: [
        {
          value: "1",
          label: "已绑定"
        },
        {
          value: "0",
          label: "未绑定"
        }
      ]
    };
  },
  methods: {
    resetRegform(form) {
      this.$refs[form].resetFields();
    },
    submitRegForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          let category;
          let companyName;
          this.categoryArr.forEach(key => {
            if (key.id === this.regform.deviceType) {
              category = key.name;
            }
          });
          this.companyArr.forEach(key => {
            if (key.id === this.regform.company) {
              companyName = key.name;
            }
          });
          let deviceObj = {
            code: this.regform.name, // 设备编号
            companyId: this.regform.company, // 公司id
            categoryId: this.regform.deviceType,
            companyName: companyName,
            category: category
          };
          this.$axios.post("/device", deviceObj).then(res => {
            console.log(res);
            if (res.data && res.data.code === 0) {
              this.$message({
                type: "success",
                message: "设备注册成功"
              });
              this.getDeviceList();
              this.regDevice = false;
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /* 改变每页显示的数量 */
    handleSizeChange(val) {
      this.pageSize = val;
      this.getDeviceList();
    },
    /* 改变当前页 */
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getDeviceList();
    },
    /* 查看 */
    MonitorDevice(data) {
      console.log(data);
    },
    /* 添加黑名单 */
    addBlack(data) {
      console.log(data);
      // if (data.)
      let deviceObj = {
        id: data.id,
        status: -1
      };
      this.$axios.put("device", deviceObj).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.$message({
            type: "success",
            message: res.data.msg
          });
          this.getDeviceList();
        }
      });
    },
    /* 删除设备 */
    deleteRow(data) {
      console.log(data);
      this.$alert("确定删除此设备吗？", {
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          if (action === "confirm") {
            this.$axios.delete(`/device/${data.id}`).then(res => {
              console.log(res);
              if (res.data && res.data.code === 0) {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.getDeviceList();
              }
            });
          }
        }
      });
    },
    /* 设备升级 */
    uplevel() {},
    flieError() {
      console.log("上传失败");
    },
    onGoing() {
      console.log("上传中");
    },
    flieSuccess() {
      console.log("成功");
    },
    /* 设备注册 -- 按钮 */
    regDialog() {
      this.regDevice = true;
      this.getCompany();
    },
    /* 获取公司列表 */
    getCompany() {
      let json = {
        layerId: 1
      };
      this.categoryArr = [];
      this.companyArr = [];
      this.$axios.get(`company/names`, json).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.companyArr = res.data.data;
        }
      });
      this.$axios.get("/category").then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          let result = res.data.data;
          result.forEach(key => {
            if (key.id === 1) {
              key.label = "电池追踪";
            }
            if (key.id === 2) {
              key.label = "电池监测";
            }
            this.categoryArr.push(key);
          });
        }
      });
    },
    /* 清空 */
    clearAll() {
      this.regState = "";
      this.bindState = "";
      this.content = "";
      this.getDeviceList();
    },
    /* 获取设备列表 */
    getDeviceList() {
      let pageObj = {
        pageSize: this.pageSize,
        pageNum: this.currentPage,
        registerStatus: this.regState,
        code: this.content,
        status: 0,
        bindingStatus: this.bindState
      };
      this.$axios.get("/device", pageObj).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          let result = res.data.data;
          this.total = result.total;
          this.tableData = [];
          if (result.pageData.length > 0) {
            result.pageData.forEach(key => {
              key.online = key.onlineStatus === 0;
              key.blackStatus = key.status === -1;
              key.bindStatus = key.hostId === null;
              key.bindState = key.hostId === null ? "未绑定" : "已绑定";
              this.tableData.push(key);
            });
          }
        }
      });
    }
  },
  mounted() {
    this.getDeviceList();
  }
};
</script>
<style lang="scss" scoped>
.device {
  background: #ffffff;
  padding: 24px;
  .topTab {
    min-width: 1014px;
    display: flex;
    height: 60px;
    .icons {
      flex: 0 0 42%;
      .items {
        width: 116px;
        float: left;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
        a {
          color: #484848;
        }
        img {
          margin-bottom: 8px;
        }
      }
    }
    .select {
      flex: 1;
      display: flex;
      .item {
        flex: 1;
        padding: 10px 5px;
      }
    }
  }
  .tableContent {
    padding-top: 50px;
  }
}
.page {
  padding-top: 20px;
  text-align: right;
}
</style>
