<template>
  <a-popover trigger="click">
    <a-input
      placeholder="搜索音乐、MV、歌单"
      clearable
      style="width: 216px; background: rgb(230, 230, 230)"
    >
      <template #prefix><Search /></template>
    </a-input>
    <template #content>
      <div class="h-96">
        <div class="pb-2.5">
          <div v-if="true">
            <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div
                class="py-2.5 px-2.5 hover-text cursor-pointer flex justify-between items-center text-xs"
              >
                <div>
                  <span class="mr-1"></span>
                  <span></span>
                </div>
                <div class="text-red-300 text-xs"></div>
              </div>
            </div>
          </div>
          <SearchSuggest v-else />
        </div>
      </div>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
import { Search } from '@icon-park/vue-next'
</script>

<style scoped lang="less">
:deep(.ant-input) {
  input {
    background: rgb(230, 230, 230);
  }
}
</style>
