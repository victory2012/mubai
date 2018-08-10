<template>
  <div class="chartCenter">
    <div class="chartLine">
      <div class="lineChart">
        <i-echart :option='option'></i-echart>
      </div>
      <div class="lineChart">
        <i-echart :option='option'></i-echart>
      </div>
    </div>
    <div class="chartLine">
      <div class="lineChart">
        <i-echart :option='option'></i-echart>
      </div>
      <div class="lineChart">
        <i-echart :option='option'></i-echart>
      </div>
    </div>
    <div class="chartBar">
      <div class="bar">
        <i-echart :option="optionBar"></i-echart>
      </div>
      <div class="bar">
        <i-echart :option="optionBar"></i-echart>
      </div>
      <div class="bar">
        <i-echart :option="optionBar"></i-echart>
      </div>
      <div class="bar">
        <i-echart :option="optionBar"></i-echart>
      </div>
    </div>
  </div>
</template>
<script>
import iEchart from "../echart";

export default {
  components: {
    iEchart
  },
  data() {
    return {
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
      optionBar: {
        title: {
          text: "电压",
          subtext: "检测数据变化"
        },
        legend: {},
        tooltip: {},
        dataset: {
          // 提供一份数据。
          source: [
            ["product", "上期", "本期"],
            ["充电次数", 85.8, 93.7],
            ["充电时间", 73.4, 55.1],
            ["平均充电时间", 65.2, 82.5],
            ["平均放电时间", 53.9, 39.1]
          ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: {
          type: "category",
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
        // 声明一个 Y 轴，数值轴。
        yAxis: {
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
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: "bar" }, { type: "bar" }]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.chartLine {
  background: #ffffff;
}
.chartLine {
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  .lineChart {
    flex: 1;
    height: 400px;
  }
}
.chartBar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  .bar {
    flex: 0 0 49%;
    height: 400px;
    background: #ffffff;
    margin-bottom: 20px;
  }
}
</style>
