<template>
  <div class="affix" ref="root">
    <div class="affix-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.fixed {
  position: fixed;
}
</style>
