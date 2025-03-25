<script setup lang="ts">
import cardPng from '../assets/img/card.png';

const isOpen = ref(false);
const handleMouseEnter = () => {
  isOpen.value = true;
  console.log('handleMouseEnter');
};

const handleMouseLeave = () => {
  isOpen.value = false;
  console.log('handleMouseLeave');
};

interface Product {
  name: string;
  brand: string;
  image?: string;
  newPrice: number;
  url: string;
}

const props = defineProps<{
  product: Product;
}>();

let imageUrl = ref(props.product.image);

const handleImageError = () => {
  imageUrl.value = cardPng;
};

const text = computed(() => {
  return props.product.brand.length > 15 ? props.product.brand.slice(1, 20) + ' ...' : props.product.brand + ' ' + props.product.brand;
});
</script>

<template>
  <div class="p-[20px] h-[360px]" v-on:mouseleave="handleMouseLeave">
    <div :class="{ 'my-after': isOpen }" class="w-[201px] cursor-pointer" v-on:mouseenter="handleMouseEnter">
      <div class="relative">
        <img v-if="product.image" class="object-cover h-[201px] w-[201px] rounded-xl" :src="imageUrl" @error="handleImageError" />
        <img v-else class="object-cover h-[201px] w-[201px] rounded-xl" :src="cardPng" />
        <div class="absolute bottom-2 left-2 bg-white rounded-lg px-2">
          <span class="text-[#E0119D] font-[400] text-[14px]"> -35% </span>
        </div>
      </div>
      <div class="space-x-2 mt-2">
        <span class="font-[700] text-[16px]"> {{ product.newPrice }} ₽</span>
        <span class="font-[400] text-[12px] text-[#999999] line-through">1 610 ₽</span>
      </div>
      <span class="font-[600] text-[12px]">{{ product.name }}</span>
      <div class="font-[400] text-[14px]">{{ text }}</div>
    </div>
    <button @click="$emit('clickEvent')" v-show="isOpen" class="bg-black text-white rounded-lg px-5 py-1.5 font-[500] text-[14px] cursor-pointer mt-2">В корзину</button>
  </div>
</template>

<style scoped>
.my-after::after {
  content: '';
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 3px gray;
}
</style>
