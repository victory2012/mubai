<template>
  <div class="alarmTable">
    <div class="addWarrp">
      <div @click="adduser(index)" v-for="(key, index) in userData" class="addBox" :class="{'active': clicked === key.role}" :key="key.role">
        <img :src="key.default" alt="">
        <p>{{key.text}}</p>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="nickName" align="center" label="用户名">
      </el-table-column>
      <el-table-column prop="role" align="center" label="账户身份">
      </el-table-column>
      <el-table-column prop="layerName" align="center" label="企业身份">
      </el-table-column>
      <el-table-column prop="companyName" align="center" label="企业名称">
      </el-table-column>
      <el-table-column prop="phone" align="center" label="手机号码">
      </el-table-column>
      <el-table-column prop="email" align="center" label="邮箱" width="200">
      </el-table-column>
      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="small" class="limite" @click.native.prevent="changeQuanxian(scope.row)" type="text">
            修改权限
          </el-button>
          <el-button size="small" type="text" @click="secondary(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="pageSize" layout="sizes, prev, pager, next" :total="total">
      </el-pagination>
    </div>
    <Manfictors @hasCreated="reloadData" :type="addType"></Manfictors>
    <Custom :type="addType"></Custom>
    <!-- 权限 -->
    <div>
      <el-dialog title="修改权限" :width="'600px'" :visible.sync="jurisdiction">
        <div>
          <ul class="jurisdiction-warrp">
            <li v-for="key in userRole" :key="key.id" class="jurisdiction-itme">
              <div class="pre">{{key.label}}</div>
              <div class="pre">
                <el-checkbox v-model="key.value"></el-checkbox>
              </div>
            </li>
          </ul>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" @click="jurisdiction = false">取 消</el-button>
          <el-button size="small" type="primary" @click="doChangeJur">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// import { mapState } from "vuex";
import utils from "@/utils/utils";
import addData from "../../config/add-user-data";
import Manfictors from "../../components/user/manfictor";
import Custom from "../../components/user/custom";

export default {
  components: {
    Manfictors,
    Custom
  },
  data() {
    return {
      // secondary: false, // 二次确认
      checked1: false,
      jurisdiction: false, // 权限
      componentId: "",
      userData: [],
      clicked: "",
      total: 0,
      currentPage: 1, // 当前页
      pageSize: 10, // 每页显示的条数
      showmanfictor: {
        show: false
      },
      userId: null,
      addType: null, // 添加公司的类型
      tableData: [],
      // roles: {
      //   batteryadd: false,
      //   infomation: false,
      //   runState: false,
      //   monitoring: false, // 主动监测
      //   historyData: false, // 历史数据
      //   alarm: false, // 告警事件
      //   sameAnalysis: false, // 同一电池单元的数据分析
      //   sameBatch: false, // 同批次不同电池单元的数据分析
      //   personalInfo: false // 个人信息维护
      // },
      userRole: [
        {
          label: "电池登记",
          id: "batteryadd",
          value: false
        },
        {
          label: "基础信息",
          id: "infomation",
          value: false
        },
        {
          label: "运行状况",
          id: "runState",
          value: false
        },
        {
          label: "主动监测",
          id: "monitoring",
          value: false
        },
        {
          label: "历史数据",
          id: "historyData",
          value: false
        },
        {
          label: "告警事件",
          id: "alarm",
          value: false
        },
        {
          label: "同一电池单元的数据分析",
          id: "sameAnalysis",
          value: false
        },
        {
          label: "同批次不同电池单元的数据分析",
          id: "sameBatch",
          value: false
        },
        {
          label: "个人信息维护",
          id: "personalInfo",
          value: false
        }
      ]
    };
  },
  mounted() {
    this.$store.state.manfictor = false;
    this.$store.state.custom = false;
    this.userData = addData();
    this.getUserList();
  },
  computed: {
    // ...mapState(["manfictor"])
  },
  methods: {
    secondary(item) {
      this.$alert("确定删除此用户吗？", {
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          console.log(action);
          if (action === "confirm") {
            this.$axios.delete(`/user/${item.id}`).then(res => {
              console.log(res);
              if (res.data && res.data.code === 0) {
                this.$message({
                  message: "删除成功",
                  type: "success"
                });
                this.getUserList();
              }
            });
          }
        }
      });
    },
    /* 修改权限 -- 按钮 */
    changeQuanxian(item) {
      // console.log(item);
      this.userId = item.id;
      this.$axios.get(`/user/permissions/${item.id}`).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          if (res.data.data !== null) {
            let permis = JSON.parse(res.data.data);
            let keys = Object.keys(permis);
            let values = Object.values(permis);
            this.userRole.forEach((key, index) => {
              if (key.id === keys[index]) {
                key.value = values[index];
              }
            });
          } else {
            this.userRole.forEach(key => {
              key.value = false;
            });
          }
          this.jurisdiction = !this.jurisdiction;
        }
      });
    },
    /* 修改权限 -- 方法 */
    doChangeJur() {
      let permission = {};
      this.userRole.forEach(key => {
        permission[key.id] = key.value;
      });
      let roleObj = {
        userId: this.userId,
        permission: JSON.stringify(permission)
      };
      this.$axios.put("/user/permissions", roleObj).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
          this.jurisdiction = !this.jurisdiction;
        }
      });
    },
    /* 删除用户 */
    doDelete(item) {
      // console.log(item);
      this.secondary = false;
      this.$axios.delete(`/user/${item.id}`).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getUserList();
        }
      });
    },
    handleSizeChange(val) {
      console.log(val);
      this.pageSize = val;
      this.getUserList();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getUserList();
    },
    adduser(index) {
      this.userData = addData();
      this.clicked = this.userData[index].role;
      this.addType = this.userData[index].role;
      this.userData[index].default = this.userData[index].icon;
      if (this.addType > 2) {
        this.$store.commit("triggerCustom");
      } else {
        this.$store.commit("triggerManfictor");
      }
    },
    reloadData(data) {
      if (data.value) {
        this.getUserList();
      }
    },
    getUserList() {
      let pageObj = {
        pageSize: this.pageSize,
        pageNum: this.currentPage
      };
      this.$axios.get("/user", pageObj).then(res => {
        console.log(res);
        let result = res.data;
        if (result && result.code === 0) {
          this.tableData = [];
          this.total = result.data.total;
          // this.currentPage = result.data.totalPage;
          if (result.data.pageData.length > 0) {
            result.data.pageData.forEach(key => {
              key.role = utils.accountType(key.type);
              this.tableData.push(key);
            });
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding-top: 20px;
  text-align: right;
}
.alarmTable {
  padding: 24px;
  background: #ffffff;
  border-radius: 5px;
}
.addWarrp {
  display: flex;
  margin-bottom: 50px;
  .addBox {
    margin-right: 15px;
    padding: 8px;
    box-sizing: border-box;
    flex: 0 0 150px;
    height: 78px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    &.active {
      background: #71bfdb;
      color: #ffffff;
    }
    img {
      width: 28px;
      height: auto;
      margin-bottom: 8px;
    }
    p {
      font-size: 12px;
    }
  }
}
.jurisdiction-warrp {
  padding: 0 44px;
  .jurisdiction-itme {
    display: flex;
    justify-content: space-between;
    line-height: 38px;
    .pre {
      flex: 1;
      &:nth-child(2) {
        text-align: right;
      }
    }
  }
}
.el-button--text {
  margin-right: 10px;
}
</style>
