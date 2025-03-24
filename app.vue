<template>
  <div>
    <Header />
    <div class="myh-screen">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.myh-screen {
  height: calc(100vh - 92px - 92px);
}
</style>
