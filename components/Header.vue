<template>
  <div class="my-header flex justify-between px-4 sm:px-8 shadow-xl h-[92px]">
    <div class="flex my-auto text-xl sm:text-[32px] font-[700] cursor-pointer">Brand Name</div>
    <div class="flex flex-row space-x-2 sm:pr-8">
      <img class="my-auto w-5 sm:w-8" src="~/assets/img/cart.svg" />
      <p class="text-sm sm:text-[14px] font-[400] my-auto">{{ store.count }} товаров</p>
    </div>
  </div>
</template>

<script setup>
import { useCardStore } from '~/stores/card';
const store = useCardStore();
</script>

<style></style>
