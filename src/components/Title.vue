<template>
  <h1 class="text-3xl font-bold pt-8 pb-4 mt-5">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>
