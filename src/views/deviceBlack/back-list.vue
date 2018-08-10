<template>
  <div class="alarmTable">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="deviceId" align="center" label="设备编号">
      </el-table-column>
      <el-table-column prop="enterpriseName" align="center" label="企业名称">
      </el-table-column>
      <el-table-column prop="regState" align="center" label="设备注册状态">
      </el-table-column>
      <el-table-column prop="bindState" align="center" label="电池绑定状态">
      </el-table-column>
      <el-table-column align="center" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="handleClick(scope.$index)" type="text">
            恢复
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
      </el-pagination>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          deviceId: '1805B598C6E7',
          enterpriseName: '测试企业001',
          regState: '已注册',
          bindState: '已绑定'
        }
      ]
    };
  },
  methods: {
    handleClick() {},
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.alarmTable {
  padding: 24px;
  background: #ffffff;
  .page {
    padding-top: 20px;
    text-align: right;
  }
}
</style>
