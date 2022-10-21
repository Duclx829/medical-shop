<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div>
    <Header></Header>
    <div class="container-lg px-5 main">
      <RouterView />
    </div>
    <Footer></Footer>
    <!-- <RouterLink to="/"></RouterLink> -->
    <!-- <RouterLink to="/about">About</RouterLink> -->
  </div>
</template>
<style scoped>
.main {
  min-height: 33.7vh;
}
</style>
