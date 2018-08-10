<template>
  <div class="history">
    <div class="timeBar">
      <span class="lables">从</span>
      <el-date-picker class="queryTime" size="small" v-model="start" type="date" placeholder="选择日期"></el-date-picker>
      <span class="lable">至</span>
      <el-date-picker class="queryTime" size="small" v-model="end" type="date" placeholder="选择日期"></el-date-picker>
      <el-select class="timeSelect queryTime" size="small" v-model="timevalue" placeholder="请选择">
        <el-option v-for="item in weekOption" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button class="queryBtn" size="small" type="primary">确定</el-button>
    </div>
    <div class="charts pt">
      <div class="info">
        <i-echart :option="option"></i-echart>
      </div>
      <div class="info">
        <i-echart :option="option"></i-echart>
      </div>
    </div>
    <div class="charts pb">
      <div class="info">
        <i-echart :option="option"></i-echart>
      </div>
      <div class="info">
        <i-echart :option="option"></i-echart>
      </div>
    </div>
    <div class="batteryChart">
      <div class="addbattery">
        <ul>
          <li>
            <p class="history_count_val">0</p>
            <p>电池循环次数</p>
          </li>
          <li>
            <p class="history_count_val">0h</p>
            <p>充电时间</p>
          </li>
          <li>
            <p class="history_count_val">0h</p>
            <p>放电时间</p>
          </li>
          <li>
            <p class="history_count_val">0h</p>
            <p>平均充电时间</p>
          </li>
          <li>
            <p class="history_count_val">0h</p>
            <p>平均放电时间</p>
          </li>
          <li>
            <p class="history_count_val">0</p>
            <p>补水次数</p>
          </li>
          <li>
            <p class="history_count_val">0h</p>
            <p>平均补水时长</p>
          </li>
        </ul>
      </div>
      <div class="circel">
        <div class="circelInfo">
          <i-echart :option="pieOption"></i-echart>
        </div>
        <div class="circelInfo">
          <div class="item-history_alarm_divider">
            <p class="times">1</p>
            <p>累计告警</p>
          </div>
        </div>
        <div class="circelInfo">
          <i-echart :option="pieOption"></i-echart>
        </div>
      </div>
    </div>
    <div class="alarmTab">
      <div class="tabInfo">
        <a class="active">历史告警</a>
        <span class="divider"></span>
        <a>历史补水</a>
      </div>
    </div>
    <div class="tables">
      <i-alarm></i-alarm>
    </div>
    <div class="maps">
      <!-- <div id="hisContent" class="mapContent"></div> -->
      <i-map></i-map>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AMap from "AMap";
import iEchart from "../../components/echart";
import iAlarm from "../../components/alarm-data";
import iMap from "../../components/map";

export default {
  components: {
    iEchart,
    iAlarm,
    iMap
  },
  data() {
    return {
      start: "",
      end: "",
      timevalue: "week",
      weekOption: [
        {
          value: "week",
          label: "最近一周"
        },
        {
          value: "onemounth",
          label: "最近一月"
        },
        {
          value: "threemounth",
          label: "最近三个月"
        },
        {
          value: "sixmounth",
          label: "最近六个月"
        },
        {
          value: "year",
          label: "最近一年"
        },
        {
          value: "all",
          label: "全生命周期"
        }
      ],
      option: {
        title: {
          text: "电压",
          subtext: "检测数据变化"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            data: [10, 12, 21, 54, 260, 830, 710]
          }
        ],
        dataZoom: [
          {
            // 这个dataZoom组件，默认控制x轴。
            type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            start: 0, // 左边在 10% 的位置。
            end: 100 // 右边在 60% 的位置。
          },
          {
            // 这个dataZoom组件，也控制x轴。
            type: "inside", // 这个 dataZoom 组件是 inside 型 dataZoom 组件
            start: 0, // 左边在 10% 的位置。
            end: 100 // 右边在 60% 的位置。
          }
        ]
      },
      pieOption: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          // orient: "vertical",
          // x: "left",
          bottom: 10,
          left: "center",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "50%"],
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.history {
  // background: #ffffff;
  //
  box-sizing: border-box;
  border-radius: 5px;
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
      width: 21%;
    }
    .queryBtn {
      margin-left: 20px;
    }
  }
  .charts {
    box-sizing: border-box;
    padding: 24px;
    background: #ffffff;
    // margin-bottom: 20px;
    width: 100%;
    display: flex;
    .info {
      flex: 1;
      height: 400px;
    }
  }
  .batteryChart {
    background: #ffffff;
    padding: 24px;
  }
  .addbattery {
    background: #ffffff;
    padding: 24px 0;
    ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        p {
          height: 19px;
          font-size: 15px;
          font-weight: 600;
          color: #484848;
          &.history_count_val {
            height: 24px;
            font-size: 18px;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  .circel {
    background: #ffffff;
    padding: 24px 0;
    display: flex;
    .circelInfo {
      flex: 1;
      height: 400px;
      .item-history_alarm_divider {
        box-sizing: border-box;
        height: 200px;
        border-left: 1px solid #d7d7d7;
        margin: 163px auto 0;
        margin-left: 140px;
        padding-left: 70px;
        padding-top: 74px;
        p {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          &.times {
            height: 24px;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .alarmTab {
    margin: 20px;
    .tabInfo {
      width: 330px;
      background: #fff;
      padding: 15px 0;
      border-radius: 10px;
      margin: 0 auto;
      a {
        width: 152px;
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
  }
  .tables {
    background: #ffffff;
    padding: 24px;
    margin-bottom: 20px;
  }
  .maps {
    background: #ffffff;
    padding: 24px;
    height: 450px;
    .mapContent {
      width: 100%;
      height: 100%;
    }
  }
}
.pb {
  padding-bottom: 50px;
  border-bottom: 1px solid #d7d7d7;
  margin-bottom: 50px;
}
.pt {
  padding-top: 60px;
}
</style>
