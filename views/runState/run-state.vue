<template>
  <div class="runCenter">
    <div class="title">
      <div class="titleCenter">
        <a @click="showRealData" :class="{'active': actived == 'real'}">实时数据</a>
        <span class="divider"></span>
        <a @click="showHistoryData" :class="{'active': actived == 'history'}">历史数据</a>
        <span class="divider"></span>
        <a @click="showAlarmData" :class="{'active': actived == 'alarm'}">告警数据</a>
      </div>
      <div class="search">
        <el-autocomplete size="small" suffix-icon="el-icon-search" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
      </div>
    </div>
    <div v-show="false" class="tips">
      请先选择一个电池组！
    </div>
    <component :is="showCompontent"></component>
  </div>
</template>
<script>
export default {
  components: {
    "real-time": () => import("./real.vue"),
    "i-history": () => import("./history.vue"),
    "i-alarm": () => import("./alearm.vue")
  },
  data() {
    return {
      state: "",
      actived: "real",
      showCompontent: "real-time"
    };
  },
  methods: {
    querySearchAsync() {},
    handleSelect() {},
    showRealData() {
      this.actived = "real";
      this.showCompontent = "real-time";
    },
    showHistoryData() {
      this.showCompontent = "i-history";
      this.actived = "history";
    },
    showAlarmData() {
      this.actived = "alarm";
      this.showCompontent = "i-alarm";
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  padding: 24px;
  position: relative;
  margin-bottom: 40px;
  .titleCenter {
    width: 330px;
    // height: 50px;
    background: #ffffff;
    font-size: 0;
    // line-height: 50px;
    padding: 15px 0;
    border-radius: 5px;
    margin: 0 auto;
    a {
      width: 101px;
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
  .search {
    position: absolute;
    top: 32px;
    right: 20px;
  }
}
.tips {
  background: #ffffff;
  padding: 24px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 13px;
}
</style>
