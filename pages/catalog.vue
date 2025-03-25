<template>
  <div class="myh-screen px-4 sm:p-8 space-y-8 mt-[92px]">
  <div class="flex justify-between">
    <h1 class="text-xl sm:text-[32px] font-[700]">Каталог продуктов </h1> 
    <span class="text-red-600 text-[16px] font-[300] mr-8 self-center">{{ text }} </span>
  </div>
    
    <div v-if="data.products" class="flex flex-wrap relative">
      <card class="relative" v-for="product in data.products" :product="product" />
    </div>
    <div v-else-if="status === 'pending'" class="flex text-3xl w-full h-96 justify-center">
      <span class="m-auto">Loading ...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh } = await useFetch(() => '/api/products');

import {useCardStore}  from '~/stores/card'
const store = useCardStore()


const text = computed(() => {
  return store.count ? '' : 'Добавьте товары в корзину!';
});
</script>

<style scoped>
.myh-screen {
  min-height: calc(100vh - 92px - 92px);
}
</style>
