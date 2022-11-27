<template>
  <a-layout-header class="flex items-center justify-between drag h-14">
    <div class="flex items-center pl-5">
      <IconPark :icon="Left" :size="22" :stroke-width="2" class="icon-button" />
      <IconPark
        :icon="Right"
        :size="22"
        :stroke-width="2"
        class="icon-button"
      />
      <div class="search ml-2"><SearchPop /></div>
      <div class="flex items-center ml-28 justify-between space-x-4">
        <UserInfo />
        <IconPark :icon="Mail" :stroke-width="2" class="icon-button" />
        <IconPark :icon="Platte" :stroke-width="2" class="icon-button" />
        <IconPark
          :icon="HamburgerButton"
          :stroke-width="2"
          class="icon-button"
        />
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next'
</script>

<style scoped lang="less">
.search {
  @apply text-xs;
  :deep(.ant-input-affix-wrapper) {
    @apply rounded-full text-xs bg-slate-100 dark:bg-stone-900;
  }
}

.icon-button {
  @apply p-2 cursor-pointer;
  @apply hover:text-emerald-400;
}
</style>
