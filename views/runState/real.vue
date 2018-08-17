<template>
  <div class="center">
    <div class="dashboad">
      <div>
        <img src="../../assets/img/temp.png" alt="">
        <p class="info">47℃</p>
        <p>温度</p>
      </div>
      <div>
        <img src="../../assets/img/level.png" alt="">
        <p class="info">47℃</p>
        <p>液位</p>
      </div>
      <div>
        <img src="../../assets/img/voltage_total.png" alt="">
        <p class="info">47℃</p>
        <p>电压</p>
      </div>
      <div>
        <img src="../../assets/img/voltage.png" alt="">
        <p class="info">47℃</p>
        <p>单体电压</p>
      </div>
      <div>
        <img src="../../assets/img/current.png" alt="">
        <p class="info">47℃</p>
        <p>电流</p>
      </div>
    </div>
    <div class="warrp">
      <div class="map">
        <div class="mapCenter">
          <div class="mapContent" id="mapContent"></div>
        </div>
        <div class="timeCenter">
          <p class="map-time">11:29:17</p>
          <p class="map-date">2018-08-08</p>
          <p class="map-des">刷新时间</p>
          <p class="map-line">主动查询</p>
        </div>
      </div>
      <div class="address">
        <div>
          <img width="21px" src="../../assets/img/me.png" alt="">
          <span>上海摩融</span>
        </div>
        <div>
          <img width="22px" src="../../assets/img/address.png" alt="">
          <span>山东省烟台市招远市大秦家街道</span>
        </div>
        <div>
          <img width="25px" src="../../assets/img/battery.png" alt="">
          <span>jinchaoyuke001</span>
        </div>
        <div>
          <img width="26px" src="../../assets/img/device.png" alt="">
          <span>1365ACC1981A</span>
        </div>
        <div>
          <img width="25px" src="../../assets/img/device-flesh.png" alt="">
          <span>00.00.05</span>
        </div>
      </div>
    </div>
    <div class="my-map-divider">
      <span>过去24小时监测数据</span>
      <el-checkbox v-model="checked">是否自动更新数据</el-checkbox>
    </div>
    <div class="chartWarrp">
      <div class="chartInfo">
        <i-echart :option="option" :width="width"></i-echart>
      </div>
      <div class="chartInfo">
        <i-echart :option="option" :width="width"></i-echart>
      </div>
    </div>
    <div class="chartWarrp">
      <div class="chartInfo">
        <i-echart :option="option" :width="width"></i-echart>
      </div>
      <div class="chartInfo">
        <i-echart :option="option" :width="width"></i-echart>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AMap from "AMap";
import echarts from "echarts";
import iEchart from "../../components/echart";

export default {
  components: {
    iEchart
  },
  data() {
    return {
      checked: true,
      width: '500px',
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
      }
    };
  },
  mounted() {
    this.init();
    console.log(window.innerWidth);
  },
  methods: {
    init() {
      new AMap.Map("mapContent", {
        resizeEnable: true,
        zoom: 10
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// @import url('../../assets/style/style.scss');
$fontColor: rgba(0, 0, 0, 0.65);
.center {
  background: #ffffff;
  padding: 24px;
}
.dashboad {
  display: flex;
  margin-bottom: 20px;
  div {
    flex: 1;
    text-align: center;
    color: $fontColor;
    img {
      width: 56px;
      height: auto;
    }
    p {
      &.info {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
.warrp {
  display: flex;
  height: 250px;
  .map {
    flex: 0 0 59%;
    display: flex;
    .mapCenter {
      flex: 0 0 67%;
      .mapContent {
        width: 100%;
        height: 100%;
      }
    }
    .timeCenter {
      flex: 1;
      padding-left: 24px;
      p {
        font-weight: 600;
        margin-bottom: 16px;
        color: $fontColor;
      }
      .map-time {
        height: 24px;
        font-size: 20px;
        margin-top: 100px;
      }
      .map-date {
        height: 20px;
        font-size: 17px;
      }
      .map-des {
        height: 19px;
        font-size: 15px;
      }
      .map-line {
        height: 20px;
        font-size: 17px;
        color: #71bfdb;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .address {
    flex: 1;
    border-left: 1px solid #d7d7d7;
    div {
      padding-left: 50px;
      height: 50px;
      line-height: 50px;
      img {
        height: auto;
        vertical-align: middle;
        margin-right: 15px;
      }
      span {
        color: $fontColor;
        font-size: 13px;
      }
    }
  }
}
.my-map-divider {
  margin: 40px 0;
  height: 38px;
  line-height: 38px;
  border-top: 1px solid #d7d7d7;
  span {
    margin-right: 15px;
  }
}
.chartWarrp {
  display: flex;
  .chartInfo {
    padding: 0 15px;
    flex: 1;
    height: 400px;
  }
}
</style>
