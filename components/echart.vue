<template>
  <div class="echarts" :id="randomId"></div>
</template>

<script>
import echarts from "echarts";
// import { isValidOption } from "../utils/valated";

export default {
  name: "echarts",
  props: {
    option: {
      type: Object,
      default() {
        return {};
      }
    },
    width: {
      type: String
    }
  },
  data() {
    return {
      myEcharts: null,
      isOptionAbnormal: false,
      randomId: `echarts-dom${Date.now() + Math.random()}`
    };
  },
  watch: {
    option() {
      this.checkAndSetOption();
    }
  },
  mounted() {
    let $echartsDOM = document.getElementById(this.randomId);
    if (!$echartsDOM) return;
    let myEcharts = echarts.init($echartsDOM);
    // this.myEcharts = myEcharts;

    myEcharts.setOption(this.option);
    setTimeout(() => {
      myEcharts.resize();
    }, 20);
  },
  methods: {
    checkAndSetOption() {
      // let option = this.option;
      // this.myEcharts.setOption(option);
      // if (isValidOption(option)) {
      //   this.myEcharts.setOption(option);
      //   this.isOptionAbnormal = false;
      // } else {
      //   this.isOptionAbnormal = true;
      // }
    }
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
