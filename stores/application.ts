import { defineStore } from 'pinia';
import { generateFakeProduct } from '~/utils/generate';

const INITIAL_PRODUCT_COUNT = 12;

const getProducts = () => {
  const arrProducts: Array<Object> = [];
  for (let i = 0; i < INITIAL_PRODUCT_COUNT; i++) {
    arrProducts.push(generateFakeProduct());
  }
  return arrProducts;
};

export const useApplicationStore = defineStore('application', () => {
  const products = getProducts();

  return {
    products,
  };
});
