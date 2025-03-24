<template>
  <div class="myh-screen px-4 sm:p-8 space-y-8 mt-[92px]">
    <h1 class="text-xl sm:text-[32px] font-[700]">Тестовая задача</h1>
    <div class="flex flex-wrap relative">
      <card class="relative" v-for="i in 10" />
    </div>
  </div>
</template>
<script lang="ts">
import card from './card';
</script>

<style scoped>
.myh-screen {
  min-height: calc(100vh - 92px - 92px);
}
</style>
