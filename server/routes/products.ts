import { useApplicationStore } from '~/stores/application';
import { createPinia } from 'pinia';

export default defineEventHandler((event) => {
  const pinia = createPinia();
  const store = useApplicationStore(pinia);
  return {
    products: store.products,
  };
});
