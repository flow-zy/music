<template>
  <div class="flex items-center cursor-pointer hover-text">
    <a-avatar round size="small" class="bg-gray-200" src="" />
    <span class="text-xs ml-1.5" v-if="false">jack</span>
    <span class="text-xs ml-1.5" v-else @click="showLogin = !showLogin"
      >点击登录</span
    >
  </div>

  <!--登录界面-->
  <a-modal v-model:visible="showLogin" title="登录" width="330px">
    <a-input size="large" placeholder="手机号码" v-model="phone">
      <template #prefix><Phone /></template>
    </a-input>

    <a-input
      size="large"
      class="mt-5"
      type="password"
      placeholder="登录密码"
      v-model="password"
    >
      <template #prefix><Lock /></template
    ></a-input>
    <button class="button w-full mt-5 py-5" style="border-radius: 5px">
      登录
    </button>
  </a-modal>
</template>

<script setup lang="ts">
import { Lock, Phone } from '@icon-park/vue-next'
const phone = ref<string>('')
const password = ref<string>('')
const showLogin = ref<boolean>(false)
</script>

<style scoped></style>
