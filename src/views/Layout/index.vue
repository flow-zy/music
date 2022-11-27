<template>
  <a-layout class="warp">
    <MySider />
    <a-layout>
      <MyHeader />
      <a-layout-content
        ><a-card><router-view> </router-view></a-card
      ></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import MySider from '@/components/MySider.vue'
import MyHeader from '@/components/MyHeader.vue'
</script>

<style scoped lang="less">
.warp {
  width: 1020px;
  height: 690px;
  margin: 30px auto;
  font-size: 14px;
  overflow: hidden;
  // 侧边栏
  :deep(.ant-layout-sider) {
    background-color: rgb(246, 246, 246);
    .ant-menu-item-selected {
      background-color: rgb(30, 206, 155);
      color: #fff;
    }
  }
  //   顶部导航
  :deep(.ant-layout-header) {
    background-color: #fff;
    height: 76px;
  }
}
</style>
