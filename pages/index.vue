<template>
  <div class="flex items-center justify-center text-center myh-screen">
    <div class="cursor-pointer">
      <NuxtLink class="text-2xl text-pink-600 underline" :to="`/catalog`"> Перейти в раздел каталога </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.myh-screen {
  min-height: calc(100vh - 92px);
}
</style>
