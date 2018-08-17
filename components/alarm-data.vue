<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="index" align="center" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="time" align="center" label="告警发生时间" width="200">
      </el-table-column>
      <el-table-column prop="category" align="center" label="告警类别">
      </el-table-column>
      <el-table-column prop="batteryId" align="center" label="电池编号">
      </el-table-column>
      <el-table-column prop="custorm" align="center" label="客户" width="180">
      </el-table-column>
      <el-table-column prop="position" align="center" label="位置">
      </el-table-column>
      <el-table-column prop="level" align="center" label="液位">
      </el-table-column>
      <el-table-column prop="temp" align="center" label="温度">
      </el-table-column>
      <el-table-column prop="voltage" align="center" label="电压">
      </el-table-column>
      <el-table-column prop="electric" align="center" label="电流">
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
      currentPage: 2,
      tableData: [
        {
          index: "1",
          time: "2018-08-02 13:31:27",
          category: "温度",
          batteryId: "T002",
          custorm: "测试采购企业",
          position: "上海市",
          level: "异常",
          temp: "27",
          voltage: "28.847",
          electric: "-469.5"
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>
<style lang="scss" scoped>
.page {
  padding-top: 20px;
  text-align: right;
}
</style>
