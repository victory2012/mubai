<template>
  <div class="container">
    <p class="tips">（最多添加128人）</p>
    <div>
      <el-table v-loading="loading" :data="tableData" style="width: 100%" :highlight-current-row="true">
        <el-table-column prop="userName" align="center" label="用户名">
        </el-table-column>
        <el-table-column prop="role" align="center" label="账户身份">
        </el-table-column>
        <el-table-column prop="creatTime" align="center" label="创建时间">
        </el-table-column>
        <el-table-column prop="state" align="center" label="状态">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="handleClick(scope.$index)" type="text" size="small">
              取消
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="10" layout="sizes, prev, pager, next" :total="100">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      loading: false,
      tableData: [
        {
          userName: "demo001",
          role: "管理员",
          creatTime: "2018-04-28",
          state: "已添加"
        },
        {
          userName: "demo001A",
          role: "用户",
          creatTime: "2018-04-28",
          state: "未添加"
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    handleClick() {}
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
  background: #ffffff;
}
.page {
  padding-top: 20px;
  text-align: right;
}
.tips {
  font-size: 14px;
  color: #484848;
}
</style>
