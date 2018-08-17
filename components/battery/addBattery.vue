<template>
  <el-dialog width="600px" title="电池登记" @close="closeTt" :visible.sync="addBattery">
    <el-form :model="batteryForm" :rules="batteryFormRules" ref="batteryForm">
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组生产企业" prop="account">
            <el-input size="small" disabled v-model="account" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电池组客户企业" prop="batCustom">
            <el-select size="small" style="width:210px" v-model="batteryForm.batCustom" placeholder="电池组客户企业">
              <el-option v-for="item in batCustomOpts" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组编号" prop="groupNum">
            <el-input size="small" v-model="batteryForm.groupNum" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电池组型号" prop="batGroupModel">
            <el-select size="small" style="width:210px" v-model="batteryForm.batGroupModel" placeholder="电池组型号">
              <el-option v-for="item in GroupModelOpts" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组规格" prop="batGroupSpecif">
            <el-select size="small" style="width:210px" v-model="batteryForm.batGroupSpecif" placeholder="电池组规格">
              <el-option v-for="item in batGroupSpecifOpts" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电池组额定电压" prop="batteryVoltage">
            <el-input size="small" v-model="batteryForm.batteryVoltage" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组额定容量" prop="batteryCapacity">
            <el-input size="small" v-model="batteryForm.batteryCapacity" auto-complete="off"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电池单体型号" prop="singleBattery">
            <el-select size="small" style="width:210px" v-model="batteryForm.singleBattery" placeholder="电池单体型号">
              <el-option v-for="item in singleBatteryOpts" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组生产日期" prop="productDate">
            <el-date-picker size="small" style="width: 210px" v-model="batteryForm.productDate" type="date" placeholder="生产日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电池组出厂日期" prop="factoryDate">
            <el-date-picker size="small" style="width: 210px" v-model="batteryForm.factoryDate" type="date" placeholder="出厂日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="60">
        <el-col :span="12">
          <el-form-item label="电池组质保期" prop="qualityDate">
            <el-date-picker size="small" style="width: 210px" v-model="batteryForm.qualityDate" type="date" placeholder="质保期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="监测设备编号（选填）" prop="deviceId">
            <el-select size="small" style="width:210px" v-model="batteryForm.deviceId" placeholder="设备编号">
              <el-option v-for="item in deviceIdOpts" :key="item.code" :label="item.code" :value="item.id" :disabled="item.disabled">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button size="small" @click="resetBatteryAdd">重 置</el-button>
      <el-button size="small" @click="submitBatteryAdd" type="primary">确 认</el-button>
    </div>
  </el-dialog>
</template>
<script>
// import utils from "@/utils/utils";

export default {
  data() {
    return {
      account: "1231456",
      batteryForm: {},
      batteryFormRules: {
        batCustom: [
          { required: true, message: "请选择电池组客户企业", trigger: "change" }
        ],
        groupNum: [
          { required: true, message: "请选择电池组编号", trigger: "change" }
        ],
        batGroupModel: [
          { required: true, message: "请选择电池组型号", trigger: "change" }
        ],
        batGroupSpecif: [
          { required: true, message: "请选择电池组规格", trigger: "change" }
        ],
        batteryVoltage: [
          { required: true, message: "请输入电池组额定电压", trigger: "change" }
        ],
        batteryCapacity: [
          { required: true, message: "请输入电池组额定容量", trigger: "change" }
        ],
        singleBattery: [
          { required: true, message: "请选择电池单体型号", trigger: "change" }
        ],
        productDate: [
          { required: true, message: "请选择电池组生产日期", trigger: "blur" }
        ],
        factoryDate: [
          { required: true, message: "请选择电池组出厂日期", trigger: "blur" }
        ],
        qualityDate: [
          { required: true, message: "请选择电池组质保期", trigger: "blur" }
        ]
      },
      GroupModelOpts: [],
      batGroupModel: "",
      batCustomOpts: [], // 电池组客户企业列表
      batCustom: "", // 电池组客户企业
      batGroupSpecif: "",
      batGroupSpecifOpts: [],
      singleBattery: "",
      singleBatteryOpts: [],
      deviceId: "",
      deviceIdOpts: [],
      productDate: "",
      factoryDate: "",
      qualityDate: ""
    };
  },
  computed: {
    addBattery: {
      get: function() {
        return this.$store.state.addBattery;
      },
      set: function() {}
    }
  },
  methods: {
    resetBatteryAdd() {
      this.$refs.batteryForm.resetFields();
      this.batteryForm = {};
    },
    submitBatteryAdd() {
      console.log(this.batteryForm);
      this.$refs.batteryForm.validate(valid => {
        if (valid) {
          console.log("submit!");
          // let params = {
          //   code: this.batteryForm.groupNum,
          //   modelId: this.batteryForm,
          //   model: this.batteryForm,
          //   normId: this.batteryForm,
          //   norm: this.batteryForm,
          //   companyId: this.batteryForm,
          //   voltage: this.batteryForm,
          //   capacity: this.batteryForm,
          //   singleModeId: this.batteryForm,
          //   singleMode: this.batteryForm,
          //   productionDate: utils.dateFomat(this.batteryForm.productDate),
          //   manufacturerDate: utils.dateFomat(this.batteryForm.factoryDate),
          //   qualityGuaranteeDate: utils.dateFomat(this.batteryForm.qualityDate),
          //   deviceId: this.batteryForm
          // };
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /* 关闭窗口回调方法 */
    closeTt() {
      this.batteryForm = {};
      this.$store.state.addBattery = false;
    },
    /* 获取电池组型号列表 */
    getGroupModel() {
      this.$axios.get("/dic/user_dic?dicKey=model&categoryId=2").then(res => {
        console.log("电池组型号", res);
      });
    },
    /* 获取电池组规格列表 */
    getGroupSpecif() {
      this.$axios.get("/dic/user_dic?dicKey=norm&categoryId=2").then(res => {
        console.log("电池组规格", res);
      });
    },
    /* 获取电池单体型号列表 */
    getSinglBattery() {
      this.$axios
        .get("/dic/user_dic?dicKey=single_model&categoryId=2")
        .then(res => {
          console.log("电池单体型号", res);
        });
    },
    /* 获取设备编号列表 */
    getDeviceList() {
      this.$axios.get("/device/code?status=0&bindingStatus=1").then(res => {
        console.log("设备编号", res);
        if (res.data && res.data.code === 0) {
          this.deviceIdOpts = res.data.data;
        }
      });
    },
    init() {
      this.getGroupModel();
      this.getGroupSpecif();
      this.getSinglBattery();
      this.getDeviceList();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

