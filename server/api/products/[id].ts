import { useApplicationStore } from '~/stores/application';
import { createPinia } from 'pinia';

export default defineEventHandler((event) => {
  let id: string | number | undefined = getRouterParam(event, 'id');

  if (id === undefined) {
    return { error: 'ID is required' };
  }

  id = parseInt(id, 10);
  const pinia = createPinia();
  const products = useApplicationStore(pinia).products;

  return {
    name: products[id],
  };
});
