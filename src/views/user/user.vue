<template>
  <div class="alarmTable">
    <div class="addWarrp">
      <div @click="adduser(index)" v-for="(key, index) in userData" class="addBox" :class="{'active': clicked === key.role}" :key="key.role">
        <img :src="key.default" alt="">
        <p>{{key.text}}</p>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="username" align="center" label="用户名">
      </el-table-column>
      <el-table-column prop="role" align="center" label="账户身份">
      </el-table-column>
      <el-table-column prop="bessnisRole" align="center" label="企业身份">
      </el-table-column>
      <el-table-column prop="bessnisName" align="center" label="企业名称">
      </el-table-column>
      <el-table-column prop="phone" align="center" label="手机号码">
      </el-table-column>
      <el-table-column prop="emaile" align="center" label="邮箱" width="300">
      </el-table-column>
      <el-table-column prop="address" align="center" label="操作">
        <template slot-scope="scope">
          <el-button @click.native.prevent="handleClick(scope.$index)" type="text">
            修改权限
          </el-button>
          <el-button @click.native.prevent="handleClick(scope.$index)" type="text">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
      </el-pagination>
    </div>
    <Manfictors></Manfictors>
  </div>
</template>
<script>
import addData from "../../config/add-user-data";
import Manfictors from "../../components/user/manfictor";

export default {
  components: {
    Manfictors
  },
  data() {
    return {
      componentId: "",
      userData: [],
      clicked: "",
      currentPage: 1,
      showmanfictor: {
        show: false
      },
      tableData: [
        {
          index: "1",
          username: "demo001",
          role: "管理员",
          bessnisRole: "电池生产企业",
          bessnisName: "测试企业001",
          phone: "15677889944",
          hierarchy: "整组",
          emaile: "mail@mail.cc"
        }
      ]
    };
  },
  mounted() {
    this.userData = addData();
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    adduser(index) {
      // this.showmanfictor.show = true;
      this.userData = addData();
      this.clicked = this.userData[index].role;
      this.userData[index].default = this.userData[index].icon;
      // this.$store.state.manfictor = true;
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
</style>
