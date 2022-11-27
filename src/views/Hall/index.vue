<template>
  <div class="pl-5 pr-5 hall">
    <Title title="音乐馆"></Title>
    <Affix target=".music" :offset="56" ref="affixRef">
      <div class="bg-view">
        <a-tabs @tabClick="onTabClick">
          <a-tab-pane
            v-for="menu in musicMenu"
            :key="menu.name"
            :tab="menu.label"
            class="text-main"
          >
          </a-tab-pane>
        </a-tabs>
      </div>
    </Affix>
    <div class="mt-5"><router-view></router-view></div>
  </div>
</template>

<script setup lang="ts">
import { useMusicMenu } from '@/hooks'
import router from '@/router'
const { musicMenu, currentMenu, onTabClick } = useMusicMenu()
</script>

<style scoped lang="less">
.ant-tabs {
  :deep(.ant-tabs-content-holder) {
    display: none;
  }
  :deep(.ant-tabs-nav) {
    margin: 0;
    &::before {
      border: none;
    }
  }
  :deep(.ant-tabs-tab) {
    &:hover {
      @apply text-emerald-400 !important;
    }
  }
}
</style>
