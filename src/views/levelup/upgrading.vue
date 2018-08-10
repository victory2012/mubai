<template>
  <div class="updateCenter">
    <div class="topTab">
      <div class="items">
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-success="flieSuccess" :on-progress="onGoing" :on-error="flieError" :show-file-list="false" :multiple="false" :auto-upload="true">
          <div slot="trigger">
            <img src="../../../static/img/device_import.png" alt="">
            <p>文件导入</p>
          </div>
        </el-upload>
      </div>
    </div>
    <div class="container">
      <div class="device">当前设备:</div>
      <p class="tips">已上传文件</p>
      <ul class="warrp">
        <li class="item">
          <div class="text">LinearOutFile1.txt</div>
          <div class="btn">
            <el-button size="small" type="primary">设备升级</el-button>
          </div>
        </li>
        <li class="item">
          <div class="text">LinearOutFile1.txt</div>
          <div class="btn">
            <el-button size="small" type="primary">设备升级</el-button>
          </div>
        </li>
        <li class="item">
          <div class="text">LinearOutFile1.txt</div>
          <div class="btn">
            <el-button size="small" type="primary">设备升级</el-button>
          </div>
        </li>
        <li class="item">
          <div class="text">LinearOutFile1.txt</div>
          <div class="btn">
            <el-button size="small" type="primary">设备升级</el-button>
          </div>
        </li>
        <li class="item">
          <div class="text">LinearOutFile1.txt</div>
          <div class="btn">
            <el-button size="small" type="primary">设备升级</el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    flieError() {
      console.log("上传失败");
    },
    onGoing() {
      console.log("上传中");
    },
    flieSuccess() {
      console.log("成功");
    }
  }
};
</script>
<style lang="scss" scoped>
.topTab {
  height: 60px;
  .items {
    width: 116px;
    float: left;
    text-align: center;
    font-size: 14px;
    img {
      margin-bottom: 8px;
    }
  }
}
.updateCenter {
  padding: 24px;
  background: #ffffff;
}
.container {
  font-size: 14px;
  .device {
    text-align: right;
    line-height: 30px;
  }
  .tips {
    line-height: 50px;
    padding-left: 60px;
  }
}
.warrp {
  .item {
    display: flex;
    line-height: 52px;
    border-bottom: 1px solid #f0f0f0;
    .text {
      padding-left: 60px;
    }
    .btn {
      text-align: right;
      padding-right: 80px;
    }
    &:hover {
      background: #bddfff;
    }
    div {
      flex: 1;
    }
  }
}
</style>
