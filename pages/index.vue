<template>
  <div>
    <Header />
    <div class="flex items-center justify-center myh-screen text-center">
      <div>
        <div class="cursor-pointer">
          <a class="text-2xl text-pink-600 underline" @click="goToCatalog"> Перейти в раздел каталога</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application';
import { apiPath } from '~/utils/api';

const { welcome } = useApplicationStore();

const { believe } = await $fetch(apiPath.hello);

const goToCatalog = () => {
  console.log('go');
};
</script>

<style scoped>
.myh-screen{
    height: calc(100vh - 92px - 92px);
}

</style>