<template>
  <div class="device">
    <div class="topTab">
      <div class="icons">
        <div class="items">
          <img src="../../../static/img/device_reg.png" alt="">
          <p>设备注册</p>
        </div>
        <div class="items">
          <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-success="flieSuccess" :on-progress="onGoing" :on-error="flieError" :show-file-list="false" :multiple="false" :auto-upload="true">
            <!-- <el-button slot="trigger" size="small" type="primary">选取文件</el-button> -->
            <div slot="trigger">
              <img src="../../../static/img/device_import.png" alt="">
              <p>批量导入</p>
            </div>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
          <!-- <img src="../../../static/img/device_import.png" alt="">
          <p>批量导入</p> -->
        </div>
        <div class="items">
          <img src="../../../static/img/device_recover.png" alt="">
          <p>恢复拉黑设备</p>
        </div>
      </div>
      <div class="select">
        <div class="item">
          <el-input size="small" style="width:100%" v-model="content" placeholder="请输入内容"></el-input>
        </div>
        <div class="item">
          <el-select size="small" style="width:100%" v-model="regState" placeholder="注册状态">
            <el-option v-for="item in stateOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          <el-select size="small" style="width:100%" v-model="bindState" placeholder="绑定状态">
            <el-option v-for="item in bindOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          <el-button size="small" type="primary">确定</el-button>
          <el-button size="small" plain>取消</el-button>
        </div>
      </div>
    </div>
    <div class="tableContent">
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <!-- <el-table-column type="index" width="50" align="center" label="序号"></el-table-column> -->
        <el-table-column prop="deviceId" align="center" label="设备编号">
        </el-table-column>
        <el-table-column prop="manufacturerName" align="center" label="企业名称">
        </el-table-column>
        <el-table-column prop="regstate" align="center" label="设备注册状态">
        </el-table-column>
        <el-table-column prop="bindingName" align="center" label="电池绑定状态">
        </el-table-column>
        <el-table-column align="center" label="监测设备">
          <template slot-scope="scope">
            <el-button @click.native.prevent="MonitorDevice(scope.$index, tableData)" type="text" size="small">
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click.native.prevent="addBlack(scope.$index, tableData)" type="text" :disabled="!tableData[scope.$index].status" size="small">
              拉黑
            </el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
              删除
            </el-button>
            <el-button @click.native.prevent="uplevel(scope.$index, tableData)" type="text" :disabled="!tableData[scope.$index].bindingStatus" size="small">
              设备升级
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="['10','20','30','50']" :page-size="handleSize" layout="sizes, prev, pager, next" :total="totalPage">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalPage: 100, // 总数量
      currentPage: 1, // 当前页
      handleSize: 10,
      content: "",
      loading: false,
      regState: "",
      bindState: "",
      tableData: [
        {
          deviceId: "1805B598C6E7",
          manufacturerName: "测试企业001",
          regstate: "已注册",
          bindingName: "已绑定"
        }
      ],
      stateOptions: [
        {
          value: "yes",
          label: "已注册"
        },
        {
          value: "no",
          label: "未注册"
        }
      ],
      bindOptions: [
        {
          value: "yes",
          label: "已绑定"
        },
        {
          value: "no",
          label: "未绑定"
        }
      ]
    };
  },
  methods: {
    /* 改变每页显示的数量 */
    handleSizeChange() {},
    /* 改变当前页 */
    handleCurrentChange() {},
    /* 查看 */
    MonitorDevice() {},
    /* 添加黑名单 */
    addBlack() {},
    /* 删除设备 */
    deleteRow() {},
    /* 设备升级 */
    uplevel() {},
    flieError() {
      console.log('上传失败');
    },
    onGoing() {
      console.log('上传中');
    },
    flieSuccess() {
      console.log('成功');
    }
  }
};
</script>
<style lang="scss" scoped>
.device {
  background: #ffffff;
  padding: 24px;
  .topTab {
    min-width: 1014px;
    display: flex;
    height: 60px;
    .icons {
      flex: 0 0 42%;
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
    .select {
      flex: 1;
      display: flex;
      .item {
        flex: 1;
        padding: 10px 5px;
      }
    }
  }
  .tableContent {
    padding-top: 50px;
  }
}
.page {
  padding-top: 20px;
  text-align: right;
}
</style>
