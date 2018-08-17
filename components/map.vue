<template>
  <div>
    <div id="historyContent" class="historyContent"></div>
  </div>
</template>
<script>
/* eslint-disable */
import AMap from "AMap";

export default {
  data() {
    return {
      map: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(AMap);
      new AMap.Map("historyContent", {
        resizeEnable: true,
        zoom: 10
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.historyContent {
  width: 100%;
  height: 450px;
}
</style>

