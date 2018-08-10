<template>
  <div class="alarmTable">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" align="center" label="序号" width="100">
      </el-table-column>
      <el-table-column prop="alarmtime" align="center" label="告警发生时间" width="180">
      </el-table-column>
      <el-table-column prop="alarmProject" align="center" label="告警项目">
      </el-table-column>
      <el-table-column prop="batteryId" align="center" label="电池编号">
      </el-table-column>
      <el-table-column prop="batteryGroup" align="center" label="电池组编号">
      </el-table-column>
      <el-table-column prop="content" align="center" label="告警内容" width="300">
      </el-table-column>
      <el-table-column prop="hierarchy" align="center" label="告警层级" width="120">
      </el-table-column>
      <el-table-column prop="level" align="center" label="告警级别" width="120">
      </el-table-column>
      <el-table-column prop="address" align="center" label="详情" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="handleClick(scope.$index)" type="text">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          index: "1",
          alarmtime: "2018-08-02 17:00:50",
          alarmProject: "液位",
          batteryId: "5F",
          batteryGroup: "200",
          content: "电解液位低，应该补水",
          hierarchy: "整组",
          level: "高"
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
