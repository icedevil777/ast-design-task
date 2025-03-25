<template>
  <div class="myh-screen px-4 sm:p-8 space-y-8 mt-[92px] relative">
    <div class="flex justify-between">
      <h1 class="text-xl sm:text-[32px] font-[700]">Каталог продуктов</h1>
      <span class="text-[#E0119D] text-[16px] font-[300] mr-8 self-center">{{ text }} </span>
    </div>

    <div v-if="data.products" class="flex flex-wrap relative">
      <card @click-event="clickCallback" class="relative" v-for="product in data.products" :product="product" />
    </div>
    <div v-else-if="status === 'pending'" class="flex text-3xl w-full h-96 justify-center">
      <span class="m-auto">Loading ...</span>
    </div>
    <div v-show="isInfo" class="flex popup justify-center items-center bg-[#E0119D] rounded-2xl text-white">
      <span class="text-[16px] font-[400]">Товар добавлен в корзину!</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh } = await useFetch(() => '/api/products');

import { useCardStore } from '~/stores/card';
const store = useCardStore();
const isInfo = ref(false);

const text = computed(():string => {
  return store.count ? '' : 'Добавьте товары в корзину!';
});

const clickCallback = ():void => {
  store.increment();
  showInfo();
};

const closeInfo = ():void => {
  isInfo.value = false;
};

const showInfo = ():void => {
  isInfo.value = true;
  window.setTimeout(closeInfo, 2000);
};
</script>

<style scoped>
.myh-screen {
  min-height: calc(100vh - 92px - 92px);
}

.popup {
  position: fixed;
  right: 40px;
  bottom: 40px;
  /* transform: translate(-50%, -50%); */
  width: 250px;
  height: 65px;
  opacity: 1;
  z-index: 9999;
}
</style>
