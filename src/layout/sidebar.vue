<template>
  <div>
    <template v-for="value in menuData">
      <el-submenu v-if="value.children" :index="value.link" :key="value.id">
        <template slot="title">
          <i :class="value.icon"></i>
          <span slot="title">{{value.text}}</span>
        </template>
        <MenuTree :menuData="value.children"></MenuTree>
      </el-submenu>
      <el-menu-item v-else :index="value.link" :key="value.id">
        <i :class="value.icon"></i>
        <span slot="title">{{value.text}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ["menuData"],
  name: "MenuTree"
};
</script>
<style lang="scss" scoped>
</style>

