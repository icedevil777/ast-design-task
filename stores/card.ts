import { defineStore } from 'pinia';

export const useCardStore = defineStore('card', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
