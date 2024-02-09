<script setup lang="ts">
import Header from './components/HeaderApp.vue'
import Footer from './components/FooterApp.vue'
</script>

<template>
  <Header />
  <RouterView class="min-h-screen"></RouterView>
  <Footer />
</template>

<style>
body {
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #676a81;
}
.min-h-screen {
  min-height: 85vh;
}
</style>
