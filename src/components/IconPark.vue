<template>
  <Component
    :is="icon"
    :theme="theme"
    :size="size"
    :spin="spin"
    :fill="fill"
    :strokeLinecap="strokeLinecap"
    :strokeLinejoin="strokeLinejoin"
    :stokeWidth="stokeWidth"
  />
</template>

<script setup lang="ts">
import { Icon } from '@icon-park/vue-next/lib/runtime'
defineProps<{
  icon: Icon // 图标
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color' // 主题
  size?: number | string // 大小
  spin?: boolean
  fill?: string | string[]
  strokeLinecap?: 'butt' | 'round' | 'square'
  strokeLinejoin?: 'miter' | 'round' | 'bevel'
  stokeWidth?: number // 指定了当前对象的轮廓的宽度，他默认值为1
}>()
</script>
