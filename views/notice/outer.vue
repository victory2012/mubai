<template>
  <div class="container">
    <div class="phoneAdd">
      <div class="item tips">手机号码:</div>
      <div class="item input">
        <el-input size="small" type="tel" v-model="input" placeholder="请输入手机号"></el-input>
      </div>
      <div class="item">
        <el-button size="small" type="primary">添加</el-button>
      </div>
    </div>
    <div class="more">已添加的告警接收人（最多3位）</div>
    <div>
      <ul>
        <li class="tabletr">
          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
              <div class="grid">18217119571</div>
            </el-col>
            <el-col :span="6">
              <!-- <div class="grid-content"></div> -->
            </el-col>
            <el-col :span="6">
              <div>
                <el-button size="small" type="primary">取消接收</el-button>
              </div>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 24px;
  background: #ffffff;
}
.phoneAdd {
  overflow: hidden;
  width: 60%;
  line-height: 32px;
  margin: 0 auto;
  margin-bottom: 50px;
  .item {
    float: left;
    &.tips {
      width: 28%;
      text-align: right;
      margin-right: 15px;
      font-size: 14px;
      color: #484848;
    }
    &.input {
      width: 42%;
      margin-right: 15px;
    }
  }
}
.more {
  font-size: 14px;
  color: #484848;
  padding-left: 106px;
  line-height: 50px;
}
.tabletr {
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
  .grid {
    color: #484848;
  }
}
</style>
