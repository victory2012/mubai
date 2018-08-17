<template>
  <div>
    <div class="titleTab">
      <div class="tabInfo">
        <a @click="showSameData" :class="{'active': actived == 'same'}">同一电池单元</a>
        <span class="divider"></span>
        <a @click="showDiffData" :class="{'active': actived == 'diff'}">不同电池单元</a>
      </div>
    </div>
    <div class="top">
      <h2 class="textAlain title">比较数据</h2>
      <div class="textAlain">
        <div @click="openTable" class="compare-add">
          添加比较
        </div>
      </div>
    </div>
    <div class="timeCenter">
      <div class="timeBar">
        <span class="lables">从</span>
        <el-date-picker class="queryTime" size="small" v-model="start" type="date" placeholder="选择日期"></el-date-picker>
        <span class="lable">至</span>
        <el-date-picker class="queryTime" size="small" v-model="end" type="date" placeholder="选择日期"></el-date-picker>
        <el-select class="timeSelect queryTime" size="small" v-model="timevalue" placeholder="请选择时间范围">
          <el-option v-for="item in weekOption" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select class="timeSelect queryTime" size="small" v-model="timevalue" placeholder="请选择对比方式">
          <el-option v-for="item in compare" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button class="queryBtn" size="small" type="primary">确定</el-button>
      </div>
    </div>
    <div class="chart">
      <com-chart></com-chart>
    </div>
    <div>
      <el-dialog title="收货地址" width="800px" :visible.sync="tableVisible">
        <el-table :data="gridData">
          <el-table-column property="batteryId" label="电池编号"></el-table-column>
          <el-table-column property="model" label="电池型号"></el-table-column>
          <el-table-column property="group" label="电池组规格"></el-table-column>
          <el-table-column property="deviceId" label="监测设备编号"></el-table-column>
          <el-table-column label="操作" width="55">
            <template slot-scope="scope">
              <el-checkbox v-model="gridData[scope.$index].models"></el-checkbox>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 50]" :page-size="10" layout="sizes, prev, pager, next" :total="100">
          </el-pagination>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button size="small" @click="tableVisible = false">取 消</el-button>
          <el-button size="small" type="primary" @click="tableVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import comChart from "../../components/compare/compare-chart";

export default {
  components: {
    comChart
  },
  data() {
    return {
      tableVisible: false,
      currentPage: 1,
      actived: "same",
      start: "",
      end: "",
      timevalue: "",
      compare: [
        {
          label: "同比",
          value: "year"
        },
        {
          label: "环比",
          value: "mounth"
        }
      ],
      weekOption: [
        {
          label: "最近一周",
          value: "week"
        },
        {
          label: "最近一月",
          value: "mounth"
        },
        {
          label: "最近三个月",
          value: "threemonth"
        },
        {
          label: "最近六个月",
          value: "sixmounth"
        },
        {
          label: "最近一年",
          value: "year"
        },
        {
          label: "全生命周期",
          value: "all"
        }
      ],
      gridData: [
        {
          batteryId: "T002",
          model: "电池组型号2",
          group: "电池组规格2",
          deviceId: "1805B598C6E7",
          models: false
        },
        {
          batteryId: "T002",
          model: "电池组型号2",
          group: "电池组规格2",
          deviceId: "1805B598C6E7",
          models: false
        },
        {
          batteryId: "T002",
          model: "电池组型号2",
          group: "电池组规格2",
          deviceId: "1805B598C6E7",
          models: false
        }
      ]
    };
  },
  methods: {
    showSameData() {
      this.actived = "same";
    },
    showDiffData() {
      this.actived = "diff";
    },
    openTable() {
      this.tableVisible = true;
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.textAlain {
  text-align: center;
}
.tabInfo {
  width: 330px;
  // height: 50px;
  background: #ffffff;
  font-size: 0;
  // line-height: 50px;
  padding: 15px 0;
  border-radius: 5px;
  margin: 0 auto;
  a {
    width: 158px;
    font-size: 14px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #bfbfbf;
    &.active {
      color: #484848;
    }
  }
  .divider {
    margin: 0 6px;
    display: inline-block;
    height: 8px;
    width: 1px;
    background: #ccc;
  }
}
.titleTab {
  margin-bottom: 20px;
}
.top {
  margin-bottom: 15px;
  .title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 16px;
  }
  .compare-add {
    border: 1px dashed #898989;
    width: 232px;
    height: 120px;
    border-radius: 10px;
    font-weight: 550;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    margin: 0 24px;
    font-size: 12px;
  }
}
.timeCenter {
  margin-bottom: 20px;
}
.timeBar {
  padding: 24px;
  background: #ffffff;
  // margin-bottom: 60px;
  .lables {
    display: inline-block;
    text-align: right;
    color: #484848;
    font-size: 13px;
    margin-right: 15px;
    width: 8.5%;
  }
  .lable {
    color: #484848;
    font-size: 13px;
    margin: 0 5px;
  }
  .queryTime {
    width: 16%;
  }
  .queryBtn {
    margin-left: 20px;
  }
}
.page {
  padding-top: 20px;
  text-align: right;
}
</style>
