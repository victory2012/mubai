<template>
  <div class="container">
    <div class="search">
      <el-button size="small" type="primary">修改阈值</el-button>
    </div>
    <div class="warrp">
      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>单体充电电压上限阈值(V)</p>
            <el-input-number style="width:200px;" v-model="setings.aloneChargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>单体放电电压下限阈值(V) </p>
            <el-input-number style="width:200px;" v-model="setings.aloneDischargeDownLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>整组充电电压上限阈值(V)</p>
            <el-input-number style="width:200px;" v-model="setings.groupChargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>整组放电电压下限阈值(V)</p>
            <el-input-number style="width:200px;" v-model="setings.groupDischargeDownLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>充电电流上限阈值系数</p>
            <el-input-number style="width:200px;" v-model="setings.currentChargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>放电电流上限阈值系数</p>
            <el-input-number style="width:200px;" v-model="setings.currentDischargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>充电温度上限阈值(℃)</p>
            <el-input-number style="width:200px;" v-model="setings.temperChargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>充电温度下限阈值(℃)</p>
            <el-input-number style="width:200px;" v-model="setings.temperChargeDownLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>放电温度上限阈值(℃)</p>
            <el-input-number style="width:200px;" v-model="setings.temperDischargeUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>放电温度下限阈值(℃)</p>
            <el-input-number style="width:200px;" v-model="setings.temperDischargeDownLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>补水超限天数</p>
            <el-input-number style="width:200px;" v-model="setings.water" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>

      <el-row type="flex" :gutter="20" justify="center">
        <el-col :span="6">
          <div class="item">
            <p>充电容量上限阈值系数</p>
            <el-input-number style="width:200px;" v-model="setings.capacityUpLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <p>充电容量下限阈值系数</p>
            <el-input-number style="width:200px;" v-model="setings.capacityDownLimit" controls-position="right" size="small"></el-input-number>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setings: {}
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
  background: #ffffff;
  min-width: 835px;
}
.search {
  text-align: center;
  padding-left: 120px;
  margin-bottom: 40px;
}
.warrp {
  .item {
    color: #484848;
    margin-bottom: 26px;
    p {
      font-size: 14px;
      line-height: 32px;
    }
  }
}
</style>
